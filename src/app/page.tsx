import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";
import Home from "@/src/pages/Home";
import { downloadConfig } from "@/src/config/download";

export const metadata: Metadata = {
  title: "Download v2rayN for Windows (Latest Release) | Independent Setup Guide",
  description: "Download the latest verified v2rayN release for Windows 10 & 11 from the official GitHub repository. Complete setup guide, system requirements, troubleshooting, and protocol documentation.",
  alternates: {
    canonical: "https://v2rayn-download.vercel.app/",
  },
  openGraph: {
    title: "Download v2rayN for Windows - Official Release Guide",
    description: "Verified direct links to official v2rayN releases, full Windows installation walkthrough, Xray core setup, and troubleshooting documentation.",
    url: "https://v2rayn-download.vercel.app/",
    siteName: "v2rayN Download & Documentation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download v2rayN for Windows - Official Release Guide",
    description: "Independent educational documentation and direct download resource for v2rayN Windows client.",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://v2rayn-download.vercel.app/#website",
      "url": "https://v2rayn-download.vercel.app/",
      "name": "v2rayN Download & Setup Guide",
      "description": "Independent informational and download documentation resource for the open-source v2rayN Windows client.",
      "inLanguage": "en-US"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://v2rayn-download.vercel.app/#software",
      "name": "v2rayN",
      "operatingSystem": "Windows 10, Windows 11, Windows ARM64, Linux, macOS",
      "applicationCategory": "NetworkingApplication",
      "softwareVersion": downloadConfig.latestVersion,
      "releaseNotes": downloadConfig.githubReleaseURL,
      "downloadUrl": downloadConfig.downloadURL.windows,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Person",
        "name": "2dust",
        "url": "https://github.com/2dust"
      },
      "description": "v2rayN is a popular open-source GUI client for Windows, macOS, and Linux that supports Xray, V2Ray, and sing-box cores with VMess, VLESS, Trojan, and Shadowsocks protocols."
    },
    {
      "@type": "HowTo",
      "@id": "https://v2rayn-download.vercel.app/#howto",
      "name": "How to Install and Configure v2rayN on Windows",
      "description": "A comprehensive step-by-step walkthrough to download, extract, configure, and connect to proxy servers using v2rayN on Windows 10 and 11.",
      "totalTime": "PT5M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Download the Official v2rayN Build",
          "text": "Download the official v2rayN archive (such as v2rayN-windows-64-desktop.zip or v2rayN-With-Core.zip) directly from the official GitHub release assets.",
          "url": "https://v2rayn-download.vercel.app/#download-latest"
        },
        {
          "@type": "HowToStep",
          "name": "Extract to a Permanent Folder",
          "text": "Right-click the downloaded ZIP archive and extract all files to a permanent directory, such as C:\\v2rayN or D:\\Tools\\v2rayN.",
          "url": "https://v2rayn-download.vercel.app/#installation-guide"
        },
        {
          "@type": "HowToStep",
          "name": "Launch v2rayN and Allow Network Access",
          "text": "Run v2rayN.exe and approve any Windows Defender or Firewall prompts to ensure the proxy core can route local network traffic.",
          "url": "https://v2rayn-download.vercel.app/#installation-guide"
        },
        {
          "@type": "HowToStep",
          "name": "Configure Language to English",
          "text": "If the interface defaults to Chinese, select Language from the top menu, choose English, and restart the application from the Windows system tray.",
          "url": "https://v2rayn-download.vercel.app/#installation-guide"
        },
        {
          "@type": "HowToStep",
          "name": "Add Server or Subscription Link",
          "text": "Import your node configuration by pasting a subscription URL, scanning a QR code, or adding a VMess/VLESS server manually.",
          "url": "https://v2rayn-download.vercel.app/#installation-guide"
        },
        {
          "@type": "HowToStep",
          "name": "Enable System Proxy or TUN Mode",
          "text": "Select an active server from the list, run a delay test (Ctrl+R), and enable System Proxy or TUN mode from the bottom status bar.",
          "url": "https://v2rayn-download.vercel.app/#installation-guide"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://v2rayn-download.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is v2rayN free and open-source?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, v2rayN is 100% free and open-source under the GPL-3.0 license. The source code is publicly accessible on GitHub at 2dust/v2rayN."
          }
        },
        {
          "@type": "Question",
          "name": "Is this website the official v2rayN project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. This website is an independent educational and documentation resource. We are not affiliated with the developers of v2rayN. All software links point directly to public releases hosted on the official GitHub repository."
          }
        },
        {
          "@type": "Question",
          "name": "Which protocols does v2rayN support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "v2rayN supports VMess, VLESS (including XTLS and REALITY), Trojan, Shadowsocks, SOCKS5, and HTTP protocols, powered by underlying engines like Xray-core, v2fly core, and sing-box."
          }
        },
        {
          "@type": "Question",
          "name": "Does v2rayN come with free proxy servers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. v2rayN is a client application (GUI tool), not a proxy provider. You need your own proxy server configuration, VPS setup, or subscription URL from a provider to route traffic."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Self-Contained and Standard builds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Self-Contained build (v2rayN-windows-64-desktop.zip) bundles the Microsoft .NET Desktop Runtime inside the package, allowing it to run immediately. The Standard build requires you to have the .NET Desktop Runtime installed separately on your Windows PC."
          }
        },
        {
          "@type": "Question",
          "name": "Why do I get a 'Failed to start core' error in v2rayN?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This happens if the routing core binaries (xray.exe or v2ray.exe) are missing from the bin folder. Download the 'With-Core' package or click 'Check for updates' in the top menu to download the core files automatically."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between System Proxy and TUN Mode?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "System Proxy mode sets Windows system proxy settings for web browsers and standard HTTP/HTTPS applications. TUN mode creates a virtual network adapter (Wintun) that intercepts and routes all network traffic system-wide, including command line tools, UDP streams, and gaming connections."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <PageWrapper Component={Home} />
    </>
  );
}
