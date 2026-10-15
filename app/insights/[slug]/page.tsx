import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/features/insights/ArticleBody";
import ShareLinks from "@/components/features/insights/ShareLinks";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { SITE } from "@/constants/site";
import { getAllPosts, getPost } from "@/lib/insights";
import { articleJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const path = `/insights/${post.slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: path },
    openGraph: { type: "article", title: post.title, description: post.summary, url: path, publishedTime: post.date, authors: [SITE.name] },
    twitter: { title: post.title, description: post.summary },
  };
}

export default async function InsightPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={`Insights · ${post.readingMinutes} min read`} title={post.title} lede={post.summary}>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-ondark-muted">
          By {SITE.formalName} · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </PageHero>
      <Section>
        <article>
          <ArticleBody source={post.body} />
          <ShareLinks url={`${SITE.url}/insights/${post.slug}`} title={post.title} />
        </article>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }} />
    </>
  );
}
