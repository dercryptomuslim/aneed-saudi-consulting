/**
 * Upstash Redis Implementation für persistente Blog-Views in Production
 */

import { Redis } from '@upstash/redis';

// Initialisiere Redis Client (nur wenn Environment Variables vorhanden sind)
let redis: Redis | null = null;

try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
} catch (error) {
  console.warn('[Blog Views KV] Could not initialize Redis:', error);
}

const VIEWS_PREFIX = 'blog_views:';
const IP_TRACKING_PREFIX = 'blog_ip_tracking:';

// Initialwerte für Blog-Views
const INITIAL_VIEWS: Record<string, number> = {
  "investieren-in-medina": 27,
  "investing-in-medina": 27,
  "saudi-premium-residency": 28,
  "familienzusammenfuehrung": 38,
  "in-saudi-arabien-leben-4-wege-nach-medina": 41,
  "so-startest-du-ein-business-in-saudi-arabien": 53
};

/**
 * Prüft, ob Redis verfügbar ist
 */
function isRedisAvailable(): boolean {
  return redis !== null;
}

/**
 * Holt alle View-Counts aus KV
 */
export async function getAllViewsFromKv(): Promise<Record<string, number>> {
  if (!isRedisAvailable()) {
    return INITIAL_VIEWS;
  }

  try {
    // Upstash Redis verwendet SCAN statt KEYS für bessere Performance
    const views: Record<string, number> = {};
    let cursor = 0;
    
    do {
      const result = await redis!.scan(cursor, { match: `${VIEWS_PREFIX}*`, count: 100 });
      cursor = result[0];
      const keys = result[1] as string[];
      
      for (const key of keys) {
        const slug = key.replace(VIEWS_PREFIX, '');
        const value = await redis!.get<number>(key);
        if (value !== null) {
          views[slug] = value;
        }
      }
    } while (cursor !== 0);

    // Wenn keine Views vorhanden, initialisiere mit Startwerten
    if (Object.keys(views).length === 0) {
      await initializeViewsInKv();
      return INITIAL_VIEWS;
    }

    return views;
  } catch (error) {
    console.error('[Blog Views KV] Error getting all views:', error);
    return INITIAL_VIEWS;
  }
}

/**
 * Initialisiert Views in Redis mit Startwerten
 */
async function initializeViewsInKv(): Promise<void> {
  if (!isRedisAvailable()) return;

  try {
    for (const [slug, views] of Object.entries(INITIAL_VIEWS)) {
      const key = `${VIEWS_PREFIX}${slug}`;
      const existing = await redis!.get<number>(key);
      if (existing === null) {
        await redis!.set(key, views);
      }
    }
    console.log('[Blog Views KV] Initialized views in Redis');
  } catch (error) {
    console.error('[Blog Views KV] Error initializing views:', error);
  }
}

/**
 * Holt View-Count für einen Blog-Post aus KV
 */
export async function getBlogViewsFromKv(slug: string): Promise<number> {
  if (!isRedisAvailable()) {
    return INITIAL_VIEWS[slug] || 0;
  }

  try {
    const key = `${VIEWS_PREFIX}${slug}`;
    const views = await redis!.get<number>(key);
    
    if (views === null) {
      // Initialisiere mit Startwert falls nicht vorhanden
      const initialValue = INITIAL_VIEWS[slug] || 0;
      await redis!.set(key, initialValue);
      return initialValue;
    }
    
    return views;
  } catch (error) {
    console.error(`[Blog Views KV] Error getting views for ${slug}:`, error);
    return INITIAL_VIEWS[slug] || 0;
  }
}

/**
 * Erhöht View-Count für einen Blog-Post in KV
 */
export async function incrementBlogViewsInKv(slug: string): Promise<number> {
  if (!isRedisAvailable()) {
    return INITIAL_VIEWS[slug] || 0;
  }

  try {
    const key = `${VIEWS_PREFIX}${slug}`;
    const current = await redis!.get<number>(key);
    const newValue = (current || INITIAL_VIEWS[slug] || 0) + 1;
    await redis!.set(key, newValue);
    return newValue;
  } catch (error) {
    console.error(`[Blog Views KV] Error incrementing views for ${slug}:`, error);
    return INITIAL_VIEWS[slug] || 0;
  }
}

/**
 * Prüft, ob IP bereits innerhalb von 24 Stunden gezählt hat
 */
export async function hasIpViewedRecentlyKv(slug: string, ip: string): Promise<boolean> {
  if (!isRedisAvailable()) {
    return false;
  }

  try {
    const key = `${IP_TRACKING_PREFIX}${slug}:${ip}`;
    const timestamp = await redis!.get<number>(key);
    
    if (!timestamp) {
      return false;
    }

    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    return (now - timestamp) < twentyFourHours;
  } catch (error) {
    console.error(`[Blog Views KV] Error checking IP tracking for ${slug}:${ip}:`, error);
    return false;
  }
}

/**
 * Speichert IP-Tracking in KV
 */
export async function recordIpViewKv(slug: string, ip: string): Promise<void> {
  if (!isRedisAvailable()) {
    return;
  }

  try {
    const key = `${IP_TRACKING_PREFIX}${slug}:${ip}`;
    await redis!.set(key, Date.now(), { ex: 25 * 60 * 60 }); // TTL: 25 Stunden
  } catch (error) {
    console.error(`[Blog Views KV] Error recording IP view for ${slug}:${ip}:`, error);
  }
}
