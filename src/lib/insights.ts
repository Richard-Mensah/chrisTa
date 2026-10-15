import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "content", "insights");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  topic?: string;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  body: string;
}

function readPost(file: string): Post | null {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  if (data.draft === true) return null;
  if (!data.title || !data.date || !data.summary) {
    throw new Error(`Insight "${file}" needs title, date and summary in its frontmatter.`);
  }
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return {
    slug: file.replace(/\.mdx$/, ""),
    title: String(data.title),
    date: new Date(data.date).toISOString().slice(0, 10),
    summary: String(data.summary),
    topic: data.topic ? String(data.topic) : undefined,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    body: content,
  };
}

/** Files starting with "_" (like _template.mdx) are ignored. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .map(({ slug, title, date, summary, topic, readingMinutes }) => ({ slug, title, date, summary, topic, readingMinutes }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(DIR, file))) return null;
  return readPost(file);
}
