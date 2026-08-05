import { site } from "@/lib/site";

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-navy-900/10">
        <iframe
          src={site.mapEmbedSrc}
          title="Surebloom International School location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale-[15%]"
        />
      </div>
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div>
          <p className="font-display text-lg text-navy-950">Come see us</p>
          <address className="not-italic text-[15px] text-ink-500">
            {site.address.street}, {site.address.area}, {site.address.city}
          </address>
        </div>
        <a
          href={site.mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-[14px] font-medium text-cream-50 hover:bg-navy-800 transition"
        >
          Get directions
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
