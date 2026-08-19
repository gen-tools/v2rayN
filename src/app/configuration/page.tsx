import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Configuration from "@/src/pages/Configuration";

export const metadata: Metadata = {
  title: "Configure v2rayN: VLESS, VMess, Trojan & TUN Mode Settings",
  description: "Advanced configuration blueprints for v2rayN. Learn to optimize secure VLESS + Reality configurations, customize DNS, and toggle TUN mode.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/configuration",
  },
  openGraph: {
    title: "v2rayN Core Configurations & Routing Settings",
    description: "Detailed walkthroughs for configuring secure proxy nodes in v2rayN.",
    url: "https://v2rayn-download.vercel.app/configuration",
  },
};

export default function Page() {
  return <PageWrapper Component={Configuration} />;
}
