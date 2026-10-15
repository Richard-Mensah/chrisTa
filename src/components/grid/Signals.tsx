"use client";

import { useEffect, useRef } from "react";
import { useGrid } from "./GridProvider";

/** Sends `signal` once this marker scrolls into view (e.g. the end of a page). */
export function SignalOnView({ signal }: { signal: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { send, ready } = useGrid();

  useEffect(() => {
    const el = ref.current;
    if (!el || !ready) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          send(signal);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [send, signal, ready]);

  return <span ref={ref} aria-hidden="true" style={{ display: "block", height: 1 }} />;
}

/** External link that also reports a grid signal when followed. */
export function TrackedLink({
  signal,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { signal: string }) {
  const { send } = useGrid();
  return (
    <a {...props} onClick={() => send(signal)}>
      {children}
    </a>
  );
}
