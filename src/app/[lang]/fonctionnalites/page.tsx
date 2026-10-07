import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/seo";
import { CtaBanner } from "@/components/cta-banner";
import { ModuleGallery } from "@/components/module-gallery";
import { BrowserFrame, PhoneFrame } from "@/components/product-frames";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).features;
  return pageMetadata({
    lang,
    suffix: "/fonctionnalites",
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

export default async function FonctionnalitesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const fullDict = getDictionary(lang);
  const dict = fullDict.features;
  // Le bandeau reprend mot pour mot celui de l'accueil : memes cles.
  const cta = fullDict.home;

  return (
    <>
      {/* En-tête, puis la galerie des modules ouverts : un écran par outil. */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
          {dict.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-[32px] font-medium leading-tight text-on-surface-strong md:text-[40px]">
          {dict.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
          {dict.description}
        </p>

        <div className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
            {dict.gallery.eyebrow}
          </p>
          <h2 className="mt-3 text-[24px] font-medium text-on-surface-strong md:text-[28px]">
            {dict.gallery.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-on-surface-variant">
            {dict.gallery.description}
          </p>
          <div className="mt-10">
            <ModuleGallery
              items={dict.gallery.items}
              previousLabel={dict.gallery.previous}
              nextLabel={dict.gallery.next}
            />
          </div>
        </div>
      </section>

      {/* Les cinq familles en index, une ligne par famille : la liste complète,
          ouverts et à venir. Plus de cinquième carte seule sur sa rangée. */}
      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <ul className="border-t border-outline">
            {dict.categories.map((category) => (
              <li
                key={category.title}
                className="grid gap-4 border-b border-outline py-8 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-4">
                  <h2 className="flex items-center gap-3 text-[20px] font-medium text-on-surface-strong">
                    {/* Le symbole Orekio en puce : deux demi-disques. */}
                    <span
                      aria-hidden="true"
                      className="inline-flex h-3.5 w-3.5 shrink-0 overflow-hidden rounded-full"
                    >
                      <span className="h-full w-1/2 bg-primary" />
                      <span className="h-full w-1/2 bg-accent" />
                    </span>
                    {category.title}
                  </h2>
                  <p className="mt-2 text-[15px] font-light leading-relaxed text-on-surface-variant">
                    {category.tagline}
                  </p>
                </div>
                <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 md:col-span-8">
                  {category.modules.map((module) => (
                    <li
                      key={module.name}
                      className="flex items-start gap-2 text-[15px] text-on-surface"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>
                        {module.name}
                        {/* Sept modules et le PHQ-9 sont ouverts au lancement, revus de
                            bout en bout ; le reste est construit mais s'ouvre au fil
                            des mois. Le drapeau vit sur le module lui-meme. */}
                        {module.fromDayOne ? (
                          <span className="ml-2 inline-block whitespace-nowrap rounded-full bg-primary-container px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.05em] text-primary">
                            {dict.openBadge}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Côté patient : son accueil et ses rappels. */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
          {dict.patientSide.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
          {dict.patientSide.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] font-light leading-relaxed text-on-surface">
          {dict.patientSide.description}
        </p>
        <div className="mx-auto mt-14 grid max-w-3xl gap-12 sm:grid-cols-2 sm:gap-8">
          {dict.patientSide.items.map((item) => (
            <div key={item.src} className="flex flex-col items-center text-center">
              <PhoneFrame src={item.src} alt={item.alt} width={236} intrinsic={[720, 1468]} />
              <h3 className="mt-6 text-[18px] font-medium text-on-surface-strong">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[32ch] text-[15px] font-light leading-relaxed text-on-surface-variant">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Côté praticien : cinq écrans dans l'ordre d'une consultation. La liste
          des patients n'y figure pas : sans le produit autour, elle ne montre
          que des noms. */}
      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
            {dict.practitionerSide.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
            {dict.practitionerSide.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] font-light leading-relaxed text-on-surface">
            {dict.practitionerSide.description}
          </p>
          <ol className="mt-16 space-y-20 md:space-y-28">
            {dict.practitionerSide.steps.map((step, i) => (
              <li
                key={step.src}
                className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                <div className={`md:col-span-4 ${i % 2 ? "md:order-2" : ""}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
                    {String(i + 1).padStart(2, "0")} · {step.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[22px] font-medium leading-snug text-on-surface-strong">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-relaxed text-on-surface-variant">
                    {step.text}
                  </p>
                </div>
                <div className={`md:col-span-8 ${i % 2 ? "md:order-1" : ""}`}>
                  <BrowserFrame
                    src={step.src}
                    alt={step.alt}
                    intrinsic={[1600, step.height]}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Autour des modules : trois colonnes avec un filet, plus de cartes. */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
          {dict.around.title}
        </h2>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {dict.around.cards.map((card) => (
            <div key={card.title} className="border-t border-outline pt-5">
              <h3 className="text-[17px] font-medium text-on-surface-strong">
                {card.title}
              </h3>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-on-surface-variant">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        lang={lang}
        title={cta.ctaSectionTitle}
        description={cta.ctaSectionDescription}
        buttonLabel={cta.ctaSectionButton}
      />
    </>
  );
}
