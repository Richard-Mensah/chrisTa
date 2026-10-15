import { NextResponse, type NextRequest } from "next/server";
import { eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { visitorAchievements, visitorProgress, visitors } from "@/db/schema";
import { computeAchievements, isSignal } from "@/lib/achievements";
import { clientIp, hashIp, memoryRateLimit } from "@/lib/server-utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE = "cfo_vid";
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function readVisitor(req: NextRequest): string | null {
  const v = req.cookies.get(COOKIE)?.value;
  return v && UUID_RE.test(v) ? v : null;
}

export async function GET(req: NextRequest) {
  const vid = readVisitor(req);
  if (!db || !vid) return NextResponse.json({ persisted: Boolean(db), signals: [] });
  try {
    const rows = await db
      .select({ signal: visitorProgress.signal })
      .from(visitorProgress)
      .where(eq(visitorProgress.visitorId, vid));
    return NextResponse.json({ persisted: true, signals: rows.map((r) => r.signal).filter(isSignal) });
  } catch (err) {
    console.error("[progress] read failed", err);
    return NextResponse.json({ persisted: false, signals: [] });
  }
}

/** "Reset my progress": deletes the anonymous visitor and clears the cookie. */
export async function DELETE(req: NextRequest) {
  const vid = readVisitor(req);
  if (db && vid) {
    try {
      await db.delete(visitors).where(eq(visitors.id, vid));
    } catch (err) {
      console.error("[progress] delete failed", err);
    }
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(COOKIE);
  return res;
}

export async function POST(req: NextRequest) {
  let signal: unknown;
  try {
    signal = (await req.json())?.signal;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }
  if (!isSignal(signal)) {
    return NextResponse.json({ ok: false, error: "Unknown signal" }, { status: 400 });
  }
  if (!db) return NextResponse.json({ ok: true, persisted: false });

  let vid = readVisitor(req);
  const isNew = !vid;
  if (isNew) {
    // Limit how fast one connection can mint new anonymous visitors.
    if (!memoryRateLimit(`visitor:${hashIp(clientIp(req.headers))}`, 30, 60 * 60 * 1000)) {
      return NextResponse.json({ ok: true, persisted: false });
    }
    vid = crypto.randomUUID();
  }

  try {
    await db
      .insert(visitors)
      .values({ id: vid! })
      .onConflictDoUpdate({ target: visitors.id, set: { lastSeen: sql`now()` } });
    await db.insert(visitorProgress).values({ visitorId: vid!, signal }).onConflictDoNothing();

    const rows = await db
      .select({ signal: visitorProgress.signal })
      .from(visitorProgress)
      .where(eq(visitorProgress.visitorId, vid!));
    const achievements = computeAchievements(rows.map((r) => r.signal));
    if (achievements.length) {
      await db
        .insert(visitorAchievements)
        .values(achievements.map((achievement) => ({ visitorId: vid!, achievement })))
        .onConflictDoNothing();
    }

    const res = NextResponse.json({ ok: true, persisted: true, achievements });
    if (isNew) {
      res.cookies.set(COOKIE, vid!, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }
    return res;
  } catch (err) {
    console.error("[progress] write failed", err);
    return NextResponse.json({ ok: true, persisted: false });
  }
}
