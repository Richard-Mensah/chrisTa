import { NextResponse, type NextRequest } from "next/server";
import { submitContact } from "@/lib/contact";

export const runtime = "nodejs";

// POST /api/contact
export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "The request could not be read. Refresh the page and try again." },
        { status: 400 },
      );
    }
    const result = await submitContact(body, request.headers);
    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
