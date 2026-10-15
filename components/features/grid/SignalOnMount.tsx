"use client";

import { useEffect } from "react";
import { useGrid } from "@/hooks/useGrid";

type Props = {
  signal: string;
};

/** Reports `signal` once the page has loaded (e.g. opening a full case study). */
export default function SignalOnMount({ signal }: Props) {
  const { send, ready } = useGrid();
  useEffect(() => {
    if (ready) send(signal);
  }, [ready, send, signal]);
  return null;
}
