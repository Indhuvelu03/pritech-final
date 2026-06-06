import type { Metadata } from "next";
import { productCategories, siteInfo } from "./siteData";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pritechengineering.com"
).replace(/\/$/, "");

export const defaultSeo = {
  title: "Pritech Engineering | Special Purpose Machines & Testing Systems | testing machines Chennai | fixtures and tooling Chennai | automotive production machinery Chennai",
  description:
    "Pritech Engineering builds special purpose machines, testing machines, fixtures, tooling, and precision production solutions for automotive and industrial manufacturers in Chennai.",
  image: "/hero-machine.png",
  keywords: [
    "Pritech Engineering",
    "special purpose machines Chennai",
    "testing machines",
    "leak test machine",
    "air leak test machine",
    "fixtures and tooling",
    "automotive production machinery",
    "SPM manufacturer Chennai",
    "industrial automation fixtures",
  ],
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createSeoMetadata({
  title,
  description = defaultSeo.description,
  path = "/",
  image = defaultSeo.image,
  keywords = [],
  type = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...defaultSeo.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteInfo.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteInfo.name,
  alternateName: siteInfo.shortName,
  url: siteUrl,
  logo: absoluteUrl("/logo.png"),
  telephone: siteInfo.phone,
  email: siteInfo.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "140, Tiny Sector, Karatur, Ambattur",
    addressLocality: "Chennai",
    postalCode: "600058",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: ["India", "Chennai", "Tamil Nadu"],
  knowsAbout: productCategories.map((category) => category.title),
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteInfo.name,
  image: absoluteUrl(defaultSeo.image),
  url: siteUrl,
  telephone: siteInfo.phone,
  email: siteInfo.emails[0],
  address: organizationJsonLd.address,
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};
