"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Ensure page starts at top on initial load
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      // Also handle browser back/forward navigation
      const handlePopState = () => {
        window.scrollTo(0, 0);
      };
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, []);

  return null;
}

