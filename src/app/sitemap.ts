import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { projects } from "@/data/projects";
import { research } from "@/data/research";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date("2026-10-01") },
    ...research.map((item) => ({ url: `${SITE_URL}/research/${item.slug}`, lastModified: new Date("2026-10-01") })),
    ...projects.map((item) => ({ url: `${SITE_URL}/projects/${item.slug}`, lastModified: new Date("2026-10-01") })),
  ];
}
