import Link from "next/link";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { CtaBanner } from "@/components/cta-banner";
import { BrowserFrame, PhoneFrame } from "@/components/product-frames";
import { softwareApplicationSchema } from "@/structured-data";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const fullDict = getDictionary(lang);
  const dict = fullDict.home;

  return (
    <>
      <JsonLd data={softwareApplicationSchema(lang, fullDict)} />

      {/* Haut de page : la section de rupture vert profond de la page (la charte
          n'en admet qu'une, d'où le bandeau de fin sur fond clair). Trois écrans
          réels de l'application patient, coupés par le bas de la section ; le
          suivi quotidien au centre, seul sur téléphone. */}
      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-6 pt-20 text-center md:pt-24">
          {/* Sur l'accueil, le surtitre porte le concept (l'armoire) : il prend
              la taille d'un enonce, pas celle d'un libelle de section. */}
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent md:text-[13px]">
            {dict.eyebrow}
          </p>
          <h1 className="mt-6 text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-on-ink md:text-[52px]">
            {dict.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-light leading-relaxed text-on-ink/75">
            {dict.description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href={`/${lang}/contact`}
              className="rounded-lg bg-accent px-6 py-3 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
            >
              {dict.ctaSubscribe}
            </Link>
            <Link
              href={`/${lang}/fonctionnalites`}
              className="rounded-lg border border-on-ink/25 px-6 py-3 text-[15px] font-medium text-on-ink transition-colors hover:bg-on-ink/10"
            >
              {dict.ctaFeatures}
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 h-[330px] max-w-5xl overflow-hidden px-6 md:h-[380px]">
          <div className="flex items-start justify-center gap-5 md:gap-8">
            <PhoneFrame
              src="sommeil-accueil.png"
              alt={dict.screens.sleep}
              width={210}
              intrinsic={[720, 1209]}
              onDark
              className="mt-14 hidden sm:block"
            />
            <PhoneFrame
              src="suivi-saisie.png"
              alt={dict.screens.tracking}
              width={262}
              intrinsic={[720, 1468]}
              onDark
              priority
            />
            <PhoneFrame
              src="respiration-coherence.png"
              alt={dict.screens.breathing}
              width={210}
              intrinsic={[720, 1468]}
              onDark
              className="mt-14 hidden sm:block"
            />
          </div>
        </div>
      </section>

      {/* Orekio est un outil double : un espace web pour le praticien, une app
          mobile pour le patient. Un écran par surface, chacun au-dessus du texte
          qui le décrit ; sur téléphone, chaque texte suit son écran. */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="max-w-2xl text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
          {dict.apps.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] font-light leading-relaxed text-on-surface">
          {dict.apps.description}
        </p>
        <div className="mt-12 grid items-end gap-12 md:grid-cols-12 md:gap-10">
          <div className="order-1 md:order-none md:col-span-8">
            <BrowserFrame
              src="praticien-courbes-zoom.png"
              alt={dict.screens.practitioner}
              intrinsic={[1600, 990]}
            />
          </div>
          <div className="order-3 flex justify-center md:order-none md:col-span-4">
            <PhoneFrame
              src="accueil-patient.png"
              alt={dict.screens.patientHome}
              width={236}
              intrinsic={[720, 1468]}
            />
          </div>
          {dict.apps.cards.map((card, i) => (
            <div
              key={card.title}
              className={`border-t border-outline pt-5 md:order-none ${
                i === 0 ? "order-2 md:col-span-8" : "order-4 md:col-span-4"
              }`}
            >
              <h3 className="text-[18px] font-medium text-on-surface-strong">
                {card.title}
              </h3>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-on-surface-variant">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Les cinq familles en index éditorial, une ligne par famille : plus de
          grille de cartes, donc plus de cinquième carte seule sur sa rangée. */}
      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <h2 className="max-w-2xl text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
            {dict.section2Title}
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] font-light leading-relaxed text-on-surface">
            {dict.section2Description}
          </p>
          <ul className="mt-12 border-t border-outline">
            {dict.highlights.map((item) => (
              <li
                key={item.title}
                className="grid gap-2 border-b border-outline py-6 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <h3 className="flex items-center gap-3 text-[20px] font-medium text-on-surface-strong md:col-span-3">
                  {/* Le symbole Orekio en puce : deux demi-disques. */}
                  <span
                    aria-hidden="true"
                    className="inline-flex h-3.5 w-3.5 shrink-0 overflow-hidden rounded-full"
                  >
                    <span className="h-full w-1/2 bg-primary" />
                    <span className="h-full w-1/2 bg-accent" />
                  </span>
                  {item.title}
                </h3>
                <p className="text-[15px] font-light leading-relaxed text-on-surface-variant md:col-span-9">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-on-surface-variant">
            {dict.highlightsNote}
          </p>
        </div>
      </section>

      {/* La phrase qui fonde le statut du produit, sortie du paragraphe. */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
          {dict.manifesto.eyebrow}
        </p>
        <p className="mt-6 text-[26px] font-light leading-[1.35] text-on-surface-strong md:text-[34px]">
          {dict.manifesto.text}
        </p>
      </section>

      <CtaBanner
        lang={lang}
        title={dict.ctaSectionTitle}
        description={dict.ctaSectionDescription}
        buttonLabel={dict.ctaSectionButton}
        tone="light"
      />
    </>
  );
}
