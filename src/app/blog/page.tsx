import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Blog from "@/src/pages/Blog";

export const metadata: Metadata = {
  title: "v2rayN Educational Blog - Secure Network Protocols & Guides",
  description: "Stay informed with educational blogs covering advanced proxy protocols, digital privacy setups, server tuning, and cryptographic comparisons.",
  alternates: {
    canonical: "https://v2rayn.org/blog",
  },
  openGraph: {
    title: "v2rayN Educational Blog & Technical Resource Hub",
    description: "Read about cryptography, secure routing, and network proxy architecture.",
    url: "https://v2rayn.org/blog",
  },
};

export default function Page() {
  return <PageWrapper Component={Blog} />;
}
