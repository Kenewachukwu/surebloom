import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeader } from "@/components/Section";
import { site, awards } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us: Montessori School in Port Harcourt",
  description:
    "Surebloom International School has guided children from nursery through secondary in Port Harcourt, Nigeria since 2010, using a distinctive Montessori-rooted approach we call the Surebloom Method.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <StoryBlock />
      <ValuesBlock />
      <AwardsBlock />
      <ApproachBlock />
      <FaithBlock />
      <CtaBlock />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative isolate bg-navy-950 text-cream-50 pt-28 pb-16 md:pt-48 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/about-us.jpg" alt="" fill priority className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950" />
      </div>
      <Container>
        <div className="max-w-4xl">
          <Eyebrow className="text-cream-50/85 [&>span]:bg-cream-50/50">About Surebloom</Eyebrow>
          <h1 className="mt-6 font-display text-display-xl font-medium leading-[1.02] text-balance">
            Fifteen years of raising children
            <span className="italic text-azure-500"> who know who they are.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-cream-100/80 text-pretty">
            We opened our doors in {site.founded} with a small group of children and
            an unshakeable belief: that a real education is not the filling of a
            bucket, but the lighting of a fire.
          </p>
        </div>
      </Container>
    </section>
  );
}

function StoryBlock() {
  return (
    <section className="bg-cream-50 py-24 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <Eyebrow>Our story</Eyebrow>
              <h2 className="mt-5 font-display text-display-md font-medium text-navy-950 text-balance">
                A school built by parents, for children.
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[17px] leading-relaxed text-ink-700">
            <p>
              Surebloom opened its doors in {site.founded} in Port Harcourt, with
              a simple conviction: that a real education is not the filling of a
              bucket, but the lighting of a fire.
            </p>
            <p>
              In the years since, we&apos;ve grown into a full school of nursery,
              primary, and secondary, building on Montessori foundations to
              develop what we now call, simply, the Surebloom Method. The
              founding belief has not changed. Every child is a serious person.
              Every day of childhood is precious. Every teacher is first, and
              last, an observer.
            </p>
            <p>
              Today Surebloom is based in Nvigwe, Woji. Families are always
              welcome to visit and see how a day unfolds.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValuesBlock() {
  const values = [
    { t: "Teamwork", d: "We learn together. We build together. No one is a bystander in this community." },
    { t: "Creativity", d: "Every subject is an act of imagination. We honour the maker in every child." },
    { t: "Excellence", d: "Not perfectionism, but the quiet discipline of doing good work, over and over." },
    { t: "Faith", d: "A Christian foundation of love, dignity, and service to others." },
    { t: "Curiosity", d: "The one habit we protect above all. Questions are the beginning of everything." },
    { t: "Character", d: "Who you are when no one is watching: that&apos;s what we&apos;re teaching." },
  ];
  return (
    <section className="bg-cream-100 py-24 md:py-32 border-y border-navy-900/8">
      <Container>
        <SectionHeader
          eyebrow="What we stand for"
          title={<>Six values. One kind of graduate.</>}
          intro="These aren't posters on the wall. They're how we hire, how we teach, and how we resolve every hard conversation."
        />
        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.t} className="border-t border-navy-900/15 pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-azure-600 font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl text-navy-950">{v.t}</h3>
              </div>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-500" dangerouslySetInnerHTML={{ __html: v.d }} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AwardsBlock() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Recognition</Eyebrow>
            <h2 className="mt-5 font-display text-display-md font-medium text-navy-950 text-balance">
              Our pupils, competing
              <span className="italic text-navy-700"> internationally.</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink-500 max-w-md">
              Every so often, a Surebloom pupil enters an international
              competition and does our school proud. Here&apos;s one we&apos;re
              especially proud of.
            </p>
          </div>

          <ul className="space-y-4">
            {awards.map((a) => (
              <li key={a.student} className="group relative rounded-[1.75rem] border border-navy-900/10 bg-cream-100/70 p-8 md:p-10 hover:border-azure-500/40 hover:shadow-[0_20px_60px_-25px_rgba(15,36,74,0.25)] transition-all">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-azure-600">
                      {a.placement}
                    </p>
                    <h3 className="mt-3 font-display text-2xl md:text-[28px] font-medium text-navy-950 leading-snug">
                      {a.competition}
                    </h3>
                    <p className="mt-2 text-[14.5px] text-ink-500">{a.organiser}</p>
                  </div>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="shrink-0 text-azure-500" aria-hidden>
                    <path d="M22 4l4.5 9.5L37 15l-7.5 7.5L31 33l-9-4.8L13 33l1.5-10.5L7 15l10.5-1.5L22 4z" fill="currentColor" opacity="0.15" />
                    <path d="M22 4l4.5 9.5L37 15l-7.5 7.5L31 33l-9-4.8L13 33l1.5-10.5L7 15l10.5-1.5L22 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mt-6 pt-6 border-t border-navy-900/10 grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-x-6 gap-y-3">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-navy-800">Pupil</p>
                    <p className="mt-1 font-display text-[17px] text-navy-950">{a.student}</p>
                    <p className="text-[13px] text-ink-500">{a.level}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-navy-800">Essay theme</p>
                    <p className="mt-1 italic font-display text-[17px] text-navy-700">&ldquo;{a.theme}&rdquo;</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function ApproachBlock() {
  return (
    <section className="bg-cream-50 py-24 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] items-center">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <Image src="/images/library.jpg" alt="A Surebloom classroom" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 90vw" />
          </div>
          <div>
            <Eyebrow>The Surebloom way</Eyebrow>
            <h2 className="mt-5 font-display text-display-md font-medium text-navy-950 text-balance">
              Rigour that feels like joy.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-500">
              The Surebloom Method is often mistaken for a soft alternative to
              &ldquo;serious&rdquo; schooling. The opposite is true. Our children
              work with real materials on real problems from age three. They read
              early, write early, and, most importantly, they choose their work.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-500">
              By the time they finish primary, they have mastered concepts most
              curricula wait until secondary to introduce, and they have done it
              because they wanted to.
            </p>
            <div className="mt-8">
              <Button href="/programs" variant="secondary" arrow>See our programs</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaithBlock() {
  return (
    <section className="bg-navy-950 text-cream-50 py-24 md:py-32 grain">
      <Container size="narrow">
        <div className="text-center">
          <Eyebrow className="text-cream-50/85 justify-center [&>span]:bg-cream-50/40">Faith at Surebloom</Eyebrow>
          <h2 className="mt-6 font-display text-display-md font-medium text-cream-50 text-balance">
            A Christian foundation.
            <span className="italic text-azure-500"> A place for every family.</span>
          </h2>
          <p className="mt-8 text-[17px] leading-relaxed text-cream-100/80 text-pretty">
            Surebloom is a Christian school in its ethos, its calendar, and its
            care for the children in our care. We welcome families of every
            background. What we ask is that each child be treated with the
            dignity we believe every human being is owed.
          </p>
        </div>
      </Container>
    </section>
  );
}

function CtaBlock() {
  return (
    <section className="bg-cream-50 py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <h2 className="font-display text-display-md font-medium text-navy-950 text-balance">
            Ready to see it in person?
          </h2>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Button href="/contact" arrow>Contact us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
