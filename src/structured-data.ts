import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  COMPANY,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
  pathTo,
} from "@/site";

// Stable @id anchors so the graph nodes can reference each other and be
// merged by search engines across pages.
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

// Google wants a raster logo (min 112×112) for the knowledge panel; the
// SVG brand mark isn't reliably picked up. This is app/icon.png.
const LOGO = {
  "@type": "ImageObject",
  url: `${SITE_URL}/icon.png`,
  width: 512,
  height: 512,
};

export function organizationSchema(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: LOGO,
    image: `${SITE_URL}/og.png`,
    description: dict.meta.description,
    email: "contact@orekio.app",
    address: { "@type": "PostalAddress", ...COMPANY.address },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "SIREN",
      value: COMPANY.siren,
    },
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteSchema(lang: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: lang,
    description: dict.meta.description,
    publisher: { "@id": ORG_ID },
  };
}

/**
 * SoftwareApplication node for the home page, lets Google understand
 * Orekio is a product, with its category, platform and pricing tiers.
 */
export function softwareApplicationSchema(lang: Locale, dict: Dictionary) {
  const pricingUrl = `${SITE_URL}${pathTo(lang, "pricing")}`;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: SITE_NAME,
    url: absoluteUrl(lang),
    image: `${SITE_URL}/og.png`,
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android, Web",
    inLanguage: lang,
    description: dict.meta.description,
    publisher: { "@id": ORG_ID },
    offers: dict.pricing.plans.map((plan) => {
      // "19 € HT" → 19 per month, VAT excluded; "Gratuit"/"Free" → 0.
      const amount =
        /\d+(?:[.,]\d+)?/.exec(plan.price)?.[0].replace(",", ".") ?? "0";
      return {
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        url: pricingUrl,
        price: amount,
        priceCurrency: "EUR",
        ...(amount !== "0"
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: amount,
                priceCurrency: "EUR",
                unitCode: "MON",
                valueAddedTaxIncluded: false,
              },
            }
          : {}),
      };
    }),
  };
}

/** BlogPosting node for a single article. */
export function blogPostingSchema(input: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  image?: string;
  inLanguage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${input.url}#article`,
    mainEntityOfPage: input.url,
    url: input.url,
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: input.inLanguage,
    image: input.image ? [`${SITE_URL}${input.image}`] : [`${SITE_URL}/og.png`],
    author: {
      "@type": "Person",
      name: input.authorName ?? SITE_NAME,
      ...(input.authorUrl ? { url: input.authorUrl, sameAs: [input.authorUrl] } : {}),
    },
    publisher: { "@id": ORG_ID },
  };
}

/**
 * BreadcrumbList for an interior page. `trail` is ordered from the locale
 * home down to the current page.
 */
export function breadcrumbSchema(
  trail: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
