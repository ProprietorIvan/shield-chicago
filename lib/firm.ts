export const FIRM = {
  name: "Shield Chicago",
  legal: "Shield Chicago Water Damage Restoration",
  tagline: "Basements, two-flats, and high-rises. Dry them out. Put them back.",
  description:
    "24/7 water damage restoration in Chicago: extraction, structural drying, rebuilds, and waterproofing for homes, two-flats, and commercial floors.",
  email: "dispatch@flood-911.com",
  phoneDisplay: "(464) 768-0164",
  phoneE164: "+14647680164",
  phoneTel: "tel:+14647680164",
  address: "1200 W Carroll Ave, Chicago, IL 60607",
  addressMaps:
    "https://www.google.com/maps/search/?api=1&query=1200+W+Carroll+Ave,+Chicago,+IL+60607",
  hours: "Live dispatch, every hour of the year",
  response: "On-site target: under an hour inside the city",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://flood-911.com",
} as const;
