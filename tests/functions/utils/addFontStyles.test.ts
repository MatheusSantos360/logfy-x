import { describe, expect, test, vi } from "vitest";
import { addFontStyles } from "../../../src/functions/utils/addFontStyles";
import { logfyxColors } from "../../../src/functions/utils/logfyxColors";

describe("addFontStyles", () => {
  test("Should a style to the content", () => {
    const greenSpy = vi.spyOn(logfyxColors, "green");
    const content = "My content.";
    const styles = ["green"];

    const result = addFontStyles(styles, content);

    expect(greenSpy).toHaveBeenCalledOnce();
    expect(greenSpy).toHaveBeenCalledWith(content);

    expect(result).toContain(content);
    expect(result).not.toBe(content);
  });

  test("Should add more than one style to the content", () => {
    const greenSpy = vi.spyOn(logfyxColors, "green");
    const underlineSpy = vi.spyOn(logfyxColors, "underline");
    const content = "My content.";
    const styles = ["green", "underline"];

    const result = addFontStyles(styles, content);

    expect(greenSpy).toHaveBeenCalledOnce();
    expect(underlineSpy).toHaveBeenCalledOnce();

    expect(greenSpy).toHaveBeenCalledWith(content);
    expect(underlineSpy).toHaveBeenCalledWith(expect.stringContaining(content));

    expect(result).toContain(content);
    expect(result).not.toBe(content);
  });

  test("Should not execute functions that are bg styles", () => {
    const yellowSpy = vi.spyOn(logfyxColors, "yellow");
    const bgGreenSpy = vi.spyOn(logfyxColors, "bgGreen");

    const content = "My content.";
    const styles = ["yellow", "bgGreen"];

    const result = addFontStyles(styles, content);

    expect(yellowSpy).toHaveBeenCalled();

    expect(bgGreenSpy).not.toHaveBeenCalled();

    expect(result).toContain(content);
    expect(result).not.toBe(content);
  });
});
