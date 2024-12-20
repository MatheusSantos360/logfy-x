import { describe, expect, test, vi } from "vitest";
import logfy from "../../src";
import { logfyxColors } from "../../src/functions/utils/logfyxColors";

describe("logfy()", () => {
  test("Should log to the console with the default styles", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const content = "Hello World!";

    logfy(content);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(content));

    consoleSpy.mockRestore();
  });

  test("Should log to the console with styles", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const greenSpy = vi.spyOn(logfyxColors, "green");
    const bgPurpleSpy = vi.spyOn(logfyxColors, "bgPurple");

    const content = "Styled text";
    const options = { style: "green bg-purple bold underline" };

    logfy(content, options);

    expect(greenSpy).toHaveBeenCalledOnce();
    expect(bgPurpleSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(content));

    consoleSpy.mockRestore();
  });

  test("Should to he console removing all the default styles", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const whiteSpy = vi.spyOn(logfyxColors, "white");
    const content = "Styled text";
    const options = { style: "-red -underline" };

    logfy(content, options);

    expect(whiteSpy).not.toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledWith(content);

    consoleSpy.mockRestore();
  });
});
