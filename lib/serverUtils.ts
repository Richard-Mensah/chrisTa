import "server-only";
import { createHash } from "node:crypto";

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return headers.get("x-real-ip") ?? "unknown";
}

export function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT ?? "dev-only-salt";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

/**
 * Best-effort in-memory limiter. Serverless instances don't share memory, so
 * this only blunts bursts; the contact flow also checks Neon when available.
 */
const buckets = new Map<string, number[]>();

export function memoryRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const hits = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  const allowed = hits.length < limit;
  if (allowed) hits.push(now);
  buckets.set(key, hits);
  if (buckets.size > 5000) buckets.clear();
  return allowed;
}
