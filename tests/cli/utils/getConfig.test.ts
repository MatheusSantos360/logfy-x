import fs from "fs";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { configFileName } from "../../../package.json";
import config from "../../../src/cli/config.json";
import * as ConfigFileExists from "../../../src/cli/functions/configFileExists";
import { getConfig, setConfig } from "../../../src/cli/functions/getConfig";
import * as handleConfigErrors from "../../../src/cli/functions/handleConfigErrors";
import { configSchema } from "../../../src/types/logfy-x-config.types";

describe("getConfig", () => {
  const stringConfigObj = JSON.stringify(config);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test(`Should return ${configFileName} content if it exists, is valid JSON, and has no missing properties or unexpected types`, () => {
    const ConfigFileExistsSpy = vi.spyOn(ConfigFileExists, "ConfigFileExists").mockReturnValue(true);
    const readFileSyncSpy = vi.spyOn(fs, "readFileSync").mockReturnValue(stringConfigObj);
    const jsonParseSpy = vi.spyOn(JSON, "parse");
    const configSchemaSafeParseSpy = vi.spyOn(configSchema, "safeParse");
    const handleConfigErrorsSpy = vi.spyOn(handleConfigErrors, "handleConfigErrors");

    const result = getConfig();

    expect(ConfigFileExistsSpy).toHaveBeenCalledOnce();
    expect(ConfigFileExistsSpy).toHaveReturnedWith(true);

    expect(readFileSyncSpy).toHaveBeenCalledOnce();
    expect(readFileSyncSpy).toHaveBeenCalledWith(configFileName);
    expect(readFileSyncSpy).toHaveReturnedWith(stringConfigObj);

    expect(jsonParseSpy).toHaveBeenCalledOnce();
    expect(jsonParseSpy).toHaveBeenCalledWith(stringConfigObj);
    expect(jsonParseSpy).toHaveReturnedWith(config);

    expect(configSchemaSafeParseSpy).toHaveBeenCalledOnce();
    expect(configSchemaSafeParseSpy).toHaveBeenCalledWith(config);
    expect(configSchemaSafeParseSpy).toHaveReturned();

    expect(handleConfigErrorsSpy).not.toHaveBeenCalled();

    expect(result).toStrictEqual(config);
  });

  test(`Should display an error if ${configFileName} does not exists`, () => {
    const ConfigFileExistsSpy = vi.spyOn(ConfigFileExists, "ConfigFileExists").mockReturnValue(false);
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    // @ts-expect-error ...
    const exitSpy = vi.spyOn(process, "exit").mockImplementation(() => {});

    setConfig(null);
    getConfig();

    expect(ConfigFileExistsSpy).toHaveBeenCalledOnce();
    expect(ConfigFileExistsSpy).toHaveReturnedWith(false);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("ERROR"));

    expect(exitSpy).toHaveBeenCalledOnce();
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  test(`Should display an error if the ${configFileName} JSON is invalid`, () => {
    const ConfigFileExistsSpy = vi.spyOn(ConfigFileExists, "ConfigFileExists").mockReturnValue(true);
    const readFileSyncSpy = vi.spyOn(fs, "readFileSync").mockReturnValue(stringConfigObj + "some wrong data...");
    const jsonParseSpy = vi.spyOn(JSON, "parse");
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    // @ts-expect-error ...
    const exitSpy = vi.spyOn(process, "exit").mockImplementation(() => {});

    setConfig(null);
    getConfig();

    expect(ConfigFileExistsSpy).toHaveBeenCalledOnce();
    expect(ConfigFileExistsSpy).toHaveReturnedWith(true);

    expect(readFileSyncSpy).toHaveBeenCalledOnce();
    expect(readFileSyncSpy).toHaveBeenCalledWith(configFileName);
    expect(readFileSyncSpy).toHaveReturnedWith(stringConfigObj + "some wrong data...");

    expect(jsonParseSpy).toHaveBeenCalledOnce();
    expect(jsonParseSpy).toHaveBeenCalledWith(stringConfigObj + "some wrong data...");
    expect(jsonParseSpy).toThrowError();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Invalid JSON format"));

    expect(exitSpy).toHaveBeenCalled();
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  test(`Should display an error if ${configFileName} content don't match the config schema`, () => {
    const wrongConfig = { theme: { color: 1, background: [] } };
    const stringWrongConfigObj = JSON.stringify(wrongConfig);

    const ConfigFileExistsSpy = vi.spyOn(ConfigFileExists, "ConfigFileExists").mockReturnValue(true);
    const readFileSyncSpy = vi.spyOn(fs, "readFileSync").mockReturnValue(stringWrongConfigObj);
    const jsonParseSpy = vi.spyOn(JSON, "parse");
    const configSchemaSafeParseSpy = vi.spyOn(configSchema, "safeParse");
    const handleConfigErrorsSpy = vi.spyOn(handleConfigErrors, "handleConfigErrors");
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    // @ts-expect-error ...
    const exitSpy = vi.spyOn(process, "exit").mockImplementation(() => {});

    setConfig(null);

    getConfig();

    expect(ConfigFileExistsSpy).toHaveBeenCalledOnce();
    expect(ConfigFileExistsSpy).toHaveReturnedWith(true);

    expect(readFileSyncSpy).toHaveBeenCalledOnce();
    expect(readFileSyncSpy).toHaveBeenCalledWith(configFileName);
    expect(readFileSyncSpy).toHaveReturnedWith(stringWrongConfigObj);

    expect(jsonParseSpy).toHaveBeenCalledOnce();
    expect(jsonParseSpy).toHaveBeenCalledWith(stringWrongConfigObj);
    expect(jsonParseSpy).toHaveReturnedWith(wrongConfig);

    expect(configSchemaSafeParseSpy).toHaveBeenCalledOnce();
    expect(configSchemaSafeParseSpy).toHaveBeenCalledWith(wrongConfig);
    expect(configSchemaSafeParseSpy).toHaveReturned();

    expect(handleConfigErrorsSpy).toHaveBeenCalledOnce();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("ERROR"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(`Error(s) on ${configFileName}`));

    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
