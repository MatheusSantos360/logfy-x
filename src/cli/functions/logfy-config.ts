import fs from "fs";
import { config, configSchema } from "../../types/logfy-x-config.types";
import { ConfigFileExists } from "./configFileExists";
import { handleConfigErrors } from "./handleConfigErrors";
import logfy from "../../functions/logfy";
import { bgRed, blue, bold, red } from "../../index";

let config: config | null = null;

function getConfig() {
  if (!config) {
    if (!ConfigFileExists()) {
      logfy(`${bgRed(" ❌ " + bold("ERROR "))} ${bold(red("logfy-x.json not found"))}`);
      logfy(`${red(bold(">"))} You can create a config file using ${blue("`logfy-x init`")}.`);
      return ;
    }

    const rawData = fs.readFileSync("logfy-x.json").toString();
    config = JSON.parse(rawData);
    const result = configSchema.safeParse(config);

    if (result.error?.errors) {
      handleConfigErrors(result.error.errors);
      return;
    }
  }

  console.log(config)
  return config;
}

export { getConfig };
