import type { PlanId } from "@/i18n/dictionaries/fr";

// This site is statically exported (see next.config.ts: output: "export")
// and deployed as plain files on GitHub Pages — there is no server to host
// an API route that creates Stripe Checkout Sessions with a secret key.
//
// Stripe Payment Links are the static-friendly equivalent: each one is a
// ready-made, Stripe-hosted checkout page you create once in the Dashboard
// (Payment links → New), for a given price/plan. The /tarifs page just
// links straight to it — no backend involved, and no Stripe secret ever
// ships to the browser.
//
// To wire up a plan:
//   1. Stripe Dashboard → Payment links → New, pick the plan's price.
//   2. Copy the generated https://buy.stripe.com/... URL.
//   3. Set it as the matching env var below (locally in .env.local, and as
//      a repository variable consumed by .github/workflows/nextjs.yml for
//      the deployed build — these URLs aren't secret, they're meant to be
//      shared, so a plain repo "variable" is fine, a secret works too).
//
// A plan with no link configured keeps the disabled "coming soon" button.
export const stripePaymentLinks: Partial<Record<PlanId, string>> = {
  praticien: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PRATICIEN,
};
