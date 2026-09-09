import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/site";
import "../globals.css";

// Minimal root layout for the "/" redirect stub only. The real site lives
// under app/[lang], whose own root layout sets <html lang> to the actual
// locale (see app/[lang]/layout.tsx). "/" always redirects to the French
// home page, so "fr" is correct here.
//
// This is a second root layout (multiple root layouts via the (redirect)
// route group); there is deliberately no top-level app/layout.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
};

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
