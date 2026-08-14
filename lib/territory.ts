export type Place = {
  slug: string;
  name: string;
  area: string;
  pitch: string;
  hazards: string[];
};

export const PLACES: Place[] = [
  {
    slug: "loop",
    name: "The Loop",
    area: "Central",
    pitch:
      "Stack leaks, sprinkler dumps, and after-hours riser failures in office and hotel floors. We work around freight elevators and building engineers.",
    hazards: ["Riser and stack failures", "Sprinkler discharge", "Tenant build-out floods"],
  },
  {
    slug: "west-loop",
    name: "West Loop",
    area: "Central",
    pitch:
      "Converted lofts and restaurants on a combined sewer. A clogged main at 2 a.m. is a dining-room problem by breakfast.",
    hazards: ["Restaurant floor drains", "Loft slab leaks", "Alley cloudburst inflow"],
  },
  {
    slug: "lincoln-park",
    name: "Lincoln Park",
    area: "North",
    pitch:
      "Greystones with finished lower levels. When the drain backs up, the playroom goes first. We extract without wrecking the rest of the house.",
    hazards: ["Finished basement backups", "Garden-unit floods", "Old supply lines"],
  },
  {
    slug: "lakeview",
    name: "Lakeview",
    area: "North",
    pitch:
      "Courtyard buildings and three-flats. One overflowing tub can travel through three ceilings. We contain, then dry each unit on its own meter.",
    hazards: ["Multi-unit ceiling travel", "Courtyard downspouts", "Winter pipe bursts"],
  },
  {
    slug: "wicker-park",
    name: "Wicker Park",
    area: "Northwest",
    pitch:
      "Timber lofts and tight lots. Water finds the party wall. We document both sides so the conversation with the neighbor is about facts.",
    hazards: ["Party-wall wicking", "Open-joist lofts", "Rear-coach-house losses"],
  },
  {
    slug: "logan-square",
    name: "Logan Square",
    area: "Northwest",
    pitch:
      "Boulevards and two-flats on a combined system. Cloudbursts put water in the garden unit. We pump, dry, and tell you if the valve is the next move.",
    hazards: ["Garden-unit surcharge", "Boulevard ponding", "Washer standpipe overflows"],
  },
  {
    slug: "hyde-park",
    name: "Hyde Park",
    area: "South",
    pitch:
      "Big old houses, co-ops, and campus-adjacent rentals. Plaster and steam heat do not forgive standing water. We dry them like the millwork matters.",
    hazards: ["Plaster wicking", "Steam-adjacent leaks", "Co-op stack issues"],
  },
  {
    slug: "pilsen",
    name: "Pilsen",
    area: "South / West",
    pitch:
      "Brick workers’ cottages and storefronts. Slab-on-grade and basement apartments both show up on our board after a hard rain.",
    hazards: ["Sewer backup", "Storefront slab seepage", "Rear-porch supply breaks"],
  },
  {
    slug: "bridgeport",
    name: "Bridgeport",
    area: "South",
    pitch:
      "Basements that do real work — workshops, in-laws, storage. We get water off the floor and the tools off the casualty list.",
    hazards: ["Workshop flooding", "Combination sewer surcharge", "Ice-dam melt in bungalows"],
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    area: "Near North",
    pitch:
      "High-rises and vintage co-ops off the lake. A failed ice-maker line should not become a four-floor claim. We isolate fast.",
    hazards: ["High-rise supply lines", "Co-op ceiling losses", "Lake-effect freeze bursts"],
  },
  {
    slug: "south-loop",
    name: "South Loop",
    area: "Central",
    pitch:
      "New construction and converted printers’ buildings. We coordinate with property staff and keep corridors walkable while equipment runs.",
    hazards: ["Condo stack leaks", "Garage-level seepage", "Amenity-floor floods"],
  },
  {
    slug: "austin",
    name: "Austin",
    area: "West",
    pitch:
      "West Side basements take the city’s worst cloudbursts. We treat that as a restoration job, not a shrug.",
    hazards: ["Repeated basement backups", "Cloudburst ponding", "Furnace and water-heater losses"],
  },
];

export function placeBySlug(slug: string) {
  return PLACES.find((place) => place.slug === slug);
}
