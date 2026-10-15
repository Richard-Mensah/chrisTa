import Link from "next/link";
import { glossaryBySlugs } from "@/lib/related";

type Props = {
  slugs: string[];
  title?: string;
};

/** Key terms on a page, linked to their glossary definitions. */
export default function GlossaryChips({ slugs, title = "Key terms" }: Props) {
  const terms = glossaryBySlugs(slugs);
  if (!terms.length) return null;
  return (
    <div>
      <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {terms.map((t) => (
          <Link
            key={t.slug}
            href={`/insights/glossary#term-${t.slug}`}
            title={t.definition}
            className="rounded-full border border-line bg-surface px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            {t.term}
          </Link>
        ))}
      </div>
    </div>
  );
}
