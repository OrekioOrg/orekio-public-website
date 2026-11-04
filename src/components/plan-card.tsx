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
    card: "border-ink bg-surface shadow-[0_30px_60px_-24px_rgba(18,63,58,0.3)]",
    title: "plan-title--zelai",
    price: "text-ink",
    secondary: "text-on-surface-variant",
    divider: "bg-outline",
    features: "text-on-surface",
    strong: "text-ink",
    check: { circle: "#eaf6f5", path: "#1a6b63" },
    note: "bg-primary-container text-ink",
    noteLabel: "",
    cta: "bg-primary text-on-primary shadow-[0_6px_0_var(--color-ink)]",
  },
  mendi: {
    card: "border-accent bg-ink shadow-[0_30px_60px_-24px_rgba(18,63,58,0.6)]",
    title: "plan-title--mendi",
    price: "text-on-ink",
    secondary: "text-[#b7ddd9]",
    divider: "bg-on-ink/18",
    features: "text-[#e4f2f0]",
    strong: "text-on-ink",
    check: { circle: "#6bc9bf", path: "#123f3a" },
    note: "border-[1.5px] border-dashed border-accent/60 text-[#e4f2f0]",
    noteLabel: "text-accent",
    cta: "bg-accent text-[#0b2926] shadow-[0_6px_0_var(--color-primary)]",
  },
};

function Check({ circle, path }: { circle: string; path: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="26"
      height="26"
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
      className={`relative flex min-w-0 flex-col rounded-[36px] border-[3px] px-7 pb-10 lg:px-11 ${theme.card}`}
    >
      {/* Pose en absolu sur la bordure : un vrai <legend> couperait le trait. */}
      <h2 className={`plan-title ${theme.title} ${bagelFatOne.className}`}>
        {plan.name}
      </h2>

      <div className="flex flex-1 flex-col pt-10">
        <p
          className={`mt-[34px] flex flex-wrap items-baseline gap-x-2.5 text-[52px] font-semibold leading-none tracking-[-2px] lg:text-[68px] ${theme.price}`}
        >
          <span>
            <BlurredPrices text={plan.price} />
          </span>
          <span
            className={`text-[20px] font-medium tracking-normal ${theme.secondary}`}
          >
            {plan.period}
          </span>
        </p>
        <p className={`mt-2 text-[18px] ${theme.secondary}`}>
          <BlurredPrices text={plan.priceExclVat} />
        </p>

        <div className={`my-[26px] h-px ${theme.divider}`} />

        <ul
          className={`flex flex-col gap-4 text-[17px] lg:text-[19px] ${theme.features}`}
        >
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3.5">
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

        <p
          className={`mt-[26px] rounded-[20px] px-[22px] py-4 text-[17px] leading-[1.45] text-pretty ${theme.note}`}
        >
          <strong className={`font-semibold ${theme.noteLabel}`}>
            {plan.note.label}
          </strong>{" "}
          <BlurredPrices text={plan.note.text} />
        </p>

        {/* mt-auto : les boutons s'alignent en bas des deux cartes. */}
        <div className="mt-auto pt-[26px]">
          <a
            href={APP_URL}
            className={`flex min-h-[52px] items-center justify-center rounded-full text-center text-[17px] font-semibold transition-opacity hover:opacity-90 ${theme.cta}`}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
