"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync active page state from Next.js pathname
  let activePage = "home";
  if (pathname && pathname !== "/") {
    activePage = pathname.replace(/^\//, "");
  }

  // Synchronize Light / Dark Theme using localStorage and document elements
  useEffect(() => {
    const savedTheme = localStorage.getItem("v2rayn-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("v2rayn-theme", nextTheme);
    
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Scroll Tracker for Back-to-Top Button
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (page: string) => {
    const target = page === "home" ? "/" : `/${page}`;
    router.push(target);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 transition-colors duration-200 font-sans">
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <div className="flex-1 pb-16 md:pb-24">
        {children}
      </div>

      <Footer onNavigate={handleNavigate} />

      {showBackToTop && (
        <button
          id="btn-back-to-top"
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/10 cursor-pointer transition-all hover:scale-105 z-40 animate-fade-in"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
