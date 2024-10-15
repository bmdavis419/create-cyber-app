#!/usr/bin/env node
import { input, select } from "@inquirer/prompts";
import { resolve } from "path";
import chalk from "chalk";
import gradient from "gradient-string";
import { loadBaseTemplate } from "./loader";
import { loadDeployVercel } from "./loader/deploy";
import { Command } from "commander";
import { loadDbSqlite } from "./loader/db";
import { loadAuthLucia } from "./loader/auth";

async function main() {
  let coolGradient = gradient("red", "yellow", "white");

  console.log(coolGradient.multiline("Cyber App..."));

  console.log("THIS IS VERY EARLY AND NOT FULLY BUILT");
  console.log("Please let me know if you have any feedback or ideas!");

  const program = new Command()
    .name("Create Cyber App")
    .description("A CLI for creating web applications with the cyber stack")
    .argument(
      "[dir]",
      "The name of the application, as well as the name of the directory to create"
    )
    .parse(process.argv);

  const args = program.args;

  let directory = "";

  if (args.length > 0) {
    directory = args[0];
  } else {
    directory = await input({
      message: chalk.bgGreen.black("Enter a directory:"),
    });
  }

  const projectDir = resolve(process.cwd(), directory);

  await loadBaseTemplate(projectDir);

  const auth = await select({
    message: chalk.yellowBright("Select an auth provider"),
    choices: [
      {
        name: "Lucia (Custom Auth)",
        value: "lucia",
      },
      {
        name: "Supabase",
        value: "supabase",
        disabled: "COMING SOON",
      },
      {
        name: "None",
        value: "none",
      },
    ],
  });

  const database = await select({
    message: "Select a DB",
    choices: [
      {
        name: "Sqlite (Turso)",
        value: "turso",
      },
      {
        name: "MySQL (Planetscale)",
        value: "planetscale",
        disabled: "COMING SOON",
      },
      {
        name: `Postgres (Supabase) ${auth === "supabase" ? "RECOMMENDED" : ""}`,
        value: "supabase",
        disabled: "COMING SOON",
      },
      {
        name: "None",
        value: "none",
        disabled: auth !== "none" && "Must select a DB to use Auth",
      },
    ],
  });

  const deploy = await select({
    message: "Select your deploy provider",
    choices: [
      {
        name: "Vercel",
        value: "vercel",
      },
      {
        name: "SST",
        value: "sst",
        disabled: "COMING SOON",
      },
      {
        name: "Docker",
        value: "docker",
        disabled: "COMING SOON",
      },
      {
        name: "Netlify",
        value: "netlify",
        disabled: "COMING SOON",
      },
      {
        name: "Auto",
        value: "auto",
      },
    ],
  });

  console.log("GENERATING PROJECT in", directory);
  console.log("AUTH:", auth);
  console.log("DB:", database);
  console.log("DEPLOY:", deploy);

  // DB
  if (database === "turso") {
    await loadDbSqlite(projectDir);
  }

  // AUTH
  if (auth === "lucia") {
    await loadAuthLucia(projectDir);
  }

  // DEPLOY
  if (deploy === "vercel") {
    await loadDeployVercel(projectDir);
  }
}

main().catch(console.error);
