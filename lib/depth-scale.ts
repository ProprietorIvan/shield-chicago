import type { StationStatus } from "@/lib/types";

export function statusFromDepth(depthInches: number): StationStatus {
  if (depthInches < 0.4) return "dry";
  if (depthInches < 3) return "ponding";
  return "flooding";
}

export function colorForDepth(depthInches: number): string {
  if (depthInches < 0.4) return "#0B1F33";
  if (depthInches < 2) return "#7FC4E8";
  if (depthInches < 6) return "#E0B044";
  if (depthInches < 12) return "#E07A2F";
  return "#E4002B";
}

export function labelForDepth(depthInches: number): string {
  if (depthInches < 0.4) return "Dry pavement";
  if (depthInches < 2) return "Sheet flow";
  if (depthInches < 6) return "Curb ponding";
  if (depthInches < 12) return "Travel disruption";
  return "Deep standing water";
}

export function formatInches(depthInches: number): string {
  if (depthInches < 0.05) return "0 in";
  if (depthInches < 10) return `${depthInches.toFixed(1)} in`;
  return `${Math.round(depthInches)} in`;
}

export const DEPTH_LEGEND = [
  { color: "#0B1F33", label: "Dry" },
  { color: "#7FC4E8", label: "Under 2 in" },
  { color: "#E0B044", label: "2–6 in" },
  { color: "#E07A2F", label: "6–12 in" },
  { color: "#E4002B", label: "12 in +" },
] as const;
