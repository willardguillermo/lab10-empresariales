import { useEffect, useState } from "react";

/** Returns `value` only after it stopped changing for `delay` milliseconds. */
export function useDebouncedValue(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    // A new keystroke cancels the pending timer, so only the last value survives.
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
