import GettingStarted from "@/components/features/mentorship/GettingStarted";
import PathwayCard from "@/components/features/mentorship/PathwayCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ButtonLink from "@/components/ui/ButtonLink";
import ContextNote from "@/components/ui/ContextNote";
import JsonLd from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { PATHWAYS } from "@/constants/pathways";
import { SITE } from "@/constants/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Career pathways into power & energy",
  description:
    "A guide for students and early-career engineers to five power-sector pathways: distribution, solar O&M, project engineering, protection and automation, and energy efficiency.",
  path: "/mentorship/pathways",
});

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Career pathways", href: "/mentorship/pathways" },
];

export default function PathwaysPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={CRUMBS} />}
        eyebrow="Mentorship · Career pathways"
        title="Career pathways into power & energy"
        lede="Five routes into the power sector, what the work involves, and the skills to start building now."
      />
      <Section>
        <ContextNote className="mb-10">
          <p>
            These pathways describe the sector in general terms to help you explore. Where a pathway matches Christabel&apos;s
            documented experience or training, a link shows it as a real example.
          </p>
        </ContextNote>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PATHWAYS.map((p, i) => (
            <PathwayCard key={p.id} pathway={p} index={i} />
          ))}
        </div>
      </Section>
      <Section tone="dark" labelledBy="start-title">
        <SectionHeading id="start-title" onDark eyebrow="Getting started" title="Four steps you can take now" />
        <div className="mt-10">
          <GettingStarted />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={SITE.ega.url} external>
            Visit {SITE.ega.name}
          </ButtonLink>
          <ButtonLink href="/mentorship" variant="ghost">
            Back to mentorship
          </ButtonLink>
        </div>
      </Section>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
    </>
  );
}
