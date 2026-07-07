"use client";

import { Terminal, Monitor, Cpu, Settings, BookOpen, Key, RefreshCw } from "lucide-react";

interface InstallationProps {
  onNavigate: (page: string) => void;
}

export default function InstallationPage({ onNavigate }: InstallationProps) {
  const cards = [
    {
      id: "installation/windows",
      icon: <Monitor className="w-6 h-6 text-blue-500" />,
      title: "Windows Installation",
      desc: "Step-by-step setup guides for Windows 10 & 11 with fully bundled Xray cores."
    },
    {
      id: "installation/linux",
      icon: <Terminal className="w-6 h-6 text-emerald-500" />,
      title: "Linux Setup Guide",
      desc: "Configure and run v2rayN on Ubuntu, Fedora, or Arch Linux distributions cleanly."
    },
    {
      id: "installation/macos",
      icon: <Cpu className="w-6 h-6 text-violet-500" />,
      title: "macOS Deployment",
      desc: "Deploy cross-platform GUI nodes with Gatekeeper clearance instructions."
    },
    {
      id: "installation/first-setup",
      icon: <Settings className="w-6 h-6 text-indigo-500" />,
      title: "First-Time Launch",
      desc: "Switch the default language to English, verify core binaries, and configure paths."
    },
    {
      id: "installation/import-sub",
      icon: <Key className="w-6 h-6 text-amber-500" />,
      title: "Import Subscriptions",
      desc: "Automate adding VMess or VLESS node list groups using provider URL strings."
    },
    {
      id: "installation/manual-config",
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
      title: "Manual Node Config",
      desc: "Create node connections manually by filling IP addresses, UUIDs, and network keys."
    },
    {
      id: "installation/update-guide",
      icon: <RefreshCw className="w-6 h-6 text-teal-500" />,
      title: "Update Client & Cores",
      desc: "Download secure updates and safely backup your node list configs."
    }
  ];

  return (
    <div id="installation-landing-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full w-fit mx-auto">
          Installation Center
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          Deploy v2rayN on Any Machine
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Select a detailed walkthrough card below to get v2rayN fully configured for secure, leak-free network tunnels.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <button
            key={idx}
            id={`btn-install-card-${card.id.replace("/", "-")}`}
            onClick={() => onNavigate(card.id)}
            className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-left hover:shadow-lg transition-all group flex flex-col gap-4 cursor-pointer hover:translate-y-[-2px]"
          >
            <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 w-fit group-hover:scale-105 transition-transform border border-neutral-100 dark:border-neutral-800/80">
              {card.icon}
            </div>
            <div>
              <h3 className="text-base font-extrabold text-neutral-950 dark:text-white font-sans">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2 font-semibold">
                {card.desc}
              </p>
            </div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-auto flex items-center gap-1 group-hover:underline">
              Read guide &rarr;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
