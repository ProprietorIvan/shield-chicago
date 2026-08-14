export type Place = {
  slug: string;
  name: string;
  area: string;
  pitch: string;
  hazards: string[];
  nearby: string[];
  hub: "dispatch" | "service";
};

export const PLACES: Place[] = [
  {
    slug: "center-dispatch",
    name: "Center Dispatch",
    area: "West Loop · Carroll Avenue",
    hub: "dispatch",
    pitch:
      "The Carroll Avenue shop is the hub. West Loop lofts, Fulton Market kitchens, and Near West Side two-flats run from here — and so does every other Chicago truck.",
    hazards: ["Restaurant floor drains", "Loft slab leaks", "Alley cloudburst inflow", "Citywide night dispatch"],
    nearby: ["West Loop", "Fulton Market", "Greektown", "Near West Side", "Pilsen", "Austin"],
  },
  {
    slug: "loop",
    name: "The Loop",
    area: "Downtown",
    hub: "service",
    pitch:
      "Stack leaks, sprinkler dumps, and after-hours riser failures in office and hotel floors. We work around freight elevators and building engineers.",
    hazards: ["Riser and stack failures", "Sprinkler discharge", "Tenant build-out floods"],
    nearby: ["South Loop", "Streeterville", "Printers Row", "River North"],
  },
  {
    slug: "lincoln-park",
    name: "Lincoln Park",
    area: "North",
    hub: "service",
    pitch:
      "Greystones with finished lower levels. When the drain backs up, the playroom goes first. We extract without wrecking the rest of the house.",
    hazards: ["Finished basement backups", "Garden-unit floods", "Old supply lines"],
    nearby: ["Lakeview", "Gold Coast", "Old Town", "DePaul"],
  },
  {
    slug: "wicker-park",
    name: "Wicker Park",
    area: "Northwest",
    hub: "service",
    pitch:
      "Timber lofts and tight lots. Water finds the party wall. We document both sides so the conversation with the neighbor is about facts.",
    hazards: ["Party-wall wicking", "Open-joist lofts", "Rear-coach-house losses"],
    nearby: ["Bucktown", "Logan Square", "Ukrainian Village", "West Town"],
  },
  {
    slug: "hyde-park",
    name: "Hyde Park",
    area: "South",
    hub: "service",
    pitch:
      "Big old houses, co-ops, and campus-adjacent rentals. Plaster and steam heat do not forgive standing water. We dry them like the millwork matters.",
    hazards: ["Plaster wicking", "Steam-adjacent leaks", "Co-op stack issues"],
    nearby: ["Kenwood", "Woodlawn", "Bridgeport", "Bronzeville"],
  },
];

/** Old neighborhood landers fold into the five hubs. */
export const PLACE_REDIRECTS: { source: string; destination: string }[] = [
  { source: "/coverage/west-loop", destination: "/coverage/center-dispatch" },
  { source: "/coverage/lakeview", destination: "/coverage/lincoln-park" },
  { source: "/coverage/gold-coast", destination: "/coverage/lincoln-park" },
  { source: "/coverage/logan-square", destination: "/coverage/wicker-park" },
  { source: "/coverage/south-loop", destination: "/coverage/loop" },
  { source: "/coverage/pilsen", destination: "/coverage/center-dispatch" },
  { source: "/coverage/bridgeport", destination: "/coverage/hyde-park" },
  { source: "/coverage/austin", destination: "/coverage/center-dispatch" },
];

export function placeBySlug(slug: string) {
  return PLACES.find((place) => place.slug === slug);
}
