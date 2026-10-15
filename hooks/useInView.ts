import { useEffect, useRef, type RefObject } from "react";

/** Calls `onEnter` once, the first time the element is at least half visible. */
export function useInView<T extends Element>(onEnter: () => void, enabled = true): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          onEnter();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onEnter, enabled]);

  return ref;
}
