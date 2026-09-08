// Renders the static Open Graph image to public/og.png (1200×630).
// Run manually when branding/tagline changes:  node scripts/generate-og.mjs
// Committed as a static asset because GitHub Pages would serve a
// code-generated opengraph-image route without a .png extension / MIME type.
import { ImageResponse } from "next/og.js";
import { writeFile } from "node:fs/promises";

const box = (style, children) => ({ type: "div", props: { style, children } });

const res = new ImageResponse(
  box(
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "linear-gradient(135deg, #123f3a 0%, #1a6b63 60%, #2e9e96 100%)",
      color: "#ffffff",
      padding: "80px",
      fontFamily: "sans-serif",
    },
    [
      box({ display: "flex", alignItems: "center", gap: 28 }, [
        box({ display: "flex", width: 72, height: 72, borderRadius: 20, background: "#6bc9bf" }, []),
        box({ fontSize: 46, fontWeight: 700, letterSpacing: -1 }, "Orekio"),
      ]),
      box({ display: "flex", flexDirection: "column", gap: 24 }, [
        box({ fontSize: 66, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 },
          "L’accompagnement thérapeutique, entre les séances"),
        box({ fontSize: 29, color: "#cfeae7", maxWidth: 900 },
          "Agenda du sommeil, échelles cliniques validées, plan de sécurité — un carnet de bord numérique, pas un dispositif médical."),
      ]),
      box({ fontSize: 26, opacity: 0.85 }, "orekio.fr"),
    ],
  ),
  { width: 1200, height: 630 },
);

const buf = Buffer.from(await res.arrayBuffer());
await writeFile(new URL("../public/og.png", import.meta.url), buf);
console.log("wrote public/og.png", buf.length, "bytes");
