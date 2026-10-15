import GlossaryExplorer from "@/components/features/insights/GlossaryExplorer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { GLOSSARY } from "@/constants/glossary";
import { breadcrumbJsonLd, glossaryJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Power & energy engineering glossary",
  description:
    "Plain-English definitions of power and energy engineering terms: SCADA, IEC 61850, MWp, factory acceptance tests, distribution transformers, bills of quantities and more.",
  path: "/insights/glossary",
});

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Insights", href: "/insights" },
  { label: "Glossary", href: "/insights/glossary" },
];

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={CRUMBS} />}
        eyebrow="Insights · Glossary"
        title="Power & energy engineering glossary"
        lede="Plain-English definitions of the terms used across this site, for students, recruiters and anyone new to the power sector."
      />
      <Section>
        <GlossaryExplorer />
      </Section>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={glossaryJsonLd(GLOSSARY)} />
    </>
  );
}
