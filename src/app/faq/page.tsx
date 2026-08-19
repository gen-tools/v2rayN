import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import FAQ from "@/src/pages/FAQ";

export const metadata: Metadata = {
  title: "v2rayN FAQ - Searchable Answers to Common Questions",
  description: "Find instant, searchable answers to common questions about v2rayN cores, subscription setups, security policies, and performance tweaks.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/faq",
  },
  openGraph: {
    title: "v2rayN FAQ & Interactive Search Knowledgebase",
    description: "Search solutions for subscription updates, error codes, and configuration inquiries.",
    url: "https://v2rayn-download.vercel.app/faq",
  },
};

export default function Page() {
  return <PageWrapper Component={FAQ} />;
}
