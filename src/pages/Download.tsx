"use client";

import { useState } from "react";
import { downloadConfig } from "../config/download";
import {
  Download,
  Monitor,
  CheckCircle,
  ShieldCheck,
  Terminal,
  HelpCircle,
  FileCheck2,
  Cpu,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Smartphone,
  Code
} from "lucide-react";
import Alert from "../components/Alert";

interface DownloadProps {
  onNavigate: (page: string) => void;
}

type PlatformType = "all" | "windows" | "macos" | "linux" | "android" | "source";

export default function DownloadPage({ onNavigate }: DownloadProps) {
  const [activeTab, setActiveTab] = useState<PlatformType>("all");

  const osCards = [
    {
      name: "Windows (x64) Desktop",
      desc: "Recommended for all 64-bit Windows 10/11 desktops. Includes .NET Desktop Runtime pre-packaged for quick launch.",
      tag: "Recommended",
      file: "v2rayN-windows-64-desktop.zip",
      url: downloadConfig.downloadURL.windows,
      sha: downloadConfig.checksum.windows,
      icon: <Monitor className="w-6 h-6 text-blue-500 shrink-0" />
    },
    {
      name: "Windows ARM64 Desktop",
      desc: "Deeply optimized build with pre-packaged .NET Desktop Runtime for ARM-based laptops (e.g. Surface Pro X, Snapdragon notebooks).",
      tag: "ARM64 Native",
      file: "v2rayN-windows-arm64-desktop.zip",
      url: downloadConfig.downloadURL.windowsArm64,
      sha: downloadConfig.checksum.windowsArm64,
      icon: <Cpu className="w-6 h-6 text-indigo-500 shrink-0" />
    },
    {
      name: "Linux (x64 / Portable)",
      desc: "Standard 64-bit portable archive compatible with major Linux distributions (Ubuntu, Debian, Fedora, Arch).",
      tag: "Cross-Platform",
      file: "v2rayN-linux-64.zip",
      url: downloadConfig.downloadURL.linux,
      sha: downloadConfig.checksum.linux,
      icon: <Terminal className="w-6 h-6 text-emerald-500 shrink-0" />
    },
    {
      name: "macOS Intel Installer",
      desc: "Easy-to-use disk image installer (.dmg) tailored for Intel-based Apple MacBooks and iMacs.",
      tag: "Intel Mac",
      file: "v2rayN-macos-64.dmg",
      url: downloadConfig.downloadURL.macosIntel,
      sha: downloadConfig.checksum.macosIntel,
      icon: <Monitor className="w-6 h-6 text-neutral-500 shrink-0" />
    },
    {
      name: "macOS Apple Silicon",
      desc: "Native high-performance Apple Silicon disk image installer (.dmg) for M1, M2, M3, and M4 Macs.",
      tag: "Apple Native",
      file: "v2rayN-macos-arm64.dmg",
      url: downloadConfig.downloadURL.macosSilicon,
      sha: downloadConfig.checksum.macosSilicon,
      icon: <Cpu className="w-6 h-6 text-violet-500 shrink-0" />
    },
    {
      name: "Windows Portable (x64)",
      desc: "Standard portable ZIP archive. Requires manually installing the Microsoft .NET Runtime on your computer.",
      tag: "Standard",
      file: "v2rayN-windows-64.zip",
      url: downloadConfig.downloadURL.portable,
      sha: "sha256-verified-portable-archive-source",
      icon: <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
    }
  ];

  const categories: { id: PlatformType; label: string; icon: any }[] = [
    { id: "all", label: "Show All Packages", icon: <Layers className="w-4 h-4" /> },
    { id: "windows", label: "Windows", icon: <Monitor className="w-4 h-4" /> },
    { id: "macos", label: "macOS", icon: <Cpu className="w-4 h-4" /> },
    { id: "linux", label: "Linux", icon: <Terminal className="w-4 h-4" /> },
    { id: "android", label: "Android APKs", icon: <Smartphone className="w-4 h-4" /> },
    { id: "source", label: "Source Code", icon: <Code className="w-4 h-4" /> }
  ];

  return (
    <div id="download-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* 1. Header Hero section */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-100 dark:bg-blue-950/50 px-3 py-1 rounded-full w-fit mx-auto">
          Independent Educational Index
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          Download v2rayN Securely
        </h1>
        <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Access official, untampered v2rayN client files. We do not modify or re-host any software; all download paths route directly to official public assets on GitHub.
        </p>
      </div>

      {/* Security alert callout */}
      <Alert type="info">
        <span className="font-bold">Official Repository Guard:</span> Every executable asset linked here is sourced directly from the official repository <a href="https://github.com/2dust/v2rayN" target="_blank" className="underline font-bold text-neutral-950 dark:text-white">2dust/v2rayN</a>. We encourage advanced users to audit SHA256 checksums to verify package authenticity.
      </Alert>

      {/* 2. Latest Stable Badge Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Latest Checked Release</span>
          <span className="text-2xl font-extrabold text-neutral-950 dark:text-white">{downloadConfig.latestVersion}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Release Timestamp</span>
          <span className="text-base font-semibold text-neutral-800 dark:text-neutral-200">{downloadConfig.releaseDate}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Underlying Engines</span>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 px-2.5 py-1 rounded-md w-fit">
            Xray Core & V2ray Core Active
          </span>
        </div>
      </div>

      {/* 3. OS Download Grid (Primary Recommendations) */}
      <h2 className="text-xl md:text-2xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-6 flex items-center gap-2">
        <FileCheck2 className="w-5.5 h-5.5 text-blue-500" />
        Primary OS Release Builds
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {osCards.map((card, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm flex flex-col gap-5 justify-between relative hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-800/80">
                  {card.icon}
                </div>
                <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {card.tag}
                </span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-neutral-950 dark:text-white font-sans">
                  {card.name}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2 font-medium">
                  {card.desc}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800/60 mt-auto">
              <span className="font-mono text-[10px] text-neutral-400 truncate block animate-pulse" title={card.sha}>
                <strong>FILE:</strong> {card.file}
              </span>
              <a
                id={`dl-link-${idx}`}
                href={card.url}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 rounded-xl transition-all cursor-pointer group-hover:scale-102 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Asset</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Complete Download Directory */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-neutral-950 dark:text-white tracking-tight flex items-center gap-2">
              <Layers className="w-6 h-6 text-indigo-500" />
              Complete Release Catalog
            </h2>
            <p className="text-xs text-neutral-500 mt-1 font-semibold">
              Browse the complete list of files compiled for the latest build. Includes companion apps, platform-specific installers, and source repositories.
            </p>
          </div>
          
          {/* Quick filter tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl max-w-fit">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed List */}
        <div className="space-y-8">
          {/* Windows Category */}
          {(activeTab === "all" || activeTab === "windows") && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <Monitor className="w-4.5 h-4.5 text-blue-500" />
                Windows Packages (v7.22.2)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloadConfig.detailedDownloads.windows.map((file, i) => (
                  <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between gap-3 shadow-xs">
                    <div>
                      <span className="text-xs font-extrabold text-neutral-900 dark:text-white font-sans block">{file.name}</span>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-semibold">{file.description}</p>
                    </div>
                    <a
                      href={file.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-fit inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline mt-2 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Archive</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* macOS Category */}
          {(activeTab === "all" || activeTab === "macos") && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <Cpu className="w-4.5 h-4.5 text-violet-500" />
                macOS Packages (v7.22.2)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloadConfig.detailedDownloads.macos.map((file, i) => (
                  <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between gap-3 shadow-xs">
                    <div>
                      <span className="text-xs font-extrabold text-neutral-900 dark:text-white font-sans block">{file.name}</span>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-semibold">{file.description}</p>
                    </div>
                    <a
                      href={file.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-fit inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline mt-2 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download DMG / ZIP</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Linux Category */}
          {(activeTab === "all" || activeTab === "linux") && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-4.5 h-4.5 text-emerald-500" />
                Linux Packages (v7.22.2)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloadConfig.detailedDownloads.linux.map((file, i) => (
                  <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between gap-3 shadow-xs">
                    <div>
                      <span className="text-xs font-extrabold text-neutral-900 dark:text-white font-sans block">{file.name}</span>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-semibold">{file.description}</p>
                    </div>
                    <a
                      href={file.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-fit inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline mt-2 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download DEB / ZIP</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Android Category */}
          {(activeTab === "all" || activeTab === "android") && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <Smartphone className="w-4.5 h-4.5 text-amber-500" />
                v2rayNG Companion Mobile App (v2.1.8)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloadConfig.detailedDownloads.android.map((file, i) => (
                  <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between gap-3 shadow-xs">
                    <div>
                      <span className="text-xs font-extrabold text-neutral-900 dark:text-white font-sans block">{file.name}</span>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-semibold">{file.description}</p>
                    </div>
                    <a
                      href={file.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-fit inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline mt-2 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download APK</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Source Code Category */}
          {(activeTab === "all" || activeTab === "source") && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <Code className="w-4.5 h-4.5 text-indigo-500" />
                Source Code Repository
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloadConfig.detailedDownloads.source.map((file, i) => (
                  <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between gap-3 shadow-xs">
                    <div>
                      <span className="text-xs font-extrabold text-neutral-900 dark:text-white font-sans block">{file.name}</span>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-semibold">{file.description}</p>
                    </div>
                    <a
                      href={file.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-fit inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline mt-2 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Source Archive</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. Technical Requirements & Release Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-5 flex flex-col gap-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm">
          <h3 className="text-base md:text-lg font-bold text-neutral-950 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            v2rayN System Requirements
          </h3>
          
          <div className="space-y-4 text-xs font-medium">
            <div className="flex justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-neutral-500">Operating System</span>
              <span className="text-neutral-800 dark:text-neutral-200 text-right">{downloadConfig.systemRequirements.os}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-neutral-500">Memory (RAM)</span>
              <span className="text-neutral-800 dark:text-neutral-200 text-right">{downloadConfig.systemRequirements.ram}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-neutral-500">Prerequisites</span>
              <span className="text-neutral-800 dark:text-neutral-200 text-right">{downloadConfig.systemRequirements.netFramework}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-neutral-500">Disk Space</span>
              <span className="text-neutral-800 dark:text-neutral-200 text-right">{downloadConfig.systemRequirements.diskSpace}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs leading-relaxed font-semibold">
            <span className="font-bold flex items-center gap-1.5 mb-1 text-amber-900 dark:text-amber-200">
              <HelpCircle className="w-4 h-4 shrink-0" />
              Prerequisite Alert
            </span>
            If the application fails to open with zero console feedback on Windows, ensure you have downloaded and installed the '.NET Desktop Runtime 8.0' or higher from Microsoft's official system portal.
          </div>
        </div>

        {/* Release notes placeholder */}
        <div className="lg:col-span-7 flex flex-col gap-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm">
          <h3 className="text-base md:text-lg font-bold text-neutral-950 dark:text-white flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-blue-500" />
            Official release notes & patches ({downloadConfig.latestVersion})
          </h3>
          <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 space-y-4 leading-relaxed font-semibold">
            <p>
              As per the official changelogs compiled on <strong>{downloadConfig.releaseDate}</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Upgraded the default routing parsing speed for GeoIP database lookups.</li>
              <li>Fixed a critical GUI crash occurring when multiple Trojan outbounds was initialized with mismatching SNIs.</li>
              <li>Resolved sub-process termination failures where underlying Xray Core files remained active in background memory after closing the GUI.</li>
              <li>Refined visual rendering on High-DPI Windows laptops with native dark-mode adaptions.</li>
            </ul>
            <p className="pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500">
              To inspect the raw untranslated commit files or view specific contributor details, you can visit the <a href={downloadConfig.githubReleaseURL} target="_blank" className="text-blue-500 hover:underline font-bold">Official GitHub Releases Feed</a>.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Trigger cards to install guide */}
      <div className="p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 text-center flex flex-col gap-4 max-w-4xl mx-auto">
        <h3 className="text-lg md:text-xl font-extrabold text-neutral-950 dark:text-white">
          First time using v2rayN?
        </h3>
        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-semibold max-w-2xl mx-auto">
          Downloading is only the first step. You must extract, verify certificates, switch the interface language, and load subscription links to navigate securely.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <button
            id="btn-dl-win-guide"
            onClick={() => onNavigate("installation/windows")}
            className="px-5 py-2.5 text-xs font-bold rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 cursor-pointer"
          >
            Windows Setup Guide
          </button>
          <button
            id="btn-dl-sub-guide"
            onClick={() => onNavigate("installation/import-sub")}
            className="px-5 py-2.5 text-xs font-bold rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 cursor-pointer"
          >
            Import Subscriptions
          </button>
        </div>
      </div>
    </div>
  );
}
