import type { Metadata } from "next";
import Image from "next/image";
import QRCode from "qrcode";
import { basePath } from "@/base-path";
import { BrowserFrame } from "@/components/product-frames";

// Parcours de test des beta testeurs, version web de l'infographie
// « Découvrez Orekio en 3 étapes ». Hors sitemap et noindex : la page
// n'a de sens que pour qui a reçu le lien.
export const metadata: Metadata = {
  title: "Parcours de test - Orekio",
  description:
    "Découvrez Orekio en 3 étapes : le site vitrine, l'outil du professionnel, puis l'application de vos patients.",
  alternates: { canonical: "/beta" },
  robots: { index: false, follow: false },
};

const OREKIO_APP = "https://orekio.app";
const TALLY = "https://tally.so/r/RWKD24";
const ANDROID_TESTING = "https://play.google.com/apps/testing/com.orekio.app";
const ANDROID_STORE =
  "https://play.google.com/store/apps/details?id=com.orekio.app";
const TESTFLIGHT_APP = "https://apps.apple.com/app/testflight/id899247664";
const TESTFLIGHT_JOIN = "https://testflight.apple.com/join/y6bPGjd6";

const phones = [
  {
    src: "telephone-respiration.webp",
    alt: "Respiration guidée dans l’application patient",
  },
  {
    src: "telephone-accueil.webp",
    alt: "Écran d’accueil de l’application patient",
    main: true,
  },
  {
    src: "telephone-sommeil.webp",
    alt: "Agenda du sommeil dans l’application patient",
  },
];

const stops = [
  { id: "site", label: "Le site vitrine", icon: <GlobeIcon /> },
  { id: "outil", label: "L’outil du professionnel", icon: <LaptopIcon /> },
  { id: "app", label: "L’application patient", icon: <PhoneIcon /> },
];

// The QR codes are rendered to SVG at build time (static export), so the
// page ships no QR library. They let a tester reading this on a computer
// open the store links on their phone without retyping them.
async function qrSvg(url: string) {
  return QRCode.toString(url, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: "#123f3a", light: "#0000" },
  });
}

export default async function BetaPage() {
  const [androidQr, iphoneQr] = await Promise.all([
    qrSvg(ANDROID_TESTING),
    qrSvg(TESTFLIGHT_JOIN),
  ]);

  return (
    <div className="bg-surface text-on-surface">
      {/* Hero : la seule section sombre de la page. */}
      <header className="bg-ink text-on-ink">
        <div className="mx-auto max-w-5xl px-4 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-20">
          <div className="flex items-center justify-between gap-4">
            <a
              href="/fr"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2.5"
            >
              <Image
                src={`${basePath}/brand/orekio-symbole-nav.svg`}
                alt=""
                width={30}
                height={30}
              />
              <span className="text-[19px]">Orekio</span>
            </a>
            <span className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-on-ink/75">
              Parcours de test
            </span>
          </div>

          <h1 className="mt-16 text-[44px] leading-[1.02] font-medium tracking-[-0.03em] text-balance sm:mt-24 md:text-[min(6.4vw,72px)] md:whitespace-nowrap">
            Découvrez Orekio en&nbsp;3&nbsp;étapes
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed font-light text-on-ink/75 sm:text-[20px]">
            Le site vitrine, l’outil du professionnel, puis l’application de
            vos patients.
          </p>

          <nav aria-label="Étapes" className="mt-14 sm:mt-20">
            <ol className="beta-route relative grid grid-cols-3">
              <span
                aria-hidden
                className="beta-route-line absolute top-[27px] right-[16.66%] left-[16.66%] h-px bg-[#4fbdb1]"
              />
              {stops.map((stop, i) => (
                <li key={stop.id} className="relative flex justify-center">
                  <a
                    href={`#${stop.id}`}
                    className="beta-stop group flex flex-col items-center gap-3 text-center"
                    style={{ animationDelay: `${300 + i * 250}ms` }}
                  >
                    <span className="flex size-14 items-center justify-center rounded-full border border-[#4fbdb1]/60 bg-ink text-[#4fbdb1] transition-colors group-hover:bg-[#4fbdb1] group-hover:text-ink [&_svg]:size-6">
                      {stop.icon}
                    </span>
                    <span className="max-w-[9rem] text-[13px] leading-snug text-on-ink/80 sm:text-[15px]">
                      {stop.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-8 sm:py-24">
        <ol>
          <Step
            n={1}
            id="site"
            where="Sur orekio.fr"
            title="Le site vitrine"
          >
            <p>
              Parcourez-le librement, comme si vous découvriez Orekio.
            </p>
            <div className="mt-6">
              <ButtonLink href="/fr" variant="outline">
                Ouvrir orekio.fr
              </ButtonLink>
            </div>
          </Step>

          <Step
            n={2}
            id="outil"
            where="Sur ordinateur"
            title="L’outil du professionnel"
          >
            <p>
              L’application web destinée aux professionnels. Explorez-la
              librement.
            </p>
            <div className="mt-6">
              <ButtonLink href={OREKIO_APP}>Ouvrir orekio.app</ButtonLink>
            </div>
            {/* Capture de l'espace praticien, débordant à droite et en bas. */}
            <div className="mt-8 overflow-hidden rounded-3xl bg-primary-container pt-[6%] pl-[6%]">
              <BrowserFrame
                src="praticien-vue-ensemble.png"
                alt="Vue d’ensemble d’un patient dans orekio.app"
                intrinsic={[1600, 1000]}
                className="-mb-[12%] w-[112%] max-w-none rounded-r-none"
              />
            </div>
          </Step>

          <Step
            n={3}
            id="app"
            where="Sur smartphone"
            title="L’application patient"
            last
          >
            <p>
              L’application que reçoit votre patient, sur Android ou
              iPhone.
            </p>

            {/* Captures de l'app patient, coupées par le bas du cadre. */}
            <div className="relative mt-8 flex aspect-[16/11] items-start justify-center gap-[3%] overflow-hidden rounded-3xl bg-primary-container px-[4%] pt-[7%] sm:aspect-[16/10]">
              {phones.map((phone) => (
                <Image
                  key={phone.src}
                  src={`${basePath}/beta/${phone.src}`}
                  alt={phone.alt}
                  width={620}
                  height={1300}
                  className={
                    phone.main
                      ? "relative z-10 w-[34%] drop-shadow-[0_24px_40px_rgba(18,63,58,0.18)]"
                      : "mt-[9%] w-[28%] drop-shadow-[0_16px_28px_rgba(18,63,58,0.14)]"
                  }
                />
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Platform name="Android" icon={<AndroidIcon />} qr={androidQr}>
                <SubStep n={1} title="Devenir testeur">
                  <InlineLink href={ANDROID_TESTING}>
                    Rejoindre le test sur Google Play
                  </InlineLink>
                </SubStep>
                <SubStep n={2} title="Installer">
                  <InlineLink href={ANDROID_STORE}>
                    Installer Orekio depuis le Play Store
                  </InlineLink>
                </SubStep>
              </Platform>

              <Platform name="iPhone" icon={<AppleIcon />} qr={iphoneQr}>
                <SubStep n={1} title="Installer TestFlight">
                  <InlineLink href={TESTFLIGHT_APP}>
                    TestFlight sur l’App Store
                  </InlineLink>
                </SubStep>
                <SubStep n={2} title="Rejoindre">
                  <InlineLink href={TESTFLIGHT_JOIN}>
                    Ouvrir l’invitation TestFlight
                  </InlineLink>
                </SubStep>
                <SubStep n={3} title="Installer">
                  Touchez «&nbsp;Accepter&nbsp;», puis «&nbsp;Installer&nbsp;».
                </SubStep>
              </Platform>
            </div>

            <div className="mt-4 flex gap-4 rounded-2xl bg-primary-container p-5 text-[15px] leading-relaxed text-on-primary-container">
              <span className="mt-0.5 shrink-0 text-primary">
                <KeyIcon />
              </span>
              <p>
                <span className="font-medium">
                  Se connecter à l’app mobile.
                </span>{" "}
                Les informations de connexion se trouvent sur la fiche
                patient, dans orekio.app&nbsp;: ouvrez la fiche d’un patient de
                démonstration, onglet «&nbsp;Vue d’ensemble&nbsp;», carte
                «&nbsp;Compte de démonstration&nbsp;».
              </p>
            </div>
          </Step>
        </ol>

        {/* Pour finir */}
        <section className="relative mt-20 overflow-hidden rounded-[28px] bg-primary px-6 py-12 text-on-primary sm:mt-28 sm:px-14 sm:py-16">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 size-[22rem] opacity-[0.12] sm:-right-8 sm:-bottom-20"
          >
            <Image
              src={`${basePath}/brand/orekio-symbole-mono-blanc.svg`}
              alt=""
              fill
            />
          </span>
          <div className="relative max-w-lg">
            <h2 className="text-[32px] leading-tight font-medium tracking-[-0.02em] sm:text-[44px]">
              Pour finir, donnez-nous votre avis
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed font-light text-on-primary/80">
              Ce qui vous a paru clair, ce qui a coincé, ce qui manque. Chaque
              retour compte.
            </p>
            <div className="mt-8">
              <a
                href={TALLY}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-full bg-on-primary px-7 py-4 text-[17px] font-medium text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-primary"
              >
                Donner mon avis
                <ExternalIcon />
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 flex items-center justify-between text-[15px] font-light text-on-surface-variant">
          <span>Merci pour votre participation.</span>
          <a
            href="/fr"
            target="_blank"
            rel="noopener"
            className="font-normal text-primary hover:underline"
          >
            orekio.fr
          </a>
        </footer>
      </main>
    </div>
  );
}

function Step({
  n,
  id,
  where,
  title,
  last = false,
  children,
}: {
  n: number;
  id: string;
  where: string;
  title: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li
      id={id}
      className="grid scroll-mt-8 grid-cols-[44px_1fr] gap-x-5 sm:grid-cols-[72px_1fr] sm:gap-x-10"
    >
      {/* Le rail : numéro de l'étape, puis le fil jusqu'à la suivante. */}
      <div className="flex flex-col items-center">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/25 text-[20px] font-light text-primary sm:size-[72px] sm:text-[32px]">
          {n}
        </span>
        {!last && <span aria-hidden className="w-px flex-1 bg-outline" />}
      </div>
      <div className={last ? "" : "pb-16 sm:pb-24"}>
        <p className="pt-2 text-[14px] text-secondary sm:pt-3">{where}</p>
        <h2 className="mt-1 text-[28px] leading-tight font-medium tracking-[-0.02em] text-on-surface-strong sm:text-[40px]">
          {title}
        </h2>
        <div className="mt-4 max-w-2xl text-[17px] leading-[1.65] font-light">
          {children}
        </div>
      </div>
    </li>
  );
}

function Platform({
  name,
  icon,
  qr,
  children,
}: {
  name: string;
  icon: React.ReactNode;
  qr: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-outline bg-surface p-6">
      <div className="flex items-center gap-2.5 text-[19px] font-medium text-on-surface-strong [&_svg]:size-5 [&_svg]:text-primary">
        {icon}
        {name}
      </div>
      <ol className="mt-5 flex flex-1 flex-col gap-4">{children}</ol>
      {/* Sur ordinateur, on scanne plutôt que de recopier l'adresse. */}
      <div className="mt-6 hidden items-center gap-4 border-t border-outline pt-5 md:flex">
        <span
          className="block size-[88px] shrink-0 [&_svg]:size-full"
          dangerouslySetInnerHTML={{ __html: qr }}
          aria-hidden
        />
        <p className="text-[14px] leading-snug text-on-surface-variant">
          Vous lisez ceci sur ordinateur&nbsp;? Scannez ce code avec votre{" "}
          {name} pour ouvrir l’invitation.
        </p>
      </div>
    </div>
  );
}

function SubStep({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3.5">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-container text-[13px] font-medium text-primary">
        {n}
      </span>
      <div className="text-[15px] leading-snug">
        <p className="font-normal text-on-surface-strong">{title}</p>
        <div className="mt-0.5 font-light">{children}</div>
      </div>
    </li>
  );
}

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-secondary underline decoration-secondary/30 underline-offset-[3px] hover:decoration-secondary"
    >
      {children}
    </a>
  );
}

function ButtonLink({
  href,
  variant = "solid",
  children,
}: {
  href: string;
  variant?: "solid" | "outline";
  children: React.ReactNode;
}) {
  const className = `inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[16px] font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
    variant === "solid"
      ? "bg-primary text-on-primary"
      : "border border-primary/30 text-primary"
  }`;
  return (
    <a href={href} target="_blank" rel="noopener" className={className}>
      {children}
      <ExternalIcon />
    </a>
  );
}

// Icônes au trait, 24×24, currentColor.
function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function GlobeIcon() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19" />
      <path d="M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19z" />
    </Svg>
  );
}

function LaptopIcon() {
  return (
    <Svg>
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M2 19h20" />
    </Svg>
  );
}

function PhoneIcon() {
  return (
    <Svg>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </Svg>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.66-.38l-1.87 3.22a11.4 11.4 0 0 0-9.82 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.78.74 2.99.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.65zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.09 1.76-.96 2.8 1.02.08 2.05-.52 2.69-1.28z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <Svg>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Svg>
  );
}

function KeyIcon() {
  return (
    <Svg>
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="m11 12 10-10" />
      <path d="m17 6 3 3" />
    </Svg>
  );
}
