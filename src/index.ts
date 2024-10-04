import { input, select } from "@inquirer/prompts";
import chalk from "chalk";
import gradient from "gradient-string";
import { loadBaseTemplate } from "./loader";

async function main() {
  let coolGradient = gradient("red", "yellow", "white");

  console.log(coolGradient.multiline("Cyber App..."));

  const directory = await input({
    message: chalk.bgGreen.black("Enter a directory:"),
  });

  await loadBaseTemplate(directory);

  const auth = await select({
    message: chalk.yellowBright("Select an auth provider"),
    choices: [
      {
        name: "Lucia",
        value: "lucia",
      },
      {
        name: "Supabase",
        value: "supabase",
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
      },
      {
        name: `Postgres (Supabase) ${auth === "supabase" ? "RECOMMENDED" : ""}`,
        value: "supabase",
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
        name: "SST",
        value: "sst",
      },
      {
        name: "Vercel",
        value: "vercel",
      },
      {
        name: "Docker",
        value: "docker",
      },
      {
        name: "Netlify",
        value: "netlify",
        disabled: "COMING SOON",
      },
      {
        name: "None",
        value: "none",
      },
    ],
  });

  console.log("User responses:", {
    directory,
    auth,
    database,
    deploy,
  });
}

main().catch(console.error);
