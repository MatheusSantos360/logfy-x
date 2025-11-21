import fs from "fs";
import { configFileName } from "../../../package.json";
import { bgRed, bold, red } from "../../index";
import { type config, configSchema } from "../../types/logfy-x-config.types";
import { ConfigFileExists } from "./configFileExists";
import { handleConfigErrors } from "./handleConfigErrors";
import defaultConfig from "../../../logfy-x.json"

let config: config | null = null;

function getConfig(): config {
  if (!config) {
    if (!ConfigFileExists()) {
      setConfig(defaultConfig);
      return defaultConfig;
    }

    const rawData = fs.readFileSync(configFileName).toString();

    try {
      config = JSON.parse(rawData);
    } catch {
      console.log(`${bgRed(" ❌ " + bold("ERROR "))} ${bold(red("Invalid JSON format in " + configFileName))}`);
      process.exit(1);
    }

    const result = configSchema.safeParse(config);

    if (result.error?.errors) {
      handleConfigErrors(result.error.errors);
      process.exit(1);
    }
  }

  return config!;
}

export { getConfig };

export const setConfig = (value: config | null) => {
  config = value;
};
