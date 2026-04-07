/**
 * Site-wide configuration: name, tagline, metadata, and branding.
 * Edit this file to customize your musician website.
 */

export const siteConfig = {
  /** Your band or artist name */
  name: "Midnight Fizz",

  /** Short tagline for the hero section */
  tagline: "Live Music for Unforgettable Events",

  /** Subtitle under the tagline (e.g., "Acoustic duo, but with the energy of a full band") */
  taglineSubtitle:
    "Corporate events, weddings, and private functions across New Zealand — performed with world-class artistry.",

  /** Mobile hero only — replaces tagline + subtitle on small screens */
  heroSubtextMobile: "Music that brings every crowd to life",

  /** Location text shown in hero (e.g., "Mount Maunganui, New Zealand") */
  location: "Bay of Plenty, New Zealand",

  /** Genre/style badge in hero (e.g., "Acoustic Covers") */
  genre: "Live band",

  /** Site URL - used for SEO and schema. Update after deploying. */
  url: "https://your-website.vercel.app",

  /** Default SEO metadata */
  metadata: {
    title: "Midnight Fizz | Wedding, Birthday & Party Band in Bay of Plenty",
    description:
      "Midnight Fizz is a Tauranga-based live party band delivering unforgettable wedding receptions, birthdays, and private events across Bay of Plenty and New Zealand. Also available for polished corporate entertainment.",
    keywords:
      "Midnight Fizz, wedding band Tauranga, wedding band Bay of Plenty, birthday party band NZ, private function band, live band New Zealand, corporate entertainment band, wedding reception music, party band Bay of Plenty, live music hire NZ",
  },

  /** Accent color for buttons, links, highlights. Use Tailwind classes: slate, zinc, neutral, etc. */
  accentColor: "slate" as const,
}
