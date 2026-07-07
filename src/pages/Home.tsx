"use client";

import { useState } from "react";
import { downloadConfig } from "../config/download";
import {
  Download,
  ShieldCheck,
  Zap,
  Globe,
  Settings,
  Grid,
  Clock,
  ArrowRight,
  Monitor,
  CheckCircle2,
  Cpu,
  BookOpen,
  Sparkles,
  Terminal,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  AlertTriangle,
  RefreshCw,
  Sliders,
  Play
} from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const whyChoosePoints = [
    "Open-source, with an active community actually building on it",
    "Clean, lightweight interface that doesn't get in your way",
    "Covers all the modern proxy protocols you'd need",
    "Routing and DNS settings you can actually customize",
    "TUN mode for handling traffic system-wide",
    "Dead-simple subscription and QR code imports",
    "Handles multiple server profiles without a headache",
    "Regular updates straight from the official GitHub repo"
  ];

  const supportedPlatforms = [
    "Windows 10 and Windows 11",
    "Windows ARM64",
    "macOS (Intel and Apple Silicon)",
    "Linux",
    "Android (via the companion app, v2rayNG)"
  ];

  return (
    <div id="home-page" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-16 md:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full w-fit mx-auto border border-blue-100 dark:border-blue-900/40">
          Unofficial Educational Resource
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans leading-[1.1]">
          Download v2rayN for Windows <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">(Latest Version)</span>
        </h1>
        
        <p className="text-lg md:text-xl font-bold text-neutral-700 dark:text-neutral-300 font-sans tracking-tight">
          A Solid Open-Source Client for Xray and V2Ray
        </p>

        <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto space-y-4 font-semibold text-left p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800/60 shadow-sm">
          <p>
            If you're after a dependable way to handle proxy connections on Windows, v2rayN is one of the go-to desktop clients out there right now. It's essentially a graphical front-end for the Xray and V2Ray cores, taking the pain out of importing server configs, hopping between protocols, setting up routing rules, and steering your network traffic — all without touching a single JSON file by hand.
          </p>
          <p>
            This site is here to give you a safe, no-nonsense way to grab the latest v2rayN build straight from the official GitHub releases, along with guides, install walkthroughs, troubleshooting help, and documentation for newcomers and power users alike.
          </p>
          <p>
            Whether this is your first proxy setup or you're juggling several profiles across different networks, you should find what you need right here.
          </p>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-2">
          <a
            id="hero-dl-zip"
            href={downloadConfig.downloadURL.windows}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-extrabold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-102 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Latest Build</span>
          </a>
          <button
            id="hero-installation-guide"
            onClick={() => {
              const el = document.getElementById("installation-guide");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-extrabold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Installation Walkthrough</span>
          </button>
        </div>
      </section>

      {/* 2. WHAT IS V2RAYN */}
      <section id="what-is-v2rayn" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans flex items-center gap-2.5">
            <span className="p-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-100 dark:border-blue-900/30">
              <Terminal className="w-5.5 h-5.5" />
            </span>
            What Is v2rayN?
          </h2>
          <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4 font-semibold">
            <p>
              v2rayN is a free, open-source Windows app that gives you a proper interface for the Xray and V2Ray ecosystem. Rather than hand-editing dense JSON files, you manage servers, subscriptions, routing rules, DNS settings, and proxy modes through a UI that actually makes sense.
            </p>
            <p>
              It covers most of the protocols you'd expect — VMess, VLESS, Trojan, Shadowsocks, SOCKS5, and HTTP — so it fits a wide range of setups. On top of that, you get the more advanced stuff too: TUN mode, system proxy integration, QR code imports, subscription handling, and flexible traffic routing.
            </p>
            <p>
              The big difference from a typical VPN is that v2rayN doesn't just funnel everything through one encrypted tunnel. You get to decide exactly which apps, domains, or IPs go through the proxy and which connect directly. That kind of control is a big part of why developers, researchers, sysadmins, and privacy-focused users tend to gravitate toward it.
            </p>
          </div>
        </div>

        {/* Beautiful Interactive visual block for Xray Core simulation */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-neutral-100 flex flex-col h-[280px] font-mono text-[10px] md:text-xs shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-neutral-400 ml-1.5 font-bold">Xray Core Console</span>
            </div>
            <span className="bg-neutral-800 text-[9px] text-neutral-300 px-1.5 py-0.5 rounded font-bold">ACTIVE</span>
          </div>
          <div className="space-y-2.5 flex-1 overflow-y-auto">
            <p className="text-neutral-500 font-bold">// Loading protocols configuration...</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                <span className="text-blue-400 font-bold">VMess</span>
                <span className="text-neutral-500">READY</span>
              </div>
              <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                <span className="text-emerald-400 font-bold">VLESS</span>
                <span className="text-neutral-500">READY</span>
              </div>
              <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                <span className="text-indigo-400 font-bold">Trojan</span>
                <span className="text-neutral-500">READY</span>
              </div>
              <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                <span className="text-amber-400 font-bold">TUN Adapter</span>
                <span className="text-neutral-500">READY</span>
              </div>
            </div>
            <p className="text-emerald-400 text-[10px] animate-pulse">● VPN Bypass Direct Outbounds Activated.</p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE V2RAYN */}
      <section id="why-choose" className="space-y-6 pt-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans flex items-center gap-2.5">
            <span className="p-2 bg-amber-50 dark:bg-amber-950/50 text-amber-500 rounded-lg border border-amber-100 dark:border-amber-900/30">
              <Sparkles className="w-5.5 h-5.5" />
            </span>
            Why Choose v2rayN?
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3 font-semibold">
            Part of why v2rayN has caught on is that it doesn't force you to pick between simple and powerful. New users can drop in a subscription link and be connected in a couple of minutes, while anyone who wants to go deeper has full access to routing policies, DNS tweaks, and a choice of proxy cores.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800/60 shadow-sm space-y-4">
          <p className="text-xs md:text-sm font-bold text-neutral-900 dark:text-white">
            A few standout points:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChoosePoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 font-semibold leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-2 font-semibold border-t border-neutral-200 dark:border-neutral-800/80">
            Since the project stays actively maintained, you get a steady stream of fixes, compatibility patches, and support for whatever new networking tech comes along.
          </p>
        </div>
      </section>

      {/* 4. DOWNLOAD THE LATEST VERSION */}
      <section id="download-latest" className="space-y-6 pt-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans flex items-center gap-2.5">
            <span className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-500 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
              <Download className="w-5.5 h-5.5" />
            </span>
            Download the Latest Version
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3 font-semibold">
            Every download link on this site points straight to the official GitHub Releases page, published by the actual maintainers — nothing gets mirrored or repackaged here.
          </p>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2 font-semibold">
            Before you hit download, double check your system specs and grab the build that matches your OS and processor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800/60 shadow-sm space-y-4">
            <span className="text-xs font-extrabold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
              Supported platforms:
            </span>
            
            <div className="space-y-2.5">
              {supportedPlatforms.map((platform, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50">
                  <div className="p-1 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 font-bold">
                    {platform}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold pt-2 border-t border-neutral-200 dark:border-neutral-800/80">
              Each release comes with release notes and a version history, so it's easy to see what's changed if you're updating from an older build.
            </p>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg flex flex-col justify-between h-full gap-6">
            <div className="space-y-3">
              <span className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-extrabold px-2.5 py-1 rounded-md w-fit block">
                Official Release
              </span>
              <h3 className="text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Get v2rayN v{downloadConfig.latestVersion}
              </h3>
              <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
                Grab pre-compiled software archives safely. These points directly to official repository release assets.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <a
                id="btn-home-latest-zip"
                href={downloadConfig.downloadURL.windows}
                className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/20 dark:hover:bg-blue-950/10 text-xs md:text-sm font-extrabold text-neutral-800 dark:text-neutral-200 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Monitor className="w-4.5 h-4.5 text-blue-500" />
                  Windows Core ZIP (v2rayn)
                </span>
                <Download className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 shrink-0" />
              </a>
              <button
                id="btn-home-view-downloads"
                onClick={() => onNavigate("download")}
                className="w-full text-center py-2.5 text-xs text-blue-600 dark:text-blue-400 font-extrabold hover:underline flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View macOS, Linux, and other downloads</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW TO INSTALL V2RAYN */}
      <section id="installation-guide" className="space-y-8 pt-4 scroll-mt-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans flex items-center gap-2.5">
            <span className="p-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
              <Settings className="w-5.5 h-5.5" />
            </span>
            How to Install v2rayN on Windows (Step-by-Step Guide)
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3 font-semibold">
            Good news: installing v2rayN is pretty painless. It comes as a portable ZIP, so there's no installer wizard to click through and nothing gets buried in your system files. Download it, unzip it, add a server, and you're online.
          </p>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2 font-semibold">
            Here's the full walkthrough, whether this is your first time setting it up or you're just updating an old copy.
          </p>
        </div>

        {/* Render Steps */}
        <div className="space-y-6 max-w-4xl">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-xs md:text-sm shrink-0">
                1
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Step 1: Grab the Latest Release
              </h3>
            </div>
            <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3 font-semibold pl-11">
              <p>
                Head to the official GitHub repo and download the newest version using the link above.
              </p>
              <p>
                You'll need to pick the right build for your machine:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Windows x64</li>
                <li>Windows ARM64</li>
                <li>Self-Contained (bundles the .NET Runtime for you)</li>
                <li>Standard (you'll need .NET Runtime already installed)</li>
              </ul>
              <p className="pt-2 text-neutral-800 dark:text-neutral-200 font-bold border-t border-neutral-100 dark:border-neutral-800/80">
                Stick to the official source — it's the safest way to make sure you're not getting a tampered or outdated copy.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-xs md:text-sm shrink-0">
                2
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Step 2: Unzip It Somewhere Permanent
              </h3>
            </div>
            <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3 font-semibold pl-11">
              <p>
                Once it's downloaded:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Right-click the ZIP file.</li>
                <li>Hit Extract All.</li>
                <li>Pick a folder you won't be deleting later — something like:</li>
              </ul>
              <pre className="p-3 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 rounded-xl font-mono text-xs md:text-sm text-neutral-800 dark:text-neutral-200 font-bold w-fit">
                <code>C:\v2rayN</code>
              </pre>
              <p className="pt-2 text-neutral-800 dark:text-neutral-200 font-bold border-t border-neutral-100 dark:border-neutral-800/80">
                Since it's portable, everything lives in this one folder. Want to back it up or move it to another PC later? Just copy the folder — no reinstall needed.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-xs md:text-sm shrink-0">
                3
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Step 3: Open the App
              </h3>
            </div>
            <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 font-semibold pl-11">
              <p>
                Go into the folder you just extracted and double-click v2rayN.exe.
              </p>
              <p>
                Windows will probably throw up a Firewall or Defender prompt asking for network permission — go ahead and click Allow Access. Without it, the app can't route your traffic through a proxy.
              </p>
              <p>
                The first time you open it, v2rayN might ask to download a core engine if it doesn't detect one already.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-xs md:text-sm shrink-0">
                4
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Step 4: Pick Your Core Engine
              </h3>
            </div>
            <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 font-semibold pl-11">
              <p>
                v2rayN can run on a couple of different cores — Xray Core and sing-box are the main options.
              </p>
              <p>
                If you're not sure which to pick, go with Xray Core. It's the safer default and handles VMess, VLESS, Trojan, Shadowsocks, and Reality without any hiccups.
              </p>
              <p>
                Curious about sing-box later on? You can switch over anytime — your server configs will carry over fine.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-xs md:text-sm shrink-0">
                5
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Step 5: Add a Server
              </h3>
            </div>
            <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 font-semibold pl-11">
              <p>
                You won't be able to connect to anything until you've got at least one server set up. v2rayN gives you a few ways to do that:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Paste in a subscription URL</li>
                <li>Scan a QR code</li>
                <li>Load a config file</li>
                <li>Paste a VMess or VLESS link directly</li>
                <li>Enter the server details by hand</li>
              </ul>
              <p className="pt-2 text-neutral-800 dark:text-neutral-200 font-bold border-t border-neutral-100 dark:border-neutral-800/80">
                Once it's added, it'll show up in your server list on the main screen.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-xs md:text-sm shrink-0">
                6
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Step 6: Pick Which Server to Use
              </h3>
            </div>
            <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 font-semibold pl-11">
              <p>
                Click on the server you want and set it active.
              </p>
              <p>
                Got several servers in your subscription? Run the Ping or Real Delay Test to see which one responds fastest from your location — worth doing before you settle in for a long browsing session.
              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-xs md:text-sm shrink-0">
                7
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Step 7: Turn On System Proxy or TUN Mode
              </h3>
            </div>
            <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4 font-semibold pl-11">
              <p>
                Now you need to decide how your traffic actually gets routed.
              </p>
              
              <div className="p-4 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80 rounded-xl space-y-1">
                <span className="text-xs font-bold text-neutral-950 dark:text-white block font-sans">
                  System Proxy Mode
                </span>
                <p className="text-[11px] md:text-xs">
                  The go-to option for most people. Routes your browser and other proxy-aware apps through the server.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80 rounded-xl space-y-1">
                <span className="text-xs font-bold text-neutral-950 dark:text-white block font-sans">
                  PAC Mode
                </span>
                <p className="text-[11px] md:text-xs">
                  Only sends specific sites or apps through the proxy based on a rule set, while everything else connects normally.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80 rounded-xl space-y-1">
                <span className="text-xs font-bold text-neutral-950 dark:text-white block font-sans">
                  TUN Mode
                </span>
                <p className="text-[11px] md:text-xs">
                  The most aggressive option — sets up a virtual adapter and pushes nearly all your traffic through the proxy, similar to how a full VPN behaves, but with more routing flexibility.
                </p>
              </div>

              <p className="pt-2 text-neutral-800 dark:text-neutral-200 font-bold">
                Pick whichever fits how you actually use your connection day to day.
              </p>
            </div>
          </div>

          {/* Step 8 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-xs md:text-sm shrink-0">
                8
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white font-sans">
                Step 8: Make Sure It's Actually Working
              </h3>
            </div>
            <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3 font-semibold pl-11">
              <p>
                Once your proxy mode is on:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Open your browser.</li>
                <li>Try loading a site.</li>
                <li>Run the Ping, Speed Test, or Route Test tools built into the app to double-check everything's routing properly.</li>
              </ul>
              <p className="pt-2 text-neutral-800 dark:text-neutral-200 font-bold border-t border-neutral-100 dark:border-neutral-800/80">
                Not working? Try refreshing your subscription, switching servers, or checking that your firewall isn't quietly blocking the app in the background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEEPING V2RAYN UPDATED */}
      <section id="updating-guide" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
        <div className="md:col-span-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800/60 shadow-sm space-y-4 h-full">
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-blue-500 shrink-0" />
            Keeping v2rayN Updated
          </h2>
          <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3 font-semibold">
            <p>
              New versions roll out fairly often with bug fixes and new protocol support, so it's worth updating every so often.
            </p>
            <p>
              Here's how:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Grab the newest release.</li>
              <li>Extract it.</li>
              <li>Swap in the new files, but leave your config folder untouched.</li>
              <li>Open the updated app.</li>
              <li>Update your core (Xray or sing-box) if it asks.</li>
            </ul>
            <p className="pt-2 text-neutral-800 dark:text-neutral-200 font-bold border-t border-neutral-200/50 dark:border-neutral-800/50">
              Keeping the app and core current is the easiest way to avoid weird bugs and stay on the best performance.
            </p>
          </div>
        </div>

        {/* 7. QUICK FIXES FOR COMMON SETUP ISSUES */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-rose-50/20 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/40 shadow-sm space-y-4 h-full">
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
            Quick Fixes for Common Setup Issues
          </h2>
          <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3 font-semibold">
            <p className="text-neutral-950 dark:text-neutral-100 font-bold">
              Running into trouble? Check these first before digging deeper:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-rose-950 dark:text-rose-300/90">
              <li>Double-check you grabbed the right build for your CPU architecture.</li>
              <li>Make sure Windows Firewall isn't blocking the app.</li>
              <li>If you're on the standard build, confirm .NET Runtime is actually installed.</li>
              <li>Re-check that your subscription link or config file is still valid.</li>
              <li>Update your Xray Core — an outdated core causes more issues than people expect.</li>
            </ul>
            <button
              id="btn-home-troubleshoot"
              onClick={() => onNavigate("troubleshooting")}
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
            >
              <span>Visit full Diagnostic Center</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="space-y-6 pt-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans flex items-center gap-2.5">
            <span className="p-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg border border-neutral-200/50 dark:border-neutral-700/50">
              <HelpCircle className="w-5 h-5" />
            </span>
            Frequently Asked Questions
          </h2>
        </div>

        {/* Interactive FAQ list utilizing exactly verbatim Q&As */}
        <div className="space-y-4 max-w-4xl">
          {/* Question 1 */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFaq(1)}
              className="w-full flex items-center justify-between p-4 text-left text-xs md:text-sm font-extrabold text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors cursor-pointer"
            >
              <span>Is v2rayN free to use?</span>
              {openFaq === 1 ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
            </button>
            {openFaq === 1 && (
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold">
                Yep. It's fully open-source and free to download and use.
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFaq(2)}
              className="w-full flex items-center justify-between p-4 text-left text-xs md:text-sm font-extrabold text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors cursor-pointer"
            >
              <span>Is this the official v2rayN site?</span>
              {openFaq === 2 ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
            </button>
            {openFaq === 2 && (
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold">
                No — this is an independent site built to help people learn and use the software. Every download link routes directly to the official GitHub repo run by the actual developers.
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFaq(3)}
              className="w-full flex items-center justify-between p-4 text-left text-xs md:text-sm font-extrabold text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors cursor-pointer"
            >
              <span>Which protocols does it support?</span>
              {openFaq === 3 ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
            </button>
            {openFaq === 3 && (
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold">
                VMess, VLESS, Trojan, Shadowsocks, SOCKS5, HTTP, plus a handful of advanced transport options that come from the underlying Xray core.
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFaq(4)}
              className="w-full flex items-center justify-between p-4 text-left text-xs md:text-sm font-extrabold text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors cursor-pointer"
            >
              <span>Does it work on Windows 11?</span>
              {openFaq === 4 ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
            </button>
            {openFaq === 4 && (
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold">
                Yes, the current releases run fine on both Windows 10 and Windows 11.
              </div>
            )}
          </div>

          {/* Question 5 */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFaq(5)}
              className="w-full flex items-center justify-between p-4 text-left text-xs md:text-sm font-extrabold text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors cursor-pointer"
            >
              <span>Can I use subscription links?</span>
              {openFaq === 5 ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
            </button>
            {openFaq === 5 && (
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold">
                Yes — you can import subscription URLs, scan QR codes, or set things up manually, which makes managing multiple servers pretty painless.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. GET STARTED */}
      <section id="get-started" className="pt-4">
        <div className="rounded-3xl bg-neutral-950 text-white p-8 md:p-12 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl -z-10"></div>
          
          <div className="max-w-3xl flex flex-col gap-5">
            <span className="bg-white/10 text-neutral-200 border border-white/10 text-[10px] font-bold px-3 py-1 rounded-full w-fit uppercase tracking-wider">
              Educational Resource Center
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
              Get Started
            </h2>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-semibold">
              Grab the latest v2rayN release from the official GitHub page, work through our install guide, and dig into the tutorials we've put together on configuration, routing, troubleshooting, and the more advanced networking features. First-timer or seasoned admin, the goal is the same — get you using v2rayN confidently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                id="get-started-dl-direct"
                href={downloadConfig.downloadURL.windows}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-extrabold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer shadow-lg shadow-blue-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download v2rayN Latest Build</span>
              </a>
              <button
                id="get-started-tutorials"
                onClick={() => onNavigate("configuration")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-extrabold rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer"
              >
                <span>Browse Tutorials</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
