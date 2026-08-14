import { toCsv } from "@/lib/csv";
import { getNetworkSnapshot } from "@/lib/mock";

export function GET() {
  const stations = getNetworkSnapshot();
  const csv = toCsv(
    [
      "station_id",
      "name",
      "neighborhood",
      "community_area_number",
      "lat",
      "lng",
      "mounting",
      "depth_inches",
      "status",
      "updated_at",
    ],
    stations.map((station) => [
      station.id,
      station.name,
      station.neighborhood,
      station.communityAreaNumber,
      station.lat,
      station.lng,
      station.mounting,
      station.currentDepthInches,
      station.status,
      station.updatedAt,
    ]),
  );
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="shield-chicago-stations.csv"',
    },
  });
}
