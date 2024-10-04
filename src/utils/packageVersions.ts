/*
 * This maps the necessary packages to a version.
 * This improves performance significantly over fetching it from the npm registry.
 * TY https://github.com/t3-oss/create-t3-app :)
 */
export const dependencyVersionMap = {
  "@sveltejs/adapter-vercel": "^5.4.4",
} as const;
export type AvailableDependencies = keyof typeof dependencyVersionMap;
