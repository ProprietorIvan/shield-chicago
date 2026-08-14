import { NextResponse } from "next/server";
import { FIRM } from "@/lib/firm";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { name, phone, email, address, projectDetails, landingPage } = body as Record<
    string,
    string
  >;
  if (!phone || !address) {
    return NextResponse.json({ error: "Phone and address required" }, { status: 400 });
  }

  console.info("[ticket]", {
    to: FIRM.email,
    landingPage,
    name,
    phone,
    email,
    address,
    projectDetails,
  });

  return NextResponse.json({ ok: true });
}
