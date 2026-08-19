import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Troubleshooting from "@/src/pages/Troubleshooting";

export const metadata: Metadata = {
  title: "Troubleshooting v2rayN - Fix Connection, DNS, and Core Errors",
  description: "Diagnose and repair common v2rayN errors, core startup failures, system proxy issues, and TUN mode driver errors.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/troubleshooting",
  },
  openGraph: {
    title: "v2rayN Troubleshooting Guide & Error Diagnostic",
    description: "Troubleshooting instructions to quickly fix core errors, handshake failures, and DNS leaks.",
    url: "https://v2rayn-download.vercel.app/troubleshooting",
  },
};

export default function Page() {
  return <PageWrapper Component={Troubleshooting} />;
}
