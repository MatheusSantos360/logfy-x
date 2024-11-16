#!/usr/bin/env node

import { Command } from "commander";
import { description, version } from "../../package.json";
import { init } from "./commands/init";

const program = new Command();

program.description(description).version(version);

program.command("init").action(() => {
  init();
});

export { program };

// tested