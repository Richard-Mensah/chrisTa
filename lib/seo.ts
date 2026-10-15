import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import type { FaqItem, GlossaryTerm, Post } from "@/types";

type PageMetaInput = { title: string; description: string; path: string };

export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.name,
    honorificPrefix: "Ing.",
    jobTitle: "Electrical and Electronics Engineer",
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/images/portrait-outdoor.jpg`,
    address: { "@type": "PostalAddress", addressCountry: "GH" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Energy and Natural Resources" },
    memberOf: { "@type": "Organization", name: "Ghana Institution of Engineering" },
    knowsAbout: [
      "Power systems",
      "Distribution transformers",
      "Solar photovoltaic plant operations and maintenance",
      "Testing and commissioning",
      "Engineering project delivery",
      "IEC 61850",
      "Mentorship",
    ],
    knowsLanguage: ["English", "French", "Twi"],
    ...(SITE.linkedin ? { sameAs: [SITE.linkedin] } : {}),
  };
}

/** WebSite entity with the brand logo, so search engines can associate the CF mark with the site. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: SITE.formalName,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE.url}/#person` },
    image: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}`, width: 800, height: 800 },
  };
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function glossaryJsonLd(terms: GlossaryTerm[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Power and energy engineering glossary",
    url: `${SITE.url}/insights/glossary`,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `${SITE.url}/insights/glossary#term-${t.slug}`,
    })),
  };
}

export function articleJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#person` },
    mainEntityOfPage: `${SITE.url}/insights/${post.slug}`,
  };
}
