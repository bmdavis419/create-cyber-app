import { addPackageDependency } from "../utils/addDependencies";
import { addEnvVar } from "../utils/addEnvVars";
import { addScript } from "../utils/addScripts";
import { loadDirectory } from "../utils/loadDirectory";

const POSTGRES_SOURCE_DIR = "templates/db/postgres";
const POSTGRES_SOURCE_ITEMS = ["drizzle.config.ts", "src"];

export const loadDbPostgres = async (projectDir: string) => {
  await loadDirectory(POSTGRES_SOURCE_DIR, projectDir, POSTGRES_SOURCE_ITEMS);

  addPackageDependency({
    dependencies: ["drizzle-orm", "pg", "dotenv"],
    devMode: false,
    projectDir,
  });

  addPackageDependency({
    dependencies: ["drizzle-kit", "@types/pg"],
    devMode: true,
    projectDir,
  });

  addScript({
    scripts: ["db:push", "db:studio", "db:generate", "db:migrate"],
    projectDir,
  });

  addEnvVar({
    envVars: ["postgres_db_url"],
    projectDir,
  });
};

const SQLITE_SOURCE_DIR = "templates/db/sqlite";
const SQLITE_SOURCE_ITEMS = ["drizzle.config.ts", "src"];

export const loadDbSqlite = async (projectDir: string) => {
  await loadDirectory(SQLITE_SOURCE_DIR, projectDir, SQLITE_SOURCE_ITEMS);

  addPackageDependency({
    dependencies: ["drizzle-orm", "@libsql/client", "dotenv"],
    devMode: false,
    projectDir,
  });
  addPackageDependency({
    dependencies: ["drizzle-kit"],
    devMode: true,
    projectDir,
  });

  addScript({
    scripts: ["db:push", "db:studio"],
    projectDir,
  });

  addEnvVar({
    envVars: ["sqlite_db_token", "sqlite_db_url"],
    projectDir,
  });
};
