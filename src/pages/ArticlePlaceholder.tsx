"use client";

import { useState, useEffect } from "react";
import { articlesData } from "../data/articles";
import { Article } from "../types";
import Breadcrumb from "../components/Breadcrumb";
import Alert from "../components/Alert";
import CopyButton from "../components/CopyButton";
import ShareButtons from "../components/ShareButtons";
import TableOfContents from "../components/TableOfContents";
import { ArrowLeft, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

interface ArticlePlaceholderProps {
  articleId: string;
  onNavigate: (page: string) => void;
}

export default function ArticlePlaceholder({ articleId, onNavigate }: ArticlePlaceholderProps) {
  const [activeSectionId, setActiveSectionId] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = articlesData.find((art) => art.id === articleId);

  // Scroll Progress Bar Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple active section highlights based on viewport
  useEffect(() => {
    if (!article) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    article.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article, articleId]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">Article Not Found</h2>
        <p className="text-sm text-neutral-500">The requested documentation page has not been loaded or mapped in our index.</p>
        <button
          onClick={() => onNavigate("home")}
          className="px-5 py-2 text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 rounded-lg self-center cursor-pointer"
        >
          Return Home
        </button>
      </div>
    );
  }

  // Related articles lookup
  const relatedArticles = articlesData.filter((art) => article.relatedArticleIds.includes(art.id));

  // Category sibling articles (for the sidebar navigation)
  const categoryArticles = articlesData.filter((art) => art.category === article.category);

  const handleSectionClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setActiveSectionId(id);
    }
  };

  return (
    <div id="article-reader-container" className="relative">
      {/* Reading Progress Indicator */}
      <div
        id="reading-progress-bar"
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb Hierarchy */}
        <Breadcrumb
          onGoHome={() => onNavigate("home")}
          items={[
            { label: article.category, onClick: () => onNavigate(article.category) },
            { label: article.title }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
          {/* LEFT COLUMN: Sidebar Category Navigator (Hidden on mobile) */}
          <aside className="hidden lg:col-span-3 lg:flex flex-col gap-6 sticky top-24">
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                {article.category} Guides
              </h3>
              <ul className="space-y-3">
                {categoryArticles.map((sibling) => (
                  <li key={sibling.id}>
                    <button
                      onClick={() => {
                        onNavigate(sibling.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-full text-left text-xs md:text-sm font-semibold transition-colors block cursor-pointer ${
                        sibling.id === article.id
                          ? "text-blue-600 dark:text-blue-400 border-l-2 border-blue-600 dark:border-blue-400 pl-2.5 -ml-2.5"
                          : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                      }`}
                    >
                      {sibling.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Share buttons widget */}
            <ShareButtons title={article.title} />
          </aside>

          {/* MID COLUMN: Article content layout */}
          <main className="col-span-1 lg:col-span-6 flex flex-col gap-6 bg-white dark:bg-neutral-950 p-2 md:p-4 rounded-xl">
            {/* Meta header block */}
            <div className="border-b border-neutral-100 dark:border-neutral-900 pb-6 flex flex-col gap-4">
              <span className="bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-md w-fit uppercase tracking-wider">
                {article.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap gap-4 items-center text-xs text-neutral-400 font-semibold mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Last Updated: {article.lastUpdated}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readingTime} read
                </span>
              </div>
            </div>

            {/* Dynamic Sections rendering */}
            <div className="space-y-8 mt-4 text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed font-semibold">
              {article.sections.map((sec, idx) => (
                <section key={idx} id={sec.id} className="scroll-mt-24 space-y-3">
                  <h2 className="text-lg md:text-xl font-extrabold text-neutral-950 dark:text-white tracking-tight border-b border-neutral-100 dark:border-neutral-900 pb-1.5 mt-4 font-sans">
                    {sec.title}
                  </h2>
                  <div className="whitespace-pre-line text-neutral-700 dark:text-neutral-300">
                    {sec.content}
                  </div>
                  
                  {sec.alertType && sec.alertContent && (
                    <Alert type={sec.alertType}>
                      {sec.alertContent}
                    </Alert>
                  )}

                  {sec.code && (
                    <div className="relative mt-4 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 font-mono text-xs md:text-sm shadow-sm">
                      <div className="flex items-center justify-between px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                          {sec.codeLanguage || "code syntax"}
                        </span>
                        <CopyButton text={sec.code} />
                      </div>
                      <pre className="p-4 overflow-x-auto text-neutral-800 dark:text-neutral-200 whitespace-pre leading-relaxed font-semibold">
                        <code>{sec.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Bottom Call To Action */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 text-center flex flex-col gap-4 mt-12 items-center">
              <ShieldCheck className="w-8 h-8 text-blue-500" />
              <div>
                <h4 className="text-base font-bold text-neutral-950 dark:text-white">Need v2rayN installation files?</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-semibold leading-relaxed">
                  Avoid untrusted repositories. Ensure you download verified, official 2dust binaries cleanly mapped in our catalog.
                </p>
              </div>
              <button
                onClick={() => onNavigate("download")}
                className="px-5 py-2.5 text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors cursor-pointer"
              >
                Go to Secure Download Page
              </button>
            </div>
          </main>

          {/* RIGHT COLUMN: Table of Contents & Related Articles */}
          <aside className="col-span-1 lg:col-span-3 flex flex-col gap-6 sticky top-24">
            <TableOfContents
              sections={article.sections.map((s) => ({ title: s.title, id: s.id }))}
              activeSectionId={activeSectionId}
              onSectionClick={handleSectionClick}
            />

            {/* Related articles suggestion list */}
            {relatedArticles.length > 0 && (
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex flex-col gap-3">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Related Guides
                </h4>
                <div className="space-y-3">
                  {relatedArticles.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => {
                        onNavigate(rel.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full text-left text-xs md:text-sm font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors block cursor-pointer border-b border-neutral-100 dark:border-neutral-900 pb-2 last:border-none"
                    >
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-0.5">{rel.category}</span>
                      {rel.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
