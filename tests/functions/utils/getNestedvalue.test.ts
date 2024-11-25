import { describe, expect, test } from "vitest";
import { getNestedValue } from "../../../src/functions/utils/getNestedValue";

describe("getNestedValue", () => {
  test("should return the correct value for nested keys", () => {
    const obj = { a: { b: { c: "value" } } };
    const result = getNestedValue(obj, ["a", "b", "c"]);
    expect(result).toBe("value");
  });

  test("should return undefined for non-existent nested keys", () => {
    const obj = { a: { b: { c: "value" } } };
    const result = getNestedValue(obj, ["a", "b", "d"]);
    expect(result).toBeUndefined();
  });

  test("should return undefined for an empty object", () => {
    const obj = {};
    const result = getNestedValue(obj, ["a", "b", "c"]);
    expect(result).toBeUndefined();
  });

  test("should return undefined if the first key does not exist", () => {
    const obj = { a: { b: { c: "value" } } };
    const result = getNestedValue(obj, ["x", "b", "c"]);
    expect(result).toBeUndefined();
  });

  test("should handle an array of keys correctly", () => {
    const obj = { a: { b: ["value1", "value2"] } };
    // @ts-expect-error ...
    const result = getNestedValue(obj, ["a", "b", 0]);
    expect(result).toBe("value1");
  });
});
