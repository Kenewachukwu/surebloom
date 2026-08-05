import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Kept the filename BloomMark for import compatibility.
 * These components now render the real Surebloom shield logo.
 */

export function BloomMark({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Surebloom"
      width={size * 2}
      height={size * 2}
      className={cn("h-auto w-auto object-contain", className)}
      priority
    />
  );
}

export function Wordmark({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/images/logo.png"
        alt="Surebloom International School"
        width={96}
        height={112}
        priority
        className="h-10 md:h-11 w-auto object-contain"
      />
      <span className={cn(
        "hidden sm:inline font-display text-[20px] md:text-[22px] font-semibold tracking-tight leading-none",
        variant === "light" ? "text-cream-50" : "text-navy-900"
      )}>
        Surebloom
      </span>
    </span>
  );
}
