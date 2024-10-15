// this is responsible for taking the templates and loading them onto the user's PC
import { loadDirectory } from "../utils/loadDirectory";
import path from "path";
import fs from "fs-extra";

const SOURCE_DIR = "templates/base";
const BASE_ITEMS = [
  "src",
  "static",
  "_gitignore",
  "package.json",
  "svelte.config.js",
  "tsconfig.json",
  "vite.config.ts",
];

export const loadBaseTemplate = async (
  projectDir: string,
  sourceDir = SOURCE_DIR,
  items = BASE_ITEMS
) => {
  await loadDirectory(sourceDir, projectDir, items);
  fs.renameSync(
    path.join(projectDir, "_gitignore"),
    path.join(projectDir, ".gitignore")
  );
};
