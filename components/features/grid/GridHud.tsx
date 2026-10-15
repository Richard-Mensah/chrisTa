"use client";

import { PAGES, TOTAL_PAGES } from "@/constants/pages";
import { useGrid } from "@/hooks/useGrid";
import { cn } from "@/lib/utils";

/** Header meter: one segment per page. Opens the grid map. */
export default function GridHud() {
  const { visited, openMap, hudHidden } = useGrid();
  if (hudHidden) return null;

  const n = visited.size;
  const online = n === TOTAL_PAGES;

  return (
    <button
      type="button"
      onClick={openMap}
      aria-haspopup="dialog"
      aria-label={`Open grid map: ${n} of ${TOTAL_PAGES} pages energised`}
      className={cn(
        "group flex items-center gap-2.5 rounded-full border bg-surface px-3 py-1.5 shadow-sm transition-colors hover:border-accent",
        online ? "border-brand-teal" : "border-line",
      )}
    >
      <span aria-hidden="true" className="hidden gap-0.5 sm:flex">
        {PAGES.map((p, i) => (
          <i
            key={p.key}
            className={cn(
              "h-4 w-1.5 rounded-sm transition-colors duration-500",
              i < n ? "bg-gradient-to-b from-brand-cyan to-brand-blue shadow-sm shadow-brand-teal/50" : "bg-line",
            )}
          />
        ))}
      </span>
      <span aria-hidden="true" className="whitespace-nowrap font-mono text-xs tracking-wide text-ink">
        {online ? "GRID ONLINE" : `GRID ${n}/${TOTAL_PAGES}`}
      </span>
    </button>
  );
}
