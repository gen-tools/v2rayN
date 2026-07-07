"use client";

import { Calendar, Clock, ArrowRight, BookOpen, ShieldAlert, Wifi, Flame } from "lucide-react";

interface BlogProps {
  onNavigate: (page: string) => void;
}

export default function BlogPage({ onNavigate }: BlogProps) {
  const posts = [
    {
      id: "configuration/vless",
      title: "Understanding VLESS and XTLS-Reality in v2rayN",
      excerpt: "A deep dive into why Reality is replacing traditional TLS tunnels, providing absolute proxy stealth and faster handshakes.",
      category: "Protocols",
      date: "July 2026",
      readTime: "6 min",
      icon: <Flame className="w-4 h-4 text-rose-500" />
    },
    {
      id: "configuration/tun",
      title: "How to Secure Your Full PC with v2rayN TUN Mode",
      excerpt: "System proxies only cover web browser requests. Learn how to route games, shell terminals, and command lines globally using Wintun.",
      category: "Routing",
      date: "June 2026",
      readTime: "5 min",
      icon: <Wifi className="w-4 h-4 text-blue-500" />
    },
    {
      id: "troubleshooting/dns-leak",
      title: "How to Detect and Patch DNS Leaks inside v2rayN",
      excerpt: "A leak audit tutorial. Ensure your local Internet Service Provider is not silently monitoring your address query resolutions.",
      category: "Security",
      date: "June 2026",
      readTime: "5 min",
      icon: <ShieldAlert className="w-4 h-4 text-emerald-500" />
    }
  ];

  return (
    <div id="blog-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-100 dark:bg-blue-950/50 px-3 py-1 rounded-full w-fit mx-auto">
          Knowledge Base
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans">
          The v2rayN Companion Blog
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
          Educational resources, configuration walkthroughs, protocol deep dives, and security best practices written by network engineers.
        </p>
      </div>

      {/* Featured Blog banner/placeholder */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white relative overflow-hidden mb-12 shadow-md">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
        <div className="max-w-2xl flex flex-col gap-4">
          <span className="bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md w-fit">
            Featured Educational Resource
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug">
            VMess vs VLESS vs Trojan: Choosing the Right Protocol for Decryption Security
          </h2>
          <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-semibold">
            Are you confused by the terminology of multiple outbounds? Read our definitive comparison discussing performance metrics, handshake speeds, and encryption levels.
          </p>
          <button
            id="btn-blog-featured-read"
            onClick={() => onNavigate("comparison/vmess-vs-vless")}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 w-fit cursor-pointer"
          >
            <span>Read full comparative guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid of articles */}
      <h3 className="text-lg md:text-xl font-extrabold text-neutral-950 dark:text-white mb-6 flex items-center gap-2">
        <BookOpen className="w-5.5 h-5.5 text-blue-500" />
        Latest Guides & Tutorials
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post, idx) => (
          <article
            key={idx}
            className="group flex flex-col justify-between bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-bold bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-lg">
                  {post.icon}
                  {post.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-neutral-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h4 className="text-base font-extrabold text-neutral-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-sans">
                {post.title}
              </h4>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
                {post.excerpt}
              </p>
            </div>

            <button
              id={`btn-blog-post-${idx}`}
              onClick={() => onNavigate(post.id)}
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer self-start"
            >
              <span>Read guide</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </article>
        ))}
      </div>

      {/* Newsletter Signup redirect */}
      <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/20 border border-neutral-200 dark:border-neutral-800 text-center max-w-2xl mx-auto flex flex-col gap-4">
        <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white">
          Want our guides delivered to your inbox?
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold leading-relaxed max-w-lg mx-auto">
          We draft high-quality security digests about zero-day kernel bugs, Reality server setup scripts, and client Whitelisting tactics. Joining takes 5 seconds.
        </p>
        <button
          id="btn-blog-newsletter-focus"
          onClick={() => {
            const footerEl = document.getElementById("newsletter-email-input");
            if (footerEl) {
              footerEl.scrollIntoView({ behavior: "smooth" });
              footerEl.focus();
            }
          }}
          className="px-5 py-2.5 text-xs font-bold rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 transition-opacity cursor-pointer self-center"
        >
          Subscribe in Footer
        </button>
      </div>
    </div>
  );
}
