import { describe, test, expect, vi } from "vitest";
import { error } from "../../src/functions/error";

describe("error", () => {
  test("Should log an inline error message", () => {
    const infoSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    error("Inline error", "This is a test");

    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining(" ❌ Inline error"));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a test"));
  })

  test("Should log an error message with more than one messages", () => {
    const infoSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    error("Multiple error messages", ["This is a first message", "This is a second message"]);

    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining(" ❌ ERROR "));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a first message"));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a second message"));
  })
})