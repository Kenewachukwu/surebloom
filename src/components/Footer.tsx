import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-navy-950 text-cream-100">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Surebloom home" className="inline-flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Surebloom International School"
                width={144}
                height={168}
                className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_4px_20px_rgba(53,176,224,0.25)]"
              />
              <span className="font-display text-2xl md:text-3xl font-semibold text-cream-50 leading-none">
                Surebloom
              </span>
            </Link>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-azure-500">
              Excellence · Our Culture
            </p>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream-100/85">
              Nursery through secondary in Port Harcourt, with a
              Montessori-rooted method since {site.founded}.
            </p>
            <div className="mt-8 flex gap-3">
              {(["facebook", "instagram", "youtube"] as const).map((s) => (
                <a
                  key={s}
                  href={site.socials[s]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-cream-100/20 text-cream-100/85 hover:text-azure-500 hover:ring-azure-500/40 transition"
                  aria-label={s}
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-azure-500">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-cream-100/80 hover:text-cream-50 transition">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-azure-500">
              Visit
            </h3>
            <address className="mt-5 not-italic text-[15px] leading-relaxed text-cream-100/80">
              {site.address.street}
              <br />
              {site.address.area}
              <br />
              {site.address.city}, {site.address.state}
            </address>
            <a
              href={site.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] text-azure-500 hover:text-azure-400 transition"
            >
              Get directions
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-azure-500">
              Reach us
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="text-cream-100/80 hover:text-cream-50 transition">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneAltRaw}`} className="text-cream-100/80 hover:text-cream-50 transition">
                  {site.phoneAlt}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-cream-100/80 hover:text-cream-50 transition break-all">
                  {site.email}
                </a>
              </li>
              <li className="text-cream-100/80">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-100/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-cream-100/75">
          <p>© {new Date().getFullYear()} Surebloom International School. All rights reserved.</p>
          <p>
            Est. {site.founded} · Teaching in Port Harcourt for {new Date().getFullYear() - site.founded}+ years
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: "facebook" | "instagram" | "youtube" }) {
  if (name === "facebook") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.5V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.3H7.5v3h2.7V21h3.3z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12s0-3.3-.4-4.9c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.3c-.9.2-1.6.9-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.9c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.3c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.9.4-4.9zM10 15V9l5 3-5 3z" />
    </svg>
  );
}
