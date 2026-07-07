import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import About from "@/src/pages/About";

export const metadata: Metadata = {
  title: "About v2rayN - Privacy Policy, Terms of Use, & Independent Portal",
  description: "Read about the mission of our educational v2rayN portal, review our privacy policy, access our terms of use, and view our independent platform disclaimers.",
  alternates: {
    canonical: "https://v2rayn.org/about",
  },
  openGraph: {
    title: "About, Terms, & Privacy Policy - Independent v2rayN Portal",
    description: "Our legal terms, security policies, and mission of safe proxy navigation.",
    url: "https://v2rayn.org/about",
  },
};

export default function Page() {
  return <PageWrapper Component={About} />;
}
