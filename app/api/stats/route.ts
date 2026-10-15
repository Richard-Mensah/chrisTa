import { NextResponse } from "next/server";
import { countGridOnline } from "@/lib/progress";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const revalidate = 600;

// GET /api/stats – anonymous aggregate, cached for 10 minutes
export async function GET() {
  try {
    return NextResponse.json({ gridOnline: await countGridOnline() }, { status: 200 });
  } catch (error) {
    console.error("[api/stats]", error);
    return NextResponse.json({ gridOnline: null }, { status: 200 });
  }
}
