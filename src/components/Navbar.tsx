"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Search, Github, Download, Terminal } from "lucide-react";
import SearchBox from "./SearchBox";
import { downloadConfig } from "../config/download";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ activePage, onNavigate, theme, onToggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activePage]);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Download", page: "download" },
    { label: "Installation", page: "installation" },
    { label: "Configuration", page: "configuration" },
    { label: "Troubleshooting", page: "troubleshooting" },
    { label: "Features", page: "features" },
    { label: "Comparison", page: "comparison" },
    { label: "FAQ", page: "faq" },
    { label: "Blog", page: "blog" },
    { label: "About", page: "about" },
  ];

  return (
    <header id="site-header" className="sticky top-0 z-50 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md transition-colors duration-200">
      {/* Announcement Banner */}
      <div id="announcement-banner" className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-700 dark:to-indigo-800 text-white py-1.5 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">LATEST RELEASE</span>
        <span>v2rayN {downloadConfig.latestVersion} is out! Fully compatible with Xray / VMess / VLESS / Reality.</span>
        <button
          id="btn-banner-dl"
          onClick={() => onNavigate("download")}
          className="underline hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5 cursor-pointer"
        >
          Download Now &rarr;
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <button
              id="btn-logo"
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 text-lg md:text-xl font-bold text-neutral-900 dark:text-white hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-sans font-extrabold tracking-tight">v2rayN</span>
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1">
            {navItems.map((item) => {
              const isActive = activePage === item.page || activePage.startsWith(item.page + "/");
              return (
                <button
                  key={item.page}
                  id={`btn-nav-${item.page}`}
                  onClick={() => onNavigate(item.page)}
                  className={`px-2 py-1.5 text-xs 2xl:px-3 2xl:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? "bg-neutral-100 dark:bg-neutral-800/80 text-blue-600 dark:text-blue-400"
                      : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls & Icons */}
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Search Icon */}
            <button
              id="btn-toggle-search"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
              title="Search guides..."
              aria-label="Search guides"
            >
              <Search className="w-4 h-4 md:w-5 h-5" />
            </button>

            {/* Dark Mode Theme Switcher */}
            <button
              id="btn-toggle-theme"
              onClick={onToggleTheme}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
              title={!mounted || theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              aria-label={!mounted || theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {!mounted || theme === "light" ? <Moon className="w-4 h-4 md:w-5 h-5" /> : <Sun className="w-4 h-4 md:w-5 h-5" />}
            </button>

            {/* GitHub Star Proxy / Link */}
            <a
              id="link-github"
              href="https://github.com/2dust/v2rayN"
              target="_blank"
              referrerPolicy="no-referrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-all hover:scale-102"
              title="Check official repo on GitHub"
            >
              <Github className="w-4 h-4" />
              <span>Official Repo</span>
            </a>

            {/* CTA Download button */}
            <button
              id="btn-nav-cta-download"
              onClick={() => onNavigate("download")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors cursor-pointer shadow-sm shadow-blue-500/10"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get v2rayN</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Search Overlay */}
      {isSearchOpen && (
        <div id="search-modal-backdrop" className="fixed inset-0 z-50 bg-black/45 dark:bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="w-full max-w-xl">
            <SearchBox onNavigate={onNavigate} onClose={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-panel" className="xl:hidden bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900 transition-colors duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.page || activePage.startsWith(item.page + "/");
              return (
                <button
                  key={item.page}
                  id={`btn-mobile-nav-${item.page}`}
                  onClick={() => onNavigate(item.page)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-neutral-50 dark:bg-neutral-900 text-blue-600 dark:text-blue-400"
                      : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>}
                </button>
              );
            })}
            <div className="pt-4 pb-2 px-4 border-t border-neutral-100 dark:border-neutral-900 flex flex-col gap-2">
              <a
                id="link-github-mobile"
                href="https://github.com/2dust/v2rayN"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                <Github className="w-4 h-4" />
                <span>Official Repository</span>
              </a>
              <button
                id="btn-mobile-download"
                onClick={() => onNavigate("download")}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-500"
              >
                <Download className="w-4 h-4" />
                <span>Download v2rayN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
