import { NextResponse } from "next/server";
import { count, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { visitorAchievements } from "@/db/schema";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const revalidate = 600;

/** Aggregate, anonymous stats. Cached for 10 minutes. */
export async function GET() {
  if (!db) return NextResponse.json({ gridOnline: null });
  try {
    const [{ n }] = await db
      .select({ n: count() })
      .from(visitorAchievements)
      .where(eq(visitorAchievements.achievement, "online"));
    return NextResponse.json({ gridOnline: n });
  } catch {
    return NextResponse.json({ gridOnline: null });
  }
}
