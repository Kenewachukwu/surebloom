import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center bg-cream-50">
      <Container>
        <p className="font-display text-[10rem] leading-none text-azure-500/60">404</p>
        <h1 className="mt-4 font-display text-display-lg font-medium text-navy-950">
          This page has wandered off.
        </h1>
        <p className="mt-6 max-w-md text-[16px] text-ink-500">
          The page you&rsquo;re looking for isn&rsquo;t here. Try one of the
          links below.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-navy-900 px-6 py-3 text-cream-50">Home</Link>
          <Link href="/programs" className="rounded-full bg-cream-100 px-6 py-3 text-navy-900">Programs</Link>
          <Link href="/contact" className="rounded-full bg-cream-100 px-6 py-3 text-navy-900">Contact</Link>
        </div>
      </Container>
    </section>
  );
}
