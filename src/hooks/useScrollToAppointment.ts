"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

export function useScrollToAppointment() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = React.useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
      }

      if (pathname === "/") {
        // If we are already on the homepage, smoothly scroll to the section
        const appointmentSection = document.getElementById("appointment");
        if (appointmentSection) {
          appointmentSection.scrollIntoView({ behavior: "smooth" });
          // Update URL hash without causing a page jump
          window.history.pushState(null, "", "/#appointment");
        }
      } else {
        // If we are on another page, navigate to the homepage with the hash
        router.push("/#appointment");
      }
    },
    [pathname, router]
  );

  return handleScroll;
}
