import { addPackageDependency } from "../utils/addDependencies";
import { addEnvVar } from "../utils/addEnvVars";
import { loadDirectory } from "../utils/loadDirectory";

const LUCIA_SOURCE_DIR = "src/templates/auth/lucia";
const LUCIA_SOURCE_ITEMS = ["src"];

export const loadAuthLucia = async (projectDir: string) => {
  await loadDirectory(LUCIA_SOURCE_DIR, projectDir, LUCIA_SOURCE_ITEMS);

  addPackageDependency({
    dependencies: ["@lucia-auth/adapter-drizzle", "arctic"],
    devMode: false,
    projectDir,
  });
  addPackageDependency({
    dependencies: ["lucia"],
    devMode: true,
    projectDir,
  });

  addEnvVar({
    envVars: ["auth_github_client_id", "auth_github_client_secret"],
    projectDir,
  });
};
