import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Comparison from "@/src/pages/Comparison";

export const metadata: Metadata = {
  title: "v2rayN vs Clash vs v2rayNG vs sing-box - Proxy Client Comparison",
  description: "A professional comparison of major open-source proxy clients. Analyze performance, usability, protocol support, and configuration complexity.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/comparison",
  },
  openGraph: {
    title: "Proxy Client Comparison: v2rayN vs Clash vs sing-box",
    description: "Compare open-source proxy GUI clients across speed, protocols, and device compatibility.",
    url: "https://v2rayn-download.vercel.app/comparison",
  },
};

export default function Page() {
  return <PageWrapper Component={Comparison} />;
}
