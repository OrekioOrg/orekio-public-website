# Orekio — Site vitrine public

Site vitrine de l'application [Orekio](https://github.com/OrekioOrg/Orekio) :
présentation, fonctionnalités, tarifs et abonnement à la plateforme.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Polices et couleurs alignées sur la [charte graphique Orekio](https://github.com/OrekioOrg/Orekio/blob/main/docs/charte-graphique.md)
  (Outfit, IBM Plex Mono, teal `#1A6B63` / `#123F3A`)

## Développement

```bash
npm install
npm run dev
```

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil, présentation générale |
| `/fonctionnalites` | Catalogue des modules thérapeutiques |
| `/tarifs` | Offres et abonnement (paiement en ligne via Stripe) |
| `/a-propos` | Positionnement produit, statut non-dispositif médical |
| `/contact` | Contact |

## Paiement (Stripe)

Le site est exporté en statique (`output: "export"`, voir `next.config.ts`)
et déployé tel quel sur GitHub Pages : il n'y a pas de serveur pour héberger
une route API qui créerait des Stripe Checkout Sessions avec une clé secrète.

L'abonnement du plan "Praticien" passe donc par un
[Stripe Payment Link](https://stripe.com/payments/payment-links) : une page
de paiement hébergée par Stripe, créée une fois dans le Dashboard, vers
laquelle le bouton "S'abonner" de `/tarifs` pointe directement.

Pour l'activer :

1. Stripe Dashboard → Payment links → New, sur le prix du plan Praticien.
2. Copier l'URL générée (`https://buy.stripe.com/...`).
3. La renseigner :
   - en local, dans `.env.local` :
     `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PRATICIEN=https://buy.stripe.com/...`
   - en déploiement, comme variable de repo GitHub (Settings → Secrets and
     variables → Actions → Variables), même nom — utilisée par
     `.github/workflows/nextjs.yml`.

Tant que cette variable n'est pas renseignée, le bouton reste désactivé
("bientôt"). Les plans "Découverte" (essai gratuit) et "Cabinet" (devis) ne
passent pas par Stripe : leur bouton renvoie vers `/contact`.

Voir `src/stripe.ts` pour le détail.
