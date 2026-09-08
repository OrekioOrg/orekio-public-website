import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import {
  SITE_NAME,
  absoluteUrl,
  alternatesFor,
  hreflangByLocale,
  ogLocaleByLocale,
} from "@/site";

// Static OG image committed at public/og.png (see scripts/generate-og.mjs).
export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Orekio — carnet de bord numérique pour le suivi thérapeutique",
};

interface ArticleMeta {
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

interface PageMetaInput {
  lang: Locale;
  /** Path after "/<lang>", e.g. "/tarifs". "" for the locale home page. */
  suffix?: string;
  /** Raw page title (without the "— Orekio" suffix; the layout template adds it). */
  title: string;
  description: string;
  /** Set false for thin/placeholder pages that shouldn't rank (legal drafts). */
  index?: boolean;
  /** Absolute-from-root image path for OG/Twitter; defaults to the site image. */
  image?: string;
  /** When set, makes this an og:type=article with the given dates/authors. */
  article?: ArticleMeta;
  /**
   * Locales this exact page exists in. Defaults to all. Pass a subset for
   * content (e.g. an article only translated to French) so hreflang doesn't
   * point at 404s.
   */
  availableLocales?: Locale[];
}

function alternatesForSubset(
  lang: Locale,
  suffix: string,
  available: Locale[],
) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    if (available.includes(locale)) {
      languages[hreflangByLocale[locale]] = `/${locale}${suffix}`;
    }
  }
  const xDefault = available.includes(defaultLocale)
    ? defaultLocale
    : available[0];
  if (xDefault) languages["x-default"] = `/${xDefault}${suffix}`;
  return { canonical: `/${lang}${suffix}`, languages };
}

/**
 * Builds a complete, per-page Metadata object: canonical + hreflang
 * alternates, Open Graph, Twitter card, and robots directives. Every
 * page's generateMetadata should return this so search engines get a
 * consistent, unambiguous picture of the fr/en URL pair.
 */
export function pageMetadata({
  lang,
  suffix = "",
  title,
  description,
  index = true,
  image,
  article,
  availableLocales,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(lang, suffix);
  const ogTitle = suffix === "" ? title : `${title} — ${SITE_NAME}`;
  const ogImage = image
    ? { url: image, width: 1200, height: 630, alt: title }
    : OG_IMAGE;

  const alternates =
    availableLocales && availableLocales.length > 0
      ? alternatesForSubset(lang, suffix, availableLocales)
      : alternatesFor(lang, suffix);

  return {
    title,
    description,
    alternates,
    openGraph: {
      type: article ? "article" : "website",
      siteName: SITE_NAME,
      locale: ogLocaleByLocale[lang],
      url,
      title: ogTitle,
      description,
      images: [ogImage],
      ...(article
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: article.authors,
            tags: article.tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage.url],
    },
    robots: index ? undefined : { index: false, follow: true },
  };
}
