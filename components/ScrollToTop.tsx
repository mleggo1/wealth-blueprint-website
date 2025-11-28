"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    // Ensure page starts at top on initial load and after page is fully loaded
    if (typeof window !== "undefined") {
      // Immediate scroll
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      
      // Also scroll after page load (in case content shifts)
      const handleLoad = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      };
      
      // Also handle browser back/forward navigation
      const handlePopState = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      };
      
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }
      
      window.addEventListener("popstate", handlePopState);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, []);

  return null;
}

