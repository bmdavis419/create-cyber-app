import { join } from "path";
import { mkdir, readdir, stat } from "fs/promises";
import fs from "fs-extra";
import { PKG_ROOT } from "../consts";

// this function will load everything from the provided template directory
// into the provided destination directory
export const loadDirectory = async (
  sourceDir: string,
  destDir: string,
  items: string[]
) => {
  for (const item of items) {
    const sourcePath = join(PKG_ROOT, sourceDir, item);
    const destPath = join(PKG_ROOT, destDir, item);

    console.log("source", sourcePath);

    try {
      const stats = await stat(sourcePath);

      if (stats.isDirectory()) {
        // If it's a directory, create it in the destination and copy its contents
        await mkdir(destPath, { recursive: true });
        const subItems = await readdir(sourcePath);
        await loadDirectory(
          join(sourceDir, item),
          join(destDir, item),
          subItems
        );
        console.log(`Successfully copied directory ${item}`);
      } else {
        // If it's a file, copy it
        fs.copySync(sourcePath, destPath);
        console.log(`Successfully copied file ${item}`);
      }
    } catch (error) {
      console.error(`Error copying ${item}:`, error);
    }
  }
};
