import { NextResponse } from "next/server";
import { FLOOD_EVENTS } from "@/lib/mock";

export function GET() {
  return NextResponse.json({ demonstration: true, events: FLOOD_EVENTS });
}
