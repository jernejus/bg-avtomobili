import { site } from "./site";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string; // absolute or root-relative
};

export function buildMeta({ title, description, path, image }: PageMeta) {
  const url = `${site.url}${path}`;
  const ogImage = image ? (image.startsWith("http") ? image : `${site.url}${image}`) : undefined;

  const meta = [
    { title },
    { name: "description", content: description },
    { name: "author", content: site.legalName },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "sl_SI" },
    { property: "og:site_name", content: site.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (ogImage) {
    meta.push(
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: ogImage },
    );
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export function autoDealerJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    foundingDate: site.founded,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postal,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    areaServed: { "@type": "AdministrativeArea", name: "Slovenija" },
    knowsLanguage: ["sl"],
    makesOffer: [
      "Prodaja rabljenih vozil",
      "Odkup rabljenih vozil",
      "Sklepanje zavarovanj",
      "Kleparska in ličarska dela",
      "Vulkanizerske storitve",
      "Mehanska dela",
      "Hladno ravnanje pločevine (toča)",
    ].map((s) => ({ "@type": "Offer", name: s })),
  };
}
