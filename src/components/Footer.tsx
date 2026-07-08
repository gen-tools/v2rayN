"use client";

import { useState, FormEvent } from "react";
import { Terminal, Github, Heart, AlertCircle, Mail, Send, Check } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer id="site-footer" className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-200">
      {/* Upper Newsletter Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10 border-b border-neutral-200 dark:border-neutral-900 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              Subscribe to v2rayN Security Updates
            </h3>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 max-w-xl">
              Get notified immediately about major protocol shifts, Core updates, security patches, and first-time configuration guides. Zero spam.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                id="newsletter-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-3.5 py-2 text-sm rounded-lg bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
              <button
                id="btn-newsletter-submit"
                type="submit"
                className="px-4 py-2 text-xs md:text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Subbed</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Join</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Mid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Logo & Description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-base font-extrabold tracking-tight text-neutral-950 dark:text-white">
                v2rayN
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              The premier independent educational portal and resource companion for the open-source v2rayN client. Helping users deploy high-security network nodes with maximum clarity.
            </p>
            <div className="flex gap-2.5 mt-2">
              <a
                id="footer-github-link"
                href="https://github.com/2dust/v2rayN"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 transition-colors"
                title="Official GitHub Releases"
                aria-label="Official GitHub Releases"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Step-by-Step Installation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <li>
                <button id="btn-foot-windows" onClick={() => onNavigate("installation/windows")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Windows Installation
                </button>
              </li>
              <li>
                <button id="btn-foot-linux" onClick={() => onNavigate("installation/linux")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Linux Guide
                </button>
              </li>
              <li>
                <button id="btn-foot-macos" onClick={() => onNavigate("installation/macos")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  macOS Configuration
                </button>
              </li>
              <li>
                <button id="btn-foot-first" onClick={() => onNavigate("installation/first-setup")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  First-Time Launch
                </button>
              </li>
              <li>
                <button id="btn-foot-sub" onClick={() => onNavigate("installation/import-sub")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Subscription Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Core Configuration */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Core Configurations
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <li>
                <button id="btn-foot-vless" onClick={() => onNavigate("configuration/vless")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  VLESS & Reality Setup
                </button>
              </li>
              <li>
                <button id="btn-foot-vmess" onClick={() => onNavigate("configuration/vmess")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  VMess Configuration
                </button>
              </li>
              <li>
                <button id="btn-foot-tun" onClick={() => onNavigate("configuration/tun")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  TUN Mode Settings
                </button>
              </li>
              <li>
                <button id="btn-foot-socks" onClick={() => onNavigate("configuration/socks5")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Socks5/HTTP Proxies
                </button>
              </li>
              <li>
                <button id="btn-foot-dns" onClick={() => onNavigate("configuration/dns")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Custom DNS Overrides
                </button>
              </li>
            </ul>
          </div>

          {/* Help & Documentation */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Help & Resources
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <li>
                <button id="btn-foot-faq" onClick={() => onNavigate("faq")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Searchable FAQ
                </button>
              </li>
              <li>
                <button id="btn-foot-trouble" onClick={() => onNavigate("troubleshooting")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Troubleshooting Guides
                </button>
              </li>
              <li>
                <button id="btn-foot-compare" onClick={() => onNavigate("comparison")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Client Comparisons
                </button>
              </li>
              <li>
                <button id="btn-foot-changelog" onClick={() => onNavigate("changelog")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Full Changelog Timeline
                </button>
              </li>
              <li>
                <button id="btn-foot-blog" onClick={() => onNavigate("blog")} className="hover:text-blue-500 transition-colors cursor-pointer text-left">
                  Educational Blog
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Alert box */}
        <div id="disclaimer-alert" className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 flex gap-3 text-xs items-start leading-relaxed mb-8">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-neutral-800 dark:text-neutral-200 block">Independent Disclaimer Statement</span>
            <p>
              v2rayN is an independent educational portal and resource index. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with the official development team of v2rayN or 2dust. All downloadable files linked across this directory route directly to public releases hosted on the official GitHub server repository (github.com/2dust/v2rayN). We do not host, store, alter, or monetize any binary releases.
            </p>
          </div>
        </div>

        {/* Lower footer copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-900 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          <p className="flex items-center gap-1">
            &copy; {new Date().getFullYear()} v2rayN. All rights reserved. Developed by Sheztech.
          </p>
          <div className="flex gap-4 sm:gap-6 font-semibold">
            <button id="btn-foot-terms" onClick={() => onNavigate("about")} className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors cursor-pointer">
              Terms of Use
            </button>
            <button id="btn-foot-privacy" onClick={() => onNavigate("about")} className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button id="btn-foot-disclaimer" onClick={() => onNavigate("about")} className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors cursor-pointer">
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
