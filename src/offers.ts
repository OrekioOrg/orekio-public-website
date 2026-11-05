// L'offre commerciale, seule source du site : les textes fr et en s'en déduisent.
// La décision vit dans l'épic du tunnel (OrekioOrg/Orekio#2378) et la spécification
// (§ 3.4) ; dans l'app, les plafonds dans `billing/domain/offers.ts` et les prix chez Stripe.
// Une offre qui change se change ici, et se confronte à ces deux endroits.

/** Le taux de TVA français, inclus dans les prix. */
export const VAT_PERCENT = 20;

/** Les prix sont en centimes, TTC : le TTC fait foi, le HT s'en déduit. */
export const OFFERS = {
  zelai: { maxPatients: 30, month: 2999, year: 32989 },
  mendi: { month: 3999, year: 43989 },
  /** Le mois gratuit de l'essai. */
  freeMonths: 1,
} as const;

/** Le HT d'un prix TTC, à l'arrondi de l'app (`billing/domain/tax.ts`). */
export function exclVat(cents: number): number {
  return Math.round((cents * 100) / (100 + VAT_PERCENT));
}

/** « 29,99 € » */
export function eurFr(cents: number): string {
  return `${(cents / 100).toFixed(2).replace(".", ",")} €`;
}

/** « €29.99 » */
export function eurEn(cents: number): string {
  return `€${(cents / 100).toFixed(2)}`;
}
