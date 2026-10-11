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
export const GOOGLE_SITE_VERIFICATION =
  "v-qgFpauI-_r4erTvlJMF3a9cAs9zz7UaLZhvjwOdF4";
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

// Every route below the locale segment, as the path suffix that follows
// "/<lang>" in each locale. "" is the locale home page. Pages whose slug
// differs per locale are served by app/[lang]/[page] (see src/views); the
// sitemap, nav and language switcher are all generated from this table.
export const routes = {
  home: { fr: "", en: "" },
  features: { fr: "/fonctionnalites", en: "/features" },
  pricing: { fr: "/tarifs", en: "/pricing" },
  about: { fr: "/a-propos", en: "/about" },
  blog: { fr: "/blog", en: "/blog" },
  contact: { fr: "/contact", en: "/contact" },
  legalNotice: { fr: "/mentions-legales", en: "/legal-notice" },
  privacy: { fr: "/confidentialite", en: "/privacy" },
  terms: { fr: "/cgu", en: "/terms" },
  accountDeletion: { fr: "/account-deletion", en: "/account-deletion" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

/** Locale-prefixed path to a route, e.g. ("en", "pricing") → "/en/pricing". */
export function pathTo(lang: Locale, key: RouteKey): string {
  return `/${lang}${routes[key][lang]}`;
}

// Placeholder legal drafts: served (linked in the footer) but kept out of
// the sitemap and marked noindex until the real text is in place.
export const noindexRoutes: readonly RouteKey[] = [
  "legalNotice",
  "privacy",
  "terms",
];

export const indexableRoutes = (Object.keys(routes) as RouteKey[]).filter(
  (k) => !noindexRoutes.includes(k),
);

// English pages used to live at their French slugs (/en/tarifs…). Each old
// address is still generated as a redirect stub (app/[lang]/[page]).
export const legacyRedirects: Readonly<
  Partial<Record<Locale, Record<string, RouteKey>>>
> = {
  en: {
    fonctionnalites: "features",
    tarifs: "pricing",
    "a-propos": "about",
    "mentions-legales": "legalNotice",
    confidentialite: "privacy",
    cgu: "terms",
  },
};

/** A path suffix shared by every locale, or one per locale. */
export type LocalizedSuffix = string | Readonly<Record<Locale, string>>;

export function suffixFor(suffix: LocalizedSuffix, lang: Locale): string {
  return typeof suffix === "string" ? suffix : suffix[lang];
}

/** Absolute URL for a locale + route suffix, e.g. ("en", "/tarifs"). */
export function absoluteUrl(lang: Locale, suffix: string = ""): string {
  return `${SITE_URL}/${lang}${suffix}`;
}

/**
 * `alternates` block for a page: a self-canonical plus one hreflang entry
 * per locale and an x-default. Relative paths compose with `metadataBase`
 * (set in the root layout).
 */
export function alternatesFor(
  lang: Locale,
  suffix: LocalizedSuffix = "",
) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[hreflangByLocale[locale]] = `/${locale}${suffixFor(suffix, locale)}`;
  }
  languages["x-default"] = `/${defaultLocale}${suffixFor(suffix, defaultLocale)}`;
  return {
    canonical: `/${lang}${suffixFor(suffix, lang)}`,
    languages,
  };
}
