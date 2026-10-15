import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@/components/features/experience/CaseStudyView";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { caseStudyById } from "@/constants/caseStudies";
import { PUBLISHED_ROLES } from "@/constants/experience";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLISHED_ROLES.map((r) => ({ id: r.id }));
}

type Props = { params: Promise<{ id: string }> };

function load(id: string) {
  const role = PUBLISHED_ROLES.find((r) => r.id === id);
  const study = caseStudyById(id);
  return role && study ? { role, study } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = load((await params).id);
  if (!data) return {};
  const { role } = data;
  return pageMeta({
    title: `${role.employer} case study`,
    description: `${role.title} at ${role.employer} (${role.period}). ${role.context}`,
    path: `/experience/${role.id}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const data = load((await params).id);
  if (!data) notFound();
  const { role, study } = data;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/experience" },
    { label: role.shortName, href: `/experience/${role.id}` },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={crumbs} />}
        eyebrow={`${role.feeder} · ${role.period}`}
        title={role.employer}
        lede={role.title}
      />
      <CaseStudyView role={role} study={study} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
