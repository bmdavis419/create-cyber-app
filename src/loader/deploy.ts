import { join } from "path";
import { addPackageDependency } from "../utils/addDependencies";
import { removePackageDependency } from "../utils/removeDependencies";

const VERCEL_SOURCE_PATH = "src/templates/deploy/vercel/svelte.config.js";

export const loadDeployVercel = async (projectDir: string) => {
  // load in the svelte.config.js file
  const sourcePath = join(process.cwd(), VERCEL_SOURCE_PATH);
  const destPath = join(process.cwd(), projectDir, "svelte.config.js");

  try {
    const file = Bun.file(sourcePath);
    const contents = await file.arrayBuffer();
    await Bun.write(destPath, contents);
    console.log(`Successfully copied file svelte.config.js`);
  } catch (error) {
    console.error(`Error copying svelte.config.js:`, error);
  }

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
