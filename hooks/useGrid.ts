import { useContext } from "react";
import { GridContext } from "@/components/features/grid/GridContext";
import type { GridContextValue } from "@/types";

export function useGrid(): GridContextValue {
  const ctx = useContext(GridContext);
  if (!ctx) throw new Error("useGrid must be used inside <GridProvider>");
  return ctx;
}
