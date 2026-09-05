import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "Orekio — L'accompagnement thérapeutique, entre les séances",
  description:
    "Orekio relie le praticien et son patient entre les consultations : agenda du sommeil, échelles cliniques validées, plan de sécurité, et bien plus. Un carnet de bord numérique, pas un dispositif médical.",
};

const NAV_LINKS = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-ink text-on-ink">
          <div className="mx-auto flex h-[58px] max-w-6xl items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/orekio-symbole-nav.svg"
                alt="Orekio"
                width={28}
                height={28}
              />
              <span className="text-[18px] font-normal">Orekio</span>
            </Link>
            <nav className="hidden gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-on-ink/75 transition-colors hover:text-on-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/tarifs"
              className="rounded-lg bg-accent px-4 py-2 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
            >
              S&apos;abonner
            </Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-outline bg-surface-container-low">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/orekio-symbole-mono-teal.svg"
                  alt="Orekio"
                  width={24}
                  height={24}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-on-surface-variant">
                  Orekio &mdash; Carnet de bord numérique
                </span>
              </div>
              <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-on-surface-variant">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-on-surface-strong"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <p className="mt-8 max-w-3xl font-mono text-[11px] leading-relaxed text-on-surface-variant">
              Orekio est un carnet de bord numérique, pas un dispositif médical au
              sens du règlement (UE) 2017/745. Les données affichées sont brutes :
              l&apos;application ne les interprète jamais, n&apos;émet aucune alerte et
              ne pose aucun diagnostic.
            </p>
            <p className="mt-4 font-mono text-[11px] text-on-surface-variant">
              © {new Date().getFullYear()} Orekio
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
