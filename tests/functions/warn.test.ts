import { describe, test, expect, vi } from "vitest";
import { warn } from "../../src/functions/warn";

describe("warn", () => {
  test("Should log an inline warn message", () => {
    const infoSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    warn("Inline warn", "This is a test");

    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining(" ⚠️  Inline warn"));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a test"));
  })

  test("Should log an warn message with more than one messages", () => {
    const infoSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    warn("Multiple warn messages", ["This is a first message", "This is a second message"]);

    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining(" ⚠️  WARN "));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a first message"));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a second message"));
  })
})