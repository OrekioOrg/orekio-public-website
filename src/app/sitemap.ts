import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import {
  absoluteUrl,
  hreflangByLocale,
  indexableRouteSuffixes,
} from "@/site";

// Statically emitted at build time (output: "export") to out/sitemap.xml.
// One <url> per indexable route suffix, keyed on the French URL, with
// xhtml:link alternates for every locale so Google pairs the fr/en versions.
// Placeholder legal pages are excluded (they're noindex) — see src/site.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexableRouteSuffixes.map((suffix) => {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[hreflangByLocale[locale]] = absoluteUrl(locale, suffix);
    }
    languages["x-default"] = absoluteUrl("fr", suffix);

    const priority = suffix === "" ? 1 : 0.8;

    return {
      url: absoluteUrl("fr", suffix),
      lastModified,
      changeFrequency: suffix === "" ? "weekly" : "monthly",
      priority,
      alternates: { languages },
    };
  });
}

export const dynamic = "force-static";
