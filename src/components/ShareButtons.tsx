"use client";

import { useState } from "react";
import { Check, Copy, Share2, Twitter } from "lucide-react";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`Check out this guide: "${title}" - independent educational & download source for v2rayN!`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  return (
    <div id="share-block" className="flex flex-col gap-2 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
      <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5" />
        Share This Resource
      </h4>
      <div className="flex gap-2">
        <button
          id="btn-share-twitter"
          onClick={handleShareTwitter}
          className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Twitter className="w-3.5 h-3.5 fill-current" />
          <span>Twitter</span>
        </button>
        <button
          id="btn-share-copylink"
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-medium border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
