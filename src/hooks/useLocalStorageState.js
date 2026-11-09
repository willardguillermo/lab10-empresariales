import { useEffect, useState } from "react";

/**
 * useState that is saved in localStorage and restored when the page loads.
 * `validate` rejects corrupted or foreign values; storage errors (private mode, quota) are ignored.
 */
export function useLocalStorageState(key, initialValue, validate = () => true) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored === null) return initialValue;
      const parsed = JSON.parse(stored);
      return validate(parsed) ? parsed : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage unavailable: the app keeps working with in-memory state.
    }
  }, [key, value]);

  return [value, setValue];
}
