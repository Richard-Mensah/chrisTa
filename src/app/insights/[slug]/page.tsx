import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHero } from "@/components/ui/Blocks";
import { site } from "@/content/site";
import { getAllPosts, getPost } from "@/lib/insights";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/insights/${slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: path,
      publishedTime: post.date,
      authors: [site.name],
    },
    twitter: { title: post.title, description: post.summary },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${site.url}/insights/${slug}`;
  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: url,
  };

  return (
    <>
      <PageHero eyebrow={`Insights · ${post.readingMinutes} min read`} title={post.title} lede={post.summary}>
        <p className="mono" style={{ marginTop: 18, color: "var(--on-navy-muted)" }}>
          By {site.formalName} · <time dateTime={post.date}>{date}</time>
        </p>
      </PageHero>
      <section className="sec">
        <div className="wrap">
          <article className="article">
            <MDXRemote source={post.body} />
            <div className="share">
              <span className="mono">Share</span>
              <a
                className="btn btn-line"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-line"
                href={`https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              <Link className="btn btn-line" href="/insights">
                All insights
              </Link>
            </div>
          </article>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
