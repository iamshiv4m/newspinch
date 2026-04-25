import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://newspinch.in";

  const staticPages = [
    "",
    "/news",
    "/sponsors",
    "/sponsors/contact",
    "/team",
    "/community",
    "/trust",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/news/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/news/${article.category.toLowerCase().replace(/\s+/g, "-")}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
