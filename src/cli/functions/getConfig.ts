import fs from "fs";
import { commandName, configFileName } from "../../../package.json";
import { bgRed, blue, bold, red } from "../../index";
import { type config, configSchema } from "../../types/logfy-x-config.types";
import { ConfigFileExists } from "./configFileExists";
import { handleConfigErrors } from "./handleConfigErrors";

let config: config | null = null;

function getConfig(): config {
  if (!config) {
    if (!ConfigFileExists()) {
      console.log(`${bgRed(" ❌ " + bold("ERROR "))} ${bold(red(configFileName + " not found"))}`);
      console.log(`${red(bold(">"))} You can create a config file using ${blue(`\`${commandName} init\``)}.`);
      process.exit(1);
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

// tested
