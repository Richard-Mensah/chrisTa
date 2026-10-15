import EngagementSection from "@/components/features/leadership/EngagementSection";
import LeadershipGroup from "@/components/features/leadership/LeadershipGroup";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { ENGAGEMENT_SECTIONS, LEADERSHIP, LEADERSHIP_GROUPS } from "@/constants/leadership";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Leadership & engagement",
  description:
    "Leadership roles held by Christabel Owusu, including Youth Minister for Energy and Petroleum (UN Youth Association of Ghana) and Student President of GhIE Women in Engineering at UENR.",
  path: "/leadership",
});

export default function LeadershipPage() {
  const published = LEADERSHIP.filter((l) => l.published);
  return (
    <>
      <PageHero
        eyebrow="Substation 07 · Leadership"
        title="Leadership and professional engagement"
        lede="Roles she has held from university through national youth leadership, as documented in her CV."
      />
      <Section innerClassName="grid gap-16">
        {LEADERSHIP_GROUPS.map((g) => (
          <LeadershipGroup key={g.key} id={g.key} title={g.title} items={published.filter((l) => l.group === g.key)} />
        ))}
        {ENGAGEMENT_SECTIONS.map((s) => (
          <EngagementSection key={s.id} id={s.id} title={s.title} items={s.items} />
        ))}
      </Section>
    </>
  );
}
