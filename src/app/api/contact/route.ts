import { NextResponse } from "next/server";
import { and, count, eq, gt } from "drizzle-orm";
import { db } from "@/db/client";
import { contactSubmissions } from "@/db/schema";
import { contactSchema, fieldErrors, MIN_FILL_MS } from "@/lib/contact-schema";
import { clientIp, hashIp, memoryRateLimit } from "@/lib/server-utils";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "The request could not be read. Refresh the page and try again." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Some fields need attention.", fields: fieldErrors(parsed.error) },
      { status: 400 },
    );
  }
  const data = parsed.data;

  // Honeypot filled: pretend success so bots learn nothing, store nothing.
  if (data.website.trim() !== "") {
    return NextResponse.json({ ok: true, stored: false, relay: false });
  }

  const elapsed = Date.now() - data.startedAt;
  if (elapsed < MIN_FILL_MS || elapsed > 24 * 60 * 60 * 1000) {
    return NextResponse.json(
      { ok: false, error: "That was sent very quickly. Check your message, wait a moment, then send it again." },
      { status: 400 },
    );
  }

  const ipHash = hashIp(clientIp(req.headers));
  if (!memoryRateLimit(`contact:${ipHash}`, MAX_PER_WINDOW, WINDOW_MS)) {
    return tooMany();
  }

  const relay = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
  let stored = false;

  if (db) {
    try {
      const since = new Date(Date.now() - WINDOW_MS);
      const [{ n }] = await db
        .select({ n: count() })
        .from(contactSubmissions)
        .where(and(eq(contactSubmissions.ipHash, ipHash), gt(contactSubmissions.createdAt, since)));
      if (n >= MAX_PER_WINDOW) return tooMany();

      await db.insert(contactSubmissions).values({
        name: data.name,
        email: data.email,
        organisation: data.organisation || null,
        category: data.category,
        message: data.message,
        ipHash,
      });
      stored = true;
    } catch (err) {
      console.error("[contact] database write failed", err);
    }
  }

  if (!stored && !relay) {
    return NextResponse.json(
      { ok: false, error: "The contact form is not available right now. Please email Christabel directly." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, stored, relay });
}

function tooMany() {
  return NextResponse.json(
    { ok: false, error: "Several messages were sent from your connection recently. Please wait 10 minutes and try again." },
    { status: 429 },
  );
}
