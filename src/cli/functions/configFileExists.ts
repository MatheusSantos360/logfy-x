import { existsSync } from "fs";
import path from "path";
import { configFileName } from "../../../package.json";

export const ConfigFileExists = (): boolean => {
  return existsSync(path.resolve(process.cwd(), configFileName));
};

