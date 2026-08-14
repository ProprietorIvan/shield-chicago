import type { FloodEvent } from "@/lib/types";

export const FLOOD_EVENTS: FloodEvent[] = [
  {
    slug: "west-side-cloudburst-2023",
    title: "West Side cloudburst, July 2 2023",
    kind: "cloudburst",
    start: "2023-07-02T16:00:00.000Z",
    end: "2023-07-02T23:30:00.000Z",
    summary:
      "A slow-moving summer cell parked over the West Side, overwhelming combined sewers in Austin, the Garfield Parks, Humboldt Park, and North Lawndale. Streets ponded, viaducts closed, and basement reports stacked up for hours after the rain ended.",
    narrative: [
      "Chicago’s flood problem is often not a river coming over a bank. It is a thunderstorm that sits still, dumping more water on a few square miles than the combined sewer can swallow. On July 2 2023 that pattern locked onto the West Side.",
      "Radar showed a training cell over Austin and Garfield Park through the late afternoon. Gutters on Madison, Pulaski, and Lake filled faster than inlets could clear them. Viaducts at Homan and California became standing pools. Residents described water rolling toward basement stairwells even after the sky brightened.",
      "Shield Chicago’s demonstration hydrographs reconstruct that afternoon as a sharp rise, a two-hour plateau, and a slow recession — the signature of a combined system that is already full. The peaks are modeled, not measured, but they are shaped by the neighborhoods that reported the deepest disruption.",
    ],
    sourcesNote:
      "Event timing follows published accounts of the July 2 2023 West Side storm. Depths on this page are demonstration reconstructions, not sensor archives.",
    hardestHit: [
      "Austin",
      "West Garfield Park",
      "East Garfield Park",
      "Humboldt Park",
      "North Lawndale",
      "Belmont Cragin",
    ],
  },
  {
    slug: "metro-flood-2013",
    title: "Metro flood, April 17–18 2013",
    kind: "stormwater",
    start: "2013-04-17T12:00:00.000Z",
    end: "2013-04-19T06:00:00.000Z",
    summary:
      "A two-day April rain soaked already wet soils across the Chicago metro. Combined sewers surcharged on the South and Southwest Sides, the Deep Tunnel filled, and basement flooding became a regional story rather than a single-neighborhood one.",
    narrative: [
      "April 2013 was not a single cloudburst. It was a long, soaking rain on ground that was already wet. The Chicago River and the Calumet system ran high. The Metropolitan Water Reclamation District’s Tunnel and Reservoir Plan took a historic volume — and still the local pipes backed up.",
      "On the South and Southwest Sides, water lingered in Chatham, Auburn Gresham, Chicago Lawn, Englewood, and Roseland. Underpasses stayed closed well after the heaviest rain. For many households the damage was downstairs: floor drains, furnaces, and water heaters, not a picturesque overbank flood.",
      "This reconstruction treats the event as a broad, multi-peak hydrograph. Demonstration stations in the southern half of the city show the highest and longest-lasting depths, with a slower recession than a summer thunderstorm.",
    ],
    sourcesNote:
      "Dates follow the April 17–18 2013 Chicago-area flood. Station depths are modeled for this site and are not a historical gauge archive.",
    hardestHit: [
      "Chatham",
      "Auburn Gresham",
      "Chicago Lawn",
      "Englewood",
      "Greater Grand Crossing",
      "Roseland",
      "Pullman",
      "New City",
    ],
  },
  {
    slug: "ike-remnants-2008",
    title: "Ike remnants, September 13 2008",
    kind: "stormwater",
    start: "2008-09-13T06:00:00.000Z",
    end: "2008-09-14T12:00:00.000Z",
    summary:
      "The remnants of Hurricane Ike dragged a long rain across the southern lake shore. The Calumet corridor — Hegewisch, Riverdale, Pullman, and the East Side approaches — took the heaviest urban flooding as soils and ditches were already primed.",
    narrative: [
      "By the time Ike’s remnants reached Chicago they were no longer a hurricane. They were a wide, wet system sliding along the southern Lake Michigan shore. That is a dangerous setup for the Calumet: low ground, a high water table, and outlets that already sit close to lake level.",
      "Hegewisch and Riverdale sit on some of the lowest developed land in the city. When a long rain arrives, streets do not just pond — they stay wet because there is nowhere for the water to fall. Pullman’s historic grid and the industrial crossings near Brainard behave the same way.",
      "The demonstration map concentrates peak depths in those far-south and southeast community areas, with a longer tail than a West Side cloudburst. It is a reminder that Chicago flooding is not one hazard. The Calumet is its own chapter.",
    ],
    sourcesNote:
      "Storm timing follows the September 2008 passage of Ike’s remnants through the Chicago region. Depths are demonstration values.",
    hardestHit: ["Hegewisch", "Riverdale", "Pullman", "Roseland", "South Shore", "Greater Grand Crossing"],
  },
  {
    slug: "ohare-record-2011",
    title: "O’Hare record rain, July 23 2011",
    kind: "cloudburst",
    start: "2011-07-23T08:00:00.000Z",
    end: "2011-07-23T20:00:00.000Z",
    summary:
      "A July cloudburst set a daily rainfall record at O’Hare and hammered the Northwest Side. Jefferson Park, Portage Park, Irving Park, and Albany Park saw fast street flooding and underpass closures as the combined system lagged the rain.",
    narrative: [
      "Summer in Chicago can deliver a day’s rain in an hour. On July 23 2011 the heaviest cell tracked across the Northwest Side and the airport. O’Hare’s official gauge made the headlines; the quieter story was what happened on Higgins, Milwaukee, and the Kennedy edge.",
      "Northwest Side streets are not the Calumet floodplain, but they still sit on a combined sewer. When the rain rate exceeds inlet capacity, water takes the curb, then the travel lane, then the underpass. Albany Park’s North Branch fringe added a river-adjacent twist: park lawns went under while commercial streets sheeted toward Kimball.",
      "Demonstration peaks are concentrated in Jefferson Park, Portage Park, Irving Park, Albany Park, and Lincoln Square, with underpass stations rising fastest. The recession is steep — a cloudburst signature — unlike the long soak of 2013.",
    ],
    sourcesNote:
      "The July 23 2011 O’Hare daily rainfall record is a documented event. Hydrographs here are reconstructed for demonstration only.",
    hardestHit: ["Jefferson Park", "Portage Park", "Irving Park", "Albany Park", "Lincoln Square", "Belmont Cragin"],
  },
  {
    slug: "lakefront-storm-2020",
    title: "Lakefront storm, January 10–11 2020",
    kind: "lakefront",
    start: "2020-01-10T18:00:00.000Z",
    end: "2020-01-12T06:00:00.000Z",
    summary:
      "A January gale piled Lake Michigan against the city’s eastern edge. Wave overtopping, spray, and a seiche-like setup flooded lakefront paths and underpasses from Rogers Park through Streeterville to South Shore, even without a classic cloudburst.",
    narrative: [
      "Chicago’s eastern boundary is a Great Lake, not a seawall that never fails. In January 2020 a strong easterly setup drove water onto the path system, into underpasses, and against the lowest stretches of Lake Shore Drive. This is flood risk that looks nothing like a West Side basement backup — and still closes the same city.",
      "Rogers Park, Edgewater, Uptown, Near North Side, Hyde Park, and South Shore sit on that edge. When waves overtop, water does not need a combined-sewer failure to make a street impassable. The Oak Street underpass and the South Shore Drive dip are the textbook examples.",
      "Demonstration depths are highest at lakefront and underpass stations, with a slower, wind-driven pulse rather than a rain hydrograph. Inland West Side stations stay comparatively quiet — a useful contrast for anyone who thinks Chicago flooding is only a summer thunderstorm story.",
    ],
    sourcesNote:
      "Timing follows the January 10–11 2020 lakefront storm. Station depths are modeled for this demonstration network.",
    hardestHit: ["Rogers Park", "Edgewater", "Uptown", "Near North Side", "Hyde Park", "South Shore"],
  },
];

export function getEventBySlug(slug: string): FloodEvent | undefined {
  return FLOOD_EVENTS.find((event) => event.slug === slug);
}
