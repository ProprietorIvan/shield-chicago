export type RateItem = {
  label: string;
  value: string;
  description?: string;
};

export type RateSection = {
  title: string;
  subtitle?: string;
  /** Shown above the section title on the price list */
  category?: "Mitigation" | "Contracting";
  items: RateItem[];
};

export const PRICE_META = {
  brand: "Shield Water Damage Restoration and Repairs",
  legalEntity: "Felicita Group LLC",
  phone: "(464) 768-0164",
  phoneHref: "+14647680164",
  email: "dispatch@flood-911.com",
  serviceArea: "Chicago and surrounding Cook County service areas",
  effectiveNote:
    "Indicative mitigation and contracting rates. Final pricing depends on site conditions, access, timing, contamination, materials, scope, and written authorization.",
} as const;

export const RATE_SECTIONS: RateSection[] = [
  {
    title: "Emergency Call-Out",
    category: "Mitigation",
    subtitle: "Water-damage response and site attendance.",
    items: [
      {
        label: "Emergency Water-Damage Call-Out",
        value: "$500 minimum",
        description:
          "Applies to active flooding, burst pipe migration, storm ingress, sprinkler discharge, sewage backup, or urgent after-hours dispatch where crews must respond immediately.",
      },
      {
        label: "Non-Emergency Inspection / Quote Visit",
        value: "$250 minimum",
        description:
          "Scheduled new-client intake, walkthroughs, non-emergency moisture checks, and quote visits.",
      },
      {
        label: "Fuel / Mobilization Surcharge",
        value: "$12.50 per vehicle / visit",
        description:
          "May apply to emergency response, equipment delivery, equipment pickup, monitoring visits, or return trips.",
      },
    ],
  },
  {
    title: "Water Extraction",
    category: "Mitigation",
    subtitle: "Removal of standing water and immediate mitigation labour.",
    items: [
      {
        label: "Water Extraction Specialist",
        value: "$149.70/hr",
        description:
          "Regular-hours labour for water removal, moisture mitigation, extraction setup, and related emergency response work.",
      },
      {
        label: "After-Hours Water Extraction Specialist",
        value: "$250/hr",
        description:
          "Evening, overnight, weekend, or statutory holiday extraction response. Equipment, disposal, supplies, and call-out minimums are billed separately.",
      },
      {
        label: "Flood Technician",
        value: "$149.70/hr",
        description:
          "Regular-hours mitigation labour for water-damage response, moisture mapping, extraction support, and drying setup.",
      },
      {
        label: "After-Hours Flood Technician",
        value: "$250/hr",
        description:
          "Emergency mitigation labour outside normal business hours, including nights, weekends, statutory holidays, and urgent dispatches.",
      },
      {
        label: "Category 3 Water Cleanup",
        value: "$350/hr",
        description:
          "Specialized labour for grossly contaminated water (Category 3) cleanup, including sewage backup, floodwater, and other unsanitary sources. Equipment, disposal, PPE, and call-out minimums are billed separately.",
      },
      {
        label: "Contents / Cleaning Support",
        value: "$57.19/hr",
        description:
          "Basic support labour for non-structural contents movement, affected-area cleaning, and mitigation assistance where appropriate.",
      },
    ],
  },
  {
    title: "Drying & Dehumidification",
    category: "Mitigation",
    subtitle: "Drying equipment rates are per 24-hour period unless noted.",
    items: [
      {
        label: "Mini Air Movers",
        value: "$45/day",
        description: "Compact air movement for confined spaces and targeted drying.",
      },
      {
        label: "Air Movers",
        value: "$62/day",
        description: "High-velocity floor drying and air movement for affected areas.",
      },
      {
        label: "Axial Fan",
        value: "$78/day",
        description: "Large-scale air movement for larger affected areas.",
      },
      {
        label: "Dehumidifier",
        value: "$180/day",
        description: "Standard moisture control during drying and mitigation.",
      },
      {
        label: "Large Dehumidifier",
        value: "$325/day",
        description: "High-capacity dehumidification for larger losses.",
      },
      {
        label: "Air Scrubber",
        value: "$83/day",
        description:
          "Air filtration support during mitigation. Does not include mold remediation or hazardous-material abatement.",
      },
      {
        label: "Large Air Scrubber",
        value: "$124.25/day",
        description: "Higher-capacity air filtration support for larger affected areas.",
      },
      {
        label: "Injected Drying System",
        value: "$166 / 90 LF",
        description:
          "Specialty drying setup where appropriate for mitigation. Structural repair or reconstruction is not included.",
      },
    ],
  },
  {
    title: "Contracting Labour",
    category: "Contracting",
    subtitle:
      "Premium rebuild and home-improvement labour after mitigation. Materials billed separately unless noted.",
    items: [
      {
        label: "Project Manager / Superintendent",
        value: "$195/hr",
        description:
          "On-site coordination, scheduling, quality control, and client/adjuster communication for rebuild scopes.",
      },
      {
        label: "Lead Finish Carpenter",
        value: "$175/hr",
        description:
          "High-end finish carpentry, trim, doors, built-ins, and detailed millwork.",
      },
      {
        label: "General Carpenter / Remodeler",
        value: "$155/hr",
        description:
          "Framing repairs, rough carpentry, fixture blocking, and general rebuild labour.",
      },
      {
        label: "Drywall Specialist",
        value: "$145/hr",
        description:
          "Hang, tape, mud, texture match, and finish for water-damaged walls and ceilings.",
      },
      {
        label: "Painter / Finisher",
        value: "$135/hr",
        description:
          "Surface prep, priming, cut-in, and finish coats with color and sheen matching.",
      },
      {
        label: "Flooring Specialist",
        value: "$165/hr",
        description:
          "Hardwood, engineered, tile, and carpet installation or repair after water damage.",
      },
      {
        label: "Demolition / Soft Demo Labour",
        value: "$105/hr",
        description:
          "Selective demolition, material removal, and site preparation ahead of rebuild.",
      },
      {
        label: "Skilled Helper / Labourer",
        value: "$85/hr",
        description:
          "Support labour for material handling, protection, cleanup, and crew assistance.",
      },
      {
        label: "After-Hours / Weekend Contracting Labour",
        value: "$225/hr",
        description:
          "Evening, overnight, or weekend rebuild labour when schedule or building access requires it.",
      },
      {
        label: "Contracting Project Minimum",
        value: "$2,500 minimum",
        description:
          "Applies to rebuild and home-improvement scopes after mitigation. Smaller punch items may be quoted as fixed packages.",
      },
    ],
  },
  {
    title: "Drywall, Paint & Finishes",
    category: "Contracting",
    subtitle: "Unit rates for common wall and ceiling restoration. Materials extra unless noted.",
    items: [
      {
        label: "Drywall Hang (1/2\")",
        value: "$4.25/sq ft",
        description: "Labour to hang new drywall on walls after water damage.",
      },
      {
        label: "Drywall Hang (5/8\" / Fire-Rated)",
        value: "$4.95/sq ft",
        description: "Labour for thicker or fire-rated board where code or condition requires it.",
      },
      {
        label: "Tape, Mud & Finish (Level 4)",
        value: "$4.75/sq ft",
        description: "Standard finish ready for paint in residential and commercial interiors.",
      },
      {
        label: "Texture Match / Specialty Finish",
        value: "$2.85/sq ft add-on",
        description: "Match existing knockdown, orange peel, or specialty textures.",
      },
      {
        label: "Interior Wall Paint (2 coats)",
        value: "$4.15/sq ft",
        description: "Premium prep and two finish coats on walls. Paint product billed separately.",
      },
      {
        label: "Ceiling Paint (2 coats)",
        value: "$4.65/sq ft",
        description: "Ceiling prep and two finish coats. Includes cut-in at edges and fixtures.",
      },
      {
        label: "Trim / Door Paint or Stain",
        value: "$12.50/LF",
        description: "Base, casing, and door finishes with careful masking and detail work.",
      },
    ],
  },
  {
    title: "Flooring Restoration",
    category: "Contracting",
    subtitle: "Installation and repair labour after structural drying. Materials billed separately.",
    items: [
      {
        label: "Hardwood / Engineered Install",
        value: "$14.75/sq ft",
        description: "Labour for premium hardwood or engineered flooring installation.",
      },
      {
        label: "Hardwood Repair / Partial Replace",
        value: "$18.50/sq ft",
        description: "Selective board replacement, matching, and blending into existing floors.",
      },
      {
        label: "Tile Install (Floor)",
        value: "$19.75/sq ft",
        description: "Ceramic, porcelain, or stone floor tile labour including layout.",
      },
      {
        label: "Tile Install (Wall / Wet Area)",
        value: "$22.50/sq ft",
        description: "Bathroom and kitchen wall tile with waterproofing membrane coordination.",
      },
      {
        label: "Carpet / Pad Install",
        value: "$7.25/sq ft",
        description: "Carpet and pad installation after water damage replacement.",
      },
      {
        label: "Subfloor Repair / Replace",
        value: "$11.50/sq ft",
        description: "Plywood or underlayment repair ahead of finish flooring.",
      },
    ],
  },
  {
    title: "Kitchen & Bath",
    category: "Contracting",
    subtitle: "Fixture and cabinetry labour for water-damaged kitchens and bathrooms.",
    items: [
      {
        label: "Cabinet Install / Rehang",
        value: "$185/LF",
        description: "Upper and base cabinet installation or rehang after drying and wall repair.",
      },
      {
        label: "Vanity Install",
        value: "$650 each",
        description: "Standard vanity set including anchoring and basic leveling. Plumbing billed separately.",
      },
      {
        label: "Countertop Template & Install Coordination",
        value: "$85/LF",
        description: "Template coordination and install labour for stone or solid-surface tops. Fabrication billed by supplier.",
      },
      {
        label: "Toilet Reset / Replace Labour",
        value: "$425 each",
        description: "Remove, reset or replace toilet with new wax seal. Fixture cost separate.",
      },
      {
        label: "Faucet / Fixture Install Labour",
        value: "$285 each",
        description: "Install of sink, tub, or shower fixtures. Fixture cost and rough plumbing separate.",
      },
      {
        label: "Tile Shower / Tub Surround Rebuild",
        value: "$48/sq ft",
        description: "Demo coordination, backer, waterproofing, and tile labour for wet-area rebuilds.",
      },
    ],
  },
  {
    title: "Waterproofing",
    category: "Contracting",
    subtitle: "Preventive systems so water intrusion does not return after rebuild.",
    items: [
      {
        label: "Interior Crack Injection",
        value: "$95/LF",
        description: "Epoxy or polyurethane injection of foundation or slab cracks.",
      },
      {
        label: "Interior Drainage / Channel System",
        value: "$145/LF",
        description: "Interior perimeter drain labour. Sump, pump, and materials billed as scoped.",
      },
      {
        label: "Vapor Barrier / Moisture Membrane",
        value: "$6.85/sq ft",
        description: "Interior vapor barrier or under-slab membrane labour.",
      },
      {
        label: "Exterior Foundation Membrane Labour",
        value: "$18.50/sq ft",
        description: "Excavation coordination and membrane labour where exterior access is available.",
      },
      {
        label: "Waterproofing Project Minimum",
        value: "$1,850 minimum",
        description: "Applies to standalone waterproofing scopes. Combined rebuild packages may be quoted as a fixed scope.",
      },
    ],
  },
  {
    title: "Site Protection & Project Costs",
    category: "Contracting",
    subtitle: "Common project charges for occupied Chicago homes and buildings.",
    items: [
      {
        label: "Floor & Contents Protection",
        value: "$450 minimum / day",
        description: "Ram board, plastic containment, and furniture protection in occupied spaces.",
      },
      {
        label: "Dust Containment / ZipWall Setup",
        value: "$375 minimum",
        description: "Temporary barriers to isolate work areas in apartments, two-flats, and greystones.",
      },
      {
        label: "Debris Removal / Disposal Coordination",
        value: "Cost + 18%",
        description: "Dumpster, bag-out, and disposal fees with coordination markup.",
      },
      {
        label: "Material Procurement Markup",
        value: "Cost + 20%",
        description: "Fixtures, finishes, and specialty materials purchased and staged by Shield.",
      },
      {
        label: "Expedited / After-Hours Building Access Premium",
        value: "15% labour add-on",
        description: "When building rules, freight elevators, or after-hours access constrain the schedule.",
      },
    ],
  },
];
