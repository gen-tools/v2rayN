"use client";

import { useState, useEffect, SVGProps } from "react";
import { AlertCircle, Clock, ShieldX, Key, Search, HelpCircle, AlertTriangle, RefreshCw, Network, Monitor, Cpu, Terminal, FileCode } from "lucide-react";

interface TroubleshootingProps {
  onNavigate: (page: string) => void;
}

export default function TroubleshootingPage({ onNavigate }: TroubleshootingProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const issues = [
    {
      id: "troubleshooting/not-connecting",
      icon: <ShieldX className="w-5 h-5 text-rose-500" />,
      title: "Not Connecting",
      desc: "Local client shows active node connection but fails to request webpage URLs.",
      severity: "High"
    },
    {
      id: "troubleshooting/connection-timeout",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      title: "Connection Timeout",
      desc: "Node requests time out or fail handshaking with -1ms delay diagnostics.",
      severity: "High"
    },
    {
      id: "troubleshooting/import-failed",
      icon: <FileCode className="w-5 h-5 text-rose-500" />,
      title: "Import Failed",
      desc: "Clipboard paste reports corrupted URL format or failed base64 decoding.",
      severity: "Medium"
    },
    {
      id: "troubleshooting/subscription-failed",
      icon: <RefreshCw className="w-5 h-5 text-blue-500" />,
      title: "Subscription Failed",
      desc: "Updating node servers fails due to ISP network blocks or server certificate issues.",
      severity: "High"
    },
    {
      id: "troubleshooting/dns-leak",
      icon: <Network className="w-5 h-5 text-emerald-500" />,
      title: "DNS Leak",
      desc: "ISP can silently monitor which websites you request through secure links.",
      severity: "Medium"
    },
    {
      id: "troubleshooting/tls-error",
      icon: <Key className="w-5 h-5 text-indigo-500" />,
      title: "TLS Error",
      desc: "Handshake failures with mismatching SNIs, bad keys, or encryption issues.",
      severity: "High"
    },
    {
      id: "troubleshooting/firewall-issues",
      icon: <Monitor className="w-5 h-5 text-rose-500" />,
      title: "Firewall Issues",
      desc: "Windows Defender silently isolates or deletes crucial xray.exe core files.",
      severity: "High"
    },
    {
      id: "troubleshooting/certificate-error",
      icon: <Key className="w-5 h-5 text-violet-500" />,
      title: "Certificate Error",
      desc: "Untrusted root authority blocks browser SSL handshakes with proxy outbounds.",
      severity: "Medium"
    },
    {
      id: "troubleshooting/proxy-not-working",
      icon: <Terminal className="w-5 h-5 text-neutral-500" />,
      title: "Proxy Not Working",
      desc: "Browsers bypass local ports or external apps ignore active proxy tun.",
      severity: "High"
    },
    {
      id: "troubleshooting/tun-not-working",
      icon: <SlidersIcon className="w-5 h-5 text-blue-500" />,
      title: "TUN Mode Not Working",
      desc: "Virtual Wintun adapter driver fails to spawn or install with privileges.",
      severity: "High"
    },
    {
      id: "troubleshooting/high-cpu",
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      title: "High CPU Usage",
      desc: "Xray subprocess causes resource bottlenecks due to verbose log triggers.",
      severity: "Low"
    },
    {
      id: "troubleshooting/high-memory",
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "High Memory Usage",
      desc: "Cache overload loops or massive Geo databases lock system memory allocations.",
      severity: "Low"
    },
    {
      id: "troubleshooting/core-missing",
      icon: <AlertTriangle className="w-5 h-5 text-rose-500" />,
      title: "Core Missing",
      desc: "Failed to start core error on startup due to missing xray binaries.",
      severity: "High"
    },
    {
      id: "troubleshooting/json-error",
      icon: <FileCode className="w-5 h-5 text-neutral-500" />,
      title: "JSON Error",
      desc: "Failed to parse GUI config files due to corrupted or untruncated config strings.",
      severity: "Medium"
    }
  ];

  const filteredIssues = issues.filter(
    (issue) =>
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="troubleshooting-landing-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-10">
        <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-full w-fit mx-auto">
          Diagnostic Center
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          Troubleshooting & Diagnostics
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Select an issue block below to find immediate, step-by-step resolution advice, shell codes, and config adjustments.
        </p>
      </div>

      {/* Internal Search */}
      <div className="relative mb-10 max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400 shrink-0" />
        <input
          id="trouble-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter issues (e.g. core, timeout)..."
          className="w-full pl-11 pr-4 py-2.5 text-xs md:text-sm rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Grid of 14 Issues */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredIssues.map((issue, idx) => (
          <button
            key={idx}
            id={`btn-trouble-card-${issue.id.replace("/", "-")}`}
            onClick={() => onNavigate(issue.id)}
            className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-left hover:border-rose-500 transition-all hover:shadow-md cursor-pointer flex flex-col gap-4 group hover:translate-y-[-2px]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="p-2.5 bg-neutral-50 dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-800/80 shrink-0">
                {issue.icon}
              </div>
              <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                issue.severity === "High"
                  ? "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400"
                  : issue.severity === "Medium"
                  ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              }`}>
                {issue.severity} Priority
              </span>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-neutral-950 dark:text-white font-sans group-hover:text-rose-500 transition-colors">
                {issue.title}
              </h3>
              <p className="text-[11px] md:text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-1.5 font-semibold">
                {issue.desc}
              </p>
            </div>
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-auto hover:underline">
              Troubleshoot &rarr;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Minimal fallback helper for slider icon
function SlidersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  );
}
