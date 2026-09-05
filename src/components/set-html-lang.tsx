"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

// The <html lang="..."> attribute can only be set by the true root layout
// (app/layout.tsx), which sits above the [lang] segment and doesn't know
// the current locale. This syncs it client-side once the locale is known.
export function SetHtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
