import type { MetadataRoute } from "next";
import { FIRM } from "@/lib/firm";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/price-list", "/rates", "/api/"] },
    sitemap: `${FIRM.siteUrl}/sitemap.xml`,
    host: FIRM.siteUrl,
  };
}
