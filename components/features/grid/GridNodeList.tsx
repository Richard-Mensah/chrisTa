"use client";

import Link from "next/link";
import { PAGES } from "@/constants/pages";
import { useGrid } from "@/hooks/useGrid";
import { cn } from "@/lib/utils";

type Props = {
  onNavigate: () => void;
};

/** Text list of every substation – the accessible twin of the diagram. */
export default function GridNodeList({ onNavigate }: Props) {
  const { visited, current } = useGrid();
  const ordered = [...PAGES].sort((a, b) => a.num.localeCompare(b.num));

  return (
    <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
      {ordered.map((p) => {
        const on = visited.has(p.key);
        return (
          <li key={p.key}>
            <Link
              href={p.href}
              onClick={onNavigate}
              aria-current={current === p.key ? "page" : undefined}
              className="flex items-center justify-between gap-2 rounded-xl border border-ondark-line bg-navy-900 px-3 py-2 text-sm transition-colors hover:border-brand-cyan"
            >
              <span>
                {p.num} {p.label}
              </span>
              <span className={cn("font-mono text-[0.65rem] tracking-wider", on ? "text-brand-cyan" : "text-ondark-muted")}>
                {on ? "ENERGISED" : "OFF"}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
