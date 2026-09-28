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
  {
    slug: "sewage-backup",
    numeral: "08",
    name: "Sewage backup cleanup",
    blurb:
      "Floor drains, toilets, and main-line backups in Chicago basements. Contaminated water out, affected materials removed, every surface sanitized.",
    promise:
      "Sewage is a health problem before it is a flooring problem. We contain it, pull it, and sanitize to a documented standard before anything goes back.",
    steps: [
      "Keep people and pets out, then contain the area",
      "Extract sewage and remove porous materials it touched",
      "Clean and apply antimicrobial to every affected surface",
      "Dry with meters and document it all for the claim",
    ],
    image: "/photos/homepage/shield-emergency-water-damage-extraction.jpg",
    alt: "Sewage backup cleanup in a Chicago basement",
    pill: "Available Now - 60 Minute Response",
    heroLead: "Emergency",
    heroAccent: "Sewage Backup Cleanup",
    cta: "Call Now - Available 24/7",
    whyTitle: "Contained, sanitized, documented",
    whyImage: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    whyPoints: [
      "Crews in full protective equipment",
      "Containment keeps the rest of the house clean",
      "Contaminated drywall, pad, and insulation removed",
      "Photo and moisture file for your insurance",
    ],
    offerings: [
      {
        title: "Floor Drain Backups",
        points: [
          "Storm surcharge and clogged laterals",
          "Basement slab and wall cleanup",
          "Carpet and pad removal",
          "Antimicrobial treatment",
        ],
      },
      {
        title: "Toilet & Fixture Overflows",
        points: [
          "Bathroom and below-floor cleanup",
          "Ceiling checks on the floor below",
          "Subfloor drying",
          "Odor control",
        ],
      },
      {
        title: "Main Line Backups",
        points: [
          "Two-flats and multi-unit buildings",
          "Coordination with your plumber",
          "Unit-by-unit documentation",
          "Common area cleanup",
        ],
      },
      {
        title: "After the Cleanup",
        points: [
          "Structural drying to a metered dry",
          "Drywall, trim, and flooring rebuilt",
          "Backflow and waterproofing advice",
          "Warranty on restoration work",
        ],
      },
    ],
  },
  {
    slug: "burst-pipe",
    numeral: "09",
    name: "Burst pipe water damage",
    blurb:
      "Frozen pipes, failed supply lines, water heaters, and washer hoses. We stop the spread, find where the water went, and dry it before it turns into mold.",
    promise:
      "Water from a burst pipe travels inside walls and under floors. We follow it with meters and thermal imaging, not guesses, and dry what we find.",
    steps: [
      "Confirm the water is shut off and the area is safe",
      "Extract standing water from floors and cavities",
      "Map hidden moisture in walls, ceilings, and subfloor",
      "Dry, document, and rebuild what could not be saved",
    ],
    image: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    alt: "Drying equipment after a burst pipe in a Chicago home",
    pill: "Available Now - 60 Minute Response",
    heroLead: "Burst Pipe",
    heroAccent: "Water Damage Repair",
    cta: "Call Now - Available 24/7",
    whyTitle: "Follow the water, not a guess",
    whyImage: "/photos/homepage/commercial-dehumidifiers-water-damage-drying.jpg",
    whyPoints: [
      "Thermal imaging finds water behind walls",
      "Commercial extraction and drying equipment",
      "Moisture map for your insurance adjuster",
      "Walls, floors, and cabinets rebuilt after drying",
    ],
    offerings: [
      {
        title: "Frozen Pipe Bursts",
        points: [
          "Exterior walls and crawlspaces",
          "Winter vacancies and vacant units",
          "Ceiling and wall cavity drying",
          "Coordination with your plumber",
        ],
      },
      {
        title: "Supply Line & Appliance Leaks",
        points: [
          "Water heaters and washer hoses",
          "Dishwasher and fridge lines",
          "Under-cabinet and subfloor drying",
          "Cabinet removal only when needed",
        ],
      },
      {
        title: "Hidden Moisture",
        points: [
          "Thermal imaging",
          "Pin and pinless meters",
          "Controlled openings, not demolition",
          "Daily readings until dry",
        ],
      },
      {
        title: "Rebuild",
        points: [
          "Drywall, plaster, and paint",
          "Flooring and trim",
          "One company from extraction to finish",
          "Warranty on restoration work",
        ],
      },
    ],
  },
  {
    slug: "basement-flooding",
    numeral: "10",
    name: "Basement flooding",
    blurb:
      "Cloudbursts, failed sump pumps, and seepage through old foundations. Chicago basements are our most common call, finished or not.",
    promise:
      "A flooded basement is pumped, dried, and rebuilt in order. We do not close walls on a wet slab, and we tell you why it flooded.",
    steps: [
      "Pump out standing water with commercial equipment",
      "Remove wet carpet, pad, and drywall below the waterline",
      "Dry the slab, walls, and framing to a metered reading",
      "Rebuild and advise on keeping the next storm out",
    ],
    image: "/photos/homepage/shield-emergency-water-damage-extraction.jpg",
    alt: "Pumping water out of a flooded Chicago basement",
    pill: "Available Now - 60 Minute Response",
    heroLead: "Flooded",
    heroAccent: "Basement Cleanup & Repair",
    cta: "Call Now - Available 24/7",
    whyTitle: "Why Chicago basements call Shield",
    whyImage: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    whyPoints: [
      "Commercial pumps, not shop-vacs",
      "Slab and wall drying measured daily",
      "Finished basements rebuilt after drying",
      "Waterproofing advice once it is dry",
    ],
    offerings: [
      {
        title: "Storm & Cloudburst Flooding",
        points: [
          "Overland water and window wells",
          "Floor drain surcharge",
          "Fast pump-out",
          "Contents moved and protected",
        ],
      },
      {
        title: "Sump Pump Failures",
        points: [
          "Power outage and float failures",
          "Pit overflow cleanup",
          "Slab and wall drying",
          "Pump replacement guidance",
        ],
      },
      {
        title: "Finished Basements",
        points: [
          "Carpet, pad, and LVP",
          "Drywall cut above the waterline",
          "Insulation removal",
          "Full rebuild after drying",
        ],
      },
      {
        title: "Keep It Dry",
        points: [
          "Source named correctly",
          "Backflow and drainage options",
          "Interior waterproofing where it failed",
          "Insurance documentation",
        ],
      },
    ],
  },
  {
    slug: "ceiling-leak",
    numeral: "11",
    name: "Ceiling leaks and water stains",
    blurb:
      "Water through the ceiling from the unit above, a bathroom, or the roof. We protect the room, find the source, and dry the ceiling before it sags.",
    promise:
      "A wet ceiling can come down. We make it safe first, then dry, repair, and paint so you cannot tell where the leak was.",
    steps: [
      "Protect furniture and check the ceiling is safe",
      "Trace the source above, from a unit, bath, or roof",
      "Dry the ceiling cavity with meters and thermal imaging",
      "Patch, skim, and paint to match",
    ],
    image: "/photos/homepage/drywall-and-paint-repair-after-water-damage.jpg",
    alt: "Ceiling water damage repair in a Chicago home",
    pill: "Available Now - 60 Minute Response",
    heroLead: "Ceiling Leak",
    heroAccent: "Water Damage Repair",
    cta: "Call Now - Available 24/7",
    whyTitle: "Safe first, then invisible",
    whyImage: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    whyPoints: [
      "Sagging ceilings made safe first",
      "Source traced before we repair",
      "Cause and moisture report for condo boards and insurers",
      "Patch, skim, and paint to match",
    ],
    offerings: [
      {
        title: "Leaks From Above",
        points: [
          "Condo and apartment units",
          "Upstairs bathrooms and kitchens",
          "Cause report for the building",
          "Coordination with management",
        ],
      },
      {
        title: "Roof & Ice Dam Leaks",
        points: [
          "Top-floor ceilings",
          "Attic insulation checks",
          "Temporary protection",
          "Drying before repair",
        ],
      },
      {
        title: "Plaster & Drywall",
        points: [
          "Plaster ceilings in older homes",
          "Drywall cut and replaced",
          "Skim coat and texture match",
          "Stain-blocking primer and paint",
        ],
      },
      {
        title: "Documentation",
        points: [
          "Photos before and after",
          "Moisture readings",
          "Clear written scope",
          "Warranty on restoration work",
        ],
      },
    ],
  },
  {
    slug: "commercial",
    numeral: "12",
    name: "Commercial water damage",
    blurb:
      "Offices, restaurants, retail, and multi-unit buildings. We work around your hours and give property managers one point of contact.",
    promise:
      "A flooded business loses money every hour it is closed. We extract fast, set drying around your schedule, and keep the paperwork clean.",
    steps: [
      "Crew on site with commercial pumps and extractors",
      "Contain affected areas so the rest can stay open",
      "Dry on a plan built around your hours",
      "Daily moisture logs and photo reports for managers",
    ],
    image: "/photos/homepage/commercial-dehumidifiers-water-damage-drying.jpg",
    alt: "Commercial dehumidifiers drying a Chicago office",
    pill: "24/7 Commercial Response",
    heroLead: "Commercial",
    heroAccent: "Water Damage Restoration",
    cta: "Call Now - Available 24/7",
    whyTitle: "Built for property managers",
    whyImage: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
    whyPoints: [
      "One point of contact for the whole job",
      "Drying planned around business hours",
      "Daily moisture logs and photo reports",
      "Loop high-rises to neighborhood storefronts",
    ],
    offerings: [
      {
        title: "Offices & High-Rises",
        points: [
          "Riser and sprinkler leaks",
          "Floor-by-floor containment",
          "After-hours work",
          "Tenant communication support",
        ],
      },
      {
        title: "Restaurants & Retail",
        points: [
          "Kitchen and dining room floods",
          "Walk-in and equipment leaks",
          "Fast reopen planning",
          "Sanitizing where required",
        ],
      },
      {
        title: "Multi-Unit Buildings",
        points: [
          "Two-flats to large buildings",
          "Unit-by-unit documentation",
          "Common area cleanup",
          "Coordination with management",
        ],
      },
      {
        title: "Reporting",
        points: [
          "Daily moisture logs",
          "Photo reports",
          "Clear written scope",
          "Insurance-ready documentation",
        ],
      },
    ],
  },
];

export function tradeBySlug(slug: string) {
  return TRADES.find((trade) => trade.slug === slug);
}
