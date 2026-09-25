"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PhoneFrame } from "@/components/product-frames";

export interface GalleryItem {
  /** Fichier dans public/product/, capture réelle en 720 × 1468. */
  src: string;
  name: string;
  family: string;
  alt: string;
}

/*
 * Galerie des modules ouverts : une rangée d'écrans qui défile au doigt, et
 * avec deux flèches sur ordinateur. Jamais de défilement automatique : le
 * visiteur avance quand il le décide. Un module ouvert s'ajoute au
 * dictionnaire, la galerie suit sans autre changement.
 */
export function ModuleGallery({
  items,
  previousLabel,
  nextLabel,
}: {
  items: readonly GalleryItem[];
  previousLabel: string;
  nextLabel: string;
}) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const step = useCallback((direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    // Chaque écran est un point d'arrêt : on vise le suivant ou le précédent
    // par rapport à la position courante, pour ne jamais en sauter un.
    const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const stops = Array.from(
      el.children,
      (li) => (li as HTMLElement).offsetLeft - el.offsetLeft - pad,
    );
    const here = el.scrollLeft;
    const target =
      direction === 1
        ? stops.find((x) => x > here + 4)
        : [...stops].reverse().find((x) => x < here - 4);
    el.scrollTo({ left: target ?? (direction === 1 ? el.scrollWidth : 0), behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      <ul
        ref={track}
        onScroll={measure}
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-8 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <li key={item.src} className="flex shrink-0 snap-start flex-col items-center">
            <PhoneFrame src={item.src} alt={item.alt} width={220} intrinsic={[720, 1468]} />
            <p className="mt-5 text-[16px] font-medium text-on-surface-strong">{item.name}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
              {item.family}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-6 hidden justify-end gap-3 md:flex">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={edges.start}
          aria-label={previousLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline bg-surface text-on-surface-strong transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-default disabled:opacity-35 disabled:hover:bg-surface"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={edges.end}
          aria-label={nextLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline bg-surface text-on-surface-strong transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-default disabled:opacity-35 disabled:hover:bg-surface"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
