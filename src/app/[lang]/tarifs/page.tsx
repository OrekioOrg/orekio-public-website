import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SegmentText } from "@/components/segment-text";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).pricing;
  return { title: dict.pageTitle, description: dict.metaDescription };
}

export default async function TarifsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang).pricing;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        {dict.eyebrow}
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        {dict.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
        {dict.description}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {dict.plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-lg border p-8 ${
              plan.highlighted
                ? "border-primary bg-primary-container"
                : "border-outline bg-surface"
            }`}
          >
            <h2 className="text-[18px] font-medium text-on-surface-strong">
              {plan.name}
            </h2>
            <p className="mt-4">
              <span className="text-[32px] font-medium text-on-surface-strong">
                {plan.price}
              </span>
              <span className="ml-2 text-[14px] text-on-surface-variant">
                {plan.period}
              </span>
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
              {plan.description}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[15px] text-on-surface"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              disabled
              title={dict.subscribeButtonTitle}
              className="mt-8 cursor-not-allowed rounded-lg bg-primary/40 px-6 py-3 text-[15px] font-medium text-on-primary"
            >
              {dict.subscribeButton}
            </button>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-[14px] leading-relaxed text-on-surface-variant">
        {dict.footerNote.map((segment, index) => (
          <SegmentText key={index} segment={segment} />
        ))}
      </p>
    </div>
  );
}
