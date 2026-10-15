import { useCallback, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { GRID_STORE_KEY, TOAST_MS } from "@/constants/contact";
import { computeAchievements, isSignal } from "@/lib/achievements";
import { deleteProgress, jsonFetcher, postSignal, readStoredSignals, storeSignals } from "@/lib/client";
import type { PageKey, ProgressGetResponse, Toast } from "@/types";

/** Core grid-game state: signals (local + server), achievement toasts, and page-visit tracking. */
export function useGridState(current: PageKey | null) {
  const [signals, setSignals] = useState<string[]>([]);
  const signalsRef = useRef<string[]>([]);
  const [ready, setReady] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastId = useRef(0);
  const { data: remote } = useSWR<ProgressGetResponse>("/api/progress", jsonFetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  const commit = useCallback((next: string[]) => {
    signalsRef.current = next;
    setSignals(next);
    storeSignals(GRID_STORE_KEY, next);
  }, []);

  // Hydrate from browser storage once mounted.
  useEffect(() => {
    commit(readStoredSignals(GRID_STORE_KEY, isSignal));
    setReady(true);
  }, [commit]);

  // Merge anything the server remembers (silently – no toasts for old progress).
  useEffect(() => {
    if (!ready || !remote?.signals.length) return;
    const merged = Array.from(new Set([...signalsRef.current, ...remote.signals.filter(isSignal)]));
    if (merged.length !== signalsRef.current.length) commit(merged);
  }, [ready, remote, commit]);

  const send = useCallback(
    (signal: string) => {
      if (!isSignal(signal) || signalsRef.current.includes(signal)) return;
      const before = new Set(computeAchievements(signalsRef.current));
      const next = [...signalsRef.current, signal];
      const fresh = computeAchievements(next).filter((a) => !before.has(a));
      commit(next);
      if (fresh.length) setToasts((t) => [...t, ...fresh.map((key) => ({ id: ++toastId.current, key }))]);
      postSignal(signal);
    },
    [commit],
  );

  // Every page view energises its substation.
  useEffect(() => {
    if (ready && current) send(`page:${current}`);
  }, [ready, current, send]);

  // Auto-dismiss the oldest toast.
  useEffect(() => {
    if (!toasts.length) return;
    const timer = setTimeout(() => setToasts((all) => all.slice(1)), TOAST_MS);
    return () => clearTimeout(timer);
  }, [toasts]);

  const dismissToast = useCallback((id: number) => setToasts((all) => all.filter((t) => t.id !== id)), []);

  const reset = useCallback(() => {
    commit(current ? [`page:${current}`] : []);
    deleteProgress();
  }, [commit, current]);

  return { ready, signals, toasts, send, reset, dismissToast };
}
