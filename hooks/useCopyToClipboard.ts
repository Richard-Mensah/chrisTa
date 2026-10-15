import { useCallback, useState } from "react";

type CopyState = "idle" | "copied" | "failed";

export function useCopyToClipboard(resetMs = 1800) {
  const [state, setState] = useState<CopyState>("idle");

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setState("copied");
      } catch {
        setState("failed");
      }
      setTimeout(() => setState("idle"), resetMs);
    },
    [resetMs],
  );

  return { state, copy };
}
