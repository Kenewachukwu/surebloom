import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeader } from "@/components/Section";
import { AdireDivider, AdirePattern } from "@/components/AdirePattern";
import { MapEmbed } from "@/components/MapEmbed";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <MissionBlock />
      <ProgramsGrid />
      <ValuesStripe />
      <MontessoriBlock />
      <CampusMoments />
      <TestimonialBlock />
      <AdmissionsCta />
      <VisitBlock />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] bg-navy-950 text-cream-50 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/highschool.jpg"
          alt="Surebloom students in class"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-950/70 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-14 pt-28 md:pb-24 md:pt-32">
        <div className="max-w-4xl">
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2.5 rounded-full border border-cream-50/25 bg-cream-50/5 px-3.5 py-1.5 md:px-4 md:py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-azure-500" />
            <span className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em] md:tracking-[0.2em] text-cream-50/90">
              Enrolling for {new Date().getFullYear() + 1} / {String(new Date().getFullYear() + 2).slice(-2)}
            </span>
          </div>

          <h1 className="font-display text-display-2xl font-medium leading-[0.95] text-cream-50 text-balance">
            Excellence,
            <br />
            <span className="italic text-azure-500">rooted</span> in
            <br />
            Port Harcourt.
          </h1>

          <p className="mt-6 md:mt-8 max-w-xl text-[16px] md:text-[18px] leading-relaxed text-cream-100/85 text-pretty">
            A Montessori education from nursery through secondary school —
            raising Nigeria&apos;s next generation of curious, confident, and
            compassionate leaders.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <Button href="/admissions#apply" variant="accent" size="lg" arrow className="w-full sm:w-auto justify-center">
              Begin Application
            </Button>
            <Link
              href="/programs"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-6 py-4 text-[15px] font-medium text-cream-50 ring-1 ring-inset ring-cream-50/25 hover:bg-cream-50/10 transition"
            >
              Explore programs
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-cream-50/15 pt-6 md:pt-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] md:text-[12px] font-medium uppercase tracking-[0.2em] md:tracking-[0.24em] text-cream-50/85">
            <span>Est. {site.founded}</span>
            <span className="h-1 w-1 rounded-full bg-cream-50/40" />
            <span>The Surebloom Method</span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-cream-50/40" />
            <span className="hidden sm:inline">Nursery → Secondary</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[12px] text-cream-50/80">
            <span>Scroll to explore</span>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden className="animate-bounce">
              <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { k: `${new Date().getFullYear() - site.founded}+`, v: "Years since founding" },
    { k: "3", v: "Levels — Nursery, Primary, Secondary" },
    { k: "2–17", v: "Ages served across the school" },
    { k: `Est. ${site.founded}`, v: "Founded in Port Harcourt" },
  ];
  return (
    <section className="bg-cream-100 border-b border-navy-900/8">
      <Container>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-10 py-14 md:py-16">
          {stats.map((s) => (
            <div key={s.k} className="border-l border-navy-900/15 pl-5 md:pl-6">
              <dt className="font-display text-4xl md:text-5xl font-medium text-navy-900 tracking-tight">
                {s.k}
              </dt>
              <dd className="mt-2 text-[13px] leading-snug text-ink-500 max-w-[18ch]">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function MissionBlock() {
  return (
    <section className="relative bg-cream-50 py-24 md:py-36 overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/about-us.jpg"
                alt="A Surebloom classroom"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-6 text-azure-500 flex-1">
                <AdirePattern className="h-full w-full" />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-navy-800">
                Nvigwe · Woji
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Eyebrow>Our purpose</Eyebrow>
            <h2 className="mt-6 font-display text-display-lg font-medium text-navy-950 text-balance">
              We believe every child arrives
              <span className="italic text-navy-700"> already brilliant.</span>
              {" "}Our work is to keep that brilliance alive.
            </h2>
            <p className="mt-8 text-[17px] leading-relaxed text-ink-500 text-pretty">
              We strongly believe in educating pupils for future success —
              promoting academic excellence and equity, and building sound moral
              and godly values in every child.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-500 text-pretty">
              Since {site.founded}, that conviction has shaped Port Harcourt&apos;s
              home for a distinctive way of teaching we call, simply, the
              Surebloom Method.
            </p>

            <div className="mt-10">
              <Button href="/about" variant="secondary" arrow>
                Our story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProgramsGrid() {
  const programs = [
    {
      slug: "nursery",
      level: "01 · Nursery",
      age: "Ages 2 – 5",
      title: "Where wonder begins.",
      copy: "A prepared environment of practical life, sensorial materials, and warm guidance — the years when children discover they can.",
      image: "/images/girl.jpg",
    },
    {
      slug: "primary",
      level: "02 · Primary",
      age: "Ages 6 – 11",
      title: "Where questions grow big.",
      copy: "Cosmic education across mathematics, language, geography, and the sciences — connecting every subject to the whole story of the universe.",
      image: "/images/library.jpg",
    },
    {
      slug: "secondary",
      level: "03 · Secondary",
      age: "Ages 12 – 17",
      title: "Where character takes shape.",
      copy: "Academic rigor married to service, leadership, and self-authorship — preparing scholars for the best universities in Nigeria and abroad.",
      image: "/images/highschool.jpg",
    },
  ];

  return (
    <section id="programs" className="relative bg-navy-950 text-cream-50 py-24 md:py-36 grain">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <Eyebrow className="text-cream-50/80 [&>span]:bg-cream-50/30">Programs</Eyebrow>
            <h2 className="mt-5 font-display text-display-lg font-medium text-cream-50 text-balance">
              Three levels. One
              <span className="italic text-azure-500"> continuous journey.</span>
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-cream-100/85">
            From the first steps in nursery through the final scholarship at
            secondary, our children move through an unbroken Montessori arc —
            each stage prepared for the next.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((p) => (
            <Link
              key={p.slug}
              href={`/programs#${p.slug}`}
              className="group relative overflow-hidden rounded-[2rem] bg-navy-900/40 ring-1 ring-cream-50/10 hover:ring-azure-500/40 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between text-[10.5px] md:text-[11px] font-medium uppercase tracking-[0.18em] md:tracking-[0.2em] text-cream-50/80">
                  <span>{p.level}</span>
                  <span>{p.age}</span>
                </div>
                <div>
                  <h3 className="font-display text-[26px] md:text-[32px] font-medium text-cream-50 leading-tight text-balance">
                    {p.title}
                  </h3>
                  <p className="mt-3 md:mt-4 text-[14px] md:text-[14.5px] leading-relaxed text-cream-100/80">
                    {p.copy}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-azure-500">
                    Explore level
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ValuesStripe() {
  const values = ["Teamwork", "Creativity", "Excellence", "Faith", "Curiosity", "Character", "Service", "Joy"];
  const doubled = [...values, ...values];
  return (
    <section className="bg-azure-500 py-6 overflow-hidden border-y border-navy-900/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((v, i) => (
          <span key={i} className="mx-8 font-display text-2xl md:text-3xl font-medium text-navy-950 flex items-center gap-8">
            {v}
            <span className="text-navy-950/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function MontessoriBlock() {
  const pillars = [
    {
      n: "01",
      title: "Prepared environment",
      copy: "Classrooms designed to invite discovery — beautiful materials at child height, order that frees rather than constrains.",
    },
    {
      n: "02",
      title: "Follow the child",
      copy: "Guides observe carefully, then step in — respecting each child's rhythm, sensitive periods, and inner drive to learn.",
    },
    {
      n: "03",
      title: "Learn by doing",
      copy: "Concrete materials before abstract concepts. Children hold ideas in their hands before they hold them in their minds.",
    },
    {
      n: "04",
      title: "Mixed-age communities",
      copy: "Younger children learn by watching. Older children learn by teaching. Everyone learns to belong.",
    },
  ];
  return (
    <section className="relative bg-cream-100 py-24 md:py-36">
      <Container>
        <SectionHeader
          eyebrow="The Surebloom Method"
          title={
            <>
              A century of research.
              <br />
              Fifteen years of <span className="italic text-navy-700">practice.</span>
            </>
          }
          intro="Rooted in the Montessori tradition, refined every day in our Port Harcourt classrooms — our method rests on four ideas that shape everything we do."
        />

        <div className="mt-16 md:mt-20 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.n} className="group">
              <div className="font-display text-6xl font-medium text-azure-500/80 transition-colors group-hover:text-azure-600">
                {p.n}
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-navy-950">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{p.copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CampusMoments() {
  const images = [
    { src: "/images/ankwu.jpg", alt: "A student learning", label: "Practical life" },
    { src: "/images/temi.jpg", alt: "Student portrait", label: "Portraiture" },
    { src: "/images/library.jpg", alt: "The library", label: "Library" },
    { src: "/images/girl.jpg", alt: "A student concentrating", label: "Concentration" },
  ];
  return (
    <section className="bg-cream-50 py-24 md:py-36">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow>Life on campus</Eyebrow>
            <h2 className="mt-5 font-display text-display-md font-medium text-navy-950 text-balance max-w-xl">
              Days that feel like <span className="italic text-navy-700">Tuesday</span> — and that&apos;s the point.
            </h2>
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 text-[14px] font-medium text-navy-900 hover:text-navy-700 transition">
            More about campus life
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl group aspect-[4/5] ${
                i === 0 ? "md:col-span-2 md:aspect-[5/4]" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-950/80 to-transparent">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream-50">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialBlock() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <Container size="narrow">
        <div className="text-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto text-azure-500" aria-hidden>
            <path d="M18 12c-6 0-10 4-10 12v12h12V24h-6c0-4 2-6 6-6V12h-2zM38 12c-6 0-10 4-10 12v12h12V24h-6c0-4 2-6 6-6V12h-2z" fill="currentColor" />
          </svg>
          <blockquote className="mt-8 font-display text-3xl md:text-4xl font-medium leading-[1.25] text-navy-950 text-balance">
            We believe every child arrives already brilliant.
            <span className="italic text-navy-700"> Our work is to keep that brilliance alive.</span>
          </blockquote>
          <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.24em] text-navy-800">
            Excellence · Our Culture
          </p>
        </div>
      </Container>
    </section>
  );
}

function AdmissionsCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-cream-50">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image src="/images/highschool.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/85 to-navy-900/40" />

      <Container className="relative py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <Eyebrow className="text-cream-50/85 [&>span]:bg-cream-50/40">Admissions {new Date().getFullYear() + 1}</Eyebrow>
            <h2 className="mt-6 font-display text-display-lg font-medium text-cream-50 text-balance">
              Your child&apos;s next chapter
              <span className="italic text-azure-500"> starts here.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-cream-100/85 max-w-xl text-pretty">
              Applications for the next academic year are open. Our process is
              designed to be clear, unhurried, and rigorous — every pupil we
              admit is one we&rsquo;re certain will thrive here.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Button href="/admissions#apply" variant="accent" size="lg" arrow className="w-full sm:w-auto justify-center">
                Start application
              </Button>
              <Button href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto justify-center text-cream-50 hover:bg-cream-50/10 ring-1 ring-cream-50/20">
                Schedule an appointment
              </Button>
            </div>
          </div>

          <ol className="grid gap-4">
            {[
              { n: "01", t: "Enquiry", d: "Share your interest and receive our information pack." },
              { n: "02", t: "Campus appointment", d: "Come see the school, meet a guide, watch a class in session." },
              { n: "03", t: "Entrance assessment", d: "A structured, age-appropriate assessment." },
              { n: "04", t: "Admission", d: "Successful pupils join the Surebloom community." },
            ].map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 items-baseline border-t border-cream-50/15 pt-5">
                <span className="font-display text-2xl text-azure-500">{s.n}</span>
                <div>
                  <p className="font-display text-xl text-cream-50">{s.t}</p>
                  <p className="mt-1 text-[14.5px] text-cream-100/85">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <AdireDivider className="bg-navy-900" />
    </section>
  );
}

function VisitBlock() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          <div>
            <Eyebrow>Come see us</Eyebrow>
            <h2 className="mt-5 font-display text-display-md font-medium text-navy-950 text-balance">
              You&apos;re always welcome
              <span className="italic text-navy-700"> at our gate.</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink-500 max-w-md">
              Tucked into a quiet street in Nvigwe, Woji. Come by for a tour,
              or send us a note — we love meeting the families we&apos;ll grow with.
            </p>

            <dl className="mt-10 space-y-6 text-[15px]">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-navy-800">Address</dt>
                <dd className="mt-2 text-ink-700 leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.area}, {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-navy-800">Call</dt>
                <dd className="mt-2 space-y-1">
                  <a href={`tel:${site.phoneRaw}`} className="block text-ink-700 hover:text-navy-900 transition">
                    {site.phone}
                  </a>
                  <a href={`tel:${site.phoneAltRaw}`} className="block text-ink-700 hover:text-navy-900 transition">
                    {site.phoneAlt}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-navy-800">Hours</dt>
                <dd className="mt-2 text-ink-700">{site.hours}</dd>
              </div>
            </dl>
          </div>

          <MapEmbed />
        </div>
      </Container>
    </section>
  );
}
