import type { MetadataRoute } from "next";
import { toMetadataSitemap } from "@/lib/sitemap-paths";

export default function sitemap(): MetadataRoute.Sitemap {
  return toMetadataSitemap();
}
