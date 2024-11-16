import { writeFile } from "fs";
import path from "path";
import logfy, { bgGreen, bgRed, bold, green, red } from "../../index";
import { configFileName } from "../../types/config.json";
import configFile from "../config.json";
import { ConfigFileExists } from "./configFileExists";

export const createConfigFile = () => {
  if (ConfigFileExists()) {
    logfy(`\n${bgRed(` ❌ ${bold(`ALREADY EXISTS `)}`)}\n${red(bold("  >"))} The Logfy-X config file (${configFileName}) already exists.`, {
      style: "underline",
    });
    return;
  }

  writeFile(path.join(process.cwd(), configFileName), JSON.stringify(configFile, null, 2), (error) => {
    if (error) {
      logfy(`\n${bgRed("\n ❌ " + bold(`ERROR `))}\n ${red(bold("  >"))} Logfy-X config file created (${configFileName}): ${"error.message"}`, {
        style: "underline",
      });
      return;
    }

    logfy(`\n${bgGreen(" 🎉 " + bold(`CREATED! `))} \n${green(bold("  >"))} Logfy-X config file created (${configFileName}).`, { style: "underline" });
  });
};
