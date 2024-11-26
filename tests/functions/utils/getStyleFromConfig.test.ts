import { describe, expect, test } from "vitest";
import { getStyleFromConfig } from "../../../src/functions/utils/getStyleFromConfig";
import { config } from "../../../src/types/logfy-x-config.types";

describe("getStyleFromConfig", () => {
  test("Should return an array containig styles from config", () => {
    const mockConfig: config = {
      theme: {
        color: "blue",
        background: "bg-red",
        font: "black",
      },
    };

    const result = getStyleFromConfig(mockConfig);
    expect(result).toStrictEqual(["blue", "bg-red", "black"]);
  });
});
