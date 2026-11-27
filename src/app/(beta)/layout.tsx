import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import { SITE_URL } from "@/site";
import "../globals.css";

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

// Root layout for /beta, the test path handed to beta testers. It lives
// outside app/[lang] so the short URL orekio.fr/beta works as-is, and it
// has no site header/footer: the page stands alone, like the printed
// infographic it replaces. French only, so <html lang="fr">.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function BetaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
