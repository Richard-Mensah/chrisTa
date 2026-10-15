import type { MetadataRoute } from "next";
import { PAGES } from "@/content/pages";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...PAGES.map((p) => ({
      url: `${site.url}${p.href === "/" ? "" : p.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.key === "home" ? 1 : 0.7,
    })),
    ...getAllPosts().map((p) => ({
      url: `${site.url}/insights/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
