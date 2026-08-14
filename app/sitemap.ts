import type { MetadataRoute } from "next";
import { FLOOD_EVENTS } from "@/lib/mock";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shield-chicago.vercel.app";
  const staticRoutes = ["", "/about", "/sensors", "/dashboard", "/events", "/data", "/get-involved"];
  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date("2026-08-14"),
    })),
    ...FLOOD_EVENTS.map((event) => ({
      url: `${base}/events/${event.slug}`,
      lastModified: new Date(event.end),
    })),
  ];
}
