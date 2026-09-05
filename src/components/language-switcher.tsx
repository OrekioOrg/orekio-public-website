"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

// Swaps the leading /fr or /en path segment, keeping the rest of the URL
// (e.g. /fr/tarifs -> /en/tarifs), so switching language stays on the same
// page rather than bouncing back to the home page.
function pathForLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || "/";
}

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-[13px] font-medium text-on-ink/75">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          {index > 0 && <span aria-hidden="true">/</span>}
          <Link
            href={pathForLocale(pathname, locale)}
            aria-current={locale === current ? "true" : undefined}
            className={
              locale === current
                ? "text-on-ink"
                : "transition-colors hover:text-on-ink"
            }
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
