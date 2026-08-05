"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    // Skip the first section on each page — it's the hero, already in view on load.
    const targets = sections.slice(1);

    if (targets.length === 0) return;

    if (reduceMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const triggers = targets.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          // Sections like the About page's sticky sidebars need `transform: none`
          // to stay sticky — a lingering translate3d() would pin them instead.
          onComplete: () => gsap.set(el, { clearProps: "transform" }),
        }
      )
    );

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
      gsap.set(targets, { clearProps: "opacity,transform" });
    };
  }, [pathname]);

  return null;
}
