import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
}) {
  const sizes = {
    narrow: "max-w-3xl",
    default: "max-w-7xl",
    wide: "max-w-8xl",
    full: "max-w-none",
  };
  return (
    <div className={cn("mx-auto w-full px-6 md:px-10 lg:px-16", sizes[size], className)}>
      {children}
    </div>
  );
}
