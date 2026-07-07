import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Home from "@/src/pages/Home";

export const metadata: Metadata = {
  title: "Download v2rayN for Windows Latest Version | Official Guide",
  description: "Download the latest version of v2rayN for Windows from the official GitHub release. Learn how to install, configure, and use v2rayN with our complete guide.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/",
  },
  openGraph: {
    title: "v2rayN - Official-Sourced Secure Download",
    description: "Download the latest v2rayN client for Windows 10 & 11 with Core pre-compiled.",
    url: "https://v2rayn-download.vercel.app/",
  },
};

export default function Page() {
  return <PageWrapper Component={Home} />;
}
