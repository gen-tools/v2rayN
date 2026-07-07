import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Home from "@/src/pages/Home";

export const metadata: Metadata = {
  title: "v2rayN - Official-Sourced Secure Download (Latest v7.22.2)",
  description: "Download v2rayN for Windows, macOS, and Linux. Safe, untampered zip/dmg files pointing directly to official 2dust GitHub releases.",
  alternates: {
    canonical: "https://v2rayn.org/",
  },
  openGraph: {
    title: "v2rayN - Official-Sourced Secure Download",
    description: "Download the latest v2rayN client for Windows 10 & 11 with Core pre-compiled.",
    url: "https://v2rayn.org/",
  },
};

export default function Page() {
  return <PageWrapper Component={Home} />;
}
