"use client";

import { useEffect, useState } from "react";
import { useGrid } from "@/components/grid/GridProvider";

const MIN_TO_SHOW = 10;

export function FooterGrid() {
  const { hudHidden, setHudHidden, openMap } = useGrid();
  const [online, setOnline] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { gridOnline?: number | null } | null) => setOnline(d?.gridOnline ?? null))
      .catch(() => {});
  }, []);

  return (
    <span style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {online !== null && online >= MIN_TO_SHOW && (
        <span>{online.toLocaleString()} visitors have fully energised the grid</span>
      )}
      <button type="button" className="linkish" onClick={openMap}>
        Grid map
      </button>
      <button type="button" className="linkish" onClick={() => setHudHidden(!hudHidden)}>
        {hudHidden ? "Show grid meter" : "Hide grid meter"}
      </button>
    </span>
  );
}
