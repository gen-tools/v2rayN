import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DownloadPage from "./pages/Download";
import InstallationPage from "./pages/Installation";
import ConfigurationPage from "./pages/Configuration";
import TroubleshootingPage from "./pages/Troubleshooting";
import FeaturesPage from "./pages/Features";
import ComparisonPage from "./pages/Comparison";
import FAQPage from "./pages/FAQ";
import ChangelogPage from "./pages/Changelog";
import BlogPage from "./pages/Blog";
import AboutPage from "./pages/About";
import ArticlePlaceholder from "./pages/ArticlePlaceholder";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1. Synchronize Active Page with window.location.hash on start & change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#" || hash === "#/") {
        setActivePage("home");
      } else {
        // extract path e.g. #/download -> download, or #/installation/windows -> installation/windows
        const path = hash.replace(/^#\//, "").replace(/^#/, "");
        setActivePage(path);
      }
    };

    // Trigger on first load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // 2. Synchronize Light / Dark Theme using localStorage and document elements
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

  // 3. Scroll Tracker for Back-to-Top Button
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

  // 4. Custom navigation handler (updates hash to preserve route state)
  const handleNavigate = (page: string) => {
    window.location.hash = `#/${page}`;
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // 5. Select which Page component to render
  const renderPage = () => {
    // If it contains a slash, it's a dynamic article detail subpage (e.g., installation/windows)
    if (activePage.includes("/")) {
      return <ArticlePlaceholder articleId={activePage} onNavigate={handleNavigate} />;
    }

    switch (activePage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "download":
        return <DownloadPage onNavigate={handleNavigate} />;
      case "installation":
        return <InstallationPage onNavigate={handleNavigate} />;
      case "configuration":
        return <ConfigurationPage onNavigate={handleNavigate} />;
      case "troubleshooting":
        return <TroubleshootingPage onNavigate={handleNavigate} />;
      case "features":
        return <FeaturesPage onNavigate={handleNavigate} />;
      case "comparison":
        return <ComparisonPage onNavigate={handleNavigate} />;
      case "faq":
        return <FAQPage />;
      case "changelog":
        return <ChangelogPage />;
      case "blog":
        return <BlogPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 transition-colors duration-200 font-sans">
      {/* Dynamic Header Component */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Page Area */}
      <div className="flex-1 pb-16 md:pb-24">
        {renderPage()}
      </div>

      {/* Dynamic Footer Component */}
      <Footer onNavigate={handleNavigate} />

      {/* Back To Top Floating Action Button */}
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
