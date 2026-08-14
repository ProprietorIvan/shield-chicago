import { toCsv } from "@/lib/csv";
import { getEventBySlug, getEventPeaks, getReadings, getStationById } from "@/lib/mock";

export function GET(request: Request) {
  const url = new URL(request.url);
  const stationId = url.searchParams.get("station");
  const eventSlug = url.searchParams.get("event");

  if (eventSlug) {
    const event = getEventBySlug(eventSlug);
    if (!event) {
      return Response.json({ error: "Event not found" }, { status: 404 });
    }
    const csv = toCsv(
      ["station_id", "peak_inches", "peak_at", "event_slug"],
      getEventPeaks(event).map((peak) => [peak.stationId, peak.peakInches, peak.peakAt, event.slug]),
    );
    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="shield-chicago-${event.slug}-peaks.csv"`,
      },
    });
  }

  const station = getStationById(stationId ?? "SC-023");
  if (!station) {
    return Response.json({ error: "Station not found" }, { status: 404 });
  }
  const csv = toCsv(
    ["station_id", "t", "depth_inches"],
    getReadings(station).map((reading) => [station.id, reading.t, reading.depthInches]),
  );
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="shield-chicago-${station.id}-readings.csv"`,
    },
  });
}
