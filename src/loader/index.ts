// this is responsible for taking the templates and loading them onto the user's PC
import { join } from "path";
import { mkdir, readdir, stat } from "node:fs/promises";

const SOURCE_DIR = "src/templates/base";
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
  for (const item of items) {
    const sourcePath = join(process.cwd(), sourceDir, item);
    const destPath = join(process.cwd(), destDir, item);

    try {
      const stats = await stat(sourcePath);

      if (stats.isDirectory()) {
        // If it's a directory, create it in the destination and copy its contents
        await mkdir(destPath, { recursive: true });
        const subItems = await readdir(sourcePath);
        console.log(subItems);
        await loadBaseTemplate(
          join(destDir, item),
          join(sourceDir, item),
          subItems
        );
        console.log(`Successfully copied directory ${item}`);
      } else {
        // If it's a file, copy it
        const file = Bun.file(sourcePath);
        const contents = await file.arrayBuffer();
        await Bun.write(destPath, contents);
        console.log(`Successfully copied file ${item}`);
      }
    } catch (error) {
      console.error(`Error copying ${item}:`, error);
    }
  }
};
