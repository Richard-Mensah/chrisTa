import "server-only";
import { and, count, eq, gt } from "drizzle-orm";
import { CONTACT_MAX_PER_WINDOW, CONTACT_WINDOW_MS, MIN_FILL_MS } from "@/constants/contact";
import type { ContactResponse } from "@/types";
import { db } from "./db";
import { contactSubmissions } from "./dbSchema";
import { clientIp, hashIp, memoryRateLimit } from "./serverUtils";
import { contactSchema, toFieldErrors } from "./validations";

type Result = { status: number; body: ContactResponse };

const TOO_MANY: Result = {
  status: 429,
  body: { ok: false, error: "Several messages were sent from your connection recently. Please wait 10 minutes and try again." },
};

/** Validates, spam-checks and stores a contact enquiry. The browser relays the email copy afterwards. */
export async function submitContact(body: unknown, headers: Headers): Promise<Result> {
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return { status: 400, body: { ok: false, error: "Some fields need attention.", fields: toFieldErrors(parsed.error) } };
  }
  const data = parsed.data;

  // Honeypot filled: report success so bots learn nothing, and store nothing.
  if (data.website.trim() !== "") return { status: 200, body: { ok: true, stored: false, relay: false } };

  const elapsed = Date.now() - data.startedAt;
  if (elapsed < MIN_FILL_MS || elapsed > 24 * 60 * 60 * 1000) {
    return {
      status: 400,
      body: { ok: false, error: "That was sent very quickly. Check your message, wait a moment, then send it again." },
    };
  }

  const ipHash = hashIp(clientIp(headers));
  if (!memoryRateLimit(`contact:${ipHash}`, CONTACT_MAX_PER_WINDOW, CONTACT_WINDOW_MS)) return TOO_MANY;

  const relay = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
  let stored = false;

  if (db) {
    try {
      const since = new Date(Date.now() - CONTACT_WINDOW_MS);
      const [row] = await db
        .select({ n: count() })
        .from(contactSubmissions)
        .where(and(eq(contactSubmissions.ipHash, ipHash), gt(contactSubmissions.createdAt, since)));
      if ((row?.n ?? 0) >= CONTACT_MAX_PER_WINDOW) return TOO_MANY;

      await db.insert(contactSubmissions).values({
        name: data.name,
        email: data.email,
        organisation: data.organisation || null,
        category: data.category,
        message: data.message,
        ipHash,
      });
      stored = true;
    } catch (error) {
      console.error("[contact] database write failed", error);
    }
  }

  if (!stored && !relay) {
    return {
      status: 503,
      body: { ok: false, error: "The contact form is not available right now. Please email Christabel directly." },
    };
  }
  return { status: 200, body: { ok: true, stored, relay } };
}
