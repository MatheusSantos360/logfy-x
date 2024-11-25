import { bgGreen, bgRed, bold, green, red, underline } from "picocolors";
import { configFileName } from "../../../package.json";
import { ConfigFileExists } from "../functions/configFileExists";
import { createConfigFile } from "../functions/createConfigFile";

export const init = () => {
  if (ConfigFileExists()) {
    console.log(underline(`\n${bgRed(` ❌ ${bold(`ALREADY EXISTS `)}`)}\n${red(bold("  >"))} The Logfy-X config file (${configFileName}) already exists.\n`));
    return;
  }

  const { error } = createConfigFile();

  if (typeof error !== "undefined") {
    console.log(underline(`\n${bgRed(` ❌ ${bold(`ERROR `)}`)}\n${red(bold("  >"))} The configuration file (${configFileName})was not created: ${error.message}\n`));
    return;
  }

  console.log(underline(`\n${bgGreen(" 🎉 " + bold(`CREATED! `))}\n${green(bold("  >"))} Logfy-X config file created (${configFileName}).\n`));
};
