import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Download from "@/src/pages/Download";

export const metadata: Metadata = {
  title: "Download v2rayN for Windows, macOS, Linux & Android - Official Files",
  description: "Secure, direct links to download the official v2rayN client. Supporting Windows 64-bit, ARM64, macOS DMG, Linux deb packages, and v2rayNG for Android.",
  alternates: {
    canonical: "https://v2rayn.org/download",
  },
  openGraph: {
    title: "Download v2rayN Client - Official Files",
    description: "Get clean, verified v2rayN zip packages directly from GitHub releases.",
    url: "https://v2rayn.org/download",
  },
};

export default function Page() {
  return <PageWrapper Component={Download} />;
}
