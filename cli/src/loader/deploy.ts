import { addPackageDependency } from "../utils/addDependencies";
import { removePackageDependency } from "../utils/removeDependencies";
import { loadDirectory } from "../utils/loadDirectory";

const VERCEL_SOURCE_DIR = "src/templates/deploy/vercel";
const VERCEL_SOURCE_ITEMS = ["svelte.config.js"];

export const loadDeployVercel = async (projectDir: string) => {
  // load in the svelte.config.js file
  await loadDirectory(VERCEL_SOURCE_DIR, projectDir, VERCEL_SOURCE_ITEMS);

  // update package json
  addPackageDependency({
    dependencies: ["@sveltejs/adapter-vercel"],
    devMode: true,
    projectDir,
  });
  removePackageDependency({
    dependencies: ["@sveltejs/adapter-auto"],
    devMode: true,
    projectDir,
  });
};
