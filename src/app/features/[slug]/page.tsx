import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import ArticlePlaceholder from "@/src/pages/ArticlePlaceholder";
import { articlesData } from "@/src/data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData
    .filter((art) => art.category === "features")
    .map((art) => {
      const parts = art.id.split("/");
      const slug = parts[parts.length - 1];
      return { slug };
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articleId = `features/${slug}`;
  const article = articlesData.find((art) => art.id === articleId);

  if (!article) {
    return {
      title: "Feature Guide Not Found - v2rayN",
    };
  }

  return {
    title: `${article.title} - v2rayN Features`,
    description: article.description,
    alternates: {
      canonical: `https://v2rayn-download.vercel.app/features/${slug}`,
    },
    openGraph: {
      title: `${article.title} - v2rayN Features`,
      description: article.description,
      url: `https://v2rayn-download.vercel.app/features/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const articleId = `features/${slug}`;
  return <PageWrapper Component={ArticlePlaceholder} articleId={articleId} />;
}
