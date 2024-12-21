import { describe, expect, test, vi } from "vitest";
import { success } from "../../src/functions/success";

describe("success", () => {
  test("Should log an inline success message", () => {
    const infoSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    success("Inline success", "This is a test");

    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining(" ✅ Inline success"));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is a test"));
  });

  test("Should log a success message with more than one message", () => {
    const infoSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    success("Multiple success messages", ["This is the first message", "This is the second message"]);

    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining(" ✅ SUCCESS "));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is the first message"));
    expect(infoSpy).toHaveBeenCalledWith(expect.stringContaining("This is the second message"));
  });
});
