import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrainingGuideView from "@/components/features/credentials/TrainingGuideView";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { CREDENTIAL_KIND_LABELS, PUBLISHED_CREDENTIALS } from "@/constants/credentials";
import { TRAINING_GUIDES, trainingGuideById } from "@/constants/trainingGuides";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return TRAINING_GUIDES.filter((g) => PUBLISHED_CREDENTIALS.some((c) => c.id === g.id)).map((g) => ({ id: g.id }));
}

type Props = { params: Promise<{ id: string }> };

function load(id: string) {
  const credential = PUBLISHED_CREDENTIALS.find((c) => c.id === id);
  const guide = trainingGuideById(id);
  return credential && guide ? { credential, guide } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = load((await params).id);
  if (!data) return {};
  return pageMeta({
    title: data.credential.name,
    description: data.guide.summary,
    path: `/credentials/${data.credential.id}`,
  });
}

export default async function TrainingGuidePage({ params }: Props) {
  const data = load((await params).id);
  if (!data) notFound();
  const { credential, guide } = data;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Credentials", href: "/credentials" },
    { label: credential.name, href: `/credentials/${credential.id}` },
  ];
  const where = [credential.issuer, credential.location].filter(Boolean).join(" · ");

  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={crumbs} />}
        eyebrow={`Training guide · ${CREDENTIAL_KIND_LABELS[credential.kind].short}`}
        title={credential.name}
        lede={where || undefined}
      />
      <TrainingGuideView credential={credential} guide={guide} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
