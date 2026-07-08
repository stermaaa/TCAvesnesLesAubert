import type { MetadataRoute } from "next";
import { infosSite } from "@/contenu/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${infosSite.urlSite}/sitemap.xml`,
  };
}
