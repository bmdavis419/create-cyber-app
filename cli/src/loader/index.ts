// this is responsible for taking the templates and loading them onto the user's PC
import { loadDirectory } from "../utils/loadDirectory";

const SOURCE_DIR = "templates/base";
const BASE_ITEMS = [
  "src",
  "static",
  ".gitignore",
  "package.json",
  "svelte.config.js",
  "tsconfig.json",
  "vite.config.ts",
];

export const loadBaseTemplate = async (
  destDir: string,
  sourceDir = SOURCE_DIR,
  items = BASE_ITEMS
) => {
  await loadDirectory(sourceDir, destDir, items);
};
