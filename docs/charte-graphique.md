# Orekio — charte graphique du site vitrine

Version resserrée de la charte produit (`CHARTE-OREKIO.md` v6a), limitée à ce
que ce dépôt utilise réellement. Le site est le prolongement de l'app : clair,
aéré, teal en ponctuation — jamais en aplat décoratif.

Les tokens correspondants vivent dans `src/app/globals.css`.

---

## 1. Couleurs

### Palette de marque

| Hex | Nom | Emploi |
|---|---|---|
| `#123F3A` | Encre teal | Header, footer, une seule section de rupture par page |
| `#1F6F68` | Teal profond | Moitié haute du logo sur fond clair |
| `#6BC9BF` | Accent clair | Moitié basse du logo sur fond clair, filets, illustrations — **jamais du texte** |
| `#4FBDB1` | Accent sombre | Moitié basse du logo **uniquement sur `#123F3A`** |

### Actions, texte, surfaces

| Hex | Emploi |
|---|---|
| `#1A6B63` | Bouton primaire (fond), texte blanc |
| `#2E9E96` | Liens, texte de chip, petits accents typographiques |
| `#EAF6F5` | Fond de chip, survol, encart léger |
| `#111827` | Titres |
| `#374151` | Corps de texte |
| `#6B7280` | Secondaire, métadonnées, mentions |
| `#FDFEFE` | Texte sur fond sombre |
| `#FFFFFF` | Surface de contenu, cartes |
| `#F4FAF9` | Fond de page teinté (alternance de sections) |
| `#F9FAFB` | Zone neutre |
| `#E5E7EB` | Bordures |
| `#DCEAE8` | Bordures teintées (cartes sur `#F4FAF9`) |

### Règles

- **Deux fonds clairs maximum par page** : blanc + `#F4FAF9`. Le sombre
  `#123F3A` est réservé au header/footer et à une seule section de rupture.
- Pas de dégradés, pas d'ombres colorées. Élévation = bordure `#E5E7EB` ou
  ombre neutre très douce.
- Contraste texte minimum 4,5:1. `#6BC9BF` ne porte jamais de texte ; pour du
  teal lisible sur blanc, utiliser `#1A6B63` ou `#2E9E96`.

> État du code : `globals.css` utilise aujourd'hui `#54615F` pour le texte
> secondaire (charte : `#6B7280`) et `#F9FAFB` comme fond teinté
> (charte : `#F4FAF9`). À réconcilier si on y touche.

---

## 2. Typographie

- **Outfit** — titres, interface, corps de texte. Graisses **300 / 400 / 500
  uniquement**.
- **IBM Plex Mono** — éyebrow de section, micro-labels, métadonnées (dates,
  temps de lecture, mentions techniques).

| Usage | Fonte | Graisse | Taille desktop |
|---|---|---|---|
| Titre hero | Outfit | 500 | 48–64 px, `letter-spacing: -0.02em` |
| Titre de section | Outfit | 500 | 32–40 px |
| Sous-titre / accroche | Outfit | 300 | 18–20 px |
| Corps | Outfit | 300 | 16–17 px, interligne 1,6 |
| Titre de carte | Outfit | 500 | 16–18 px |
| Nav, bouton | Outfit | 400 | 15 px |
| Éyebrow de section | IBM Plex Mono | 500 | 11,5 px, `0.10em`, capitales |
| Micro-label / tag | IBM Plex Mono | 400 | 10–11 px, `0.20em`, capitales |
| Mentions, légales | Outfit | 300 | 13,5 px, `#6B7280` |

- Mesure de lecture : 60–72 caractères max.
- `text-wrap: pretty` sur les titres.
- Jamais Inter ou Roboto en substitut d'Outfit.

---

## 3. Logo

Fichiers dans `public/brand/`.

- Fond clair → moitié haute `#1F6F68`, moitié basse `#6BC9BF`.
- Fond `#123F3A` → moitié haute `#FDFEFE`, moitié basse `#4FBDB1`.
- **Sous 20 px : monochrome obligatoire** (`#1F6F68` sur clair, `#FDFEFE` sur
  sombre).
- Zone de respiration = moitié de la hauteur du symbole. Lock-up horizontal :
  écart symbole ↔ mot = 0,29 × hauteur du symbole.
- Jamais de contour, d'ombre, de dégradé, de rotation ni de recoloration hors
  des quatre déclinaisons.

---

## 4. Composants

- **Rayons** : 8 px boutons / champs / cartes ; 14 px chips ; 10 px médias et
  grandes surfaces. Pas de « pill » sauf les chips.
- **Bouton primaire** : fond `#1A6B63`, texte blanc Outfit 400 / 15 px, padding
  12 × 22 px, rayon 8 px. Survol : `#123F3A`.
- **Bouton secondaire** : fond blanc, bordure `#E5E7EB`, texte `#111827`.
  Survol : fond `#EAF6F5`, bordure `#DCEAE8`.
- **Lien** : `#2E9E96`, **souligné au survol uniquement** — pas de changement de
  couleur au survol.
- **Chip** : fond `#EAF6F5`, texte `#2E9E96` 300 / 13 px, padding 5 × 11 px,
  rayon 14 px.
- **Carte** : fond blanc, bordure `#E5E7EB` (ou `#DCEAE8` sur fond teinté),
  padding 24–28 px.
- **Header** : `#123F3A`, hauteur 58–72 px, logotype 26 px, liens
  `rgba(253,254,254,0.68)` → `#FDFEFE` à l'état actif.

---

## 5. Densité et mise en page

- Largeur de contenu max **1200 px**, gouttière 24 px mobile / 48 px desktop.
- Rythme vertical : 96–120 px entre sections desktop, 64 px mobile ; 18–24 px
  entre blocs d'une même section.
- Alternance de fonds blanc / `#F4FAF9` pour séparer les sections — pas de
  filets décoratifs.
- Cibles tactiles ≥ 44 px.
- Pages de contenu long (blog, légales) : colonne de texte plus étroite
  (~720 px) pour tenir la mesure de lecture.

---

## 6. Ton éditorial

- Phrases courtes, verbe concret, **vouvoiement**.
- On décrit ce que l'app fait, pas ce qu'elle promet.
- Une seule idée par section, un seul appel à l'action primaire par écran.
- Captures d'écran : images réelles de l'app, sur `#F4FAF9` ou dans une fenêtre
  rayon 10 px / bordure `#E5E7EB`. Pas d'illustration 3D, pas de stock photo
  médicale, pas d'emoji.

---

## 7. À ne pas faire

Aplats teal pleine largeur ; dégradés ; texte en `#6BC9BF` ; plus de trois
graisses ; Inter / Roboto à la place d'Outfit ; recoloration du symbole ;
ombres portées marquées ; carrousels de logos.
