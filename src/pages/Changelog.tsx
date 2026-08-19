"use client";

import { Clock, Tag, ArrowUpRight, Zap, Code, ShieldCheck } from "lucide-react";

export default function ChangelogPage() {
  const releases = [
    {
      version: "v7.1.3",
      date: "June 25, 2026",
      tag: "Stable",
      highlights: [
        { type: "security", text: "Upgraded XTLS Reality handshaking logic to align with Xray Core v1.8.4+." },
        { type: "feature", text: "Introduced smart backup routes in subscription auto-refresh loops." },
        { type: "fix", text: "Fixed virtual adapter driver conflicts in TUN mode on Windows 11 Insider preview builds." },
        { type: "gui", text: "Reordered language files and refined alignment of English text nodes." }
      ]
    },
    {
      version: "v7.1.0",
      date: "May 10, 2026",
      tag: "Feature Release",
      highlights: [
        { type: "feature", text: "Added native support for Sing-Box Core config file formatting rules." },
        { type: "fix", text: "Resolved system tray leakage where old instances remained active in memory cache." },
        { type: "security", text: "Disabled legacy insecure cipher warnings to focus on AEAD and Reality tunnels." }
      ]
    },
    {
      version: "v6.39.2",
      date: "March 14, 2026",
      tag: "Legacy Stable",
      highlights: [
        { type: "fix", text: "Fixed PAC routing bypass failures for domestic IP blocks." },
        { type: "gui", text: "Added copyable diagnostics panel with raw server ping logs." },
        { type: "feature", text: "Improved qr code scanning capabilities using updated libraries." }
      ]
    }
  ];

  return (
    <div id="changelog-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
        <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider bg-violet-100 dark:bg-violet-950/50 px-3 py-1 rounded-full w-fit mx-auto">
          Project Timeline
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          v2rayN Version Changelog
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Review recent stability updates, core integration improvements, and bug fixes compiled for the v2rayN proxy client.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 md:ml-8 space-y-12 pb-12">
        {releases.map((rel, idx) => (
          <div key={idx} className="relative pl-8 md:pl-10">
            {/* Timeline Circle */}
            <span className="absolute -left-3 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-neutral-950 border-2 border-blue-500">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            </span>

            {/* Version Block */}
            <div className="flex flex-col gap-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg md:text-xl font-extrabold text-neutral-950 dark:text-white">
                    {rel.version}
                  </h3>
                  <span className="bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {rel.tag}
                  </span>
                </div>
                <span className="text-xs text-neutral-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {rel.date}
                </span>
              </div>

              {/* Highlights list */}
              <div className="space-y-3">
                {rel.highlights.map((high, hIdx) => {
                  let badgeColor = "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300";
                  if (high.type === "security") badgeColor = "bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-400";
                  if (high.type === "feature") badgeColor = "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400";
                  if (high.type === "fix") badgeColor = "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400";

                  return (
                    <div key={hIdx} className="flex items-start gap-3">
                      <span className={`text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded-md shrink-0 mt-0.5 ${badgeColor}`}>
                        {high.type}
                      </span>
                      <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-semibold">
                        {high.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub redirect callout */}
      <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 text-center max-w-xl mx-auto flex flex-col gap-3 items-center">
        <Code className="w-6 h-6 text-neutral-500" />
        <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
          Inspect Historical Releases
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold leading-relaxed">
          v2rayN dates back years with hundreds of code optimizations. You can audit every single branch, code modification, and core release directly inside GitHub.
        </p>
        <a
          id="link-github-release-history"
          href="https://github.com/2dust/v2rayN/releases"
          target="_blank"
          referrerPolicy="no-referrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
        >
          <span>Official Release History on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
