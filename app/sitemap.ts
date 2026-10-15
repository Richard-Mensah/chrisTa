import type { MetadataRoute } from "next";
import { PUBLISHED_CREDENTIALS } from "@/constants/credentials";
import { PUBLISHED_ROLES } from "@/constants/experience";
import { PAGES } from "@/constants/pages";
import { SITE } from "@/constants/site";
import { TRAINING_GUIDES } from "@/constants/trainingGuides";
import { getAllPosts } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sub = (path: string, priority = 0.6) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  });

  return [
    ...PAGES.map((p) => ({
      ...sub(p.href === "/" ? "" : p.href, p.key === "home" ? 1 : 0.8),
      ...(p.key === "home" ? { images: [`${SITE.url}${SITE.logo}`, `${SITE.url}/images/portrait-outdoor.jpg`] } : {}),
    })),
    ...PUBLISHED_ROLES.map((r) => sub(`/experience/${r.id}`, 0.7)),
    ...TRAINING_GUIDES.filter((g) => PUBLISHED_CREDENTIALS.some((c) => c.id === g.id)).map((g) => sub(`/credentials/${g.id}`)),
    sub("/mentorship/pathways"),
    sub("/insights/glossary"),
    ...getAllPosts().map((p) => ({
      url: `${SITE.url}/insights/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
