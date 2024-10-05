import { join } from "path";
import { mkdir, readdir, stat } from "node:fs/promises";

// this function will load everything from the provided template directory
// into the provided destination directory
export const loadDirectory = async (
  sourceDir: string,
  destDir: string,
  items: string[]
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
        await loadDirectory(
          join(sourceDir, item),
          join(destDir, item),
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
