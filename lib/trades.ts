export type Trade = {
  slug: string;
  numeral: string;
  name: string;
  blurb: string;
  promise: string;
  steps: string[];
  image: string;
  alt: string;
  pill: string;
  heroLead: string;
  heroAccent: string;
  cta: string;
  whyTitle: string;
  whyImage: string;
  whyPoints: string[];
  offerings?: { title: string; points: string[] }[];
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
    image: "/photos/homepage/shield-emergency-water-damage-extraction.jpg",
    alt: "Emergency water extraction on a Chicago property",
    pill: "Available Now - 60 Minute Response",
    heroLead: "Emergency",
    heroAccent: "Water Extraction",
    cta: "Call Now - Available 24/7",
    whyTitle: "Why Chicago calls Shield first",
    whyImage: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    whyPoints: [
      "Commercial pumps — not shop-vacs",
      "Containment so the rest of the building stays clean",
      "Hand-off to dry-out with moisture readings",
      "60-minute response across the city",
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
    image: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    alt: "Structural drying equipment in a home",
    pill: "Available Now - 60 Minute Response",
    heroLead: "Professional",
    heroAccent: "Moisture Extraction & Recovery",
    cta: "Call Now - Available 24/7",
    whyTitle: "Why We're Chicago's #1 Choice",
    whyImage: "/photos/homepage/commercial-dehumidifiers-water-damage-drying.jpg",
    whyPoints: [
      "Up to 240 pints of water removed per day",
      "Thermal imaging finds hidden moisture",
      "24/7 monitoring prevents mold growth",
      "Equipment stays until the meters agree",
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
    image: "/photos/homepage/floor-and-carpet-restoration-after-water-damage.jpg",
    alt: "Floor and carpet restoration after water damage",
    pill: "Complete Restoration Within 48 Hours",
    heroLead: "Master",
    heroAccent: "Floor & Carpet Restoration",
    cta: "Start Your Restoration Today",
    whyTitle: "Salvage first. Replace only what is gone.",
    whyImage: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    whyPoints: [
      "Hardwood, carpet, tile, and subfloor",
      "Cupping and crowning addressed on oak and maple",
      "Pad that will smell in August gets pulled",
      "Transitions reset so the room walks normally",
    ],
    offerings: [
      {
        title: "Hardwood Floors",
        points: [
          "Complete water extraction",
          "Expert sanding and refinishing",
          "Cupping and buckling restoration",
          "Color matching on oak and maple",
        ],
      },
      {
        title: "Carpet & Padding",
        points: [
          "Lift, extract, or replace",
          "Odor elimination",
          "Fresh padding when the old pad will smell",
          "Thorough sanitization",
        ],
      },
      {
        title: "Tile & Grout",
        points: [
          "Grout restoration",
          "Seamless tile replacement",
          "Advanced cleaning",
          "Anti-microbial protection",
        ],
      },
      {
        title: "Subfloor Systems",
        points: [
          "Structural drying",
          "Mold prevention",
          "Sister or replace what will not mill back",
          "Transitions reset so the room walks normally",
        ],
      },
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
    image: "/photos/homepage/drywall-and-paint-repair-after-water-damage.jpg",
    alt: "Drywall repair and painting after water damage",
    pill: "Professional Drywall & Paint Services",
    heroLead: "Expert",
    heroAccent: "Water Damage Restoration",
    cta: "Get Emergency Service",
    whyTitle: "Guaranteed Results",
    whyImage: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    whyPoints: [
      "Complete water damage assessment",
      "Cut to a clean line — not a map of the loss",
      "Texture matching on plaster and knockdown",
      "Prime and paint the full plane",
    ],
    offerings: [
      {
        title: "Water Damage Repair",
        points: [
          "Emergency water extraction",
          "Structural drying",
          "Mold prevention",
          "Complete restoration",
        ],
      },
      {
        title: "Drywall Restoration",
        points: [
          "Water-damaged wall removal",
          "Moisture barrier installation",
          "New drywall installation",
          "Perfect finish matching",
        ],
      },
      {
        title: "Painting Services",
        points: [
          "Surface preparation",
          "Water damage sealing",
          "Color matching",
          "Complete repainting",
        ],
      },
      {
        title: "Additional Services",
        points: [
          "Texture matching",
          "Ceiling repair",
          "Baseboard replacement",
          "Trim restoration",
        ],
      },
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
    image: "/photos/homepage/kitchen-water-damage-repair-nyc.jpg",
    alt: "Kitchen and bath restoration after water damage",
    pill: "Expert Kitchen & Bath Restoration",
    heroLead: "Transform Your",
    heroAccent: "Kitchen & Bath",
    cta: "Start Your Transformation",
    whyTitle: "Wet-room losses done correctly",
    whyImage: "/photos/homepage/drywall-and-paint-repair-after-water-damage.jpg",
    whyPoints: [
      "Kick plates and toe-kicks opened and dried",
      "Swollen cabinet boxes replaced",
      "Counters, fixtures, and trim reset",
      "Plumber coordination if the break is still live",
    ],
    offerings: [
      {
        title: "Kitchen Restoration",
        points: [
          "Cabinet refinishing and repair",
          "Countertop restoration",
          "Tile and backsplash renewal",
          "Toe-kick and kick-plate dry-out",
        ],
      },
      {
        title: "Bathroom Revival",
        points: [
          "Tile and grout restoration",
          "Fixture updates",
          "Vanity refinishing",
          "Waterproofing at the wet box",
        ],
      },
      {
        title: "Surface Treatments",
        points: [
          "Natural stone restoration",
          "Ceramic tile repair",
          "Countertop refinishing",
          "Trim and finish work",
        ],
      },
      {
        title: "Additional Services",
        points: [
          "Plumbing coordination",
          "Appliance integration",
          "Hardware replacement",
          "Custom finish matching",
        ],
      },
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
    image: "/photos/homepage/commercial-dehumidifiers-water-damage-drying.jpg",
    alt: "Waterproofing and drying equipment after a water loss",
    pill: "Professional Waterproofing Services",
    heroLead: "Keep water",
    heroAccent: "out for good.",
    cta: "Get Waterproofing Help",
    whyTitle: "Stop the next Chicago backup",
    whyImage: "/photos/homepage/shield-emergency-water-damage-extraction.jpg",
    whyPoints: [
      "Diagnose sewer, storm, or plumbing",
      "Interior detailing where it failed",
      "Drainage and valves that match the building",
      "Documented for the next insurance conversation",
    ],
    offerings: [
      {
        title: "Basement Waterproofing",
        points: [
          "Interior drain and sump solutions",
          "Wall crack and joint sealing",
          "Vapor barrier installation",
          "Dehumidifier integration",
        ],
      },
      {
        title: "Foundation & Exterior",
        points: [
          "Exterior membrane systems",
          "Grade and drainage corrections",
          "Window well and entry sealing",
          "French drain installation",
        ],
      },
      {
        title: "Interior Moisture Barriers",
        points: [
          "Slab and crawl-space barriers",
          "Finished-basement detailing",
          "Sewer-backup valves",
          "Post-flood prevention upgrades",
        ],
      },
      {
        title: "After the Loss",
        points: [
          "Source diagnosis — sewer, storm, or plumbing",
          "Work sequenced after the structure is dry",
          "Documented for insurance",
          "No coating sold as a basement system",
        ],
      },
    ],
  },
  {
    slug: "mold",
    numeral: "07",
    name: "Mold after a water loss",
    blurb:
      "When a Chicago basement sat wet, we do not fog and leave. We dry the source, cut what colonized, and close only on a clean reading.",
    promise:
      "Mold work is part of the water file, not a separate scare product. If the board is still wet, we do not paint over it.",
    steps: [
      "Confirm the water is actually gone",
      "Remove colonized material to a clean line",
      "Clean cavities that can be saved",
      "Close the wall after the meter agrees",
    ],
    image: "/photos/homepage/mold-remediation-after-water-damage.jpg",
    alt: "Mold remediation after a water loss",
    pill: "Professional Mold Remediation Specialists",
    heroLead: "Professional",
    heroAccent: "Mold Remediation",
    cta: "Get Expert Help Now",
    whyTitle: "Source first. Then the colony.",
    whyImage: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    whyPoints: [
      "Confirm the water is actually gone",
      "Remove colonized material to a clean line",
      "Clean cavities that can be saved",
      "Close the wall after the meter agrees",
    ],
    offerings: [
      {
        title: "Inspection & Testing",
        points: [
          "Advanced moisture detection",
          "Air quality testing",
          "Hidden mold detection",
          "Source confirmation before any fogging",
        ],
      },
      {
        title: "Mold Removal",
        points: [
          "HEPA air filtration",
          "Contamination containment",
          "Colonized material cut to a clean line",
          "Surface treatment",
        ],
      },
      {
        title: "Restoration",
        points: [
          "Structural repair",
          "Material replacement",
          "Dehumidification",
          "Close only after the meter agrees",
        ],
      },
      {
        title: "Prevention",
        points: [
          "Fix the water first",
          "Cavity cleaning that can be saved",
          "Moisture barriers where they belong",
          "Part of the water file — not a scare product",
        ],
      },
    ],
  },
];

export function tradeBySlug(slug: string) {
  return TRADES.find((trade) => trade.slug === slug);
}
