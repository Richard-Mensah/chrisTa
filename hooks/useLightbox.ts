import { useCallback, useEffect, useRef, useState } from "react";

/** Lightbox state for a <dialog>: open at an index, step with arrow keys, close with Escape. */
export function useLightbox(count: number) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((i: number, trigger?: HTMLElement | null) => {
    returnFocus.current = trigger ?? null;
    setIndex(i);
  }, []);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % count)), [count]);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + count) % count)), [count]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) {
      dialog.close();
      returnFocus.current?.focus();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, next, prev]);

  return { dialogRef, index, open, close, next, prev };
}
