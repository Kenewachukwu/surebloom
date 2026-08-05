import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: Montessori Excellence in Port Harcourt`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Montessori school Port Harcourt",
    "private school Port Harcourt",
    "nursery school Port Harcourt",
    "primary school Port Harcourt",
    "secondary school Port Harcourt",
    "international school Nigeria",
    "Surebloom",
    "Christian school Port Harcourt",
    "school admissions Port Harcourt",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: `${site.name}: Montessori Excellence in Port Harcourt`,
    description: site.description,
    images: [
      { url: "/images/highschool.jpg", width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/highschool.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#0F244A",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/images/highschool.jpg`,
  description: site.description,
  telephone: site.phoneRaw,
  email: site.email,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.geo.lat,
    longitude: site.address.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phoneRaw,
      contactType: "admissions",
      areaServed: "NG",
    },
    {
      "@type": "ContactPoint",
      telephone: site.phoneAltRaw,
      contactType: "admissions",
      areaServed: "NG",
    },
  ],
  sameAs: [site.socials.facebook, site.socials.instagram, site.socials.youtube],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream-50 text-ink-900 antialiased">
        <Nav />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollReveal />
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
