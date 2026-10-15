import "server-only";
import { createHash } from "node:crypto";

export function clientIp(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return headers.get("x-real-ip") ?? "unknown";
}

export function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT ?? "dev-only-salt";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

/**
 * Best-effort in-memory limiter. Serverless instances do not share memory, so
 * this only blunts bursts; the contact route also checks Neon when available.
 */
const buckets = new Map<string, number[]>();

export function memoryRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const hits = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) {
    buckets.set(key, hits);
    return false;
  }
  hits.push(now);
  buckets.set(key, hits);
  if (buckets.size > 5000) buckets.clear();
  return true;
}
