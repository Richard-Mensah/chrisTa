import { LEADERSHIP, LEADERSHIP_YEARS } from "@/constants/leadership";
import { cn, parseYearRange } from "@/lib/utils";

/** Gantt-style view of leadership roles by year, built from the CV periods. */
export default function LeadershipTimeline() {
  const { start, end } = LEADERSHIP_YEARS;
  const years = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const rows = LEADERSHIP.filter((l) => l.published)
    .map((l) => ({ role: l, range: parseYearRange(l.period) }))
    .filter((r): r is { role: (typeof LEADERSHIP)[number]; range: { start: number; end: number } } => r.range !== null)
    .sort((a, b) => a.range.start - b.range.start);

  // One grid column per year; bars span their years. Columns are computed from data, so they use inline grid placement.
  const cols = { gridTemplateColumns: `repeat(${years.length}, minmax(0, 1fr))` };

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-surface p-5 shadow-sm md:p-6">
      <div className="min-w-[40rem]">
        <div className="grid border-b border-line pb-2" style={cols}>
          {years.map((y) => (
            <span key={y} className="text-center font-mono text-xs text-muted">
              {y}
            </span>
          ))}
        </div>
        <ul className="mt-3 grid gap-2">
          {rows.map(({ role, range }) => (
            <li key={role.id} className="grid items-center" style={cols}>
              <span
                className={cn(
                  "truncate rounded-full px-3 py-1.5 text-xs font-semibold",
                  role.featured
                    ? "bg-gradient-to-r from-brand-teal to-brand-blue text-white shadow-sm"
                    : "bg-brand-teal/15 text-ink",
                )}
                style={{ gridColumn: `${range.start - start + 1} / ${range.end - start + 2}` }}
                title={`${role.title}, ${role.organisation} (${role.period})`}
              >
                {role.title} · {role.organisation.split(" (")[0].split(",")[0]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
