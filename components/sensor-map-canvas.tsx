"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const SensorMap = dynamic(() => import("@/components/sensor-map").then((mod) => mod.SensorMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[320px] items-center justify-center bg-foam text-sm text-muted">
      Loading Chicago map…
    </div>
  ),
});

export function SensorMapCanvas(props: ComponentProps<typeof SensorMap>) {
  return <SensorMap {...props} />;
}
