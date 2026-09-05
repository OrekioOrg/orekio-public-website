// A piece of translatable text that may contain one inline link.
// Used for legal-page paragraphs where a sentence links to another page
// (internal, locale-prefixed) or an external/mailto address.
export type Segment =
  | string
  | { href: string; text: string; external?: boolean };
