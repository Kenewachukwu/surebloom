"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

// Pages whose top-of-page background is dark (invert nav text).
const darkTopPaths = new Set<string>(["/", "/about"]);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const invert = useMemo(
    () => darkTopPaths.has(pathname) && !scrolled && !open,
    [pathname, scrolled, open]
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "backdrop-blur-xl bg-cream-50/90 border-b border-navy-900/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-8xl items-center justify-between px-5 md:px-10 lg:px-16">
        <Link href="/" className="relative z-10 flex items-center gap-2.5 -my-2" aria-label="Surebloom home">
          <Image
            src="/images/logo.png"
            alt="Surebloom International School"
            width={96}
            height={112}
            priority
            className="h-11 md:h-14 w-auto object-contain"
          />
          <span
            className={cn(
              "hidden sm:inline font-display text-[19px] md:text-[22px] font-semibold tracking-tight leading-none transition-colors duration-300",
              invert ? "text-cream-50 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]" : "text-navy-900"
            )}
          >
            Surebloom
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-[14px] font-medium tracking-tight rounded-full transition-colors",
                  invert
                    ? active
                      ? "text-cream-50 bg-cream-50/15"
                      : "text-cream-50/90 hover:text-cream-50 hover:bg-cream-50/12"
                    : active
                      ? "text-navy-900 bg-navy-900/5"
                      : "text-ink-700 hover:text-navy-900 hover:bg-navy-900/5"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              "ml-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium transition",
              invert
                ? "bg-cream-50 text-navy-900 hover:bg-cream-100"
                : "bg-navy-900 text-cream-50 hover:bg-navy-800"
            )}
          >
            Contact us
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden relative z-10 -mr-2 h-11 w-11 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={cn("block h-[1.5px] w-6 transition-all", invert ? "bg-cream-50" : "bg-navy-900", open && "translate-y-[7px] rotate-45")} />
          <span className={cn("block h-[1.5px] w-6 transition-opacity", invert ? "bg-cream-50" : "bg-navy-900", open && "opacity-0")} />
          <span className={cn("block h-[1.5px] w-6 transition-all", invert ? "bg-cream-50" : "bg-navy-900", open && "-translate-y-[7px] -rotate-45")} />
        </button>
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-cream-50 transition-all duration-300 overflow-y-auto",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-start px-6 pt-8 pb-16 gap-1">
          {nav.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-display text-4xl py-3 w-full border-b border-navy-900/10",
                  active ? "text-navy-900" : "text-navy-950"
                )}
                style={{
                  animation: open ? `fadeUp 0.5s ease-out ${i * 0.05}s both` : undefined,
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-4 text-cream-50 text-base font-medium"
          >
            Contact us
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="mt-10 pt-6 border-t border-navy-900/12 w-full space-y-2 text-[14px] text-ink-500">
            <a href={`tel:${site.phoneRaw}`} className="block hover:text-navy-900">{site.phone}</a>
            <a href={`tel:${site.phoneAltRaw}`} className="block hover:text-navy-900">{site.phoneAlt}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-navy-900 break-all">{site.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
