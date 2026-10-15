import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/base-path";
import { FeedbackForm } from "./feedback-form";

// Questionnaire des beta testeurs, version intégrée du formulaire Tally.
// Noindex et hors sitemap, comme /beta.
export const metadata: Metadata = {
  title: "Questionnaire bêta - Orekio",
  description: "Donnez-nous votre avis sur Orekio.",
  alternates: { canonical: "/beta/avis" },
  robots: { index: false, follow: false },
};

export default function BetaFeedbackPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="bg-ink text-on-ink">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-5 sm:px-8">
          <Link href="/beta" className="flex items-center gap-2.5">
            <Image
              src={`${basePath}/brand/orekio-symbole-nav.svg`}
              alt=""
              width={28}
              height={28}
            />
            <span className="text-[18px]">Orekio</span>
          </Link>
          <Link
            href="/beta"
            className="rounded-full border border-white/15 px-3 py-1 text-[13px] whitespace-nowrap text-on-ink/75 transition-colors hover:text-on-ink"
          >
            Parcours de test
          </Link>
        </div>
        <div className="mx-auto max-w-3xl px-4 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16">
          <h1 className="text-[34px] leading-[1.05] font-medium tracking-[-0.03em] sm:text-[56px]">
            Questionnaire bêta
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-8 sm:py-14">
        <FeedbackForm />
      </main>
    </div>
  );
}
