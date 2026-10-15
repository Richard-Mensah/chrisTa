"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { GLOSSARY } from "@/constants/glossary";

/** Searchable glossary. Every term has an anchor (#term-slug) for links from other pages. */
export default function GlossaryExplorer() {
  const [query, setQuery] = useState("");
  const terms = useMemo(() => {
    const q = query.trim().toLowerCase();
    const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
    return q ? sorted.filter((t) => `${t.term} ${t.definition}`.toLowerCase().includes(q)) : sorted;
  }, [query]);

  return (
    <div>
      <label htmlFor="glossary-search" className="sr-only">
        Search the glossary
      </label>
      <div className="relative max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          id="glossary-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms, e.g. SCADA or transformer"
          className="w-full rounded-full border border-line bg-surface py-3 pl-12 pr-4 shadow-sm focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-brand-teal"
        />
      </div>
      <p aria-live="polite" className="mt-3 text-sm text-muted">
        {terms.length} {terms.length === 1 ? "term" : "terms"}
      </p>

      {terms.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-line p-8 text-center text-muted">
          No terms match &ldquo;{query}&rdquo;. Try a shorter word.
        </p>
      ) : (
        <dl className="mt-6 grid gap-4 md:grid-cols-2">
          {terms.map((t) => (
            <div
              key={t.slug}
              id={`term-${t.slug}`}
              className="scroll-mt-24 rounded-2xl border border-line bg-surface p-5 shadow-sm target:border-brand-teal target:ring-2 target:ring-brand-teal/30"
            >
              <dt className="font-display text-xl font-semibold">{t.term}</dt>
              <dd className="mt-2 leading-relaxed text-muted">{t.definition}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
