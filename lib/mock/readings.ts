import { statusFromDepth } from "@/lib/depth-scale";
import { DEMO_NOW_ISO } from "@/lib/site";
import type { DepthReading, FloodEvent, SensorStation, StationSnapshot } from "@/lib/types";
import { STATIONS } from "@/lib/mock/stations";

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function clamp(value: number, min = 0, max = 36) {
  return Math.min(max, Math.max(min, value));
}

function hydrograph(progress: number, peak: number) {
  if (progress < 0 || progress > 1) return 0;
  if (progress < 0.32) return peak * (progress / 0.32) ** 1.15;
  return peak * (1 - (progress - 0.32) / 0.68) ** 1.35;
}

interface StormPulse {
  id: string;
  startMs: number;
  durationMs: number;
  peakInches: number;
  weight: (station: SensorStation) => number;
}

const DEMO_NOW = Date.parse(DEMO_NOW_ISO);

const BACKGROUND_PULSES: StormPulse[] = [
  {
    id: "west-south-cell",
    startMs: DEMO_NOW - 9 * 60 * 60 * 1000,
    durationMs: 5.5 * 60 * 60 * 1000,
    peakInches: 7.4,
    weight: (station) => {
      const west = station.lng < -87.7 ? 1 : station.lng < -87.65 ? 0.55 : 0.18;
      const south = station.lat < 41.86 ? 1 : station.lat < 41.92 ? 0.45 : 0.2;
      const extra = station.mounting === "signpost" ? 0 : 0.35;
      return clamp(west * 0.55 + south * 0.35 + extra, 0, 1.4);
    },
  },
  {
    id: "lakefront-seiche",
    startMs: DEMO_NOW - 30 * 60 * 60 * 1000,
    durationMs: 8 * 60 * 60 * 1000,
    peakInches: 4.2,
    weight: (station) => {
      const lakefront = [
        "Rogers Park",
        "Edgewater",
        "Uptown",
        "South Shore",
        "Hyde Park",
        "Near North Side",
      ].includes(station.neighborhood)
        ? 1
        : 0.08;
      return station.mounting === "underpass" ? lakefront * 1.2 : lakefront;
    },
  },
];

function eventWeight(event: FloodEvent, station: SensorStation): number {
  const hit = event.hardestHit.includes(station.neighborhood) ? 1 : 0.28;
  const mountingBoost = station.mounting === "signpost" ? 0 : 0.22;
  return clamp(hit + mountingBoost, 0, 1.35);
}

function eventPulse(event: FloodEvent): StormPulse {
  const startMs = Date.parse(event.start);
  const endMs = Date.parse(event.end);
  const kindPeak =
    event.kind === "cloudburst" ? 18 : event.kind === "lakefront" ? 14 : event.kind === "snowmelt" ? 9 : 16;
  return {
    id: event.slug,
    startMs,
    durationMs: Math.max(endMs - startMs, 6 * 60 * 60 * 1000),
    peakInches: kindPeak,
    weight: (station) => eventWeight(event, station),
  };
}

function depthAt(station: SensorStation, timestampMs: number, pulses: StormPulse[]): number {
  const rand = mulberry32(hashString(`${station.id}:${Math.floor(timestampMs / 3_600_000)}`));
  const noise = (rand() - 0.48) * 0.18;
  let depth = Math.max(0, noise);

  for (const pulse of pulses) {
    const progress = (timestampMs - pulse.startMs) / pulse.durationMs;
    const peak = pulse.peakInches * station.susceptibility * pulse.weight(station);
    depth += hydrograph(progress, peak);
  }

  if (station.mounting !== "signpost") {
    depth *= 1.12;
  }

  return clamp(Number(depth.toFixed(2)));
}

export function getReadings(
  station: SensorStation,
  endIso = DEMO_NOW_ISO,
  hours = 72,
  extraPulses: StormPulse[] = [],
): DepthReading[] {
  const endMs = Date.parse(endIso);
  const startMs = endMs - hours * 60 * 60 * 1000;
  const pulses = [...BACKGROUND_PULSES, ...extraPulses];
  const readings: DepthReading[] = [];
  for (let t = startMs; t <= endMs; t += 60 * 60 * 1000) {
    readings.push({ t: new Date(t).toISOString(), depthInches: depthAt(station, t, pulses) });
  }
  return readings;
}

export function getCurrentSnapshot(station: SensorStation, atIso = DEMO_NOW_ISO): StationSnapshot {
  const readings = getReadings(station, atIso, 2);
  const current = readings.at(-1)?.depthInches ?? 0;
  return {
    ...station,
    currentDepthInches: current,
    status: statusFromDepth(current),
    updatedAt: atIso,
  };
}

export function getNetworkSnapshot(atIso = DEMO_NOW_ISO): StationSnapshot[] {
  return STATIONS.map((station) => getCurrentSnapshot(station, atIso));
}

export function getEventReadings(station: SensorStation, event: FloodEvent): DepthReading[] {
  const pulse = eventPulse(event);
  const padHours = 6;
  const startMs = pulse.startMs - padHours * 60 * 60 * 1000;
  const endMs = pulse.startMs + pulse.durationMs + padHours * 60 * 60 * 1000;
  const hours = Math.round((endMs - startMs) / (60 * 60 * 1000));
  const endIso = new Date(endMs).toISOString();
  return getReadings(station, endIso, hours, [pulse]);
}

export function getEventPeaks(event: FloodEvent) {
  return STATIONS.map((station) => {
    const series = getEventReadings(station, event);
    const peak = series.reduce(
      (best, reading) => (reading.depthInches > best.depthInches ? reading : best),
      series[0],
    );
    return {
      stationId: station.id,
      peakInches: peak.depthInches,
      peakAt: peak.t,
    };
  });
}

export function getEventFrame(event: FloodEvent, timestampIso: string): StationSnapshot[] {
  const pulse = eventPulse(event);
  return STATIONS.map((station) => {
    const depth = depthAt(station, Date.parse(timestampIso), [pulse]);
    return {
      ...station,
      currentDepthInches: depth,
      status: statusFromDepth(depth),
      updatedAt: timestampIso,
    };
  });
}

export function eventTimeline(event: FloodEvent): string[] {
  const pulse = eventPulse(event);
  const stamps: string[] = [];
  const start = pulse.startMs - 3 * 60 * 60 * 1000;
  const end = pulse.startMs + pulse.durationMs + 3 * 60 * 60 * 1000;
  for (let t = start; t <= end; t += 60 * 60 * 1000) {
    stamps.push(new Date(t).toISOString());
  }
  return stamps;
}
