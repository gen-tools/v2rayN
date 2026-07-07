import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import ArticlePlaceholder from "@/src/pages/ArticlePlaceholder";
import { articlesData } from "@/src/data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData
    .filter((art) => art.category === "installation")
    .map((art) => {
      const parts = art.id.split("/");
      const slug = parts[parts.length - 1];
      return { slug };
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articleId = `installation/${slug}`;
  const article = articlesData.find((art) => art.id === articleId);

  if (!article) {
    return {
      title: "Guide Not Found - v2rayN Installation",
    };
  }

  return {
    title: `${article.title} - v2rayN Installation Guide`,
    description: article.description,
    alternates: {
      canonical: `https://v2rayn.org/installation/${slug}`,
    },
    openGraph: {
      title: `${article.title} - v2rayN Installation Guide`,
      description: article.description,
      url: `https://v2rayn.org/installation/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const articleId = `installation/${slug}`;
  return <PageWrapper Component={ArticlePlaceholder} articleId={articleId} />;
}
