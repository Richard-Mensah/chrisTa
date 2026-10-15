import InsightsEmpty from "@/components/features/insights/InsightsEmpty";
import PostCard from "@/components/features/insights/PostCard";
import TopicHubs from "@/components/features/insights/TopicHubs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllPosts } from "@/lib/insights";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Insights",
  description:
    "Articles by Christabel Owusu on renewable energy, power systems, engineering project delivery, energy efficiency and engineering careers, plus an engineering glossary.",
  path: "/insights",
});

export default function InsightsPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHero
        eyebrow="Substation 08 · Insights"
        title="Insights and publications"
        lede="Notes from the field on power, solar, project delivery and engineering careers."
      />
      <Section>
        {posts.length === 0 ? (
          <InsightsEmpty />
        ) : (
          <div className="grid gap-5">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </Section>
      <Section className="pt-0 md:pt-0" labelledBy="hubs-title">
        <SectionHeading
          id="hubs-title"
          eyebrow="Topic hubs"
          title="What Insights will cover"
          lede="Each hub will collect articles on one theme as they are published."
        />
        <div className="mt-10">
          <TopicHubs />
        </div>
      </Section>
    </>
  );
}
