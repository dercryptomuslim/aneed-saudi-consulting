import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const VIEWS_FILE = join(process.cwd(), 'data', 'blog-views.json');

// In-Memory Fallback für Production (read-only filesystem)
let memoryViews: Record<string, number> = {};

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
  if (existsSync(VIEWS_FILE)) {
    try {
      const content = readFileSync(VIEWS_FILE, 'utf-8');
      const views = JSON.parse(content);
      // Synchronisiere Memory mit Datei
      memoryViews = { ...memoryViews, ...views };
      return views;
    } catch (error) {
      console.warn('Could not read views file, using memory:', error);
      return memoryViews;
    }
  }
  return memoryViews;
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

/**
 * Holt die View-Anzahl für einen Blog-Post
 */
export function getBlogViews(slug: string): number {
  const views = loadViews();
  return views[slug] || 0;
}

/**
 * Erhöht die View-Anzahl für einen Blog-Post um 1
 */
export function incrementBlogViews(slug: string): number {
  const views = loadViews();
  views[slug] = (views[slug] || 0) + 1;
  saveViews(views);
  return views[slug];
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
