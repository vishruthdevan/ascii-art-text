#!/usr/bin/env node

import program from "commander";
import asciify from "./asciify.js";

program
  .version("1.0.0")
  .name("art")
  .description("Access the ASCIIfy API to generate text in ASCII fonts")
  .usage("<command>");

program
  .command("asciify")
  .argument("<text>", "Text to ASCIIfy")
  .option("-f, --font <font>", "Get text in a specific font")
  .action(asciify)
  .description("Gets ASCIIfied text from the prints the output");

program
  .command("list")
  .action(console.log("list fonts"))
  .description("Retrieve a list of all available available");

program.parse(process.argv);
