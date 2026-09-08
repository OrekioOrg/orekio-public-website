import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/site";

// Stable @id anchors so the graph nodes can reference each other and be
// merged by search engines across pages.
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/orekio-symbole.svg`,
    description: dict.meta.description,
    email: "contact@orekio.app",
    sameAs: ["https://orekio.app"],
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
 * SoftwareApplication node for the home page — lets Google understand
 * Orekio is a product, with its category, platform and pricing tiers.
 */
export function softwareApplicationSchema(lang: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    url: absoluteUrl(lang),
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android, Web",
    description: dict.meta.description,
    publisher: { "@id": ORG_ID },
    offers: dict.pricing.plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      ...(plan.price === "Gratuit" || plan.price === "Free"
        ? { price: "0", priceCurrency: "EUR" }
        : plan.price.includes("€")
          ? {
              price: plan.price.replace(/[^0-9.,]/g, "").replace(",", "."),
              priceCurrency: "EUR",
            }
          : {}),
    })),
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
