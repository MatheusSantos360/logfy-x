import picocolors from "picocolors";
import { describe, expect, test, vi } from "vitest";
import { addBgStyles } from "../../../src/functions/utils/addBgStyles";

describe("addBgStyles", () => {
  test("Should a style to the content", () => {
    const bgGreenSpy = vi.spyOn(picocolors, "bgGreen");
    const content = "My content.";
    const styles = ["bgGreen"];

    const result = addBgStyles(styles, content);

    expect(bgGreenSpy).toHaveBeenCalledOnce();
    expect(bgGreenSpy).toHaveBeenCalledWith(content);

    expect(result).toContain(content);
    expect(result).not.toBe(content);
  });

  test("Should add more than one style to the content", () => {
    const bgGreenSpy = vi.spyOn(picocolors, "bgGreen");
    const bgRedSpy = vi.spyOn(picocolors, "bgGreen");
    const content = "My content.";
    const styles = ["bgGreen", "bgRed"];

    const result = addBgStyles(styles, content);

    expect(bgGreenSpy).toHaveBeenCalledOnce();
    expect(bgRedSpy).toHaveBeenCalledOnce();

    expect(bgGreenSpy).toHaveBeenCalledWith(content);
    expect(bgRedSpy).toHaveBeenCalledWith(content);

    expect(result).toContain(content);
    expect(result).not.toBe(content);
  });

  test("Should not execute functions that are not bg styles", () => {
    const bgGreenSpy = vi.spyOn(picocolors, "bgGreen");
    const yellowSpy = vi.spyOn(picocolors, "yellow");
    const content = "My content.";
    const styles = ["bgGreen", "yellow"];

    const result = addBgStyles(styles, content);

    expect(bgGreenSpy).toHaveBeenCalledOnce();
    expect(bgGreenSpy).toHaveBeenCalledWith(content);

    expect(yellowSpy).not.toHaveBeenCalled();

    expect(result).toContain(content);
    expect(result).not.toBe(content);
  });
});
