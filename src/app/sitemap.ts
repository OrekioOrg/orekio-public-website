import type { MetadataRoute } from "next";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import {
  absoluteUrl,
  hreflangByLocale,
  indexableRouteSuffixes,
} from "@/site";
import { getArticles, getArticleLocales } from "@/blog";

// Statically emitted at build time (output: "export") to out/sitemap.xml.
// Static routes (keyed on the French URL) + every published blog article,
// each with xhtml:link alternates for the locales it actually exists in so
// Google pairs the fr/en versions. Placeholder legal pages are excluded
// (they're noindex) — see src/site.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = indexableRouteSuffixes.map(
    (suffix) => {
      const languages: Record<string, string> = {};
      for (const locale of locales) {
        languages[hreflangByLocale[locale]] = absoluteUrl(locale, suffix);
      }
      languages["x-default"] = absoluteUrl(defaultLocale, suffix);

      return {
        url: absoluteUrl(defaultLocale, suffix),
        lastModified,
        changeFrequency: suffix === "" || suffix === "/blog" ? "weekly" : "monthly",
        priority: suffix === "" ? 1 : 0.8,
        alternates: { languages },
      };
    },
  );

  // One entry per (slug), keyed on its French version when it exists,
  // otherwise its first available locale.
  const seen = new Set<string>();
  const articleEntries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const article of getArticles(locale)) {
      if (seen.has(article.slug)) continue;
      seen.add(article.slug);

      const available = getArticleLocales(article.slug);
      const primary: Locale = available.includes(defaultLocale)
        ? defaultLocale
        : available[0];
      const suffix = `/blog/${article.slug}`;

      const languages: Record<string, string> = {};
      for (const l of available) {
        languages[hreflangByLocale[l]] = absoluteUrl(l, suffix);
      }
      languages["x-default"] = absoluteUrl(primary, suffix);

      articleEntries.push({
        url: absoluteUrl(primary, suffix),
        lastModified: new Date(article.updated ?? article.date),
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return [...staticEntries, ...articleEntries];
}

export const dynamic = "force-static";
