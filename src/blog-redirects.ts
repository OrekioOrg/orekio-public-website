// Anciennes adresses d'articles, vers les nouvelles. Un export statique sur
// GitHub Pages ne sait pas repondre 301 : la page servie a l'ancienne adresse
// porte un rafraichissement immediat vers la nouvelle et la declare canonique,
// hors index. Les deux locales partagent les memes slugs.
export const blogRedirects: Readonly<Record<string, string>> = {
  "agenda-du-sommeil-entre-les-seances": "agenda-du-sommeil-entre-deux-rendez-vous",
  "roue-des-emotions-en-therapie": "nommer-ce-que-je-ressens",
};
