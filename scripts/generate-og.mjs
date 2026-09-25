// Renders the static Open Graph image to public/og.png (1200×630).
// Run manually when branding/tagline changes:  node scripts/generate-og.mjs
// Committed as a static asset because GitHub Pages would serve a
// code-generated opengraph-image route without a .png extension / MIME type.
//
// Charte : aplat vert profond (pas de dégradé), le symbole Orekio, le titre de
// l'accueil mot pour mot. Vocabulaire : consultation, rendez-vous, jamais
// « séance ». Aucun tiret long.
import { ImageResponse } from "next/og.js";
import { readFile, writeFile } from "node:fs/promises";

const box = (style, children) => ({ type: "div", props: { style, children } });

const symbol = await readFile(new URL("../public/brand/orekio-symbole-nav.svg", import.meta.url));
const symbolSrc = `data:image/svg+xml;base64,${symbol.toString("base64")}`;

const res = new ImageResponse(
  box(
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#123f3a",
      color: "#fdfefe",
      padding: "80px",
      fontFamily: "sans-serif",
    },
    [
      box({ display: "flex", alignItems: "center", gap: 24 }, [
        { type: "img", props: { src: symbolSrc, width: 76, height: 76 } },
        box({ fontSize: 46, fontWeight: 500, letterSpacing: -1 }, "Orekio"),
      ]),
      box({ display: "flex", flexDirection: "column", gap: 28 }, [
        box({ fontSize: 62, fontWeight: 600, lineHeight: 1.12, maxWidth: 980 },
          "La consultation continue entre deux rendez-vous, sur le téléphone de votre patient."),
        box({ fontSize: 28, color: "#cfeae7", maxWidth: 940 },
          "Un carnet de bord numérique : Orekio affiche, le praticien interprète."),
      ]),
      box({ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#6bc9bf" }, "orekio.fr"),
    ],
  ),
  { width: 1200, height: 630 },
);

const buf = Buffer.from(await res.arrayBuffer());
await writeFile(new URL("../public/og.png", import.meta.url), buf);
console.log("wrote public/og.png", buf.length, "bytes");
