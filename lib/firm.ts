export const FIRM = {
  name: "Shield Chicago",
  legal: "Shield Chicago Water Damage Restoration",
  tagline: "Basements, two-flats, and high-rises. Dry them out. Put them back.",
  description:
    "24/7 water damage restoration in Chicago: extraction, structural drying, rebuilds, and waterproofing for homes, two-flats, and commercial floors.",
  email: "dispatch@shieldchicago.com",
  phoneDisplay: "(312) 555-0140",
  phoneTel: "tel:+13125550140",
  phoneNote: "Replace this number in lib/firm.ts before launch.",
  address: "Chicago, Illinois",
  hours: "Live dispatch, every hour of the year",
  response: "On-site target: under an hour inside the city",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shieldchicago.com",
} as const;
