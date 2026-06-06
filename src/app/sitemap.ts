import type { MetadataRoute } from "next";
import { companyPages, productCategories } from "./siteData";
import { absoluteUrl } from "./seo";

const lastModified = new Date("2026-06-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/references"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.25,
    },
    {
      url: absoluteUrl("/legal-disclosure"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.25,
    },
  ];

  const companyRoutes: MetadataRoute.Sitemap = companyPages.map((page) => ({
    url: absoluteUrl(`/company/${page.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: page.slug === "about-pritech" ? 0.85 : 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = productCategories.map((category) => ({
    url: absoluteUrl(`/products/${category.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
    images: category.products
      .map((product) => product.image)
      .filter((image): image is string => Boolean(image))
      .slice(0, 5)
      .map((image) => absoluteUrl(image)),
  }));

  const productRoutes: MetadataRoute.Sitemap = productCategories.flatMap((category) =>
    category.products.map((product) => ({
      url: absoluteUrl(`/products/${category.slug}/${product.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: product.image ? [absoluteUrl(product.image)] : undefined,
    })),
  );

  return [...coreRoutes, ...companyRoutes, ...categoryRoutes, ...productRoutes];
}
