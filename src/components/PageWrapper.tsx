"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PageWrapperProps {
  Component: React.ComponentType<any>;
  [key: string]: any;
}

export default function PageWrapper({ Component, ...props }: PageWrapperProps) {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    // Clean up hash router prefix if present
    let cleanPage = page;
    if (page.startsWith("#/")) {
      cleanPage = page.substring(2);
    } else if (page.startsWith("#")) {
      cleanPage = page.substring(1);
    }

    const target = cleanPage === "home" ? "/" : `/${cleanPage}`;
    router.push(target);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return <Component onNavigate={handleNavigate} {...props} />;
}
