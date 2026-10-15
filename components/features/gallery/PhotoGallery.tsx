"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { PHOTOS } from "@/constants/photos";
import { useLightbox } from "@/hooks/useLightbox";
import { cn } from "@/lib/utils";
import type { PhotoKey } from "@/types";

type Props = {
  ids: PhotoKey[];
  className?: string;
};

const NAV_BTN = "grid size-11 place-items-center rounded-full border border-ondark-line bg-navy-950/70 text-ondark transition-colors hover:border-brand-cyan";

/** Photo grid with an accessible lightbox (arrow keys, Escape, focus return). */
export default function PhotoGallery({ ids, className }: Props) {
  const { dialogRef, index, open, close, next, prev } = useLightbox(ids.length);
  const current = index === null ? null : PHOTOS[ids[index]];
  // A 2×2 feature tile only fills the 4-column grid evenly when the count is 5, 9, 13…
  const feature = ids.length > 1 && (ids.length - 1) % 4 === 0;

  return (
    <>
      <ul className={cn("grid grid-cols-2 gap-3 md:grid-cols-4", className)}>
        {ids.map((id, i) => {
          const p = PHOTOS[id];
          return (
            <li key={id} className={cn(feature && i === 0 && "col-span-2 row-span-2")}>
              <button
                type="button"
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`View larger: ${p.caption}`}
                className="group relative block aspect-square size-full overflow-hidden rounded-2xl bg-navy-800"
              >
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-navy-950/90 to-transparent px-3 pb-2 pt-8 text-left text-xs text-ondark">
                  {p.caption}
                  <Expand className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={close}
        aria-label={current?.caption ?? "Photo"}
        className="m-auto h-[min(90dvh,56rem)] w-[min(96vw,72rem)] overflow-hidden rounded-3xl border border-ondark-line bg-navy-950 p-0 text-ondark backdrop:bg-navy-950/85 backdrop:backdrop-blur"
      >
        {current && index !== null && (
          <div className="relative flex size-full flex-col">
            <div className="relative flex-1">
              <Image src={current.src} alt={current.alt} fill sizes="96vw" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-ondark-line px-5 py-3">
              <p className="text-sm">
                {current.caption}
                <span className="ml-3 font-mono text-xs text-ondark-muted">
                  {index + 1}/{ids.length}
                </span>
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={prev} aria-label="Previous photo" className={NAV_BTN}>
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={next} aria-label="Next photo" className={NAV_BTN}>
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={close} aria-label="Close" className={NAV_BTN}>
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
