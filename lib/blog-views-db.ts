import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const VIEWS_FILE = join(process.cwd(), 'data', 'blog-views.json');
const IP_TRACKING_FILE = join(process.cwd(), 'data', 'blog-ip-tracking.json');

// In-Memory Fallback für Production (read-only filesystem)
let memoryViews: Record<string, number> = {};
let memoryIpTracking: Record<string, Record<string, number>> = {};

// Initialisiere Views beim Import (beim Server-Start)
try {
  if (existsSync(VIEWS_FILE)) {
    const content = readFileSync(VIEWS_FILE, 'utf-8');
    memoryViews = JSON.parse(content);
    console.log('[Blog Views] Initialized from file on startup:', memoryViews);
  } else {
    console.warn('[Blog Views] Views file not found on startup:', VIEWS_FILE);
  }
} catch (error) {
  console.error('[Blog Views] Error initializing views on startup:', error);
}

interface BlogViewCount {
  slug: string;
  views: number;
  updated_at?: string;
}

// Stelle sicher, dass das data-Verzeichnis existiert
function ensureDataDir() {
  const dataDir = join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    try {
      mkdirSync(dataDir, { recursive: true });
    } catch (error) {
      // In Production kann das fehlschlagen, das ist ok
      console.warn('Could not create data directory:', error);
    }
  }
}

// Lade Views aus Datei oder Memory
function loadViews(): Record<string, number> {
  // Lade IMMER neu aus der Datei, um sicherzustellen, dass die neuesten Werte verwendet werden
  if (existsSync(VIEWS_FILE)) {
    try {
      const content = readFileSync(VIEWS_FILE, 'utf-8');
      const views = JSON.parse(content);
      // Überschreibe Memory komplett mit Datei-Werten
      memoryViews = { ...views };
      console.log('[Blog Views] Loaded views from file:', views);
      return views;
    } catch (error) {
      console.error('[Blog Views] Error reading views file:', error);
      // Fallback zu Memory nur wenn Datei nicht lesbar ist
      return memoryViews;
    }
  }
  console.warn('[Blog Views] Views file does not exist:', VIEWS_FILE);
  // Wenn Datei nicht existiert, initialisiere mit leeren Werten
  if (Object.keys(memoryViews).length === 0) {
    return {};
  }
  return memoryViews;
}

// Lade IP-Tracking-Daten aus Datei oder Memory
function loadIpTracking(): Record<string, Record<string, number>> {
  if (existsSync(IP_TRACKING_FILE)) {
    try {
      const content = readFileSync(IP_TRACKING_FILE, 'utf-8');
      const tracking = JSON.parse(content);
      // Bereinige alte Einträge (älter als 24 Stunden)
      const cleanedTracking = cleanOldEntries(tracking);
      memoryIpTracking = cleanedTracking;
      return cleanedTracking;
    } catch (error) {
      console.warn('Could not read IP tracking file, using memory:', error);
      return memoryIpTracking;
    }
  }
  return memoryIpTracking;
}

// Bereinige Einträge, die älter als 24 Stunden sind
function cleanOldEntries(tracking: Record<string, Record<string, number>>): Record<string, Record<string, number>> {
  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000; // 24 Stunden in Millisekunden
  const cleaned: Record<string, Record<string, number>> = {};

  for (const [slug, ips] of Object.entries(tracking)) {
    cleaned[slug] = {};
    for (const [ip, timestamp] of Object.entries(ips)) {
      if (now - timestamp < twentyFourHours) {
        cleaned[slug][ip] = timestamp;
      }
    }
  }

  return cleaned;
}

// Speichere Views in Datei (mit Fallback zu Memory)
function saveViews(views: Record<string, number>) {
  ensureDataDir();
  try {
    writeFileSync(VIEWS_FILE, JSON.stringify(views, null, 2), 'utf-8');
    // Synchronisiere Memory
    memoryViews = { ...views };
  } catch (error) {
    // In Production (read-only filesystem) speichere nur im Memory
    console.warn('Could not save views to file (using memory fallback):', error);
    memoryViews = { ...views };
  }
}

// Speichere IP-Tracking-Daten in Datei (mit Fallback zu Memory)
function saveIpTracking(tracking: Record<string, Record<string, number>>) {
  ensureDataDir();
  try {
    writeFileSync(IP_TRACKING_FILE, JSON.stringify(tracking, null, 2), 'utf-8');
    // Synchronisiere Memory
    memoryIpTracking = tracking;
  } catch (error) {
    // In Production (read-only filesystem) speichere nur im Memory
    console.warn('Could not save IP tracking to file (using memory fallback):', error);
    memoryIpTracking = tracking;
  }
}

/**
 * Prüft, ob eine IP-Adresse innerhalb der letzten 24 Stunden bereits gezählt hat
 */
export function hasIpViewedRecently(slug: string, ip: string): boolean {
  const tracking = loadIpTracking();
  const slugTracking = tracking[slug] || {};
  const lastViewTime = slugTracking[ip];

  if (!lastViewTime) {
    return false; // IP hat noch nie gezählt
  }

  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000; // 24 Stunden in Millisekunden

  // Prüfe, ob weniger als 24 Stunden vergangen sind
  return (now - lastViewTime) < twentyFourHours;
}

/**
 * Speichert die IP-Adresse und Timestamp für einen Blog-Post
 */
export function recordIpView(slug: string, ip: string): void {
  const tracking = loadIpTracking();
  if (!tracking[slug]) {
    tracking[slug] = {};
  }
  tracking[slug][ip] = Date.now();
  saveIpTracking(tracking);
}

/**
 * Holt die View-Anzahl für einen Blog-Post
 */
export function getBlogViews(slug: string): number {
  const views = loadViews();
  const viewCount = views[slug] || 0;
  // Debug: Log wenn Wert nicht gefunden wird
  if (viewCount === 0 && !views[slug]) {
    console.log(`[Blog Views] No views found for slug: ${slug}, available slugs:`, Object.keys(views));
  }
  return viewCount;
}

/**
 * Erhöht die View-Anzahl für einen Blog-Post um 1 (nur wenn IP nicht blockiert ist)
 */
export function incrementBlogViews(slug: string, ip: string): { views: number; counted: boolean } {
  // Prüfe, ob IP bereits innerhalb der letzten 24 Stunden gezählt hat
  if (hasIpViewedRecently(slug, ip)) {
    // IP hat bereits gezählt, gebe aktuellen Wert zurück ohne zu erhöhen
    return { views: getBlogViews(slug), counted: false };
  }

  // IP hat noch nicht gezählt oder 24 Stunden sind vergangen
  const views = loadViews();
  views[slug] = (views[slug] || 0) + 1;
  saveViews(views);

  // Speichere IP und Timestamp
  recordIpView(slug, ip);

  return { views: views[slug], counted: true };
}

/**
 * Setzt die View-Anzahl für einen Blog-Post (für Migration/Initialisierung)
 */
export function setBlogViews(slug: string, views: number): void {
  const allViews = loadViews();
  allViews[slug] = views;
  saveViews(allViews);
}

/**
 * Holt alle View-Anzahlen (für Admin/Statistiken)
 */
export function getAllBlogViews(): BlogViewCount[] {
  const views = loadViews();
  return Object.entries(views)
    .map(([slug, views]) => ({
      slug,
      views,
      updated_at: new Date().toISOString(),
    }))
    .sort((a, b) => b.views - a.views);
}
