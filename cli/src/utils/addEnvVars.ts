import { existsSync } from "fs";
import { appendFile } from "node:fs/promises";
import { join } from "path";

export const envVarsMap = {
  sqlite_db_url: 'DATABASE_URL="file:local.db\n"',
  sqlite_db_token: 'DATABASE_AUTH_TOKEN="N/A"\n',
} as const;

export type AvailableEnvVars = keyof typeof envVarsMap;

export const addEnvVar = async (opts: {
  envVars: AvailableEnvVars[];
  projectDir: string;
}) => {
  const { envVars, projectDir } = opts;

  const envPath = join(process.cwd(), projectDir, ".env");
  const envExamplePath = join(process.cwd(), projectDir, ".env.example");

  if (existsSync(envPath)) {
    for (const envVar of envVars) {
      await Bun.write(envPath, envVarsMap[envVar]);
    }
  } else {
    for (const envVar of envVars) {
      await appendFile(envPath, envVarsMap[envVar]);
    }
  }

  if (existsSync(envExamplePath)) {
    for (const envVar of envVars) {
      await Bun.write(envExamplePath, envVarsMap[envVar]);
    }
  } else {
    for (const envVar of envVars) {
      await appendFile(envExamplePath, envVarsMap[envVar]);
    }
  }
};
