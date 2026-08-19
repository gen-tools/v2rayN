"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, BookOpen, AlertCircle, Cpu, ShieldCheck } from "lucide-react";
import { articlesData } from "../data/articles";
import { Article } from "../types";

interface SearchBoxProps {
  onNavigate: (page: string) => void;
  onClose?: () => void;
  embedded?: boolean;
}

export default function SearchBox({ onNavigate, onClose, embedded = false }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = articlesData.filter((art) => {
      const q = query.toLowerCase();
      return (
        art.title.toLowerCase().includes(q) ||
        art.description.toLowerCase().includes(q) ||
        art.sections.some((sec) => sec.title.toLowerCase().includes(q) || sec.content.toLowerCase().includes(q))
      );
    });

    setResults(filtered.slice(0, 5));
  }, [query]);

  // Click outside to close (if not embedded)
  useEffect(() => {
    if (embedded) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [embedded, onClose]);

  const handleSelect = (id: string) => {
    onNavigate(id);
    setQuery("");
    onClose?.();
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "installation":
        return <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />;
      case "troubleshooting":
        return <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />;
      case "configuration":
        return <Cpu className="w-4 h-4 text-blue-500 shrink-0" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-neutral-500 shrink-0" />;
    }
  };

  return (
    <div
      ref={containerRef}
      id="search-box-container"
      className={`relative w-full ${
        embedded ? "" : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl max-w-xl mx-auto"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100 dark:border-neutral-800">
        <Search className="w-5 h-5 text-neutral-400 shrink-0" />
        <input
          id="search-input-field"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search setup guides, troubleshooting steps, or protocols..."
          className="w-full bg-transparent border-none outline-none text-sm md:text-base text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:ring-0"
          autoFocus={!embedded}
        />
        {query && (
          <button
            id="btn-search-clear"
            onClick={() => setQuery("")}
            className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
            aria-label="Clear search query"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {query && (
        <div id="search-results-panel" className="max-h-[350px] overflow-y-auto p-2 space-y-1">
          <p className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider px-3 py-1">
            Search Results ({results.length})
          </p>
          {results.length > 0 ? (
            results.map((res) => (
              <button
                key={res.id}
                id={`btn-search-result-${res.id.replace("/", "-")}`}
                onClick={() => handleSelect(res.id)}
                className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/60 text-left transition-colors cursor-pointer"
              >
                {getIcon(res.category)}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 capitalize">
                      {res.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500">{res.readingTime}</span>
                  </div>
                  <h5 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5">
                    {res.title}
                  </h5>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
                    {res.description}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <div id="search-no-results" className="text-center py-8 text-sm text-neutral-500 dark:text-neutral-400">
              No articles or guides match your criteria.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
