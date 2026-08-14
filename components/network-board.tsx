"use client";

import { useMemo, useState } from "react";
import { DepthChart } from "@/components/depth-chart";
import { DemonstrationBanner } from "@/components/demonstration-banner";
import { SensorMapCanvas } from "@/components/sensor-map-canvas";
import { colorForDepth, DEPTH_LEGEND, formatInches, labelForDepth } from "@/lib/depth-scale";
import { getReadings } from "@/lib/mock/readings";
import { STATIONS } from "@/lib/mock/stations";
import type { StationSnapshot } from "@/lib/types";

export function NetworkBoard({ snapshots }: { snapshots: StationSnapshot[] }) {
  const [view, setView] = useState<"map" | "list">("map");
  const [selectedId, setSelectedId] = useState(snapshots[0]?.id ?? "SC-023");
  const [compareId, setCompareId] = useState<string>("");
  const [query, setQuery] = useState("");

  const selected = snapshots.find((station) => station.id === selectedId) ?? snapshots[0];
  const compare = snapshots.find((station) => station.id === compareId);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return snapshots;
    return snapshots.filter((station) =>
      `${station.id} ${station.name} ${station.neighborhood}`.toLowerCase().includes(needle),
    );
  }, [query, snapshots]);

  const series = useMemo(() => {
    if (!selected) return [];
    const primary = {
      id: selected.id,
      name: selected.name,
      color: "#0B1F33",
      readings: getReadings(STATIONS.find((item) => item.id === selected.id) ?? selected),
    };
    if (!compare) return [primary];
    return [
      primary,
      {
        id: compare.id,
        name: compare.name,
        color: "#E4002B",
        readings: getReadings(STATIONS.find((item) => item.id === compare.id) ?? compare),
      },
    ];
  }, [selected, compare]);

  return (
    <div>
      <DemonstrationBanner />
      <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
        <section className="min-h-[70vh] border-b border-navy/10 lg:border-r lg:border-b-0">
          <div className="flex flex-wrap items-center gap-3 border-b border-navy/10 bg-white px-4 py-3">
            <div className="flex rounded-sm border border-navy/20">
              <button
                type="button"
                className={`px-3 py-1.5 text-sm ${view === "map" ? "bg-navy text-paper" : "text-navy"}`}
                onClick={() => setView("map")}
              >
                Map
              </button>
              <button
                type="button"
                className={`px-3 py-1.5 text-sm ${view === "list" ? "bg-navy text-paper" : "text-navy"}`}
                onClick={() => setView("list")}
              >
                List
              </button>
            </div>
            <label className="flex-1 text-sm text-muted">
              <span className="sr-only">Filter stations</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter by neighborhood, id, or street"
                className="w-full rounded-sm border border-navy/20 px-3 py-1.5 text-navy"
              />
            </label>
            <ul className="flex flex-wrap gap-3 text-xs text-muted">
              {DEPTH_LEGEND.map((item) => (
                <li key={item.label} className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          {view === "map" ? (
            <div className="h-[62vh] min-h-[420px]">
              <SensorMapCanvas stations={filtered} selectedId={selectedId} onSelect={setSelectedId} />
            </div>
          ) : (
            <div className="max-h-[62vh] overflow-auto">
              <table className="w-full text-left text-sm">
                <thead className="sticky top-0 bg-foam text-navy">
                  <tr>
                    <th className="px-3 py-2">ID</th>
                    <th className="px-3 py-2">Station</th>
                    <th className="px-3 py-2">Neighborhood</th>
                    <th className="px-3 py-2">Depth</th>
                    <th className="px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((station) => (
                    <tr
                      key={station.id}
                      className={`cursor-pointer border-t border-navy/10 ${station.id === selectedId ? "bg-foam" : "bg-white"}`}
                      onClick={() => setSelectedId(station.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedId(station.id);
                        }
                      }}
                      tabIndex={0}
                    >
                      <td className="px-3 py-2 font-mono text-xs">{station.id}</td>
                      <td className="px-3 py-2">{station.name}</td>
                      <td className="px-3 py-2">{station.neighborhood}</td>
                      <td className="px-3 py-2" style={{ color: colorForDepth(station.currentDepthInches) }}>
                        {formatInches(station.currentDepthInches)}
                      </td>
                      <td className="px-3 py-2 capitalize">{station.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <aside className="bg-white p-5">
          {selected ? (
            <div>
              <p className="text-xs font-semibold tracking-wide text-flag uppercase">{selected.id}</p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-navy">{selected.name}</h2>
              <p className="text-sm text-muted">
                {selected.neighborhood} · {selected.mounting} · community area {selected.communityAreaNumber}
              </p>
              <p className="mt-4 font-display text-3xl text-navy">
                {formatInches(selected.currentDepthInches)}
              </p>
              <p className="text-sm text-muted">{labelForDepth(selected.currentDepthInches)}</p>
              <p className="mt-3 text-sm leading-6 text-ink">{selected.elevationNote}</p>
              <label className="mt-5 block text-sm text-navy">
                Compare with another station
                <select
                  className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-2"
                  value={compareId}
                  onChange={(event) => setCompareId(event.target.value)}
                >
                  <option value="">None</option>
                  {snapshots
                    .filter((station) => station.id !== selected.id)
                    .map((station) => (
                      <option key={station.id} value={station.id}>
                        {station.id} · {station.neighborhood}
                      </option>
                    ))}
                </select>
              </label>
              <h3 className="mt-6 font-display text-sm font-semibold text-navy">72-hour hydrograph</h3>
              <DepthChart series={series} />
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
