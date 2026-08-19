import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Installation from "@/src/pages/Installation";

export const metadata: Metadata = {
  title: "v2rayN Installation Guides & Setup Tutorials - Step-by-Step",
  description: "Complete walkthroughs for installing v2rayN on Windows 10/11, macOS, and Linux. Set up subscription updates and launch your client securely.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/installation",
  },
  openGraph: {
    title: "v2rayN Installation Guides & Setup Tutorials",
    description: "Step-by-step setup walkthroughs for Windows, macOS, and Linux.",
    url: "https://v2rayn-download.vercel.app/installation",
  },
};

export default function Page() {
  return <PageWrapper Component={Installation} />;
}
