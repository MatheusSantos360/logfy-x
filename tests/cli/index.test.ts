import { execSync } from "child_process";
import { describe, expect, test } from "vitest";
import { version } from "../../package.json";

describe("CLI Tests", () => {
  test("Should display version", () => {
    const output = execSync("pnpm run cli --version").toString();
    expect(output.trim().includes(version)).toBeTruthy();
  });
});
