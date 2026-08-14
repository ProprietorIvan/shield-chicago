import { NextResponse } from "next/server";
import { getNetworkSnapshot } from "@/lib/mock";

export function GET() {
  const stations = getNetworkSnapshot();
  return NextResponse.json({
    asOf: stations[0]?.updatedAt,
    demonstration: true,
    stations,
  });
}
