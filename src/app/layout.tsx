import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "../components/LayoutClient";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "v2rayN Client - High-Security Proxy GUI for Windows, Linux & macOS",
  description: "Download v2rayN securely. The leading open-source Windows/macOS/Linux client for Xray Core, V2ray Core, VLESS, VMess, Trojan, and Shadowsocks protocols.",
  metadataBase: new URL("https://v2rayn-download.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "iYhD3GQqnatWWaAejnJSUeiLbpnq0YaYmKEM0v3DbxI",
  },
  openGraph: {
    title: "v2rayN Client - High-Security Proxy GUI",
    description: "Download the latest v2rayN stable release. Secure subscription updates, TUN mode global routing, and anti-hijacking custom DNS configurations.",
    url: "https://v2rayn-download.vercel.app",
    siteName: "v2rayN Portal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "v2rayN Client - High-Security Proxy GUI",
    description: "The official-recommended client wrapper for Xray, V2ray, VLESS, VMess, and Trojan secure routing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var originalFetch = window.fetch;
                  if (originalFetch) {
                    var fetchValue = originalFetch;
                    Object.defineProperty(window, 'fetch', {
                      get: function() {
                        return fetchValue;
                      },
                      set: function(val) {
                        fetchValue = val;
                      },
                      configurable: true,
                      enumerable: true
                    });
                  }
                } catch (e) {
                  console.warn("Non-blocking warning: Could not define custom fetch setter:", e);
                }
              })();
              (function() {
                try {
                  var saved = localStorage.getItem("v2rayn-theme");
                  if (saved === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 transition-colors duration-200`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
