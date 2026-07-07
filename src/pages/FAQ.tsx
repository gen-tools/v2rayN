"use client";

import { useState, useEffect } from "react";
import { HelpCircle, Search, MessageSquareCode, ShieldAlert } from "lucide-react";
import FAQAccordion from "../components/FAQAccordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>([]);

  const faqs: FAQItem[] = [
    {
      question: "What is v2rayN?",
      answer: "v2rayN is a powerful, open-source Graphical User Interface (GUI) client for Windows, macOS, and Linux that supports popular routing protocols like VMess, VLESS, Trojan, and Shadowsocks. It serves as a visual wrapper panel that executes secure underlying cores (like Xray and V2ray) to encrypt and tunnel system network streams."
    },
    {
      question: "Is this website the official v2rayN project?",
      answer: "No. This website is an independent educational and companion documentation directory. We are not affiliated with, endorsed by, or associated with the official v2rayN developers. All our setup guides, diagnostic advice, and configuration resources are written by independent network professionals. Every download link routes directly to official compiled releases hosted publicly on the 2dust/v2rayN GitHub repository."
    },
    {
      question: "Why do I get a 'Failed to start core / Core Missing' error?",
      answer: "This error occurs because you downloaded the raw v2rayN GUI application package without the compiled routing engine files (the core). To resolve this, download the package titled 'With-Core' from our Download page. Alternatively, go to 'Check for updates' in the top menu of v2rayN and click 'Update Xray Core' or 'Update V2ray Core' to let the application automatically install the necessary files."
    },
    {
      question: "How do I change the interface language of v2rayN to English?",
      answer: "If v2rayN defaults to Chinese on startup:\n1. Look at the top right header menu.\n2. Locate the dropdown menu containing a globe or blue question marks, or find the menu element labeled 'Language'.\n3. Click on it and select 'English' from the dropdown list.\n4. Close the application entirely. (Warning: You must close it from the system tray! Right-click the v2rayN icon on the bottom right taskbar, and select 'Exit').\n5. Restart v2rayN. The interface will now render in English."
    },
    {
      question: "What is TUN mode and when should I enable it?",
      answer: "By default, v2rayN operates as a System Proxy, routing only HTTP and HTTPS traffic from browsers or programs that respect port settings. Enabling 'TUN Mode' spawns a virtual network adapter. This captures and tunnels all system-level connections, which is required for online gaming, terminal shell scripts (SSH, curl), and applications that bypass standard proxy ports. Note that TUN mode requires you to run v2rayN as an Administrator."
    },
    {
      question: "Why does Windows Defender or third-party antivirus flag v2rayN?",
      answer: "Since v2rayN intercepts network adapters, injects virtual drivers (Wintun), and modifies system-level proxy configurations, standard heuristic scanners often flag it as high-risk behavior. As long as you download v2rayN from the official releases linked on our site, the code is 100% open-source, fully auditable, and safe. You can whitelist the extraction folder in Windows Security exclusions to prevent false-positive blocks."
    },
    {
      question: "Why do my VMess servers show active ping but fail to load websites?",
      answer: "This is usually caused by system clock desynchronization. VMess cryptography requires the client computer's local clock to be synchronized with global atomic internet time (within a 90-second threshold). If your PC clock is off by a few minutes, VMess handshakes are immediately rejected by the proxy server. Go to Windows Time Settings, click 'Sync now', and try re-connecting."
    },
    {
      question: "What is the difference between VLESS, VMess, and Trojan?",
      answer: "VLESS is a lightweight, stateless transmission protocol that eliminates system time constraints and encryption layers, making it extremely fast, especially when paired with XTLS and REALITY. VMess is a stateful token-based secure protocol. Trojan mimics standard secure web traffic (HTTPS) to prevent active packet inspection by network firewalls."
    }
  ];

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredFAQs(faqs);
      return;
    }

    const filtered = faqs.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFAQs(filtered);
  }, [searchQuery]);

  return (
    <div id="faq-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-10">
        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full w-fit mx-auto">
          Help Desk
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Find answers to common configuration hurdles, core errors, time synchronization issues, and general client mechanics.
        </p>
      </div>

      {/* Dynamic Search Box */}
      <div className="relative mb-10 max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 shrink-0" />
        <input
          id="faq-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search FAQs (e.g. core, language, TUN)..."
          className="w-full pl-12 pr-4 py-3 text-sm md:text-base rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
        />
      </div>

      {/* FAQ Accordion Render */}
      <div className="mb-12">
        <FAQAccordion items={filteredFAQs} />
      </div>

      {/* Unresolved Issue Info */}
      <div className="p-6 md:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 text-center max-w-2xl mx-auto flex flex-col gap-4 items-center">
        <MessageSquareCode className="w-8 h-8 text-blue-500" />
        <div>
          <h3 className="text-base font-bold text-neutral-950 dark:text-white">
            Still facing connection delays or logs errors?
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-semibold leading-relaxed">
            We have authored highly detailed troubleshooting blueprints targeting TLS handshakes, certificate errors, and proxy bypass glitches.
          </p>
        </div>
        <button
          id="btn-faq-goto-trouble"
          onClick={() => {
            const el = document.getElementById("site-header");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            // Let the main App state navigation trigger troubleshooting
            window.location.hash = "#/troubleshooting";
          }}
          className="px-5 py-2.5 text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors cursor-pointer"
        >
          Explore Troubleshooting Guides
        </button>
      </div>
    </div>
  );
}
