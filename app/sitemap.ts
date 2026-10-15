import type { MetadataRoute } from "next";
import { PAGES } from "@/constants/pages";
import { SITE } from "@/constants/site";
import { getAllPosts } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...PAGES.map((p) => ({
      url: `${SITE.url}${p.href === "/" ? "" : p.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.key === "home" ? 1 : 0.7,
      ...(p.key === "home" ? { images: [`${SITE.url}${SITE.logo}`, `${SITE.url}/images/portrait-outdoor.jpg`] } : {}),
    })),
    ...getAllPosts().map((p) => ({
      url: `${SITE.url}/insights/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
