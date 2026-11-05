import { Bagel_Fat_One } from "next/font/google";
import { BlurredPrices } from "@/components/blurred-prices";
import type { PricingPlan } from "@/i18n/dictionaries/fr";
import { APP_URL } from "@/site";

// Chargee ici plutot que dans le layout : seule la page Tarifs l'utilise.
const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
});

const themes = {
  zelai: {
    card: "border-ink bg-surface shadow-[0_16px_32px_-20px_rgba(18,63,58,0.25)]",
    title: "plan-title--zelai",
    price: "text-ink",
    secondary: "text-on-surface-variant",
    divider: "bg-outline",
    features: "text-on-surface",
    strong: "text-ink",
    check: { circle: "#eaf6f5", path: "#1a6b63" },
    offer: "small_practice",
    cta: "bg-primary text-on-primary shadow-[0_3px_0_var(--color-ink)]",
  },
  mendi: {
    card: "border-accent bg-ink shadow-[0_16px_32px_-20px_rgba(18,63,58,0.45)]",
    title: "plan-title--mendi",
    price: "text-on-ink",
    secondary: "text-[#b7ddd9]",
    divider: "bg-on-ink/18",
    features: "text-[#e4f2f0]",
    strong: "text-on-ink",
    check: { circle: "#6bc9bf", path: "#123f3a" },
    offer: "large_practice",
    cta: "bg-accent text-[#0b2926] shadow-[0_3px_0_var(--color-primary)]",
  },
};

function Check({ circle, path }: { circle: string; path: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="12" fill={circle} />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        fill="none"
        stroke={path}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlanCard({
  plan,
  ctaLabel,
}: {
  plan: PricingPlan;
  ctaLabel: string;
}) {
  const theme = themes[plan.theme];

  return (
    <article
      className={`relative flex min-w-0 flex-col rounded-3xl border-2 px-6 pb-7 lg:px-8 ${theme.card}`}
    >
      {/* Pose en absolu sur la bordure : un vrai <legend> couperait le trait. */}
      <h2 className={`plan-title ${theme.title} ${bagelFatOne.className}`}>
        {plan.name}
      </h2>

      <div className="flex flex-1 flex-col pt-7">
        <p
          className={`mt-5 flex flex-wrap items-baseline gap-x-2 text-[40px] font-semibold leading-none tracking-[-1px] lg:text-[44px] ${theme.price}`}
        >
          <span>
            <BlurredPrices text={plan.price} />
          </span>
          <span
            className={`text-[15px] font-medium tracking-normal ${theme.secondary}`}
          >
            {plan.period}
          </span>
        </p>
        <p className={`mt-1.5 text-[14px] ${theme.secondary}`}>
          <BlurredPrices text={plan.priceExclVat} />
        </p>

        <div className={`my-5 h-px ${theme.divider}`} />

        <ul
          className={`flex flex-col gap-2.5 text-[15px] ${theme.features}`}
        >
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <Check {...theme.check} />
              <span>
                {/* Le nombre de patients ressort en gras. */}
                {feature.split(/(\d+)/).map((part, index) =>
                  index % 2 === 1 ? (
                    <strong
                      key={index}
                      className={`font-semibold ${theme.strong}`}
                    >
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </span>
            </li>
          ))}
        </ul>


        {/* mt-auto : les boutons s'alignent en bas des deux cartes. */}
        <div className="mt-auto pt-5">
          <a
            href={`${APP_URL}/inscription/offre?offre=${theme.offer}`}
            className={`flex min-h-11 items-center justify-center rounded-full text-center text-[15px] font-semibold transition-opacity hover:opacity-90 ${theme.cta}`}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
