import { ARTICLES } from "@/lib/advice";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { TRADES } from "@/lib/trades";
import type { MetadataRoute } from "next";

export type SitemapChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type SitemapEntry = {
  path: string;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

const STATIC_ENTRIES: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/emergency", changeFrequency: "weekly", priority: 0.9 },
  { path: "/work", changeFrequency: "monthly", priority: 0.9 },
  { path: "/coverage", changeFrequency: "monthly", priority: 0.8 },
  { path: "/advice", changeFrequency: "weekly", priority: 0.8 },
  { path: "/questions", changeFrequency: "monthly", priority: 0.7 },
  { path: "/firm", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dispatch", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.6 },
];

/** Every indexable HTML route. Excludes noindex pages like /price-list and /rates. */
export function getSitemapEntries(): SitemapEntry[] {
  const coverageEntries: SitemapEntry[] = PLACES.map((place) => ({
    path: `/coverage/${place.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const serviceEntries: SitemapEntry[] = TRADES.map((trade) => ({
    path: `/work/${trade.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guideEntries: SitemapEntry[] = ARTICLES.map((article) => ({
    path: `/advice/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const byPath = (path: string) => STATIC_ENTRIES.find((entry) => entry.path === path)!;

  return [
    byPath("/"),
    byPath("/emergency"),
    byPath("/firm"),
    byPath("/dispatch"),
    byPath("/coverage"),
    ...coverageEntries,
    byPath("/work"),
    ...serviceEntries,
    byPath("/advice"),
    ...guideEntries,
    byPath("/questions"),
    byPath("/privacy"),
    byPath("/terms"),
    byPath("/sitemap"),
  ];
}

export function toMetadataSitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return getSitemapEntries().map((entry) => ({
    url: `${FIRM.siteUrl}${entry.path === "/" ? "" : entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
