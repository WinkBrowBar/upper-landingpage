import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/landing-page";
import { CANONICAL_URL, PHONE_TEL, STOREFRONT_SRC, STREET_ADDRESS } from "@/data/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Brow Bar in Upper East Side NYC | Wink Brow Bar – 244 E 60th St",
      },
      {
        name: "description",
        content:
          "Wink Brow Bar is now open at 244 E 60th Street, Upper East Side, NYC. Brow threading, shaping, lamination, tinting, lash services & eye-zone treatments. New clients: Brow Shaping $35, limited time.",
      },
      { property: "og:title", content: "Brow Bar in Upper East Side NYC | Wink Brow Bar" },
      {
        property: "og:description",
        content:
          "Now open at 244 E 60th Street, between 2nd & 3rd Avenue. New clients: Brow Shaping $35 for a limited time. Book online today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${new URL(CANONICAL_URL).origin}${STOREFRONT_SRC}` },
      { property: "og:url", content: CANONICAL_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      {
        attrs: { type: "application/ld+json" },
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Wink Brow Bar – Upper East Side",
          image: `${new URL(CANONICAL_URL).origin}${STOREFRONT_SRC}`,
          telephone: PHONE_TEL,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: STREET_ADDRESS,
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10022",
            addressCountry: "US",
          },
          url: CANONICAL_URL,
        }),
      },
    ],
  }),
  component: LandingPage,
});
