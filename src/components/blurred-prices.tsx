import { Fragment } from "react";
import { PRICES_FINAL } from "@/site";

// Montants en euros : « 29,99 € », « €29.99 », « 500 € ».
const AMOUNT = /(€\s?\d+(?:[.,]\d+)?|\d+(?:[.,]\d+)?\s?€)/g;

// Tant que les prix ne sont pas definitifs, chaque montant est floute. Les
// chiffres sont remplaces par des 8 avant le flou : le vrai prix n'apparait
// ni a l'ecran ni dans le HTML (moteurs de recherche, lecteurs d'ecran).
export function BlurredPrices({ text }: { text: string }) {
  if (PRICES_FINAL) return <>{text}</>;
  return (
    <>
      {text.split(AMOUNT).map((part, index) =>
        index % 2 === 1 ? (
          <span
            key={index}
            aria-hidden="true"
            className="select-none blur-[6px]"
          >
            {part.replace(/\d/g, "8")}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
