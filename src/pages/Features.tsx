"use client";

import { ShieldCheck, Zap, Globe, Sliders, QrCode, FileCode, Cpu, BarChart3, Terminal, HelpCircle } from "lucide-react";

interface FeaturesProps {
  onNavigate: (page: string) => void;
}

export default function FeaturesPage({ onNavigate }: FeaturesProps) {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Multiple Protocol Support",
      desc: "Native support for advanced encryption channels including VMess, VLESS, Trojan, Shadowsocks, and standard SOCKS outbounds."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Fast Routing",
      desc: "Highly-optimized split-tunneling that bypasses domestic LAN and CN endpoints automatically."
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      title: "TUN Mode Adapter",
      desc: "Creates virtual network card adapter interfaces to route absolute global system traffic safely."
    },
    {
      icon: <Terminal className="w-5 h-5 text-neutral-500" />,
      title: "System Proxy States",
      desc: "Quickly toggle between Clear System Proxy, Set System Proxy, and smart PAC rule routing settings."
    },
    {
      icon: <QrCode className="w-5 h-5 text-rose-500" />,
      title: "QR Import",
      desc: "Import new node connections instantly using system screenshot readers or live webcam scanners."
    },
    {
      icon: <FileCode className="w-5 h-5 text-violet-500" />,
      title: "Routing Rules",
      desc: "Create custom split domain rules using compiled GeoSite and GeoIP binary dat databases."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-indigo-500" />,
      title: "Traffic Statistics",
      desc: "Real-time bandwidth logging, diagnostic delays checks, and persistent speed tests."
    },
    {
      icon: <Cpu className="w-5 h-5 text-rose-500" />,
      title: "DNS Support",
      desc: "Protect against DNS hijacking by setting up non-leaking remote alternative DNS targets."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-emerald-500" />,
      title: "Open Source",
      desc: "Fully open, community-maintained codebase hosted entirely on GitHub under secure license audits."
    },
    {
      icon: <Sliders className="w-5 h-5 text-teal-500" />,
      title: "Cross Platform",
      desc: "Engineered cleanly for modern Windows desktops while supporting Linux and macOS environments."
    }
  ];

  return (
    <div id="features-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
        <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider bg-violet-100 dark:bg-violet-950/50 px-3 py-1 rounded-full w-fit mx-auto">
          Core Capabilities
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          Features of v2rayN
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Explore why v2rayN remains the most versatile, feature-rich graphical companion client in the open-source community.
        </p>
      </div>

      {/* Grid of features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm flex flex-col gap-4"
          >
            <div className="p-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-800/80 rounded-xl w-fit">
              {feat.icon}
            </div>
            <div>
              <h3 className="text-base font-extrabold text-neutral-950 dark:text-white font-sans">
                {feat.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2 font-semibold">
                {feat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
