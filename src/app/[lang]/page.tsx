import Link from "next/link";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { DemoVideo } from "@/components/demo-video";
import { DemoForm } from "@/components/demo-form";
import { HomeFaq } from "@/components/home-faq";
import { BrowserFrame, PhoneFrame } from "@/components/product-frames";
import { softwareApplicationSchema, videoSchema } from "@/structured-data";
import { pathTo, SIGNUP_URL } from "@/site";

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
  const video = videoSchema(lang, fullDict);

  return (
    <>
      <JsonLd data={softwareApplicationSchema(lang, fullDict)} />
      {video ? <JsonLd data={video} /> : null}

      {/* Haut de page : la section de rupture vert profond de la page (la charte
          n'en admet qu'une, d'où le bandeau de fin sur fond clair). Peu de texte,
          pour que le produit se voie d'emblée : l'espace praticien et le
          téléphone du patient, coupés par le bas ; le téléphone seul sur petit
          écran. */}
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 pt-14 text-center md:pt-16">
          <h1 className="text-balance text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-on-ink md:text-[52px]">
            {dict.title}
          </h1>
          <p className="text-balance text-[18px] font-light leading-relaxed text-on-ink md:text-[20px]">
            {dict.lead}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={SIGNUP_URL}
              data-umami-event="inscription"
              className="rounded-lg bg-accent px-6 py-3 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90"
            >
              {dict.ctaSubscribe}
            </a>
            <a
              href="#demo"
              data-umami-event="demo"
              className="rounded-lg border border-on-ink/25 px-6 py-3 text-[15px] font-medium text-on-ink transition-colors hover:bg-on-ink/10"
            >
              {dict.ctaDemo}
            </a>
          </div>
          <ul className="mt-6 flex flex-col items-center gap-y-1.5 text-[14px] text-on-ink/75 md:flex-row md:flex-wrap md:justify-center md:gap-x-7">
            {dict.reassurance.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-12 h-[320px] max-w-5xl overflow-hidden px-6 sm:h-[400px] md:h-[460px]">
          <div className="relative">
            <BrowserFrame
              src="praticien-courbes-zoom.png"
              alt={dict.screens.practitioner}
              intrinsic={[1600, 990]}
              priority
              className="mr-20 hidden sm:block md:mr-28"
            />
            <PhoneFrame
              src="accueil-patient.png"
              alt={dict.screens.patientHome}
              width={226}
              intrinsic={[720, 1468]}
              onDark
              priority
              className="mx-auto sm:absolute sm:right-0 sm:top-12"
            />
          </div>
        </div>
      </section>
      <p className="mx-auto max-w-6xl px-6 pt-5 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-on-surface-variant">
        {dict.screensCaption}
      </p>

      {/* Le parcours en quatre temps, dans l'ordre où il se vit. La vidéo, quand
          elle est branchée (src/integrations.ts), le précède. */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
          {dict.how.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
          {dict.how.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] font-light leading-relaxed text-on-surface">
          {dict.how.description}
        </p>
        <DemoVideo lang={lang} title={dict.how.videoTitle} className="mt-12" />
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {dict.how.steps.map((step, i) => (
            <li key={step.title} className="border-t border-outline pt-5">
              <span
                aria-hidden="true"
                className="font-mono text-[11px] tracking-[0.12em] text-secondary"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[18px] font-medium text-on-surface-strong">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-on-surface-variant">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Le carnet de consultation, juste après le parcours : c'est ce qui relie
          les deux applications. Les deux faces côte à côte, le téléphone en
          premier ; le détail est sur Fonctionnalités. */}
      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
            {dict.notebook.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
            {dict.notebook.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] font-light leading-relaxed text-on-surface">
            {dict.notebook.text}
          </p>
          <div className="mt-12 grid items-center gap-12 md:grid-cols-12 md:gap-10">
            <div className="flex justify-center md:col-span-4">
              <PhoneFrame
                src="carnet-recapitulatif.png"
                alt={dict.notebook.patientAlt}
                width={236}
                intrinsic={[720, 1468]}
              />
            </div>
            <div className="md:col-span-8">
              <BrowserFrame
                src="praticien-vue-ensemble.png"
                alt={dict.notebook.practitionerAlt}
                intrinsic={[1600, 1000]}
              />
            </div>
          </div>
          <p className="mt-10">
            <Link
              href={`${pathTo(lang, "features")}#carnet`}
              className="text-[15px] font-medium text-secondary underline"
            >
              {dict.notebook.link}
            </Link>
          </p>
        </div>
      </section>

      {/* Les cinq familles en index éditorial, une ligne par famille : plus de
          grille de cartes, donc plus de cinquième carte seule sur sa rangée. */}
      <section>
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
          <p className="mt-6">
            <Link
              href={pathTo(lang, "features")}
              className="text-[15px] font-medium text-secondary underline"
            >
              {dict.ctaFeatures}
            </Link>
          </p>
        </div>
      </section>

      {/* La phrase qui fonde le statut du produit, puis ce qui vaut pour les
          données. Même fond que la section des familles : un filet les sépare. */}
      <section className="mx-auto max-w-6xl border-t border-outline px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
            {dict.manifesto.eyebrow}
          </p>
          <p className="mt-6 text-[26px] font-light leading-[1.35] text-on-surface-strong md:text-[34px]">
            {dict.manifesto.text}
          </p>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {dict.trust.items.map((item) => (
            <div key={item.title} className="border-t border-outline pt-5">
              <h3 className="text-[17px] font-medium text-on-surface-strong">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-on-surface-variant">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Les questions qui reviennent le plus avant d'essayer, puis la FAQ entière. */}
      <HomeFaq dict={fullDict} href={pathTo(lang, "faq")} />

      {/* La fin de page : essayer, ou demander une démonstration sans quitter
          l'accueil. Les liens « démo » du site mènent ici. */}
      <section id="demo" className="bg-surface-container-low">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div>
            <h2 className="text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
              {dict.ctaSectionTitle}
            </h2>
            <p className="mt-4 max-w-md text-[16px] font-light leading-relaxed text-on-surface">
              {dict.ctaSectionDescription}
            </p>
            <a
              href={SIGNUP_URL}
              data-umami-event="inscription"
              className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90"
            >
              {dict.ctaSectionButton}
            </a>
          </div>
          <div className="rounded-[10px] bg-ink p-6 text-on-ink md:p-8">
            <DemoForm copy={fullDict.demo} />
          </div>
        </div>
      </section>
    </>
  );
}
