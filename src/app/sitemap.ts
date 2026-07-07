import { MetadataRoute } from "next";
import { articlesData } from "../data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://v2rayn-download.vercel.app";

  // Standard static pages
  const staticPages = [
    "",
    "/download",
    "/installation",
    "/configuration",
    "/troubleshooting",
    "/features",
    "/comparison",
    "/faq",
    "/changelog",
    "/blog",
    "/about",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic article pages
  const articlePages = articlesData.map((article) => ({
    url: `${baseUrl}/${article.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages];
}
