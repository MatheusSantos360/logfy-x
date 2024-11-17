import { describe, expect, test, vi } from "vitest";
import logfy from "../../src";

describe("logfy()", () => {
  test("Should log to the console without style", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const content = "Hello World!";

    logfy(content);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(content));

    consoleSpy.mockRestore();
  });

  test("Should log to the console with styles", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const content = "Styled text";
    const options = { style: "green bg-red bold underline" };

    logfy(content, options);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(content));

    consoleSpy.mockRestore();
  });
});
