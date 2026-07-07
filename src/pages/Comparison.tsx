"use client";

import { ShieldCheck, ArrowRight, GitCompare, Sparkles, Zap, Flame } from "lucide-react";

interface ComparisonProps {
  onNavigate: (page: string) => void;
}

export default function ComparisonPage({ onNavigate }: ComparisonProps) {
  const comparisons = [
    {
      id: "comparison/v2rayn-vs-clash",
      title: "v2rayN vs Clash",
      desc: "Compare user experiences, YAML profile structures, active maintenance schedules, and protocol limits of these premier client systems.",
      icon: <GitCompare className="w-5 h-5 text-blue-500" />
    },
    {
      id: "comparison/v2rayn-vs-nekoray",
      title: "v2rayN vs Nekoray",
      desc: "An in-depth analysis of Qt cross-platform capabilities vs native .NET Windows optimizations.",
      icon: <GitCompare className="w-5 h-5 text-emerald-500" />
    },
    {
      id: "comparison/v2rayn-vs-hiddify",
      title: "v2rayN vs Hiddify",
      desc: "Understand the difference between modern Flutter-based zero-config interfaces and v2rayN's advanced diagnostic panels.",
      icon: <GitCompare className="w-5 h-5 text-indigo-500" />
    },
    {
      id: "comparison/vmess-vs-vless",
      title: "VMess vs VLESS",
      desc: "Stateless VLESS + REALITY vs original stateful time-synchronized VMess. Performance and speed checks.",
      icon: <Flame className="w-5 h-5 text-rose-500" />
    },
    {
      id: "comparison/trojan-vs-shadowsocks",
      title: "Trojan vs Shadowsocks",
      desc: "Under the hood security. Imitating secure browser HTTPS sessions vs raw, lightweight AEAD cryptography outbounds.",
      icon: <Zap className="w-5 h-5 text-amber-500" />
    }
  ];

  return (
    <div id="comparison-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-100 dark:bg-blue-950/50 px-3 py-1 rounded-full w-fit mx-auto">
          Comparative Analysis
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          Client & Protocol Comparisons
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Make informed network architecture choices. Read our expert comparisons analyzing security levels, handshake latency, and hardware overheads.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {comparisons.map((comp, idx) => (
          <button
            key={idx}
            id={`btn-comp-card-${comp.id.replace("/", "-")}`}
            onClick={() => onNavigate(comp.id)}
            className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-left hover:shadow-lg transition-all group flex flex-col gap-4 cursor-pointer hover:translate-y-[-2px]"
          >
            <div className="p-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-800/80 rounded-xl w-fit group-hover:scale-105 transition-transform">
              {comp.icon}
            </div>
            <div>
              <h3 className="text-base font-extrabold text-neutral-950 dark:text-white font-sans">
                {comp.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2 font-semibold">
                {comp.desc}
              </p>
            </div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-auto flex items-center gap-1 group-hover:underline">
              Read comparison &rarr;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
