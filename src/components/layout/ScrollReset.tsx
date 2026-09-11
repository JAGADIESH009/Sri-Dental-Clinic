"use client";

import { useEffect } from "react";

export function ScrollReset() {
  useEffect(() => {
    // Explicitly reset scroll to top when this component mounts
    // Using setTimeout to ensure it runs after any Next.js layout shifts or animation delays
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  return null;
}
