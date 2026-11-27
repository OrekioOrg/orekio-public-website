// Le contenu de la page FAQ. Chaque réponse reprend un fait déjà publié sur le site
// (tarifs, CGU, confidentialité) ou le guide d'aide de l'application
// (OrekioOrg/Orekio, apps/api/src/modules/assistant/guide). Un fait qui change là
// se change ici aussi.

import type { Segment } from "../../segment";

export interface FaqQuestion {
  /** L'ancre de la question (/fr/faq#hds). La même dans les deux langues. */
  id: string;
  question: string;
  /** Un tableau par paragraphe. */
  answer: Segment[][];
}

export interface FaqSection {
  id: string;
  title: string;
  questions: FaqQuestion[];
}

export interface FaqCopy {
  pageTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  categoriesLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  /** « {n} » est remplacé par le nombre de questions trouvées. */
  resultOne: string;
  resultMany: string;
  noResult: string;
  contact: { title: string; text: Segment[] };
  sections: FaqSection[];
}
