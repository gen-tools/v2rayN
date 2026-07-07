import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Changelog from "@/src/pages/Changelog";

export const metadata: Metadata = {
  title: "v2rayN Changelog - Complete Version History & Release Logs",
  description: "Track all major and minor v2rayN releases. Review features, core updates, bug fixes, and optimization history over time.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/changelog",
  },
  openGraph: {
    title: "v2rayN Client Version Changelog History",
    description: "Detailed release timeline outlining feature adjustments and bug fixes.",
    url: "https://v2rayn-download.vercel.app/changelog",
  },
};

export default function Page() {
  return <PageWrapper Component={Changelog} />;
}
