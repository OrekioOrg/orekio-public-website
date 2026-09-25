import Image from "next/image";
import { basePath } from "@/base-path";

/*
 * Cadres des captures du produit. Les captures sont réelles (émulateur pour
 * l'application patient, navigateur pour l'espace praticien), toujours faites
 * sur des comptes de test aux données d'exemple, jamais sur un vrai patient.
 */

/** Écran de l'application patient, dans un cadre de téléphone. */
export function PhoneFrame({
  src,
  alt,
  width,
  intrinsic,
  onDark = false,
  priority = false,
  className = "",
}: {
  /** Fichier dans public/product/. */
  src: string;
  alt: string;
  /** Largeur affichée, en pixels CSS. */
  width: number;
  /** Dimensions réelles du fichier, pour réserver la bonne hauteur. */
  intrinsic: [number, number];
  /** Sur le vert profond : liseré clair, sinon le cadre se fond dans le fond. */
  onDark?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[26px] border-[5px] bg-ink ${
        onDark
          ? "border-on-ink/20 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
          : "border-ink shadow-[0_18px_40px_-20px_rgba(18,63,58,0.45)]"
      } ${className}`}
      style={{ width }}
    >
      <Image
        src={`${basePath}/product/${src}`}
        alt={alt}
        width={intrinsic[0]}
        height={intrinsic[1]}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Écran de l'espace praticien, dans une fenêtre de navigateur. */
export function BrowserFrame({
  src,
  alt,
  intrinsic,
  className = "",
}: {
  src: string;
  alt: string;
  intrinsic: [number, number];
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] border border-outline bg-surface shadow-[0_18px_40px_-24px_rgba(17,24,39,0.35)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-outline bg-surface-container-low px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-outline" />
        <span className="h-2 w-2 rounded-full bg-outline" />
        <span className="h-2 w-2 rounded-full bg-outline" />
      </div>
      <Image
        src={`${basePath}/product/${src}`}
        alt={alt}
        width={intrinsic[0]}
        height={intrinsic[1]}
        className="block h-auto w-full"
      />
    </div>
  );
}
