import { writeFile } from 'fs';
import { configFileName } from '../config.json';
import { ConfigFileExists } from './configFileExists';
import path from 'path';

export const createConfigFile = () => {
  if (ConfigFileExists()) {
    console.log(`The Logfy-X config file (${configFileName}) already exists.`);
    return
  }

  writeFile(path.join(process.cwd(), configFileName), '{}', (error) => {
    if (error) {
      console.log(`Logfy-X config file not created: ${error.message}`)
      return
    }

    console.log(`Logfy-X config file created (${configFileName}).`)
  });
};
