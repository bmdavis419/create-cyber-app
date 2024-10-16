import { appendFile } from "fs/promises";
import { join } from "path";

export const envVarsMap = {
  sqlite_db_url: 'DATABASE_URL="file:local.db"\n',
  sqlite_db_token: 'DATABASE_AUTH_TOKEN="N/A"\n',
  auth_github_client_id: 'GITHUB_CLIENT_ID="..."\n',
  auth_github_client_secret: 'GITHUB_CLIENT_SECRET="..."\n',
  postgres_db_url:
    'DATABASE_URL="postgresql://postgres:postgres@localhost:5432/cyber_explore"\n',
} as const;

export type AvailableEnvVars = keyof typeof envVarsMap;

export const addEnvVar = async (opts: {
  envVars: AvailableEnvVars[];
  projectDir: string;
}) => {
  const { envVars, projectDir } = opts;

  const envPath = join(projectDir, ".env");
  const envExamplePath = join(projectDir, ".env.example");

  for (const envVar of envVars) {
    await appendFile(envPath, envVarsMap[envVar]);
  }

  for (const envVar of envVars) {
    await appendFile(envExamplePath, envVarsMap[envVar]);
  }
};
