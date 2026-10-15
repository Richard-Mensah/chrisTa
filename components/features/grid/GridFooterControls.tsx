"use client";

import useSWR from "swr";
import { MIN_GRID_STAT } from "@/constants/contact";
import { useGrid } from "@/hooks/useGrid";
import { jsonFetcher } from "@/lib/client";
import type { StatsResponse } from "@/types";

/** Footer controls for the grid game, plus the anonymous "grid online" stat once it is meaningful. */
export default function GridFooterControls() {
  const { hudHidden, setHudHidden, openMap } = useGrid();
  const { data } = useSWR<StatsResponse>("/api/stats", jsonFetcher, { revalidateOnFocus: false });
  const online = data?.gridOnline ?? null;

  return (
    <span className="flex flex-wrap gap-4">
      {online !== null && online >= MIN_GRID_STAT && (
        <span>{online.toLocaleString()} visitors have fully energised the grid</span>
      )}
      <button type="button" onClick={openMap} className="underline transition-colors hover:text-ondark">
        Grid map
      </button>
      <button type="button" onClick={() => setHudHidden(!hudHidden)} className="underline transition-colors hover:text-ondark">
        {hudHidden ? "Show grid meter" : "Hide grid meter"}
      </button>
    </span>
  );
}
