import fs from "fs";
import logfy from "../../functions/logfy";
import { bgRed, blue, bold, red } from "../../index";
import { type config, configSchema } from "../../types/logfy-x-config.types";
import { ConfigFileExists } from "./configFileExists";
import { handleConfigErrors } from "./handleConfigErrors";

let config: config | null = null;

function getConfig(): config {
  if (!config) {
    if (!ConfigFileExists()) {
      logfy(`${bgRed(" ❌ " + bold("ERROR "))} ${bold(red("logfy-x.json not found"))}`);
      logfy(`${red(bold(">"))} You can create a config file using ${blue("`logfy-x init`")}.`);
      process.exit(1)
    }

    const rawData = fs.readFileSync("logfy-x.json").toString();
    config = JSON.parse(rawData);
    const result = configSchema.safeParse(config);

    if (result.error?.errors) {
      handleConfigErrors(result.error.errors);
      process.exit(1)
    }
  }

  return config!;
}

export { getConfig };
