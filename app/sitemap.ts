import type { MetadataRoute } from "next";
import { infosSite } from "@/contenu/site";

const PAGES = [
  "",
  "/le-tournoi",
  "/vivre",
  "/galerie",
  "/infos",
  "/partenaires",
  "/a-propos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((chemin) => ({
    url: `${infosSite.urlSite}${chemin}`,
    lastModified: new Date(),
  }));
}
