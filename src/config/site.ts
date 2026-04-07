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
    title: "Midnight Fizz — Premium Live Music | Weddings & Corporate Events NZ",
    description:
      "Midnight Fizz is a premium live band from the Bay of Plenty, New Zealand. Sammie Campbell (vocals), Kane Sherwood (lead guitar), Manuel Kahura (drums), and Sam Shirley (bass & keys). Corporate events, weddings, private functions, bars, and venues.",
    keywords:
      "Midnight Fizz, live band New Zealand, Bay of Plenty band, wedding band NZ, corporate event band, live music hire, Sammie Campbell, Kane Sherwood, Manuel Kahura, Sam Shirley",
  },

  /** Accent color for buttons, links, highlights. Use Tailwind classes: slate, zinc, neutral, etc. */
  accentColor: "slate" as const,
}
