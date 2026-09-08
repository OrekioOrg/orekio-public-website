"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = { href: string; label: string };

export function MobileMenu({
  navLinks,
  subscribeHref,
  subscribeLabel,
  openLabel,
  closeLabel,
}: {
  navLinks: NavLink[];
  subscribeHref: string;
  subscribeLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        className="flex h-10 w-10 items-center justify-center text-on-ink"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-[58px] z-50 flex flex-col gap-1 border-t border-on-ink/10 bg-ink px-6 py-4 text-on-ink"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-[16px] text-on-ink/75 transition-colors hover:bg-on-ink/5 hover:text-on-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={subscribeHref}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-accent px-4 py-3 text-center text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
          >
            {subscribeLabel}
          </Link>
        </nav>
      )}
    </div>
  );
}
