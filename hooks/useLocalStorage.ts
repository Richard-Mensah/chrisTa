import { useCallback, useEffect, useState } from "react";

/** SSR-safe localStorage state: renders `initialValue` first, then loads the stored value after mount. */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) setValue(JSON.parse(item) as T);
    } catch {
      /* storage unavailable or corrupt – keep the initial value */
    }
  }, [key]);

  const update = useCallback(
    (next: T) => {
      setValue(next);
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        /* storage unavailable */
      }
    },
    [key],
  );

  return [value, update] as const;
}
