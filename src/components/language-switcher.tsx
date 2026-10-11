"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { routes, type RouteKey } from "@/site";

// Swaps the leading /fr or /en path segment and translates the page slug
// when it differs per locale (e.g. /fr/tarifs -> /en/pricing), so switching
// language stays on the same page rather than bouncing back to the home page.
function pathForLocale(pathname: string, current: Locale, locale: Locale): string {
  const rest = pathname.replace(/^\/[^/]+/, "").replace(/\.html$/, "");
  const key = (Object.keys(routes) as RouteKey[]).find(
    (k) => routes[k][current] !== "" && routes[k][current] === rest,
  );
  return `/${locale}${key ? routes[key][locale] : rest}`;
}

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-[13px] font-medium text-on-ink/75">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          {index > 0 && <span aria-hidden="true">/</span>}
          <Link
            href={pathForLocale(pathname, current, locale)}
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
