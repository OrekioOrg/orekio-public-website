import type { NextConfig } from "next";
import { basePath } from "./src/base-path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    // The site has two root layouts (app/[lang] and app/(redirect)) and its
    // real root layout sits under a dynamic [lang] segment, so there is no
    // single layout Next can compose a global 404 from. global-not-found.tsx
    // supplies the full <html lang> document for unmatched URLs instead.
    globalNotFound: true,
  },
  // GitHub Pages serves this project from /orekio-public-website/
  // (no custom domain configured), so every asset/link needs that prefix.
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
};

export default nextConfig;
