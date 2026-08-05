import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Section";
import { MapEmbed } from "@/components/MapEmbed";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Get in touch with Surebloom International School in Port Harcourt. Schedule an appointment, ask a question, or find directions to our campus.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactBlock />
      <MapSection />
    </>
  );
}

function PageHero() {
  return (
    <section className="bg-cream-100 pt-28 pb-12 md:pt-48 md:pb-20 border-b border-navy-900/8">
      <Container>
        <Eyebrow>Say hello</Eyebrow>
        <h1 className="mt-6 font-display text-display-xl font-medium leading-[1.02] text-navy-950 text-balance max-w-4xl">
          Come by the campus.
          <br />
          <span className="italic text-navy-700">Or start here.</span>
        </h1>
        <p className="mt-8 max-w-xl text-[17.5px] leading-relaxed text-ink-500">
          Every enquiry is read by a real person on the admissions team.
        </p>
      </Container>
    </section>
  );
}

function ContactBlock() {
  const items = [
    {
      label: "Visit",
      lines: [site.address.street, `${site.address.area}, ${site.address.city}`],
      cta: { label: "Directions", href: site.mapDirectionsUrl, external: true },
    },
    {
      label: "Call",
      lines: [site.phone, site.phoneAlt],
      cta: { label: "Call now", href: `tel:${site.phoneRaw}` },
    },
    {
      label: "Email",
      lines: [site.email],
      cta: { label: "Send email", href: `mailto:${site.email}` },
    },
    {
      label: "Hours",
      lines: [site.hours],
    },
  ];
  return (
    <section className="bg-cream-50 py-20 md:py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {items.map((i) => (
                <div key={i.label} className="border-t border-navy-900/15 pt-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-navy-800">
                    {i.label}
                  </p>
                  <div className="mt-3 space-y-1 text-[15.5px] text-ink-700 leading-snug">
                    {i.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                  {i.cta && (
                    <a
                      href={i.cta.href}
                      target={"external" in i.cta && i.cta.external ? "_blank" : undefined}
                      rel={"external" in i.cta && i.cta.external ? "noopener noreferrer" : undefined}
                      className="mt-3 inline-flex items-center gap-1 text-[13.5px] font-medium text-navy-900 hover:text-navy-700 transition"
                    >
                      {i.cta.label}
                      <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden>
                        <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-cream-100 p-8 md:p-10 border border-navy-900/8">
            <h2 className="font-display text-2xl md:text-3xl text-navy-950 font-medium mb-2">
              Send us a message
            </h2>
            <p className="text-[15px] text-ink-500 mb-8">
              For general questions. For applications, please use the{" "}
              <a href="/admissions#apply" className="text-navy-900 underline underline-offset-4 decoration-navy-900/30 hover:decoration-navy-900">
                admissions form
              </a>.
            </p>
            <InquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

function MapSection() {
  return (
    <section className="bg-cream-100 py-16 md:py-20 border-t border-navy-900/8">
      <Container>
        <MapEmbed />
      </Container>
    </section>
  );
}
