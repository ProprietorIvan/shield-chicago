import type { CommunityMeeting } from "@/lib/types";

export const MEETINGS: CommunityMeeting[] = [
  {
    id: "austin-siting-walk",
    title: "Austin sensor-siting walk (placeholder)",
    dateLabel: "Saturday, September 12 2026 · 10:00–12:00",
    startIso: "2026-09-12T15:00:00.000Z",
    endIso: "2026-09-12T17:00:00.000Z",
    place: "Austin Town Hall Park fieldhouse",
    address: "5610 W Lake St, Chicago, IL 60644",
    summary:
      "Walk the Madison and Lake viaducts with residents to mark candidate signpost locations. No technical background required.",
    placeholder: true,
  },
  {
    id: "office-hours",
    title: "Monthly community office hours (placeholder)",
    dateLabel: "Thursday, October 8 2026 · 18:00–19:30",
    startIso: "2026-10-08T23:00:00.000Z",
    endIso: "2026-10-09T00:30:00.000Z",
    place: "Chicago Public Library, Harold Washington — video room",
    address: "400 S State St, Chicago, IL 60605",
    summary:
      "Open session on reading the dashboard, requesting a station, and using the demonstration CSVs in neighborhood meetings.",
    placeholder: true,
  },
  {
    id: "calumet-evening",
    title: "Calumet corridor flood evening (placeholder)",
    dateLabel: "Wednesday, November 4 2026 · 18:30–20:00",
    startIso: "2026-11-05T00:30:00.000Z",
    endIso: "2026-11-05T02:00:00.000Z",
    place: "Hegewisch branch library",
    address: "3048 E 130th St, Chicago, IL 60633",
    summary:
      "Conversation on lake-level, marsh edges, and why far-south flooding does not look like a Loop cloudburst.",
    placeholder: true,
  },
];
