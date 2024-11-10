#!/usr/bin/env node

import { Command } from "commander";
import { description, version } from "../../package.json";
import { createConfigFile } from "./functions/createConfigFile";

const program = new Command()

program.description(description).version(version);

program
  .command("init")
  .action(() => {
    createConfigFile()
  })

program.parse(process.argv)