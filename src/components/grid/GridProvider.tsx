"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ACHIEVEMENTS, computeAchievements, isSignal } from "@/lib/achievements";
import { PAGES, pageKeyFromPath, type PageKey } from "@/content/pages";
import { GridMap } from "./GridMap";
import { Medal } from "@/components/ui/Icons";

const STORE_KEY = "cfo-grid-v1";
const HUD_KEY = "cfo-hud-hidden";

interface GridContextValue {
  ready: boolean;
  signals: Set<string>;
  visited: Set<PageKey>;
  achievements: string[];
  current: PageKey | null;
  send: (signal: string) => void;
  openMap: () => void;
  hudHidden: boolean;
  setHudHidden: (hidden: boolean) => void;
  reset: () => void;
}

const GridContext = createContext<GridContextValue | null>(null);

export function useGrid() {
  const ctx = useContext(GridContext);
  if (!ctx) throw new Error("useGrid must be used inside <GridProvider>");
  return ctx;
}

function readStore(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) ?? "[]");
    return Array.isArray(raw) ? raw.filter(isSignal) : [];
  } catch {
    return [];
  }
}

function writeStore(signals: string[]) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(signals));
  } catch {
    /* storage unavailable – progress just won't persist locally */
  }
}

interface Toast {
  id: number;
  key: string;
}

export function GridProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const current = pageKeyFromPath(pathname);
  const [signals, setSignals] = useState<string[]>([]);
  const signalsRef = useRef<string[]>([]);
  const [ready, setReady] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [hudHidden, setHudHiddenState] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const toastId = useRef(0);

  const commit = useCallback((next: string[]) => {
    signalsRef.current = next;
    setSignals(next);
    writeStore(next);
  }, []);

  // Hydrate from localStorage, then merge anything the server remembers.
  useEffect(() => {
    commit(readStore());
    try {
      setHudHiddenState(localStorage.getItem(HUD_KEY) === "1");
    } catch {}
    setReady(true);

    fetch("/api/progress", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { signals?: string[] } | null) => {
        const remote = (data?.signals ?? []).filter(isSignal);
        const merged = Array.from(new Set([...signalsRef.current, ...remote]));
        if (merged.length !== signalsRef.current.length) commit(merged);
      })
      .catch(() => {});
  }, [commit]);

  const send = useCallback(
    (signal: string) => {
      if (!isSignal(signal) || signalsRef.current.includes(signal)) return;
      const before = new Set(computeAchievements(signalsRef.current));
      const next = [...signalsRef.current, signal];
      const fresh = computeAchievements(next).filter((a) => !before.has(a));
      commit(next);
      if (fresh.length) {
        setToasts((t) => [...t, ...fresh.map((key) => ({ id: ++toastId.current, key }))]);
      }
      fetch("/api/progress", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ signal }),
        keepalive: true,
        credentials: "same-origin",
      }).catch(() => {});
    },
    [commit],
  );

  // Every page view energises its substation.
  useEffect(() => {
    if (ready && current) send(`page:${current}`);
  }, [ready, current, send]);

  // Auto-dismiss toasts.
  useEffect(() => {
    if (!toasts.length) return;
    const t = setTimeout(() => setToasts((all) => all.slice(1)), 5200);
    return () => clearTimeout(t);
  }, [toasts]);

  const setHudHidden = useCallback((hidden: boolean) => {
    setHudHiddenState(hidden);
    try {
      localStorage.setItem(HUD_KEY, hidden ? "1" : "0");
    } catch {}
  }, []);

  const reset = useCallback(() => {
    commit(current ? [`page:${current}`] : []);
    fetch("/api/progress", { method: "DELETE", credentials: "same-origin" }).catch(() => {});
  }, [commit, current]);

  const value = useMemo<GridContextValue>(() => {
    const set = new Set(signals);
    const visited = new Set(PAGES.filter((p) => set.has(`page:${p.key}`)).map((p) => p.key));
    return {
      ready,
      signals: set,
      visited,
      achievements: computeAchievements(signals),
      current,
      send,
      openMap: () => setMapOpen(true),
      hudHidden,
      setHudHidden,
      reset,
    };
  }, [signals, ready, current, send, hudHidden, setHudHidden, reset]);

  return (
    <GridContext.Provider value={value}>
      {children}
      <GridMap open={mapOpen} onClose={() => setMapOpen(false)} />
      <div className="toasts" aria-live="polite" aria-atomic="false">
        {toasts.map((t) => {
          const a = ACHIEVEMENTS.find((x) => x.key === t.key);
          if (!a) return null;
          return (
            <div className="toast" key={t.id} role="status">
              <span className="medal">
                <Medal />
              </span>
              <span>
                <b>Achievement · {a.name}</b>
                <span>{a.description}</span>
              </span>
              <button
                type="button"
                aria-label={`Dismiss ${a.name}`}
                onClick={() => setToasts((all) => all.filter((x) => x.id !== t.id))}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
    </GridContext.Provider>
  );
}
