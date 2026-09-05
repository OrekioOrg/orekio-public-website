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
| `/tarifs` | Offres et abonnement (paiement en ligne à venir, Stripe prévu) |
| `/a-propos` | Positionnement produit, statut non-dispositif médical |
| `/contact` | Contact |

## État de l'abonnement

Le paiement en ligne n'est pas encore branché : les boutons "S'abonner" de la
page `/tarifs` sont des placeholders. Une intégration Stripe Checkout est
prévue à terme.
