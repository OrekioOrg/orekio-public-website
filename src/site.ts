import { locales, defaultLocale, type Locale } from "@/i18n/config";

// Canonical origin. The site is served at the root of the custom domain
// orekio.fr (see next.config.ts / src/base-path.ts). Someone else owns
// orekio.com, so every SEO signal (canonical, hreflang, sitemap, OG url,
// structured data) must point unambiguously here to consolidate authority.
// orekio.app should 301-redirect to this origin at the DNS/host level.
export const SITE_URL = "https://orekio.fr";

export const SITE_NAME = "Orekio";

// Search-engine ownership-verification tokens. Paste the value from the
// "HTML tag" verification method (just the content="..." part, not the
// whole <meta> tag). Leave empty to emit nothing.
//   Google Search Console → Add property → URL prefix → HTML tag
//   Bing Webmaster Tools  → Add site → HTML Meta Tag  (or "Import from GSC")
export const GOOGLE_SITE_VERIFICATION = "";
export const BING_SITE_VERIFICATION = "";

// hreflang codes emitted for each locale. Kept as bare language codes
// (Google matches "fr" to all French-speaking regions); x-default points
// at the French version, which is also where "/" redirects.
export const hreflangByLocale: Record<Locale, string> = {
  fr: "fr",
  en: "en",
};

// Open Graph locale codes.
export const ogLocaleByLocale: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

// Every indexable route below the locale segment, as the path suffix that
// follows "/<lang>". "" is the locale home page. Slugs are French for both
// locales by design (e.g. /en/fonctionnalites). Keep this list in sync with
// the app/[lang] route folders — the sitemap is generated from it.
export const routeSuffixes = [
  "",
  "/fonctionnalites",
  "/tarifs",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cgu",
] as const;

export type RouteSuffix = (typeof routeSuffixes)[number];

// Placeholder legal drafts: served (linked in the footer) but kept out of
// the sitemap and marked noindex until the real text is in place.
export const noindexSuffixes: readonly string[] = [
  "/mentions-legales",
  "/confidentialite",
  "/cgu",
];

export const indexableRouteSuffixes = routeSuffixes.filter(
  (s) => !noindexSuffixes.includes(s),
);

/** Absolute URL for a locale + route suffix, e.g. ("en", "/tarifs"). */
export function absoluteUrl(lang: Locale, suffix: string = ""): string {
  return `${SITE_URL}/${lang}${suffix}`;
}

/**
 * `alternates` block for a page: a self-canonical plus one hreflang entry
 * per locale and an x-default. Relative paths compose with `metadataBase`
 * (set in the root layout).
 */
export function alternatesFor(lang: Locale, suffix: string = "") {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[hreflangByLocale[locale]] = `/${locale}${suffix}`;
  }
  languages["x-default"] = `/${defaultLocale}${suffix}`;
  return {
    canonical: `/${lang}${suffix}`,
    languages,
  };
}
