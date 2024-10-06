import path from "path";
import fs from "fs-extra";
import sortPackageJson from "sort-package-json";
import { type RemovableDependencies } from "./packageVersions";

export const removePackageDependency = (opts: {
  dependencies: RemovableDependencies[];
  devMode: boolean;
  projectDir: string;
}) => {
  const { dependencies, devMode, projectDir } = opts;

  const pkgJson = fs.readJSONSync(path.join(projectDir, "package.json"));

  dependencies.forEach((pkgName) => {
    if (devMode && pkgJson.devDependencies) {
      delete pkgJson.devDependencies[pkgName];
    } else if (pkgJson.dependencies) {
      delete pkgJson.dependencies[pkgName];
    }
  });

  const sortedPkgJson = sortPackageJson(pkgJson);

  fs.writeJSONSync(path.join(projectDir, "package.json"), sortedPkgJson, {
    spaces: 2,
  });
};
