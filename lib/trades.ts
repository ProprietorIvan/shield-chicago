export type Trade = {
  slug: string;
  numeral: string;
  name: string;
  blurb: string;
  promise: string;
  steps: string[];
};

export const TRADES: Trade[] = [
  {
    slug: "pump-out",
    numeral: "01",
    name: "Standing-water pump-out",
    blurb:
      "Sewage backups, burst stacks, and cloudburst basements. We pull the water before it climbs the drywall.",
    promise:
      "Commercial pumps and extractors, not shop-vacs. We keep moving until the floor is a damp film, not a pool.",
    steps: [
      "Find the source and shut what can be shut",
      "Extract standing water from living space, basement, and cavities",
      "Set containment so the rest of the building stays clean",
      "Hand off to dry-out with moisture readings, not a guess",
    ],
  },
  {
    slug: "dry-out",
    numeral: "02",
    name: "Structural dry-out",
    blurb:
      "Air movers and dehumidifiers until wood, plaster, and subfloor actually read dry — Chicago humidity included.",
    promise:
      "We meter daily. Equipment stays until the numbers, not the calendar, say the building is safe to close up.",
    steps: [
      "Map wet materials with meters, not a flashlight",
      "Open only what will not dry in place",
      "Run a closed drying system sized for the space",
      "Record readings so insurance and the GC are looking at the same sheet",
    ],
  },
  {
    slug: "floors",
    numeral: "03",
    name: "Floors, carpet, and subfloor",
    blurb:
      "Oak, maple, luxury vinyl, tile, and carpet pad in bungalows and Loop offices. Salvage first, replace only what is gone.",
    promise:
      "We do not tear out a floor that will mill back. We do not leave a pad that will smell in August.",
    steps: [
      "Lift carpet and pad, bag what cannot be saved",
      "Dry or sister the subfloor",
      "Cupping, crowning, and finish work on hardwood",
      "Reset transitions so the room walks normally",
    ],
  },
  {
    slug: "walls",
    numeral: "04",
    name: "Walls, plaster, and paint",
    blurb:
      "Chicago plaster, lath, and modern drywall. Cut to the line, rebuild, texture, and paint so the patch disappears.",
    promise:
      "Flood lines get cut square. New board is taped, mudded, and painted to the existing sheen — not a ‘close enough’ rectangle.",
    steps: [
      "Strip wet board and insulation to a clean line",
      "Treat cavities, then close only when dry",
      "Match texture on plaster and knockdown",
      "Prime and paint the full plane so you do not see a map of the loss",
    ],
  },
  {
    slug: "wet-rooms",
    numeral: "05",
    name: "Kitchens and baths",
    blurb:
      "Supply-line failures, overflowing tubs, and dishwasher floods. Cabinets, vanities, and finishes put back in working order.",
    promise:
      "Wet-room losses are not a living-room dry-out. We pull kick plates, check the toe-kick, and rebuild the wet box correctly.",
    steps: [
      "Remove saturated cabinets and swollen box construction",
      "Dry the cavity behind the kitchen and bath",
      "Reset counters, fixtures, and trim",
      "Coordinate with your plumber if the break is still live",
    ],
  },
  {
    slug: "keep-dry",
    numeral: "06",
    name: "Keep-it-dry work",
    blurb:
      "After the loss: interior drains, membranes, and detailing so the next storm is a headache, not another demolition.",
    promise:
      "We do not sell a ‘coating’ as a basement system. We tell you what will actually keep Chicago groundwater and sewer surcharge out.",
    steps: [
      "Diagnose whether this was sewer, storm, or a plumbing break",
      "Detail the interior where it failed",
      "Recommend drainage or valves that match the building",
      "Document the repair for the next insurance conversation",
    ],
  },
];

export function tradeBySlug(slug: string) {
  return TRADES.find((trade) => trade.slug === slug);
}
