export const site = {
  name: "Surebloom International School",
  shortName: "Surebloom",
  tagline: "Excellence: Our Culture.",
  vision: "To produce students who are excellent in academics and other areas of life.",
  mission:
    "We are dedicated to developing students with sound intellectual and moral values. Our methods spark and kindle the flame of creativity in the minds of students.",
  description:
    "Surebloom International School provides a conducive atmosphere for actualizing the educational dreams of parents for their children, from nursery through secondary in Port Harcourt, Nigeria, with a Nigerian and British curriculum.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://surebloomschool.com",
  address: {
    street: "10 Owhor Chukwu Street, Off Chief Jacob Chukwu Street",
    area: "Nvigwe Woji",
    city: "Port Harcourt",
    state: "Rivers State",
    country: "Nigeria",
    full: "10 Owhor Chukwu Street, Off Chief Jacob Chukwu Street, Nvigwe Woji, Port Harcourt, Rivers State, Nigeria",
    // Woji neighborhood-level coords (OpenStreetMap) — the exact street isn't
    // mapped. Replace with the precise pin from Google Business Profile once claimed.
    geo: { lat: 4.8163694, lng: 6.9894015 },
  },
  phone: "080 3626 4320",
  phoneRaw: "+2348036264320",
  phoneAlt: "081 0473 5815",
  phoneAltRaw: "+2348104735815",
  curriculum: "Nigerian and British curriculum",
  email: "info@surebloomschool.com",
  hours: "Mon – Fri · 8:00am – 4:00pm",
  socials: {
    facebook: "https://www.facebook.com/p/Surebloom-International-School-100028253297583/",
    instagram: "https://www.instagram.com/surebloominternationalschool/",
    youtube: "https://youtube.com/@surebloom",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=10+Owhor+Chukwu+Street+Nvigwe+Woji+Port+Harcourt&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=10+Owhor+Chukwu+Street+Nvigwe+Woji+Port+Harcourt+Nigeria",
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
] as const;

export const facilities = [
  "Ultra-modern library",
  "ICT laboratory",
  "Science laboratory",
  "Music room",
  "Multipurpose hall",
  "Indoor & outdoor sports",
  "Cafeteria & dining hall",
  "Boarding house (Secondary)",
  "Sick bay",
] as const;

export const clubs = [
  "Sports",
  "Debate Club",
  "Coding & Robotics",
  "Music & Choir",
  "Arts & Crafts",
  "Drama",
  "Dance",
] as const;

export const awards = [
  {
    student: "Praise Mmesomachukwu Chukwumereze",
    level: "Surebloom High · JSS2",
    placement: "2nd Place",
    competition: "International Essay Contest for Young People",
    organiser: "The Goi Peace Foundation, Japan",
    theme: "A Letter from Myself in 2030",
  },
] as const;
