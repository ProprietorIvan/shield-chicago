import { NextResponse } from "next/server";
import { getCurrentSnapshot, getReadings, getStationById } from "@/lib/mock";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const station = getStationById(id);
  if (!station) {
    return NextResponse.json({ error: "Station not found" }, { status: 404 });
  }
  return NextResponse.json({
    demonstration: true,
    station: getCurrentSnapshot(station),
    readings: getReadings(station),
  });
}
