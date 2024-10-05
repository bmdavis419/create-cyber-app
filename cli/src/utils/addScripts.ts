import sortPackageJson from "sort-package-json";
import { type PackageJson } from "type-fest";
import path from "path";
import fs from "fs-extra";

export const scriptsMap = {
  "db:push": "drizzle-kit push",
  "db:studio": "drizzle-kit studio",
} as const;

export type AvailableScripts = keyof typeof scriptsMap;

export const addScript = (opts: {
  scripts: AvailableScripts[];
  projectDir: string;
}) => {
  const { scripts, projectDir } = opts;

  const pkgJson = fs.readJSONSync(
    path.join(projectDir, "package.json")
  ) as PackageJson;

  scripts.forEach((script) => {
    const scriptValue = scriptsMap[script];

    if (pkgJson.scripts) {
      pkgJson.scripts[script] = scriptValue;
    }
  });
  const sortedPkgJson = sortPackageJson(pkgJson);

  fs.writeJSONSync(path.join(projectDir, "package.json"), sortedPkgJson, {
    spaces: 2,
  });
};
