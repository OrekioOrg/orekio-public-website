import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Site-wide metadata defaults. Per-locale title/description and per-page
// canonical + hreflang come from the layouts/pages below this one (see
// src/seo.ts); everything here is the shared baseline every route inherits:
// metadataBase (so relative canonical/OG URLs resolve), Open Graph image,
// Twitter card type, robots crawl directives, and search-console verification.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Only a fallback for the "/" redirect stub. The "%s — Orekio" template and
  // per-locale defaults live in src/app/[lang]/layout.tsx; defining a template
  // here too would double the suffix on the locale home pages.
  title: SITE_NAME,
  applicationName: SITE_NAME,
  category: "health",
  keywords: [
    "Orekio",
    "carnet de bord numérique",
    "suivi thérapeutique",
    "agenda du sommeil",
    "échelles cliniques",
    "plan de sécurité",
    "PHQ-9",
    "GAD-7",
    "TCC",
    "psychiatre",
    "psychologue",
    "infirmier en pratique avancée",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Orekio — carnet de bord numérique pour le suivi thérapeutique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Replace with the token from Google Search Console once the property is
  // verified (Settings › Ownership verification › HTML tag).
  // verification: { google: "REPLACE_WITH_TOKEN" },
};

// The true root layout: only <html>/<body>, fonts, and global CSS live
// here, since it wraps both the "/" redirect stub and every /[lang] page,
// and can't know the locale (see src/components/set-html-lang.tsx for how
// the <html lang> attribute is kept in sync once a locale is known).
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
