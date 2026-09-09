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
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

export const dynamic = "force-static";
