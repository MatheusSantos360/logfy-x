import { describe, test, expect, vi } from "vitest";
import { info } from "../../src/functions/info";

describe("info", () => {
  test("Should log an inline info message", () => {
    const infoSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    info("Inline info", "This is a test");

    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining(" ℹ️  Inline info"));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a test"));
  })

  test("Should log an info message with more than one messages", () => {
    const infoSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    info("Multiple info messages", ["This is a first message", "This is a second message"]);

    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining(" ℹ️  INFO "));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a first message"));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a second message"));
  })
})