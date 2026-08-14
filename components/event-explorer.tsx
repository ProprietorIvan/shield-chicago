"use client";

import { useMemo, useState } from "react";
import { DepthChart } from "@/components/depth-chart";
import { SensorMapCanvas } from "@/components/sensor-map-canvas";
import { formatInches } from "@/lib/depth-scale";
import { eventTimeline, getEventFrame, getEventPeaks, getEventReadings } from "@/lib/mock/readings";
import { STATIONS } from "@/lib/mock/stations";
import type { FloodEvent } from "@/lib/types";

export function EventExplorer({ event }: { event: FloodEvent }) {
  const stamps = useMemo(() => eventTimeline(event), [event]);
  const [index, setIndex] = useState(() => Math.floor(stamps.length / 2));
  const [selectedId, setSelectedId] = useState(STATIONS[0].id);
  const frame = useMemo(() => getEventFrame(event, stamps[index] ?? stamps[0]), [event, index, stamps]);
  const peaks = useMemo(() => getEventPeaks(event), [event]);
  const selectedStation = STATIONS.find((station) => station.id === selectedId) ?? STATIONS[0];
  const selectedPeak = peaks.find((peak) => peak.stationId === selectedId);
  const series = useMemo(
    () => [
      {
        id: selectedStation.id,
        name: selectedStation.name,
        color: "#E4002B",
        readings: getEventReadings(selectedStation, event),
      },
    ],
    [selectedStation, event],
  );
  const topPeaks = [...peaks].sort((a, b) => b.peakInches - a.peakInches).slice(0, 8);
  const stamp = stamps[index] ?? stamps[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)]">
      <div>
        <div className="h-[520px] overflow-hidden border border-navy/10">
          <SensorMapCanvas stations={frame} selectedId={selectedId} onSelect={setSelectedId} zoom={10.5} />
        </div>
        <label className="mt-4 block text-sm text-navy">
          Time through the event
          <input
            type="range"
            min={0}
            max={stamps.length - 1}
            value={index}
            onChange={(eventChange) => setIndex(Number(eventChange.target.value))}
            className="mt-2 w-full"
            aria-valuetext={new Date(stamp).toLocaleString("en-US", { timeZone: "America/Chicago" })}
          />
        </label>
        <p className="mt-1 text-sm text-muted">
          {new Date(stamp).toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZone: "America/Chicago",
          })}{" "}
          Central
        </p>
      </div>
      <aside className="border border-navy/10 bg-white p-5">
        <p className="text-xs font-semibold tracking-wide text-flag uppercase">{selectedStation.id}</p>
        <h2 className="mt-1 font-display text-xl font-semibold text-navy">{selectedStation.name}</h2>
        <p className="text-sm text-muted">{selectedStation.neighborhood}</p>
        <p className="mt-3 text-sm">
          Peak this event:{" "}
          <span className="font-semibold">{formatInches(selectedPeak?.peakInches ?? 0)}</span>
        </p>
        <h3 className="mt-6 font-display text-sm font-semibold text-navy">Station hydrograph</h3>
        <DepthChart series={series} />
        <h3 className="mt-6 font-display text-sm font-semibold text-navy">Highest reconstructed peaks</h3>
        <ol className="mt-2 space-y-2 text-sm">
          {topPeaks.map((peak) => {
            const station = STATIONS.find((item) => item.id === peak.stationId);
            return (
              <li key={peak.stationId}>
                <button
                  type="button"
                  className="text-left hover:underline"
                  onClick={() => setSelectedId(peak.stationId)}
                >
                  {station?.neighborhood} · {formatInches(peak.peakInches)}
                </button>
              </li>
            );
          })}
        </ol>
      </aside>
    </div>
  );
}
