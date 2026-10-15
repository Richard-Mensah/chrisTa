"use client";

import Link from "next/link";
import { GRID_EDGES, PAGES } from "@/constants/pages";
import { useGrid } from "@/hooks/useGrid";
import { busbarPath, cn, pageByKey } from "@/lib/utils";

type Props = {
  onNavigate: () => void;
};

/** Single-line diagram of the site: substations (pages) joined by busbars that go live once both ends are visited. */
export default function GridDiagram({ onNavigate }: Props) {
  const { visited, current } = useGrid();

  const frontier = new Set<string>();
  for (const [a, b] of GRID_EDGES) {
    if (visited.has(a) && !visited.has(b)) frontier.add(b);
    if (visited.has(b) && !visited.has(a)) frontier.add(a);
  }

  return (
    <svg viewBox="0 0 680 360" role="group" aria-label="Network map of the site's pages" className="block h-auto w-full">
      <defs>
        <linearGradient id="live" x1="0" x2="1">
          <stop offset="0" stopColor="var(--color-brand-cyan)" />
          <stop offset="1" stopColor="var(--color-brand-blue)" />
        </linearGradient>
      </defs>
      {GRID_EDGES.map(([a, b]) => {
        const live = visited.has(a) && visited.has(b);
        return (
          <path
            key={`${a}-${b}`}
            d={busbarPath(pageByKey(a), pageByKey(b))}
            fill="none"
            strokeWidth={3}
            className={cn("transition-[stroke] duration-500", live ? "stroke-brand-teal" : "stroke-ondark-line")}
          />
        );
      })}
      {PAGES.map((p) => {
        const on = visited.has(p.key);
        return (
          <Link key={p.key} href={p.href} onClick={onNavigate} aria-label={`${p.label}${on ? ", energised" : ""}`} className="group outline-none">
            {current === p.key && <circle cx={p.x} cy={p.y} r={30} fill="none" className="stroke-brand-cyan" strokeWidth={2} />}
            <circle
              cx={p.x}
              cy={p.y}
              r={20}
              strokeWidth={2.5}
              fill={on ? "url(#live)" : undefined}
              className={cn(
                "transition-colors duration-500 group-focus-visible:stroke-white",
                on ? "stroke-brand-cyan" : "fill-navy-900 stroke-ondark-muted/50",
                !on && frontier.has(p.key) && "stroke-brand-cyan motion-safe:animate-pulse-soft",
              )}
            />
            <text
              x={p.x}
              y={p.y + 48}
              textAnchor="middle"
              className={cn("font-mono text-xs tracking-wide", on ? "fill-ondark" : "fill-ondark-muted")}
            >
              {p.num} {p.label.toUpperCase()}
            </text>
          </Link>
        );
      })}
    </svg>
  );
}
