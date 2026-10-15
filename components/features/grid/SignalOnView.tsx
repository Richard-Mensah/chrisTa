"use client";

import { useCallback } from "react";
import { useGrid } from "@/hooks/useGrid";
import { useInView } from "@/hooks/useInView";

type Props = {
  signal: string;
};

/** Invisible marker: reports `signal` once it scrolls into view (e.g. the end of a page). */
export default function SignalOnView({ signal }: Props) {
  const { send, ready } = useGrid();
  const onEnter = useCallback(() => send(signal), [send, signal]);
  const ref = useInView<HTMLSpanElement>(onEnter, ready);
  return <span ref={ref} aria-hidden="true" className="block h-px" />;
}
