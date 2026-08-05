export function AdirePattern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <defs>
        <pattern id="adire" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="currentColor" opacity="0" />
          <path d="M12 3l6 9-6 9-6-9 6-9z" fill="currentColor" opacity="0.9" />
          <circle cx="12" cy="12" r="1.6" fill="var(--adire-eye, #F5EFE4)" />
          <path d="M0 12h4M20 12h4" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
        </pattern>
      </defs>
      <rect width="240" height="24" fill="url(#adire)" />
    </svg>
  );
}

export function AdireDivider({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="h-6 text-azure-500">
        <AdirePattern className="h-full w-full" />
      </div>
    </div>
  );
}
