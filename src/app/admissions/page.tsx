import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeader } from "@/components/Section";
import { ApplicationForm } from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Admissions — Apply to Surebloom",
  description:
    "Surebloom's admissions process is designed to be warm, clear, and never rushed. Applications are open for the next academic year.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero />
      <ProcessBlock />
      <FeesBlock />
      <FaqBlock />
      <ApplySection />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative bg-cream-100 pt-28 pb-16 md:pt-48 md:pb-24 border-b border-navy-900/8">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-end">
          <div>
            <Eyebrow>Admissions {new Date().getFullYear() + 1}</Eyebrow>
            <h1 className="mt-6 font-display text-display-xl font-medium leading-[1.02] text-navy-950 text-balance">
              A warm welcome,
              <br />
              <span className="italic text-navy-700">from the very first email.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[17.5px] leading-relaxed text-ink-500 text-pretty">
              Every family who joins Surebloom does so through a process designed
              to be human, unhurried, and honest — because choosing a school is
              one of the most important decisions a family makes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#apply" arrow>Start your application</Button>
              <Button href="/contact" variant="secondary">Schedule an appointment</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden hidden lg:block">
            <Image src="/images/ankwu.jpg" alt="" fill className="object-cover" sizes="40vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProcessBlock() {
  const steps = [
    {
      n: "01",
      t: "Enquiry",
      d: "Submit the application form below or send us a note. We&rsquo;ll be in touch with our information pack, fees, and next steps.",
    },
    {
      n: "02",
      t: "School appointment",
      d: "Schedule an appointment to see the campus, meet a guide, and watch a class in session.",
    },
    {
      n: "03",
      t: "Entrance assessment",
      d: "An age-appropriate assessment. For nursery, this is a play-based observation. For primary and secondary, a structured written and oral assessment.",
    },
    {
      n: "04",
      t: "Offer & welcome",
      d: "Pupils who pass the assessment receive an offer of admission and a welcome pack with their start date and orientation details.",
    },
  ];
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="The process"
          title={<>Four steps to becoming a Surebloom pupil.</>}
          intro="We take the time to know every child we admit — and to be sure Surebloom is the right place for them."
        />
        <ol className="mt-16 space-y-1">
          {steps.map((s, i) => (
            <li key={s.n} className="group grid grid-cols-[auto_1fr] gap-4 md:gap-10 items-baseline border-t border-navy-900/15 py-6 md:py-8 hover:bg-cream-100/50 -mx-3 md:-mx-4 px-3 md:px-4 rounded-2xl transition-colors">
              <span className="font-display text-3xl md:text-5xl text-azure-500 font-medium">{s.n}</span>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-navy-950">{s.t}</h3>
                <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-ink-500" dangerouslySetInnerHTML={{ __html: s.d }} />
              </div>
              {i === steps.length - 1 && <span className="sr-only">Final step</span>}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function FeesBlock() {
  return (
    <section className="bg-navy-950 text-cream-50 py-24">
      <Container size="narrow">
        <div className="text-center">
          <Eyebrow className="text-cream-50/85 justify-center [&>span]:bg-cream-50/40">Fees & scholarships</Eyebrow>
          <h2 className="mt-6 font-display text-display-md font-medium text-cream-50 text-balance">
            Transparent fees.
            <span className="italic text-azure-500"> A place for the right children,</span> not only the wealthy ones.
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-cream-100/85 text-pretty">
            Our current fee schedule is shared as part of the admissions pack.
            Reach out during your enquiry for details on fees, payment plans,
            and any support available for your family.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#apply" variant="accent" arrow>Request the fee schedule</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqBlock() {
  const faqs = [
    {
      q: "What ages do you accept?",
      a: "Children from age 2 (nursery) through age 17 (secondary school-leaving age).",
    },
    {
      q: "Do you accept mid-year admissions?",
      a: "Where space allows, yes. We prefer children to join at the start of a term (September, January, or April) but we consider individual circumstances.",
    },
    {
      q: "Is Surebloom a religious school?",
      a: "Surebloom is a Christian school in its ethos and calendar. We welcome families of every background — the only requirement is respect for our values.",
    },
    {
      q: "What curriculum do secondary students follow?",
      a: "Our secondary programme prepares students for WAEC/SSCE, IGCSE, and international university applications.",
    },
    {
      q: "How do I visit before applying?",
      a: "Schedule an appointment through the contact page. We&rsquo;ll match you with a time that works for your family.",
    },
    {
      q: "What is the class size?",
      a: "Class sizes vary by level, but our guide-to-child ratio averages around 1:8 across the school.",
    },
  ];
  return (
    <section className="bg-cream-100 py-24 md:py-32 border-y border-navy-900/8">
      <Container size="narrow">
        <SectionHeader eyebrow="Common questions" title="Answered." align="center" />
        <div className="mt-14 divide-y divide-navy-900/12 border-y border-navy-900/12">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer items-start justify-between gap-8 list-none">
                <span className="font-display text-lg md:text-xl text-navy-950">{f.q}</span>
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 ring-navy-900/20 text-navy-900 transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-500">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ApplySection() {
  return (
    <section id="apply" className="bg-cream-50 py-24 md:py-32 scroll-mt-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 self-start">
            <Eyebrow>Application form</Eyebrow>
            <h2 className="mt-5 font-display text-display-md font-medium text-navy-950 text-balance">
              Let&rsquo;s begin.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-500 max-w-md">
              Fill in what you can now — we can gather the rest during your
              campus appointment. We reply to every application personally.
            </p>
            <ul className="mt-8 space-y-3 text-[14.5px] text-ink-700">
              {["No obligation to enrol", "Confidential — never shared", "Reviewed personally by admissions"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden className="text-navy-700">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ApplicationForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
