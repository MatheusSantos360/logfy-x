import { writeFile } from "fs";
import path from "path";
import { configFileName } from "../../../package.json";
import configFile from "../config.json";

export const createConfigFile = () => {
  let result: { error?: NodeJS.ErrnoException };

  writeFile(path.join(process.cwd(), configFileName), JSON.stringify(configFile, null, 2), (error) => {
    if (error) {
      result = { error };
    }
  });

  result = {};
  return result;
};
