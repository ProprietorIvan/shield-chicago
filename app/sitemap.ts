import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/advice";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { TRADES } from "@/lib/trades";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = FIRM.siteUrl;
  const staticPaths = ["", "/work", "/coverage", "/advice", "/questions", "/firm", "/dispatch", "/rates"];
  return [
    ...staticPaths.map((path) => ({ url: `${base}${path}` })),
    ...TRADES.map((trade) => ({ url: `${base}/work/${trade.slug}` })),
    ...PLACES.map((place) => ({ url: `${base}/coverage/${place.slug}` })),
    ...ARTICLES.map((article) => ({ url: `${base}/advice/${article.slug}` })),
  ];
}
