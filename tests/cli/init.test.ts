import { execSync } from "child_process";
import { existsSync, unlinkSync } from "fs";
import path from "path";
import { cwd } from "process";
import { describe, expect, test } from "vitest";
import { commandName, configFileName } from "../../package.json";
import { ConfigFileExists } from "../../src/cli/functions/configFileExists";

describe(`Command - ${commandName} init`, () => {
  test(`Should create a ${configFileName} if does not exist`, () => {
    if (ConfigFileExists()) {
      unlinkSync(path.resolve(__dirname, "..", "..", configFileName));
    }

    const output = execSync("pnpm run cli init").toString();

    expect(output.includes("CREATED")).toBeTruthy();
    expect(existsSync(path.resolve(cwd(), configFileName)));
  });

  test(`Should throw an error if ${configFileName} already exists`, () => {
    if (ConfigFileExists()) {
      const output = execSync("pnpm run cli init").toString();

      expect(output.includes("ALREADY EXISTS")).toBeTruthy();
    }
  });
});
