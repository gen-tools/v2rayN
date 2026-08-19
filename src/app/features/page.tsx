import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Features from "@/src/pages/Features";

export const metadata: Metadata = {
  title: "v2rayN Client Features - Core Support, System Proxy, and Routing",
  description: "Explore the powerful features of v2rayN. Built-in Xray and V2Ray support, custom routing tables, system proxy automation, and subscription updates.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/features",
  },
  openGraph: {
    title: "v2rayN Client Features Overview",
    description: "Deep dive into v2rayN capabilities, from multi-protocol core setups to custom subnets.",
    url: "https://v2rayn-download.vercel.app/features",
  },
};

export default function Page() {
  return <PageWrapper Component={Features} />;
}
