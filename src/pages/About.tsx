"use client";

import { ShieldCheck, Heart, AlertTriangle, Github, Info, Globe, Mail } from "lucide-react";
import Alert from "../components/Alert";

export default function AboutPage() {
  return (
    <div id="about-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-10">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full w-fit mx-auto">
          About Us
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          Our Mission and Disclaimer
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Learn why we built this independent resource companion for the open-source community.
        </p>
      </div>

      <Alert type="warning">
        <span className="font-bold block mb-1">Critical Non-Affiliation Statement:</span>
        v2rayN.org is an entirely independent companion documentation website. We have NO official affiliation, association, authorization, endorsement, or direct connection with the developers of the v2rayN software (2dust) or the official repository partners on GitHub.
      </Alert>

      {/* Detail block */}
      <div className="space-y-8 text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed font-semibold mt-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg md:text-xl font-extrabold text-neutral-950 dark:text-white flex items-center gap-2">
            <Globe className="w-5.5 h-5.5 text-blue-500" />
            Website Mission
          </h2>
          <p>
            The open-source proxy ecosystem moves incredibly fast. For beginners, configuring VMess, VLESS, or Trojan nodes is highly intimidating. Many legacy tutorials are written with confusing technical jargon, outdated screenshots, or broken links.
          </p>
          <p>
            We created this website to provide clean, high-performance, responsive documentation, searchable FAQs, and highly readable step-by-step guides. Our goal is to make secure browsing accessible and clear for every student, engineer, and casual developer.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg md:text-xl font-extrabold text-neutral-950 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5.5 h-5.5 text-emerald-500" />
            Integrity & Software Security
          </h2>
          <p>
            We take software security with absolute seriousness. In the proxy community, many malicious clones of popular software exist, embedded with keyloggers or telemetry scripts.
          </p>
          <p>
            To guarantee absolute safety, <strong>we do not host or store any software files on this server.</strong>
          </p>
          <p>
            Every download button on our website points exclusively to official public release assets compiled and uploaded by the 2dust developer team on GitHub. Changing our configuration will dynamically update every button on the site, preserving strict safety and link accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm flex flex-col gap-3">
            <h3 className="text-base font-bold text-neutral-950 dark:text-white flex items-center gap-2">
              <Github className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              Official Github Repository
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              File bug reports, view source code files, or submit contributions directly on the developer workspace.
            </p>
            <a
              id="about-github-outbound"
              href="https://github.com/2dust/v2rayN"
              target="_blank"
              referrerPolicy="no-referrer"
              className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Visit 2dust/v2rayN on GitHub &rarr;
            </a>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm flex flex-col gap-3">
            <h3 className="text-base font-bold text-neutral-950 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              Contact Our Team
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Spotted a typo? Have suggestions for a tutorial? Reach out to our independent editors team.
            </p>
            <span className="mt-2 text-xs text-neutral-700 dark:text-neutral-300 font-bold font-mono">
              admin@v2rayN.org
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
