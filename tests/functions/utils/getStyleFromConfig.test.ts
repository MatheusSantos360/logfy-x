import { describe, expect, test } from "vitest";
import { getStyleFromConfig } from "../../../src/functions/utils/getStyleFromConfig";
import { config } from "../../../src/types/logfy-x-config.types";

describe("getStyleFromConfig", () => {
  test("Should return a string containing styles separated by spaces", () => {
    const mockConfig: config = {
      theme: {
        color: "blue",
        background: "bg-red",
        font: "black",
      },
    };

    const result = getStyleFromConfig(mockConfig);
    expect(result).toBe("blue bg-red black");
  });
});
