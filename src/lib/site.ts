export const site = {
  name: "Surebloom International School",
  shortName: "Surebloom",
  tagline: "Excellence: Our Culture.",
  // Verified mission quote from directory listings (Edusko, Nigeria Private Schools)
  missionVerified:
    "We strongly believe in educating pupils for future success, and promoting academic excellence and equity.",
  description:
    "A world-class Montessori education from nursery to secondary, raising Nigeria's next generation of curious, confident, and compassionate leaders.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://surebloomschool.com",
  address: {
    street: "10 Owhor Chukwu Street, Off Chief Jacob Chukwu Street",
    area: "Nvigwe Woji",
    city: "Port Harcourt",
    state: "Rivers State",
    country: "Nigeria",
    full: "10 Owhor Chukwu Street, Off Chief Jacob Chukwu Street, Nvigwe Woji, Port Harcourt, Rivers State, Nigeria",
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
  founded: 2010,
  mapEmbedSrc:
    "https://www.google.com/maps?q=10+Owhor+Chukwu+Street+Nvigwe+Woji+Port+Harcourt&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=10+Owhor+Chukwu+Street+Nvigwe+Woji+Port+Harcourt+Nigeria",
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
] as const;

// Verified from Nigeria Private Schools directory + school confirmation.
export const facilities = [
  "Digital classrooms",
  "Ultra-modern library",
  "ICT laboratory",
  "Science laboratory",
  "Language laboratory",
  "Music room",
  "Art room",
  "Multipurpose hall",
  "Indoor & outdoor sports",
  "Swimming pool",
  "Zoological garden",
  "Cafeteria & dining hall",
  "Children's play park",
  "Boarding house (Secondary)",
  "Sick bay",
  "School buses",
  "Fast broadband Wi-Fi",
  "Backup electricity",
  "24/7 security",
] as const;

// Verified from Nigeria Private Schools directory listing.
export const clubs = [
  "Sports",
  "Debate Club",
  "Coding & Robotics",
  "Chess Club",
  "Music & Choir",
  "Arts & Crafts",
  "Drama",
  "Dance",
  "Journalism",
  "Environmental Club",
  "JET Club",
  "Volunteering",
] as const;

// Verified achievement (multiple public sources; year to be confirmed with school).
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
