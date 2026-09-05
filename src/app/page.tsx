import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/base-path";

const HIGHLIGHTS = [
  {
    title: "Agenda du sommeil",
    description:
      "Le patient note ses nuits, le praticien relit l'historique en consultation.",
  },
  {
    title: "Échelles cliniques validées",
    description: "PHQ-9, GAD-7, EPDS et d'autres, fidèles à leur version validée.",
  },
  {
    title: "Plan de sécurité",
    description:
      "Un plan de crise construit avec le patient, disponible à tout moment.",
  },
  {
    title: "Colonnes de Beck, roue des émotions...",
    description:
      "Plus de 30 modules thérapeutiques débloqués progressivement par le praticien.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="bg-primary-container">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
              Carnet de bord numérique
            </p>
            <h1 className="mt-4 text-[32px] font-medium leading-[1.15] text-on-primary-container md:text-[42px]">
              L&apos;accompagnement thérapeutique, entre les séances
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-on-surface">
              Orekio relie le praticien et son patient entre les consultations.
              Le praticien débloque des outils au fil du suivi, le patient les
              utilise sur son téléphone. Rien n&apos;est interprété, tout reste
              disponible pour la prochaine séance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tarifs"
                className="rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90"
              >
                S&apos;abonner à Orekio
              </Link>
              <Link
                href="/fonctionnalites"
                className="rounded-lg border border-outline px-6 py-3 text-[15px] font-medium text-on-surface-strong transition-colors hover:bg-surface"
              >
                Découvrir les fonctionnalités
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src={`${basePath}/brand/orekio-symbole.svg`}
              alt=""
              width={200}
              height={200}
              className="h-40 w-40 md:h-56 md:w-56"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-[26px] font-medium text-on-surface-strong">
          Un outil pensé pour le suivi, pas pour le diagnostic
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
          Orekio est un carnet de bord numérique : les données du patient
          restent brutes, sans interprétation ni alerte automatique. Le
          praticien garde la main sur ce qu&apos;il débloque, et sur ce qu&apos;il en
          fait en consultation.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-outline bg-surface p-6"
            >
              <h3 className="text-[16px] font-medium text-on-surface-strong">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-[26px] font-medium text-on-ink">
            Prêt à essayer Orekio avec vos patients&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-on-ink/80">
            Choisissez une offre et retrouvez votre armoire thérapeutique dès
            aujourd&apos;hui.
          </p>
          <Link
            href="/tarifs"
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
          >
            Voir les tarifs
          </Link>
        </div>
      </section>
    </>
  );
}
