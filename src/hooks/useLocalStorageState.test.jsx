import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { useLocalStorageState } from "./useLocalStorageState.js";

const isIdList = (value) => Array.isArray(value) && value.every(Number.isInteger);

describe("useLocalStorageState", () => {
  beforeEach(() => window.localStorage.clear());

  test("saves changes and restores them on a new mount (reload)", () => {
    const first = renderHook(() => useLocalStorageState("favs", [], isIdList));
    act(() => first.result.current[1]([2, 7]));
    first.unmount();
    const second = renderHook(() => useLocalStorageState("favs", [], isIdList));
    expect(second.result.current[0]).toEqual([2, 7]);
  });

  test("ignores corrupted values", () => {
    window.localStorage.setItem("favs", "{not json");
    const { result } = renderHook(() => useLocalStorageState("favs", [], isIdList));
    expect(result.current[0]).toEqual([]);
  });

  test("ignores values with the wrong shape", () => {
    window.localStorage.setItem("favs", JSON.stringify(["<script>"]));
    const { result } = renderHook(() => useLocalStorageState("favs", [], isIdList));
    expect(result.current[0]).toEqual([]);
  });
});
