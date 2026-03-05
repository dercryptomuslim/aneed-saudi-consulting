import { Redis } from "@upstash/redis";
import { getCanonicalBlogSlug } from "@/lib/i18n";

const PREFIX = "blog:views:";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
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
