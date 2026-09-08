import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import {
  SITE_NAME,
  absoluteUrl,
  alternatesFor,
  ogLocaleByLocale,
} from "@/site";

// Static OG image committed at public/og.png (see scripts/generate-og.mjs).
export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Orekio — carnet de bord numérique pour le suivi thérapeutique",
};

interface PageMetaInput {
  lang: Locale;
  /** Path after "/<lang>", e.g. "/tarifs". "" for the locale home page. */
  suffix?: string;
  /** Raw page title (without the "— Orekio" suffix; the layout template adds it). */
  title: string;
  description: string;
  /** Set false for thin/placeholder pages that shouldn't rank (legal drafts). */
  index?: boolean;
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
}: PageMetaInput): Metadata {
  const url = absoluteUrl(lang, suffix);
  const ogTitle = suffix === "" ? title : `${title} — ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: alternatesFor(lang, suffix),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: ogLocaleByLocale[lang],
      url,
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE.url],
    },
    robots: index
      ? undefined
      : { index: false, follow: true },
  };
}
