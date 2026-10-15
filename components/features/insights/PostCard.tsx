import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/types";

type Props = {
  post: PostMeta;
};

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group block rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
    >
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
        {post.topic ? ` · ${post.topic}` : ""}
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
      <p className="mt-2 text-muted">{post.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
