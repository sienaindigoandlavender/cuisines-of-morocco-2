import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://cuisinesofmorocco.com/sitemap.xml",
    host: "https://cuisinesofmorocco.com",
  };
}
