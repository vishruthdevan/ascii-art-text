#!/usr/bin/env node

import program from "commander";

program.version("1.0.0");
program.name("art");
program.description("Access the ASCIIfy API to generate text in ASCII fonts");

program.parse(process.argv);

console.log("Hello World!");
