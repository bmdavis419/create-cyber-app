import sortPackageJson from "sort-package-json";
import path from "path";
import fs from "fs-extra";

export const scriptsMap = {
  "db:push": "drizzle-kit push",
  "db:studio": "drizzle-kit studio",
  "db:generate": "drizzle-kit generate",
  "db:migrate": "drizzle-kit migrate",
  "dev:sst": "sst dev",
} as const;

export type AvailableScripts = keyof typeof scriptsMap;

export const addScript = (opts: {
  scripts: AvailableScripts[];
  projectDir: string;
}) => {
  const { scripts, projectDir } = opts;

  const pkgJson = fs.readJSONSync(path.join(projectDir, "package.json"));

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
