"use client";

import { useEffect, useState } from "react";

/**
 * Bouton « Donner mon avis » flottant : il apparaît une fois le header
 * dépassé, pour que le questionnaire reste à portée pendant tout le parcours,
 * et s'efface quand le bloc final, qui porte le même appel, atteint le milieu
 * de l'écran.
 */
export function FloatingFeedback({
  href,
  heroId,
  endId,
}: {
  href: string;
  heroId: string;
  endId: string;
}) {
  const [pastHero, setPastHero] = useState(false);
  const [endReached, setEndReached] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const end = document.getElementById(endId);
    if (!hero || !end) return;
    const heroObs = new IntersectionObserver(([e]) =>
      setPastHero(!e.isIntersecting),
    );
    // La moitié basse de l'écran est retirée de la zone observée : le bloc
    // final « compte » dès que son haut passe le milieu de l'écran, et reste
    // compté une fois dépassé (le pied de page, en dessous, est court).
    const endObs = new IntersectionObserver(
      ([e]) => setEndReached(e.isIntersecting || e.boundingClientRect.top < 0),
      { rootMargin: "0px 0px -50% 0px" },
    );
    heroObs.observe(hero);
    endObs.observe(end);
    return () => {
      heroObs.disconnect();
      endObs.disconnect();
    };
  }, [heroId, endId]);

  const shown = pastHero && !endReached;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-300 ease-out motion-reduce:transition-none sm:justify-end sm:px-8 sm:pb-8 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener"
        tabIndex={shown ? 0 : -1}
        aria-hidden={!shown}
        className={`inline-flex items-center gap-3 rounded-full bg-primary py-3.5 pr-6 pl-5 text-[16px] font-medium text-on-primary shadow-[0_12px_32px_-8px_rgba(18,63,58,0.55)] ring-1 ring-white/10 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
          shown ? "pointer-events-auto" : ""
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.4-5.6A8.5 8.5 0 1 1 21 12z" />
        </svg>
        Donner mon avis
      </a>
    </div>
  );
}
