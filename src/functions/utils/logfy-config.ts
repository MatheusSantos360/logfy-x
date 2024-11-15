import fs from 'fs';
import { config, configSchema } from '../../types/logfy-x-config.types';
import { handleConfigErrors } from './handleConfigErrors';

let config: config | null = null;

function getConfig() {
  if (!config) {
    const rawData = fs.readFileSync('logfy-x.json').toString();
    config = JSON.parse(rawData);
    const result = configSchema.safeParse(config);

    if (result.error?.errors) {
      handleConfigErrors(result.error.errors);
      return;
    }
  }

  return config;
}

export { getConfig };
