import type { MetadataRoute } from "next";
import { allEntries, entryHref } from "@/lib/data";

const SITE = "https://cuisinesofmorocco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/dishes", "/ingredients", "/regions", "/produce", "/lineages", "/techniques", "/glossary", "/search"].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: new Date(),
  }));
  const entryRoutes = allEntries().map((e) => ({
    url: `${SITE}${entryHref(e)}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...entryRoutes];
}
