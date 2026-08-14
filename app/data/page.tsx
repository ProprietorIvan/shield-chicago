import { DemonstrationBanner } from "@/components/demonstration-banner";
import { PageHero } from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data",
  description:
    "Download demonstration CSVs and use the Shield Chicago JSON API for stations, readings, and reconstructed flood events.",
};

const DICTIONARY = [
  ["station_id", "Stable identifier, SC-001 through SC-064."],
  ["name", "Intersection or landmark used on the public map."],
  ["neighborhood", "Chicago community area name."],
  ["community_area_number", "Official community area number."],
  ["lat, lng", "WGS84 coordinates of the modeled mount."],
  ["mounting", "signpost, underpass, or viaduct."],
  ["depth_inches", "Reconstructed water depth in the right-of-way, inches."],
  ["status", "dry, ponding, or flooding, derived from depth."],
  ["t", "Timestamp in UTC ISO-8601. Display in America/Chicago."],
];

const ENDPOINTS = [
  { path: "/api/stations", detail: "Current demonstration snapshot for every station." },
  { path: "/api/stations/SC-023", detail: "One station plus a 72-hour hourly hydrograph." },
  { path: "/api/events", detail: "Index of reconstructed flood events." },
  { path: "/api/events/west-side-cloudburst-2023", detail: "Event metadata, peaks, and timeline stamps." },
  { path: "/api/export/stations", detail: "CSV of the station catalog and current depths." },
  { path: "/api/export/readings?station=SC-023", detail: "CSV hydrograph for one station." },
  { path: "/api/export/readings?event=metro-flood-2013", detail: "CSV peaks for every station in an event." },
];

export default function DataPage() {
  return (
    <>
      <PageHero
        eyebrow="Data"
        title="Tables, a dictionary, and a small JSON API"
        lede="Use these files to prototype a neighborhood briefing or a class assignment. They are demonstration reconstructions. Do not cite them as observed gauge records."
      />
      <DemonstrationBanner />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-2xl font-semibold text-navy">Downloads</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/api/export/stations"
            className="rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-paper hover:bg-navy-mid"
          >
            Stations CSV
          </a>
          <a
            href="/api/export/readings?station=SC-023"
            className="rounded-sm border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:bg-foam"
          >
            Example hydrograph CSV
          </a>
          <a
            href="/api/export/readings?event=west-side-cloudburst-2023"
            className="rounded-sm border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:bg-foam"
          >
            Example event peaks CSV
          </a>
        </div>
        <h2 className="mt-12 font-display text-2xl font-semibold text-navy">Data dictionary</h2>
        <table className="mt-4 w-full text-left text-sm">
          <thead className="bg-foam text-navy">
            <tr>
              <th className="px-3 py-2">Field</th>
              <th className="px-3 py-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {DICTIONARY.map(([field, meaning]) => (
              <tr key={field} className="border-t border-navy/10">
                <td className="px-3 py-2 font-mono text-xs">{field}</td>
                <td className="px-3 py-2 text-ink">{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="mt-12 font-display text-2xl font-semibold text-navy">API</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {ENDPOINTS.map((item) => (
            <li key={item.path}>
              <a href={item.path} className="font-mono text-navy underline decoration-sky">
                {item.path}
              </a>
              <span className="text-muted"> — {item.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
