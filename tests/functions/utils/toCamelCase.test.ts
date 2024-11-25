import { describe, expect, test } from "vitest";
import toCamelCase from "../../../src/functions/utils/toCamelCase";

describe("toCamelCase", () => {
  test("Should transform a kebab-case string to camel case", () => {
    const data = "logfy-x";
    const result = toCamelCase(data);

    expect(result).toBe("logfyX");
  });
});
