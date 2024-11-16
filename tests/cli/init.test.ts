import { describe, expect, test, vi } from "vitest";
import { commandName, configFileName } from "../../package.json";
import { init } from "../../src/cli/commands/init";
import * as configFileExists from "../../src/cli/functions/configFileExists";
import * as createConfigFile from "../../src/cli/functions/createConfigFile";

describe(`Command - ${commandName} init`, () => {
  test(`Should create a ${configFileName} with success if does not exist`, () => {
    const configFileExistsSpy = vi.spyOn(configFileExists, "ConfigFileExists").mockReturnValue(false);
    const createConfigFileSpy = vi.spyOn(createConfigFile, "createConfigFile").mockReturnValue({});
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    init();

    expect(configFileExistsSpy).toHaveBeenCalledOnce();
    expect(createConfigFileSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("CREATED"));

    configFileExistsSpy.mockRestore();
    createConfigFileSpy.mockRestore();
    consoleSpy.mockRestore();
  });

  test(`Should show an error unsuccess message if ${configFileName} already exists`, () => {
    const configFileExistsSpy = vi.spyOn(configFileExists, "ConfigFileExists").mockReturnValue(true);
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    init();

    expect(configFileExistsSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("ALREADY EXISTS"));

    configFileExistsSpy.mockRestore();
    consoleSpy.mockRestore();
  });

  test("Should show an error message if configFileExists() return an error", () => {
    const mockError = {
      name: "Error",
      errno: -2,
      code: "ENOENT",
      syscall: "open",
      path: "/path/to/file",
      message: "ENOENT: no such file or directory, open '/path/to/file'",
      stack:
        "Error: ENOENT: no such file or directory, open '/path/to/file'\n    at Object.openSync (fs.js:476:3)\n    at Object.readFileSync (fs.js:377:3)\n    at Object.<anonymous> (/path/to/your/test.js:10:15)\n    at Module._compile (internal/modules/cjs/loader.js:701:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)\n    at Module.load (internal/modules/cjs/loader.js:600:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:531:3)\n    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)\n    at startup (internal/bootstrap/node.js:283:19)",
    };

    const configFileExistsSpy = vi.spyOn(configFileExists, "ConfigFileExists").mockReturnValue(false);
    const createConfigFileSpy = vi.spyOn(createConfigFile, "createConfigFile").mockReturnValue({ error: mockError });
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    init();

    expect(configFileExistsSpy).toHaveBeenCalledOnce();
    expect(createConfigFileSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("ERROR"));

    configFileExistsSpy.mockRestore();
    createConfigFileSpy.mockRestore();
    consoleSpy.mockRestore();
  });
});
