"use client";

import { ShieldAlert, Zap, Globe, Key, FileCode, Cpu, Terminal, Network, ShieldCheck, Database, Sliders, Layers, RefreshCw, QrCode } from "lucide-react";

interface ConfigurationProps {
  onNavigate: (page: string) => void;
}

export default function ConfigurationPage({ onNavigate }: ConfigurationProps) {
  const categories = [
    {
      title: "Tunnel Protocols",
      items: [
        { id: "configuration/vless", title: "VLESS + REALITY", desc: "The fastest, most secure anti-detection proxy configuration.", icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> },
        { id: "configuration/vmess", title: "VMess Tunnels", desc: "Standard time-synchronized secure cryptographic token tunnels.", icon: <Key className="w-5 h-5 text-indigo-500" /> },
        { id: "configuration/trojan", title: "Trojan-GFW", desc: "Imitates secure HTTPS traffic to blend with web standards.", icon: <Layers className="w-5 h-5 text-rose-500" /> },
        { id: "configuration/shadowsocks", title: "Shadowsocks AEAD", desc: "Classic secure, high-speed proxy tunnels.", icon: <Zap className="w-5 h-5 text-amber-500" /> },
        { id: "configuration/socks5", title: "SOCKS5 Port", desc: "Configure local outbound ports for external apps.", icon: <Network className="w-5 h-5 text-blue-500" /> },
        { id: "configuration/http", title: "HTTP Forwarding", desc: "Set up basic browser-level proxy tunnels.", icon: <Globe className="w-5 h-5 text-neutral-500" /> }
      ]
    },
    {
      title: "Routing & Client Control",
      items: [
        { id: "configuration/tun", title: "TUN Virtual Mode", desc: "Secure absolute system-wide traffic, including games.", icon: <Sliders className="w-5 h-5 text-violet-500" /> },
        { id: "configuration/system-proxy", title: "System Proxy States", desc: "Manage Global, PAC, and direct network options.", icon: <Terminal className="w-5 h-5 text-blue-500" /> },
        { id: "configuration/routing", title: "Routing Split-Rules", desc: "Bypass domestic LAN & CN websites automatically.", icon: <FileCode className="w-5 h-5 text-teal-500" /> },
        { id: "configuration/dns", title: "DNS Configurations", desc: "Configure non-hijackable secure alternative DNS addresses.", icon: <Cpu className="w-5 h-5 text-amber-500" /> },
        { id: "configuration/geosite", title: "GeoSite Databases", desc: "Manage dat files for category-based domain split routing.", icon: <Database className="w-5 h-5 text-neutral-500" /> },
        { id: "configuration/geoip", title: "GeoIP Boundaries", desc: "Configure IP geo-location parameters.", icon: <Database className="w-5 h-5 text-indigo-500" /> },
        { id: "configuration/subscription", title: "Sub Customization", desc: "Configure auto-refresh updates and speed metrics.", icon: <RefreshCw className="w-5 h-5 text-emerald-500" /> },
        { id: "configuration/qr-import", title: "QR Scan & Clipboard", desc: "Scan screen QR codes or paste vmess links instantly.", icon: <QrCode className="w-5 h-5 text-rose-500" /> }
      ]
    }
  ];

  return (
    <div id="configuration-landing-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full w-fit mx-auto">
          Protocol & Settings
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          Optimal Settings & Customization
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Fine-tune encryption protocols, DNS configurations, routing lists, and virtual adapters to secure your client.
        </p>
      </div>

      {/* Render sections */}
      <div className="space-y-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <h2 className="text-lg md:text-xl font-extrabold text-neutral-950 dark:text-white border-b border-neutral-100 dark:border-neutral-800/80 pb-2">
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cat.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  id={`btn-config-card-${item.id.replace("/", "-")}`}
                  onClick={() => onNavigate(item.id)}
                  className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-blue-500 text-left transition-all hover:shadow-md cursor-pointer flex flex-col gap-3"
                >
                  <div className="p-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg w-fit border border-neutral-100 dark:border-neutral-800/80">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white font-sans">
                      {item.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-auto hover:underline">
                    Configure &rarr;
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
