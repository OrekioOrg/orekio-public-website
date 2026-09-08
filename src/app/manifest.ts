import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — carnet de bord numérique`,
    short_name: SITE_NAME,
    description:
      "Orekio relie le praticien et son patient entre les consultations : agenda du sommeil, échelles cliniques validées, plan de sécurité, et plus.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#123f3a",
    lang: "fr",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}

export const dynamic = "force-static";
