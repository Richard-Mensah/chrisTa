"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import FilterChip from "@/components/ui/FilterChip";
import { MAP_HOTSPOTS } from "@/constants/about";
import { useGrid } from "@/hooks/useGrid";
import { cn } from "@/lib/utils";

/** Interactive single-line view of the power system, showing where each part of her career sits. */
export default function PowerSystemMap() {
  const { send } = useGrid();
  const [active, setActive] = useState(MAP_HOTSPOTS[0].id);
  const [seen, setSeen] = useState<Set<string>>(() => new Set([MAP_HOTSPOTS[0].id]));
  const hotspot = MAP_HOTSPOTS.find((h) => h.id === active) ?? MAP_HOTSPOTS[0];

  const select = (id: string) => {
    setActive(id);
    setSeen((s) => new Set(s).add(id));
  };

  useEffect(() => {
    if (seen.size === MAP_HOTSPOTS.length) send("map-explored");
  }, [seen, send]);

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="rounded-2xl border border-line bg-surface p-4 shadow-sm lg:col-span-3">
        <svg viewBox="0 70 720 225" role="group" aria-label="Power system map with four selectable points" className="h-auto w-full">
          <path d="M40 110 H680" strokeWidth={4} className="stroke-line" />
          <path d="M40 110 H680" strokeWidth={4} strokeDasharray="6 10" className="stroke-brand-teal motion-safe:animate-flow" />
          <text x={650} y={160} textAnchor="middle" className="fill-muted text-[12px]">
            Consumers
          </text>
          <circle cx={650} cy={110} r={10} className="fill-surface stroke-line" strokeWidth={2} />
          <rect x={40} y={200} width={640} height={80} rx={18} strokeDasharray="4 6" strokeWidth={1.5} className="fill-canvas stroke-line" />
          {MAP_HOTSPOTS.map((h) => {
            const on = h.id === active;
            return (
              <g
                key={h.id}
                role="button"
                tabIndex={0}
                aria-pressed={on}
                aria-label={h.title}
                onClick={() => select(h.id)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), select(h.id))}
                className="cursor-pointer outline-none [&:focus-visible>circle]:stroke-ink"
              >
                <circle
                  cx={h.x}
                  cy={h.y}
                  r={26}
                  strokeWidth={3}
                  className={cn(
                    "transition-colors duration-300",
                    on ? "fill-brand-teal stroke-brand-blue" : seen.has(h.id) ? "fill-brand-teal/20 stroke-brand-teal" : "fill-surface stroke-brand-teal motion-safe:animate-pulse-soft",
                  )}
                />
                <text x={h.x} y={h.y + 50} textAnchor="middle" className="fill-ink text-[13px] font-semibold">
                  {h.label}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="mt-3 flex flex-wrap gap-2">
          {MAP_HOTSPOTS.map((h) => (
            <FilterChip key={h.id} label={h.label} active={h.id === active} onClick={() => select(h.id)} />
          ))}
        </div>
      </div>

      <div aria-live="polite" className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm lg:col-span-2">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Explored {seen.size}/{MAP_HOTSPOTS.length}
        </p>
        <h3 className="mt-3 text-2xl font-semibold">{hotspot.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{hotspot.text}</p>
        <ButtonLink href={hotspot.href} variant="outline" className="mt-auto self-start">
          {hotspot.linkLabel} <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </div>
  );
}
