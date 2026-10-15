import SkillGroupCard from "@/components/features/expertise/SkillGroupCard";
import SkillLegend from "@/components/features/expertise/SkillLegend";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { SKILL_GROUPS } from "@/constants/expertise";
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
        lede="Each capability is labelled by where it comes from: hands-on professional work, software proficiency, or formal training."
      />
      <Section>
        <SkillLegend />
        <div className="grid gap-6 lg:grid-cols-2">
          {SKILL_GROUPS.map((g) => (
            <SkillGroupCard key={g.id} group={g} />
          ))}
        </div>
      </Section>
    </>
  );
}
