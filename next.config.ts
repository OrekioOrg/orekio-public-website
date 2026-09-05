import type { NextConfig } from "next";
import { basePath } from "./src/base-path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves this project from /orekio-public-website/
  // (no custom domain configured), so every asset/link needs that prefix.
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
};

export default nextConfig;
