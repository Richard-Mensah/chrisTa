import type { EngagementItem } from "@/types";

type Props = {
  id: string;
  title: string;
  items: EngagementItem[];
};

/** Optional section (speaking, conferences, community). Hidden while empty. */
export default function EngagementSection({ id, title, items }: Props) {
  if (!items.length) return null;
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-3xl font-semibold">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((e) => (
          <article key={e.title} className="grid gap-2 rounded-2xl border border-line bg-surface p-5 sm:grid-cols-[10rem_1fr]">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">{e.date}</span>
            <div>
              <h3 className="text-xl font-semibold">
                {e.url ? (
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {e.title}
                  </a>
                ) : (
                  e.title
                )}
              </h3>
              <p className="text-muted">{e.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
