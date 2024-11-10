import { writeFile } from 'fs';
import { configFileName } from '../config.json';
import { ConfigFileExists } from './configFileExists';
import path from 'path';
import logfy, { bgGreen, bgRed, bold, green, red } from '../../index';

export const createConfigFile = () => {
  if (ConfigFileExists()) {
    logfy(`${bgRed(" ❌ " + bold(`ALREADY EXISTS `))}\n${red(bold(">"))} The Logfy-X config file (${configFileName}) already exists.`, { style: "underline" });
    return
  }

  writeFile(path.join(process.cwd(), configFileName), '{}', (error) => {
    if (error) {
      logfy(`${bgRed(" ❌ " + bold(`ERROR `))}\n ${red(bold(">"))} Logfy-X config file created (${configFileName}): ${"error.message"}`, { style: "underline" });
      return
    }

    logfy(`${bgGreen(" 🎉 " + bold(`CREATED! `))}\n${green(bold(">"))} Logfy-X config file created (${configFileName}).`, { style: "underline"})
  });
};
