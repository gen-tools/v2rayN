"use client";

import { useState } from "react";
import { downloadConfig } from "../config/download";
import {
  Download,
  ShieldCheck,
  Globe,
  Settings,
  ArrowRight,
  Monitor,
  CheckCircle2,
  BookOpen,
  Terminal,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  ExternalLink,
  Info
} from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const packages = [
    {
      name: "Windows 64-bit Desktop (Self-Contained)",
      filename: "v2rayN-windows-64-desktop.zip",
      recommended: true,
      desc: "Includes the .NET Desktop Runtime and Xray core. Recommended for most Windows 10 and 11 users.",
      url: downloadConfig.downloadURL.windows,
      arch: "x64"
    },
    {
      name: "Windows ARM64 Desktop (Self-Contained)",
      filename: "v2rayN-windows-arm64-desktop.zip",
      recommended: false,
      desc: "Optimized for ARM-based Windows devices, such as Snapdragon laptops and Surface Pro X.",
      url: downloadConfig.downloadURL.windowsArm64,
      arch: "ARM64"
    },
    {
      name: "Windows 64-bit With-Core",
      filename: "v2rayN-With-Core.zip",
      recommended: false,
      desc: "Standard archive bundled with core binaries. Requires .NET 8.0 Desktop Runtime installed on the system.",
      url: downloadConfig.downloadURL.windows,
      arch: "x64"
    },
    {
      name: "Windows 64-bit Portable (Coreless)",
      filename: "v2rayN-windows-64.zip",
      recommended: false,
      desc: "Lightweight GUI shell without core engines. Cores must be downloaded separately via the application menu.",
      url: downloadConfig.downloadURL.portable,
      arch: "x64"
    }
  ];

  const faqs = [
    {
      q: "What is v2rayN?",
      a: "v2rayN is an open-source Windows GUI client for managing proxy protocols powered by Xray-core, v2fly, and sing-box. It provides an interface to configure VMess, VLESS, Trojan, Shadowsocks, and SOCKS5 servers without manually editing JSON configuration files."
    },
    {
      q: "Is this the official v2rayN website?",
      a: "No. This is an independent informational and documentation resource. All downloads link directly to official, unmodified releases on the official GitHub repository (github.com/2dust/v2rayN)."
    },
    {
      q: "Does v2rayN provide free proxy servers?",
      a: "No. v2rayN is a client application only. You must supply your own proxy server configuration, self-hosted VPS, or subscription link."
    },
    {
      q: "Which version should I download?",
      a: "Most users should download 'v2rayN-windows-64-desktop.zip'. It is self-contained and includes the required .NET runtime and core engines, so it works immediately after extraction."
    },
    {
      q: "Why does the application open in Chinese?",
      a: "v2rayN defaults to Chinese on first run. To change to English, select 'Language' from the top menu, choose 'English', and restart the app by right-clicking its icon in the Windows system tray and selecting 'Exit'."
    },
    {
      q: "Why do I see 'Failed to start core'?",
      a: "This happens when the routing core binary (xray.exe) is missing from the application directory. Download the 'With-Core' package or select 'Check for updates' > 'Update Xray Core' in the top menu."
    },
    {
      q: "What is the difference between System Proxy and TUN Mode?",
      a: "System Proxy mode configures the local Windows proxy settings for browsers and standard HTTP applications. TUN mode creates a virtual network adapter (Wintun) that routes all system traffic, including command-line tools and games, but requires running v2rayN as Administrator."
    }
  ];

  return (
    <div id="home-page" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12 md:space-y-16 text-center">
      
      {/* 1. HERO / HEADER */}
      <section id="hero-section" className="space-y-4 pt-2 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-semibold mx-auto">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span>Independent Guide & Verified Release Links</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans text-center">
          Download v2rayN for Windows
        </h1>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed text-center">
          v2rayN is a free, open-source Windows GUI client for Xray-core and V2Ray. It supports VLESS, VMess, Trojan, Shadowsocks, and SOCKS5 protocols with custom routing, subscription management, and system-wide TUN mode.
        </p>

        {/* Release Metadata */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-neutral-600 dark:text-neutral-400">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Version: <strong>v{downloadConfig.latestVersion}</strong>
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium">
            <Monitor className="w-3.5 h-3.5 text-blue-500" /> Windows 10 / 11 (x64, ARM64)
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium">
            <Globe className="w-3.5 h-3.5 text-indigo-500" /> License: GPL-3.0
          </span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            id="hero-dl-zip"
            href={downloadConfig.downloadURL.windows}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download v2rayN (v{downloadConfig.latestVersion})</span>
          </a>
          <button
            id="hero-installation-guide"
            onClick={() => {
              const el = document.getElementById("installation-guide");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-blue-500" />
            <span>Installation Guide</span>
          </button>
        </div>

        <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 flex items-center justify-center gap-2.5 text-center max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-blue-500 shrink-0" />
          <span>
            <strong>Official Source Notice:</strong> All downloads link directly to official release assets published on GitHub by <a href="https://github.com/2dust/v2rayN" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">2dust/v2rayN</a>. No files are re-hosted or modified.
          </span>
        </div>
      </section>

      {/* 2. PACKAGE SELECTION TABLE */}
      <section id="download-packages" className="space-y-4 text-center">
        <div className="space-y-1 text-center max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white font-sans text-center">
            Which Download Package Should You Choose?
          </h2>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 text-center">
            Select the build that matches your system architecture and runtime requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border flex flex-col justify-between gap-3 text-center items-center ${
                pkg.recommended
                  ? "border-blue-200 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/10"
                  : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
              }`}
            >
              <div className="space-y-2 text-center w-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs font-mono font-bold text-neutral-500">{pkg.arch}</span>
                  {pkg.recommended && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      Recommended
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white font-sans text-center">
                  {pkg.name}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-center max-w-md">
                  {pkg.desc}
                </p>
                <code className="text-[11px] font-mono text-neutral-500 block truncate text-center">
                  {pkg.filename}
                </code>
              </div>

              <a
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 text-xs font-bold bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 rounded-lg transition-opacity"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .zip</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SYSTEM REQUIREMENTS */}
      <section id="system-requirements" className="space-y-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white font-sans text-center">
          System Requirements
        </h2>

        <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 max-w-3xl mx-auto">
          <table className="w-full text-center text-xs md:text-sm border-collapse">
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-neutral-700 dark:text-neutral-300">
              <tr>
                <td className="p-3.5 font-semibold text-neutral-900 dark:text-white w-1/3 text-center">Operating System</td>
                <td className="p-3.5 text-center">Windows 10 (Build 1809 or higher) / Windows 11 (64-bit or ARM64)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-neutral-900 dark:text-white text-center">Runtime Requirement</td>
                <td className="p-3.5 text-center">Microsoft .NET Desktop Runtime 8.0 (included in Self-Contained build)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-neutral-900 dark:text-white text-center">Core Engines</td>
                <td className="p-3.5 text-center">Xray-core, v2fly core, or sing-box (bundled with With-Core/Desktop builds)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-neutral-900 dark:text-white text-center">Disk Space</td>
                <td className="p-3.5 text-center">~120 MB free space (including GeoIP/GeoSite routing databases)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-neutral-900 dark:text-white text-center">Privileges</td>
                <td className="p-3.5 text-center">Standard user for System Proxy mode; Administrator required for TUN mode</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. INSTALLATION GUIDE */}
      <section id="installation-guide" className="space-y-6 scroll-mt-20 text-center">
        <div className="space-y-1 text-center max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white font-sans text-center">
            How to Install and Set Up v2rayN
          </h2>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 text-center">
            v2rayN is portable and does not require an installer wizard.
          </p>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1.5 text-center">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block text-center">Step 1: Extract the Archive</span>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
              Download <code>v2rayN-windows-64-desktop.zip</code> and extract all contents to a permanent location (e.g., <code>C:\v2rayN</code>). Avoid running directly from the ZIP preview.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1.5 text-center">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block text-center">Step 2: Launch v2rayN.exe</span>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
              Open the folder and run <code>v2rayN.exe</code>. If Windows SmartScreen appears, click <em>More info</em> &gt; <em>Run anyway</em>. If Windows Firewall prompts, allow access.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1.5 text-center">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block text-center">Step 3: Change Language to English</span>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
              If the interface is in Chinese: click <em>Language (语言)</em> in the top-right menu, select <em>English</em>, then right-click the v2rayN icon in the system tray and select <em>Exit</em>. Restart the application.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1.5 text-center">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block text-center">Step 4: Add Your Server / Subscription</span>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
              To add a subscription: go to <em>Subscription Group</em> &gt; <em>Subscription group setting</em> &gt; <em>Add</em> &gt; paste the subscription URL &gt; <em>Confirm</em>. Then click <em>Subscription Group</em> &gt; <em>Update subscription group without proxy</em>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1.5 text-center">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block text-center">Step 5: Test Latency and Activate Proxy</span>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
              Select your nodes, press <code>Ctrl+R</code> to test real delay, select the best server, and press <code>Enter</code> to set it active. At the bottom bar, select <em>Set system proxy</em> and choose <em>Bypass domestic IP/domain</em>.
            </p>
          </div>
        </div>
      </section>

      {/* 5. COMMON TROUBLESHOOTING */}
      <section id="troubleshooting-quick" className="space-y-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white font-sans text-center">
          Common Troubleshooting Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1 text-center">
            <h3 className="text-xs font-bold text-rose-600 dark:text-rose-400 text-center">Node has ping, but websites do not load</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-center">
              VMess requires system clock accuracy within 90 seconds. Go to Windows Date &amp; Time settings and click <strong>Sync now</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1 text-center">
            <h3 className="text-xs font-bold text-rose-600 dark:text-rose-400 text-center">"Failed to start core" error</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-center">
              Ensure <code>xray.exe</code> is present in the <code>bin</code> folder, or click <em>Check for updates</em> &gt; <em>Update Xray Core</em> in the top menu.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1 text-center">
            <h3 className="text-xs font-bold text-rose-600 dark:text-rose-400 text-center">TUN Mode fails to enable</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-center">
              Virtual network adapter creation requires administrative privileges. Exit v2rayN and re-open it by selecting <strong>Run as administrator</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1 text-center">
            <h3 className="text-xs font-bold text-rose-600 dark:text-rose-400 text-center">Subscription update fails</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-center">
              If your ISP blocks the subscription host, connect to a single working server first, then select <em>Update subscription group through proxy</em>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faqs" className="space-y-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white font-sans text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2.5 max-w-3xl mx-auto text-center">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden text-center">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-3.5 text-center text-xs md:text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors cursor-pointer"
              >
                <span className="flex-1 text-center">{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0 ml-2" />
                )}
              </button>
              {openFaq === idx && (
                <div className="p-3.5 bg-neutral-50/50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. REPOSITORY & VERIFICATION FOOTER */}
      <section id="verification" className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 space-y-2 text-center max-w-3xl mx-auto">
        <h3 className="font-bold text-neutral-900 dark:text-white text-sm text-center">Source Code and Attribution</h3>
        <p className="text-center">
          v2rayN is licensed under the GNU General Public License v3.0 (GPL-3.0). You can inspect the source code, review commit logs, or report issues directly on the <a href={downloadConfig.githubReleaseURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">official 2dust/v2rayN repository on GitHub</a>.
        </p>
      </section>

    </div>
  );
}
