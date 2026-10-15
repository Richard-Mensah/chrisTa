import { NextResponse, type NextRequest } from "next/server";
import { VISITOR_COOKIE } from "@/constants/contact";
import { isSignal } from "@/lib/achievements";
import { deleteVisitor, isDbEnabled, readSignals, recordSignal, validVisitorId } from "@/lib/progress";
import { clientIp, hashIp, memoryRateLimit } from "@/lib/serverUtils";
import { signalSchema } from "@/lib/validations";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
};

const visitorFrom = (request: NextRequest) => validVisitorId(request.cookies.get(VISITOR_COOKIE)?.value);

// GET /api/progress – signals remembered for this anonymous visitor
export async function GET(request: NextRequest) {
  try {
    const vid = visitorFrom(request);
    if (!vid) return NextResponse.json({ persisted: isDbEnabled(), signals: [] }, { status: 200 });
    return NextResponse.json({ persisted: isDbEnabled(), signals: await readSignals(vid) }, { status: 200 });
  } catch (error) {
    console.error("[api/progress GET]", error);
    return NextResponse.json({ persisted: false, signals: [] }, { status: 200 });
  }
}

// POST /api/progress – record one signal such as "page:about"
export async function POST(request: NextRequest) {
  try {
    const parsed = signalSchema.safeParse(await request.json().catch(() => null));
    if (!parsed.success || !isSignal(parsed.data.signal)) {
      return NextResponse.json({ ok: false, error: "Unknown signal" }, { status: 400 });
    }
    if (!isDbEnabled()) return NextResponse.json({ ok: true, persisted: false }, { status: 200 });

    let vid = visitorFrom(request);
    const isNew = !vid;
    if (!vid) {
      // Limit how fast one connection can mint anonymous visitors.
      if (!memoryRateLimit(`visitor:${hashIp(clientIp(request.headers))}`, 30, 60 * 60 * 1000)) {
        return NextResponse.json({ ok: true, persisted: false }, { status: 200 });
      }
      vid = crypto.randomUUID();
    }

    const achievements = await recordSignal(vid, parsed.data.signal);
    const response = NextResponse.json({ ok: true, persisted: true, achievements }, { status: 200 });
    if (isNew) response.cookies.set(VISITOR_COOKIE, vid, COOKIE_OPTIONS);
    return response;
  } catch (error) {
    console.error("[api/progress POST]", error);
    return NextResponse.json({ ok: true, persisted: false }, { status: 200 });
  }
}

// DELETE /api/progress – "Reset my progress": removes the anonymous visitor
export async function DELETE(request: NextRequest) {
  try {
    const vid = visitorFrom(request);
    if (vid) await deleteVisitor(vid);
    const response = NextResponse.json({ ok: true }, { status: 200 });
    response.cookies.delete(VISITOR_COOKIE);
    return response;
  } catch (error) {
    console.error("[api/progress DELETE]", error);
    return NextResponse.json({ ok: false, error: "Could not reset progress" }, { status: 500 });
  }
}
