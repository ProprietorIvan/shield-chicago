"use client";

import { SensorMapCanvas } from "@/components/sensor-map-canvas";
import type { StationSnapshot } from "@/lib/types";

export function NetworkPreviewMap({ snapshots }: { snapshots: StationSnapshot[] }) {
  return (
    <div className="h-[380px] overflow-hidden border border-navy/10">
      <SensorMapCanvas stations={snapshots} zoom={10.4} />
    </div>
  );
}
