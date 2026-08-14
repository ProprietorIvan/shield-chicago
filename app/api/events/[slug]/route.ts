import { NextResponse } from "next/server";
import { eventTimeline, getEventBySlug, getEventPeaks } from "@/lib/mock";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }
  return NextResponse.json({
    demonstration: true,
    event,
    peaks: getEventPeaks(event),
    timeline: eventTimeline(event),
  });
}
