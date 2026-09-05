import type { NextConfig } from "next";

const repoName = "orekio-public-website";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves this project from /orekio-public-website/
  // (no custom domain configured), so every asset/link needs that prefix.
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
};

export default nextConfig;
