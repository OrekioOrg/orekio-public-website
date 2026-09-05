import Link from "next/link";
import { basePath } from "@/base-path";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// "/" has no locale of its own. A static export can't redirect at the
// server/host level (no middleware, no redirects config), so this uses a
// <meta http-equiv="refresh"> — honored without JavaScript, including by
// most crawlers — with a visible fallback link for the rare case it isn't.
// The <meta> tag renders outside <head> here; React 19 hoists it there
// automatically (this file is nested inside app/layout.tsx's <body>, which
// is the actual root <html>/<head>/<body> — see that file for why).
export default function RootPage() {
  const dict = getDictionary(defaultLocale);

  return (
    <>
      <meta
        httpEquiv="refresh"
        content={`0; url=${basePath}/${defaultLocale}`}
      />
      <p>
        <Link href={`/${defaultLocale}`}>{dict.home.title}</Link>
      </p>
    </>
  );
}
