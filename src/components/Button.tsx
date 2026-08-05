import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 focus-visible:ring-navy-900 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-cream-50 hover:bg-navy-800 shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_10px_30px_-10px_rgba(15,61,46,0.5)]",
  secondary:
    "bg-cream-100 text-navy-900 hover:bg-cream-200 ring-1 ring-inset ring-navy-900/10",
  ghost:
    "bg-transparent text-navy-900 hover:bg-navy-900/5",
  accent:
    "bg-azure-500 text-navy-950 hover:bg-azure-600 shadow-[0_10px_30px_-10px_rgba(53,176,224,0.55)]",
};

const sizes: Record<Size, string> = {
  sm: "text-sm h-10 px-5 rounded-full",
  md: "text-[15px] h-12 px-7 rounded-full",
  lg: "text-base h-14 px-8 rounded-full",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  arrow?: boolean;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  arrow,
  ...rest
}: CommonProps &
  ({ href: string } | { href?: undefined }) &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        >
          <path
            d="M4 10h12m0 0l-5-5m5 5l-5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
