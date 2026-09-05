// GitHub Pages serves this project from /orekio-public-website/ (no custom
// domain configured), matching the basePath set in next.config.ts.
// next/image does not auto-prefix local `src` values when `images.unoptimized`
// is set, so any hardcoded asset path (e.g. <Image src="/brand/...">) must be
// prefixed manually with this constant.
export const basePath =
  process.env.GITHUB_ACTIONS === "true" ? "/orekio-public-website" : "";
