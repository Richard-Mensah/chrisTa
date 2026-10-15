import "server-only";
import { count, eq, sql } from "drizzle-orm";
import { computeAchievements, isSignal } from "./achievements";
import { db } from "./db";
import { visitorAchievements, visitorProgress, visitors } from "./dbSchema";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const isDbEnabled = () => db !== null;

export function validVisitorId(value: string | undefined): string | null {
  return value && UUID_RE.test(value) ? value : null;
}

export async function readSignals(visitorId: string): Promise<string[]> {
  if (!db) return [];
  const rows = await db
    .select({ signal: visitorProgress.signal })
    .from(visitorProgress)
    .where(eq(visitorProgress.visitorId, visitorId));
  return rows.map((r) => r.signal).filter(isSignal);
}

/** Records a signal, then re-derives and stores achievements server-side. */
export async function recordSignal(visitorId: string, signal: string): Promise<string[]> {
  if (!db) return [];
  await db
    .insert(visitors)
    .values({ id: visitorId })
    .onConflictDoUpdate({ target: visitors.id, set: { lastSeen: sql`now()` } });
  await db.insert(visitorProgress).values({ visitorId, signal }).onConflictDoNothing();

  const achievements = computeAchievements(await readSignals(visitorId));
  if (achievements.length) {
    await db
      .insert(visitorAchievements)
      .values(achievements.map((achievement) => ({ visitorId, achievement })))
      .onConflictDoNothing();
  }
  return achievements;
}

export async function deleteVisitor(visitorId: string): Promise<void> {
  if (!db) return;
  await db.delete(visitors).where(eq(visitors.id, visitorId));
}

/** Anonymous aggregate: visitors who energised the whole grid. */
export async function countGridOnline(): Promise<number | null> {
  if (!db) return null;
  const [row] = await db
    .select({ n: count() })
    .from(visitorAchievements)
    .where(eq(visitorAchievements.achievement, "online"));
  return row?.n ?? 0;
}
