"use client";

import { useGrid } from "./GridProvider";

export function OpenMapButton({ className = "btn btn-ghost" }: { className?: string }) {
  const { openMap } = useGrid();
  return (
    <button type="button" className={className} onClick={openMap}>
      Open the grid map
    </button>
  );
}
