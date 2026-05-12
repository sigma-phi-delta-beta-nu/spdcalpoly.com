export const site = {
  name: "Sigma Phi Delta",
  fullName: "Sigma Phi Delta — Beta-Nu Chapter",
  chapter: "Beta-Nu Chapter",
  shortChapter: "Beta-Nu",
  university: "California Polytechnic State University, San Luis Obispo",
  shortUniversity: "Cal Poly San Luis Obispo",
  city: "San Luis Obispo, CA",
  founded: "April 11, 1924",
  foundedAt: "University of Southern California",
  betaNuChartered: "1962",
  // Bumped by hand whenever site content changes. Surfaced as `last_updated`
  // in the markdown mirrors / sitemap so AI agents see an honest date rather
  // than the build timestamp (which would always read as "today").
  lastUpdated: "2026-05-12",
  motto: "Pro Bono Professionis",
  mottoTranslation: "For the Good of the Profession",
  tagline: "The Premier International Fraternity for Engineers",
  description:
    "Sigma Phi Delta is the premier international fraternity of engineers. The Beta-Nu Chapter at Cal Poly San Luis Obispo upholds the traditions of its Brotherhood, passed down through the generations.",
  domain: "spdcalpoly.com",
  // SITE_URL env var lets us rebuild with localhost for local agent-readability
  // audits — the audit follows sitemap <loc> URLs out of the box, so the
  // sitemap must reflect the host being tested.
  url: process.env.SITE_URL ?? "https://spdcalpoly.com",
  email: "spd.calpoly@gmail.com",
  social: {
    facebook: "https://www.facebook.com/spdslo/",
    instagram: "https://instagram.com/spd_slo?utm_source=ig_profile_share&igshid=1dap0iwjl5ix3",
  },
  colors: ["Red", "Black"],
  symbol: "The Castle",
  flower: "American Beauty Rose",
  jewel: "Ruby",
} as const;

export type Nav = { label: string; href: string };
export const nav: Nav[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "Brothers", href: "/brothers" },
  { label: "Contact", href: "/contact" },
];
