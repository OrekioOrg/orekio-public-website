// The site is served at the domain root on orekio.fr (custom domain),
// matching the basePath set in next.config.ts.
// next/image does not auto-prefix local `src` values when `images.unoptimized`
// is set, so any hardcoded asset path (e.g. <Image src="/brand/...">) must be
// prefixed manually with this constant.
export const basePath = "";
