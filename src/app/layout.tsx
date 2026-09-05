import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
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

// Generic fallback only: the actual per-locale title/description come from
// src/app/[lang]/layout.tsx's generateMetadata, which sits below this root
// layout. This one only ever renders for the "/" redirect stub.
export const metadata: Metadata = {
  title: "Orekio",
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
