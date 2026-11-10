import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { productCategories } from "@/features/products/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-11-10T00:00:00.000Z");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/research-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = productCategories.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
