"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    // Skip the first section on each page — it's the hero, already in view on load.
    const targets = sections.slice(1);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    for (const el of targets) {
      el.classList.add("reveal");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
