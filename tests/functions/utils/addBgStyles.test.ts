import { describe, expect, test, vi } from "vitest";
import { addBgStyles } from "../../../src/functions/utils/addBgStyles";
import { logfyxColors } from "../../../src/functions/utils/logfyxColors";

describe("addBgStyles", () => {
  test("Should a style to the content", () => {
    const bgGreenSpy = vi.spyOn(logfyxColors, "bgGreen");
    const content = "My content.";
    const styles = ["bgGreen"];

    const result = addBgStyles(styles, content);

    expect(bgGreenSpy).toHaveBeenCalledOnce();
    expect(bgGreenSpy).toHaveBeenCalledWith(content);

    expect(result).toContain(content);
    expect(typeof result).toBe("string");
  });

  test("Should add more than one style to the content", () => {
    const bgGreenSpy = vi.spyOn(logfyxColors, "bgGreen");
    const bgRedSpy = vi.spyOn(logfyxColors, "bgRed");
    const content = "My content.";
    const styles = ["bgGreen", "bgRed"];

    const result = addBgStyles(styles, content);

    expect(bgGreenSpy).toHaveBeenCalledOnce();
    expect(bgRedSpy).toHaveBeenCalledOnce();

    expect(bgGreenSpy).toHaveBeenCalledWith(content);
    expect(bgRedSpy).toHaveBeenCalledWith(expect.stringContaining(content));

    expect(result).toContain(content);
    expect(typeof result).toBe("string");
  });

  test("Should not execute functions that are not bg styles", () => {
    const bgGreenSpy = vi.spyOn(logfyxColors, "bgGreen");
    const yellowSpy = vi.spyOn(logfyxColors, "yellow");
    const content = "My content.";
    const styles = ["bgGreen", "yellow"];

    const result = addBgStyles(styles, content);

    expect(bgGreenSpy).toHaveBeenCalledOnce();
    expect(bgGreenSpy).toHaveBeenCalledWith(content);

    expect(yellowSpy).not.toHaveBeenCalled();

    expect(result).toContain(content);
    expect(typeof result).toBe("string");
  });
});
