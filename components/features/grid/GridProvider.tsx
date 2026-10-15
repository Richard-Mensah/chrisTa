"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { HUD_HIDDEN_KEY } from "@/constants/contact";
import { PAGES } from "@/constants/pages";
import { useGridState } from "@/hooks/useGridState";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { computeAchievements } from "@/lib/achievements";
import { pageKeyFromPath } from "@/lib/utils";
import type { GridContextValue, PageKey } from "@/types";
import AchievementToasts from "./AchievementToasts";
import { GridContext } from "./GridContext";
import GridMap from "./GridMap";

type Props = {
  children: React.ReactNode;
};

export default function GridProvider({ children }: Props) {
  const current = pageKeyFromPath(usePathname());
  const { ready, signals, toasts, send, reset, dismissToast } = useGridState(current);
  const [hudHidden, setHudHidden] = useLocalStorage<boolean>(HUD_HIDDEN_KEY, false);
  const [mapOpen, setMapOpen] = useState(false);

  const value = useMemo<GridContextValue>(() => {
    const set = new Set(signals);
    const visited = new Set<PageKey>(PAGES.filter((p) => set.has(`page:${p.key}`)).map((p) => p.key));
    return {
      ready,
      signals: set,
      visited,
      achievements: computeAchievements(signals),
      current,
      send,
      mapOpen,
      openMap: () => setMapOpen(true),
      closeMap: () => setMapOpen(false),
      hudHidden,
      setHudHidden,
      reset,
    };
  }, [signals, ready, current, send, mapOpen, hudHidden, setHudHidden, reset]);

  return (
    <GridContext.Provider value={value}>
      {children}
      <GridMap />
      <AchievementToasts toasts={toasts} onDismiss={dismissToast} />
    </GridContext.Provider>
  );
}
