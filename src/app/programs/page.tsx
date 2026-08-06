import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeader } from "@/components/Section";
import { facilities, clubs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs: Nursery, Primary & Secondary in Port Harcourt",
  description:
    "Surebloom offers a full education from nursery through secondary school in Port Harcourt, with a Nigerian and British curriculum.",
};

const programs = [
  {
    id: "nursery",
    num: "01",
    level: "Nursery",
    tagline: "Where wonder begins.",
    image: "/images/girl.jpg",
    lede: "The foundation years, when children build the person they will become. Independence, concentration, coordination, and language, in an environment prepared to their scale.",
    subjects: [
      { t: "Practical life", d: "Pouring, sweeping, buttoning, food prep: the small acts that build a whole child." },
      { t: "Sensorial materials", d: "Trained perception: colour, sound, weight, texture. The senses as instruments of learning." },
      { t: "Early language", d: "Sandpaper letters, moveable alphabet, spontaneous reading and writing." },
      { t: "Early mathematics", d: "Concrete quantity before symbol. Numbers you can hold in your hands." },
      { t: "Cultural studies", d: "Geography, botany, zoology, music, art: the world in miniature." },
    ],
  },
  {
    id: "primary",
    num: "02",
    level: "Primary",
    tagline: "Where questions grow big.",
    image: "/images/library.jpg",
    lede: "The years of the reasoning mind. We introduce the &lsquo;great lessons&rsquo;: the story of the universe, of life, of humans, of language, of numbers. Everything else grows from these roots.",
    subjects: [
      { t: "Language arts", d: "Composition, grammar, literature, and the discipline of the essay." },
      { t: "Mathematics", d: "From bead chains to algebra, always concrete first and abstract when ready." },
      { t: "Sciences", d: "Botany, zoology, physical science, chemistry, with real experiments." },
      { t: "History & geography", d: "Timelines of civilizations. Physical, political, economic geography." },
      { t: "The arts", d: "Music, visual art, dance, drama: not extras, but core." },
      { t: "French Club", d: "Introducing a second language through weekly sessions and cultural activities." },
    ],
  },
  {
    id: "secondary",
    num: "03",
    level: "Secondary",
    tagline: "Where character takes shape.",
    image: "/images/highschool.jpg",
    lede: "The adolescent years, taken seriously. A blend of Nigerian and British curriculum prepares our pupils for the WAEC/SSCE and university entry, while service, leadership, and self-authorship prepare them for life beyond it.",
    subjects: [
      { t: "Core academics", d: "English, mathematics, sciences, humanities, combining Nigerian and British curriculum standards and aligned with WAEC/SSCE." },
      { t: "Boarding house", d: "Boarding available for secondary pupils, with pastoral care, structured evening study, and community life." },
      { t: "Electives & specialisation", d: "Pupils shape their programme around emerging interests." },
      { t: "Community & service", d: "Real work in the world beyond the school gate." },
      { t: "Leadership development", d: "Pupil government, mentorship of younger children, public speaking." },
      { t: "Clubs", d: "Debate, Coding & Robotics, Chess, Music & Choir, Drama, Dance, Journalism, and more. See the full list below." },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero />
      {programs.map((p, i) => (
        <ProgramBlock key={p.id} program={p} reverse={i % 2 === 1} />
      ))}
      <ClubsBlock />
      <FacilitiesBlock />
      <ContinuumBlock />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative bg-cream-100 pt-28 pb-16 md:pt-48 md:pb-24 border-b border-navy-900/8">
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>Programs</Eyebrow>
          <h1 className="mt-6 font-display text-display-xl font-medium leading-[1.02] text-navy-950 text-balance">
            Nursery to secondary,
            <br />
            <span className="italic text-navy-700">built for growth</span> at every stage.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-ink-500 text-pretty">
            Every level of Surebloom is designed as one continuous journey,
            from the child who first walks into our nursery to the young adult
            who walks out of our secondary school ready for the world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-4 py-2 text-[12px] font-medium tracking-tight text-cream-50">
              <span className="h-1.5 w-1.5 rounded-full bg-azure-500" />
              Nigerian &amp; British curriculum
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-50 ring-1 ring-inset ring-navy-900/12 px-4 py-2 text-[12px] font-medium tracking-tight text-navy-900">
              <span className="h-1.5 w-1.5 rounded-full bg-azure-500" />
              Boarding available (Secondary)
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProgramBlock({
  program,
  reverse,
}: {
  program: (typeof programs)[number];
  reverse: boolean;
}) {
  return (
    <section id={program.id} className="relative bg-cream-50 py-24 md:py-36 border-b border-navy-900/8">
      <Container>
        <div className={`grid gap-16 lg:grid-cols-2 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={program.image}
              alt={`${program.level} students at Surebloom`}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute top-6 left-6 flex items-center gap-3 rounded-full bg-cream-50/90 backdrop-blur px-4 py-2">
              <span className="font-display text-sm text-azure-600 font-medium">{program.num}</span>
              <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900">
                {program.level}
              </span>
            </div>
          </div>

          <div>
            <Eyebrow>{program.level}</Eyebrow>
            <h2 className="mt-5 font-display text-display-lg font-medium text-navy-950 text-balance">
              {program.tagline}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-500 text-pretty" dangerouslySetInnerHTML={{ __html: program.lede }} />

            <dl className="mt-8 divide-y divide-navy-900/10 border-y border-navy-900/10">
              {program.subjects.map((s) => (
                <div key={s.t} className="grid grid-cols-[1fr_2fr] gap-6 py-4">
                  <dt className="font-display text-[17px] text-navy-900">{s.t}</dt>
                  <dd className="text-[15px] leading-relaxed text-ink-500">{s.d}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" arrow>Contact us about {program.level}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClubsBlock() {
  return (
    <section className="bg-cream-100 py-24 md:py-32 border-b border-navy-900/8">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Clubs & activities</Eyebrow>
            <h2 className="mt-5 font-display text-display-md font-medium text-navy-950 text-balance">
              Beyond the
              <span className="italic text-navy-700"> classroom.</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink-500 max-w-md">
              Clubs are where children find friends who share their interests,
              outside the usual classroom day. Membership rotates each term,
              so there&apos;s always something new to try.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {clubs.map((c, i) => (
              <li
                key={c}
                className="group relative rounded-2xl border border-navy-900/12 bg-cream-50 p-5 hover:border-azure-500/50 hover:-translate-y-0.5 transition-all"
              >
                <span className="text-[11px] font-medium text-azure-600 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-[17px] text-navy-950 leading-tight">
                  {c}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function FacilitiesBlock() {
  return (
    <section className="bg-cream-50 py-24 md:py-32 border-b border-navy-900/8">
      <Container>
        <SectionHeader
          eyebrow="Facilities"
          title={<>Built for how children <span className="italic text-navy-700">actually</span> learn.</>}
          intro="Every space on our compound is set up for hands-on learning, not just the classrooms."
        />
        <ul className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
          {facilities.map((f) => (
            <li key={f} className="group flex items-start gap-3 border-t border-navy-900/12 pt-4">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden className="mt-1 text-azure-600 shrink-0">
                <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[15px] leading-snug text-navy-950 group-hover:text-navy-700 transition-colors">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { src: "/images/yb-science-lab.jpg", alt: "Students working in the science laboratory", label: "Science laboratory" },
            { src: "/images/yb-boarding-house.jpg", alt: "The boarding house building", label: "Boarding house" },
            { src: "/images/yb-building-exterior.jpg", alt: "Surebloom school building", label: "On our grounds" },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-navy-950/75 to-transparent">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream-50">
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

function ContinuumBlock() {
  return (
    <section className="bg-navy-950 text-cream-50 py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="The continuum"
          title={<>One school, from nursery to secondary.</>}
          intro="Children who spend their whole education at Surebloom grow up as one community: younger children learning from older, older children shaping the next generation."
          className="[&_.text-navy-900\/70]:text-cream-50/85 [&_.bg-navy-900\/40]:bg-cream-50/40 [&_h2]:text-cream-50 [&_p]:text-cream-100/85"
        />
        <div className="mt-16 grid grid-cols-3 items-end gap-4">
          {programs.map((p, i) => (
            <div key={p.id} className="text-center">
              <div
                className="mx-auto rounded-t-3xl bg-azure-500/90 hover:bg-azure-500 transition-colors"
                style={{ height: `${100 + i * 50}px`, width: "100%" }}
              />
              <div className="mt-4">
                <p className="font-display text-lg md:text-xl text-cream-50">{p.level}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
