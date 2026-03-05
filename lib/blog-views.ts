import { Redis } from "@upstash/redis";
import { getCanonicalBlogSlug } from "@/lib/i18n";

const PREFIX = "blog:views:";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  // REST API needs https URL; redis:// or redis-cli strings are invalid
  if (!url || !token || !url.startsWith("https://")) return null;
  return new Redis({ url, token });
}

/** Get view count for a post (slug can be DE or EN; stored by canonical DE slug). */
export async function getViews(slug: string): Promise<number> {
  const redis = getRedis();
  if (!redis) return 0;
  try {
    const key = PREFIX + getCanonicalBlogSlug(slug);
    const val = await redis.get<number>(key);
    return typeof val === "number" ? val : 0;
  } catch {
    return 0;
  }
}

/** Increment view count and return the new value. */
export async function incrementViews(slug: string): Promise<number> {
  const redis = getRedis();
  if (!redis) return 0;
  try {
    const key = PREFIX + getCanonicalBlogSlug(slug);
    const newVal = await redis.incr(key);
    return newVal;
  } catch {
    return 0;
  }
}

/** Initial view counts (canonical DE slug → count) to seed from existing data. */
export const INITIAL_VIEW_COUNTS: Record<string, number> = {
  "so-startest-du-ein-business-in-saudi-arabien": 83,
  "was-kostet-dich-das-leben-in-medina": 69,
  "in-saudi-arabien-leben-4-wege-nach-medina": 55,
  "familienzusammenfuehrung": 47,
  "investieren-in-medina": 43,
  "saudi-premium-residency": 47,
};

/** Set initial view counts in Redis (only sets if key is missing, so safe to call again). */
export async function seedInitialViews(): Promise<Record<string, number>> {
  const redis = getRedis();
  const result: Record<string, number> = { ...INITIAL_VIEW_COUNTS };
  if (!redis) return result;
  try {
    for (const [slug, count] of Object.entries(INITIAL_VIEW_COUNTS)) {
      const key = PREFIX + slug;
      const existing = await redis.get<number>(key);
      if (existing == null) await redis.set(key, count);
    }
    return await getAllViews(Object.keys(INITIAL_VIEW_COUNTS));
  } catch {
    return result;
  }
}

/** Get view counts for all known slugs (canonical DE slugs). Used for blog list. */
export async function getAllViews(slugs: string[]): Promise<Record<string, number>> {
  const redis = getRedis();
  const result: Record<string, number> = {};
  const canonical = [...new Set(slugs.map(getCanonicalBlogSlug))];
  if (!redis) {
    canonical.forEach((s) => (result[s] = 0));
    return result;
  }
  try {
    const keys = canonical.map((s) => PREFIX + s);
    const values = await redis.mget<number[]>(...keys);
    canonical.forEach((s, i) => {
      const v = values[i];
      result[s] = typeof v === "number" ? v : 0;
    });
    return result;
  } catch {
    canonical.forEach((s) => (result[s] = 0));
    return result;
  }
}
