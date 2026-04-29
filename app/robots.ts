import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [], // Hide private elite areas
    },
    sitemap: "https://ficialisoftwares.com/sitemap.xml",
  };
}
