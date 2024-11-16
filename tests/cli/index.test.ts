import { describe, expect, test } from "vitest";
import { version } from "../../package.json";
import { program } from "../../src/cli/cli";

describe("CLI Test", () => {
  test("Should display version", () => {
    expect(program.version()).toBe(version);
  });
});
