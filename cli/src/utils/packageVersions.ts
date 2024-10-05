/*
 * This maps the necessary packages to a version.
 * This improves performance significantly over fetching it from the npm registry.
 * TY https://github.com/t3-oss/create-t3-app :)
 */
export const dependencyVersionMap = {
  "@sveltejs/adapter-vercel": "^5.4.4",
  "drizzle-orm": "^0.33.0",
  "drizzle-kit": "^0.24.2",
  "@libsql/client": "^0.12.0",
  dotenv: "^16.4.5",
} as const;
export type AvailableDependencies = keyof typeof dependencyVersionMap;

export const removableDependencies = "@sveltejs/adapter-auto";
export type RemovableDependencies = typeof removableDependencies;
