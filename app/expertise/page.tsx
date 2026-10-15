import SkillsExplorer from "@/components/features/expertise/SkillsExplorer";
import SkillsMatrix from "@/components/features/expertise/SkillsMatrix";
import Accordion from "@/components/ui/Accordion";
import ContextNote from "@/components/ui/ContextNote";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { FIELD_PRIMERS } from "@/constants/expertise";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Engineering expertise",
  description:
    "Power systems, renewable energy, engineering project delivery and engineering software. Each skill is labelled as professional experience, tool proficiency or training.",
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 03 · Expertise"
        title="Engineering expertise, with the evidence attached"
        lede="Each capability is labelled by where it comes from: hands-on professional work, software proficiency, or formal training. Filter, search, and follow the evidence links."
      />
      <Section labelledBy="explorer-title">
        <SectionHeading id="explorer-title" eyebrow="Skills explorer" title="Find a capability" />
        <div className="mt-8">
          <SkillsExplorer />
        </div>
      </Section>
      <Section className="pt-0 md:pt-0" labelledBy="matrix-title">
        <SectionHeading
          id="matrix-title"
          eyebrow="Evidence matrix"
          title="Which role demonstrates what"
          lede="Professional-experience skills mapped to the roles in her CV. Select a role to open its case study."
        />
        <div className="mt-8">
          <SkillsMatrix />
        </div>
      </Section>
      <Section className="pt-0 md:pt-0" labelledBy="primers-title">
        <SectionHeading id="primers-title" eyebrow="Field primers" title="What these fields involve" />
        <ContextNote className="mt-8">
          <p>Short introductions to each field for readers outside engineering. They describe the field, not her specific projects.</p>
        </ContextNote>
        <div className="mt-6 grid gap-3">
          {FIELD_PRIMERS.map((p) => (
            <Accordion key={p.title} title={p.title}>
              <p>{p.text}</p>
            </Accordion>
          ))}
        </div>
      </Section>
    </>
  );
}
