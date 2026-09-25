"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

/** Vrai si la page affichée est ce lien ou l'une de ses sous-pages (un article du blog). */
export function isCurrent(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  const path = pathname.replace(/\.html$/, "").replace(/\/$/, "");
  return path === href || path.startsWith(`${href}/`);
}

/*
 * Menu principal, sur ordinateur. La page courante se lit d'un coup d'œil :
 * texte plein et un trait teal dessous (le teal en ponctuation, jamais en
 * aplat), et `aria-current` pour les lecteurs d'écran.
 */
export function SiteNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  return (
    <nav className="hidden gap-8 md:flex">
      {links.map((link) => {
        const current = isCurrent(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current ? "page" : undefined}
            className={`relative py-1 text-[15px] transition-colors hover:text-on-ink ${
              current
                ? "text-on-ink after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-accent"
                : "text-on-ink/75"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
