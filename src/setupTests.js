import "@testing-library/jest-dom/vitest";

// Node 22+ ships its own `localStorage` global that is undefined without --localstorage-file,
// and it can hide jsdom's. Tests get a simple in-memory Storage instead.
if (typeof window !== "undefined" && !window.localStorage) {
  const data = new Map();
  const memoryStorage = {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: (key) => data.delete(key),
    clear: () => data.clear(),
    key: (index) => [...data.keys()][index] ?? null,
    get length() { return data.size; },
  };
  Object.defineProperty(window, "localStorage", { value: memoryStorage, configurable: true });
}
