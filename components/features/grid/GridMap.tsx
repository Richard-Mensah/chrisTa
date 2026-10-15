"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { TOTAL_PAGES } from "@/constants/pages";
import { useGrid } from "@/hooks/useGrid";
import ButtonLink from "@/components/ui/ButtonLink";
import AchievementList from "./AchievementList";
import GridDiagram from "./GridDiagram";
import GridNodeList from "./GridNodeList";

/** Modal grid map: progress meter, network diagram, page list and achievements. */
export default function GridMap() {
  const ref = useRef<HTMLDialogElement>(null);
  const { mapOpen, closeMap, visited, reset, hudHidden, setHudHidden } = useGrid();
  const n = visited.size;
  const online = n === TOTAL_PAGES;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (mapOpen && !dialog.open) dialog.showModal();
    if (!mapOpen && dialog.open) dialog.close();
  }, [mapOpen]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="map-title"
      onClose={closeMap}
      onClick={(e) => e.target === e.currentTarget && closeMap()}
      className="m-auto max-h-[calc(100dvh-3rem)] w-[min(56rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-ondark-line bg-navy-950 p-0 text-ondark shadow-2xl backdrop:bg-navy-950/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-ondark-line px-6 py-4">
        <h2 id="map-title" className="text-xl font-semibold">
          Grid map
        </h2>
        <button
          type="button"
          onClick={closeMap}
          aria-label="Close grid map"
          className="rounded-full border border-ondark-line p-2 transition-colors hover:border-brand-cyan"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="max-h-[calc(100dvh-9rem)] overflow-y-auto px-6 pb-6 pt-4">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-ondark-muted">
            {online ? "9/9 energised · grid online" : `${n}/${TOTAL_PAGES} energised`}
          </span>
          <span aria-hidden="true" className="h-2 flex-1 overflow-hidden rounded-full border border-ondark-line bg-navy-900">
            <span
              className="block h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue transition-[width] duration-700"
              style={{ width: `${(n / TOTAL_PAGES) * 100}%` }}
            />
          </span>
        </div>
        <p className="sr-only">
          Each page of this site is a substation. Visiting a page energises it. {n} of {TOTAL_PAGES} energised.
        </p>

        <GridDiagram onNavigate={closeMap} />
        <GridNodeList onNavigate={closeMap} />

        {online && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-teal/60 bg-brand-teal/10 px-4 py-3">
            <p>
              <b>Grid online.</b> You have energised every substation. Thanks for exploring.
            </p>
            <ButtonLink href="/contact" onClick={closeMap}>
              Get in touch
            </ButtonLink>
          </div>
        )}

        <AchievementList />

        <div className="mt-5 flex flex-wrap justify-between gap-3 border-t border-ondark-line pt-4 text-sm text-ondark-muted">
          <span>Progress is stored anonymously. See the privacy notice on the contact page.</span>
          <span className="flex gap-4">
            <button type="button" className="underline hover:text-ondark" onClick={() => setHudHidden(!hudHidden)}>
              {hudHidden ? "Show grid meter" : "Hide grid meter"}
            </button>
            <button type="button" className="underline hover:text-ondark" onClick={reset}>
              Reset my progress
            </button>
          </span>
        </div>
      </div>
    </dialog>
  );
}
