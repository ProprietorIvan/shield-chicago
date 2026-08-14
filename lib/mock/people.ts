import type { PartnerGroup, TeamMember, Testimonial } from "@/lib/types";

export const TEAM: TeamMember[] = [
  {
    name: "Elena Vasquez",
    role: "Project director",
    focus: "Neighborhood siting and civic partnerships",
    placeholder: true,
  },
  {
    name: "Marcus Bell",
    role: "Sensor engineering lead",
    focus: "Ultrasonic nodes, power, and cellular backhaul",
    placeholder: true,
  },
  {
    name: "Priya Raman",
    role: "Hydrology lead",
    focus: "Combined-sewer interpretation and quality flags",
    placeholder: true,
  },
  {
    name: "DeShawn Cole",
    role: "Field operations",
    focus: "Signpost installs, winter maintenance, calibrations",
    placeholder: true,
  },
  {
    name: "Sofia Nowak",
    role: "Community engagement",
    focus: "Block clubs, church basements, and siting walks",
    placeholder: true,
  },
  {
    name: "Jonah Park",
    role: "Data platform",
    focus: "Dashboard, open CSV exports, and API docs",
    placeholder: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "When the viaduct on Lake fills, my block already knows. What we have never had is a number we can point to — how deep, how fast, how often. That is the gap this network is trying to close.",
    name: "M. Reyes",
    affiliation: "Albany Park resident (placeholder)",
    placeholder: true,
  },
  {
    quote:
      "Basement flooding on the South Side is not a once-in-a-lifetime storm. It is a maintenance and justice issue. Street-level readings will not dry a basement by themselves, but they make the pattern impossible to wave away.",
    name: "J. Okonkwo",
    affiliation: "Chatham block club (placeholder)",
    placeholder: true,
  },
  {
    quote:
      "Operators already watch rain gauges and tunnel levels. What they rarely see is the last hundred feet — the underpass, the sag inlet, the park lawn. That last hundred feet is where people actually get stuck.",
    name: "A. Patel, P.E.",
    affiliation: "Civil engineer, independent (placeholder)",
    placeholder: true,
  },
];

export const PARTNER_GROUPS: PartnerGroup[] = [
  {
    heading: "Neighborhood collaborators",
    names: [
      "Albany Park block clubs (placeholder)",
      "Austin mutual aid circles (placeholder)",
      "Chatham resident network (placeholder)",
      "Hegewisch shoreline group (placeholder)",
    ],
    placeholder: true,
  },
  {
    heading: "Civic and infrastructure",
    names: [
      "City agencies — to be confirmed",
      "Metropolitan Water Reclamation District — not yet a partner",
      "Ward offices — placeholders only",
    ],
    placeholder: true,
  },
  {
    heading: "Research and teaching",
    names: [
      "Chicago-area universities — placeholders",
      "Community hydrology studios — placeholders",
    ],
    placeholder: true,
  },
];
