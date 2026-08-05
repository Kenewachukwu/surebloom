import { cn } from "@/lib/cn";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-navy-800", className)}>
      <span className="inline-block h-px w-8 bg-navy-900/40" />
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 font-display text-display-lg font-medium text-navy-950 text-balance">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-[17px] leading-relaxed text-ink-500 text-pretty">
          {intro}
        </p>
      )}
    </div>
  );
}
