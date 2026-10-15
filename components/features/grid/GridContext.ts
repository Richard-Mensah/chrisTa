"use client";

import { createContext } from "react";
import type { GridContextValue } from "@/types";

/** Shared grid-game state. Provided by <GridProvider>, read with the useGrid() hook. */
export const GridContext = createContext<GridContextValue | null>(null);
