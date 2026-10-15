"use client";

import { Map, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { TOTAL_PAGES } from "@/constants/pages";
import { useGrid } from "@/hooks/useGrid";
import { ACHIEVEMENTS } from "@/lib/achievements";

/** Explains the grid game and shows the visitor's live progress. */
export default function GridTeaser() {
  const { visited, achievements, openMap } = useGrid();
  const pct = Math.round((visited.size / TOTAL_PAGES) * 100);

  return (
    <Section tone="dark" labelledBy="teaser-title" innerClassName="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-cyan">Explore the grid</p>
        <h2 id="teaser-title" className="text-3xl font-semibold md:text-4xl">
          This site is a power network
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ondark-muted">
          Every page is a substation that energises when you visit it. Open case files, read training guides and take the
          quiz to unlock achievements along the way.
        </p>
        <Button onClick={openMap} className="mt-8">
          <Map className="size-4" aria-hidden="true" /> Open the grid map
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-ondark-line bg-white/5 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-ondark-muted">Grid energised</p>
          <p className="mt-2 font-display text-5xl font-semibold text-gradient-brand">{pct}%</p>
          <div aria-hidden="true" className="mt-4 flex gap-1">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <span key={i} className={i < visited.size ? "h-2 flex-1 rounded-full bg-brand-teal" : "h-2 flex-1 rounded-full bg-ondark-line"} />
            ))}
          </div>
          <p className="mt-3 text-sm text-ondark-muted">
            {visited.size} of {TOTAL_PAGES} pages
          </p>
        </div>
        <div className="rounded-3xl border border-ondark-line bg-white/5 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-ondark-muted">Achievements</p>
          <p className="mt-2 font-display text-5xl font-semibold text-gradient-brand">
            {achievements.length}
            <span className="text-2xl text-ondark-muted">/{ACHIEVEMENTS.length}</span>
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-ondark-muted">
            <Zap className="size-4 text-brand-cyan" aria-hidden="true" /> Your progress is saved anonymously.
          </p>
        </div>
      </div>
    </Section>
  );
}
