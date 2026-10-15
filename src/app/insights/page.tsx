import Link from "next/link";
import { PageHero } from "@/components/ui/Blocks";
import { getAllPosts } from "@/lib/insights";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Insights",
  description:
    "Articles by Christabel Owusu on renewable energy, power systems, engineering project delivery, energy efficiency and engineering careers.",
  path: "/insights",
});

const TOPICS = [
  "Renewable energy & solar power",
  "Power systems & electrical safety",
  "Engineering project delivery",
  "Energy efficiency",
  "Career development for engineers",
  "Women in Engineering",
  "Mentorship & youth development",
];

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function InsightsPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHero
        eyebrow="Substation 08 · Insights"
        title="Insights and publications"
        lede="Notes from the field on power, solar, project delivery and engineering careers."
      />
      <section className="sec">
        <div className="wrap">
          {posts.length === 0 ? (
            <div className="empty">
              <p className="eyebrow mono">Coming soon</p>
              <h2 className="h3">The first articles are being written</h2>
              <p className="lede">Planned topics include:</p>
              <div className="topics">
                {TOPICS.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="ctas">
                <Link className="btn btn-line" href="/contact?topic=collaboration">
                  Suggest a topic or collaborate
                </Link>
              </div>
            </div>
          ) : (
            <div className="posts">
              {posts.map((p) => (
                <Link className="post-card" key={p.slug} href={`/insights/${p.slug}`}>
                  <p className="mono" style={{ color: "var(--teal)" }}>
                    <time dateTime={p.date}>{fmt(p.date)}</time> · {p.readingMinutes} min read
                    {p.topic ? ` · ${p.topic}` : ""}
                  </p>
                  <h2>{p.title}</h2>
                  <p>{p.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
