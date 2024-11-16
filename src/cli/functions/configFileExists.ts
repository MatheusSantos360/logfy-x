import { readdirSync } from "fs";
import { configFileName } from "../../types/config.json";

export const ConfigFileExists = (): boolean => {
  const dir = readdirSync(process.cwd());

  if (dir.includes(configFileName)) {
    return true;
  }

  return false;
};
