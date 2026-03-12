/**
 * Site-wide configuration: name, tagline, metadata, and branding.
 * Edit this file to customize your musician website.
 */

export const siteConfig = {
  /** Your band or artist name */
  name: "Your Band Name",

  /** Short tagline for the hero section */
  tagline: "Your genre or style in a few words",

  /** Subtitle under the tagline (e.g., "Acoustic duo, but with the energy of a full band") */
  taglineSubtitle: "Add a catchy line that describes your sound",

  /** Location text shown in hero (e.g., "Mount Maunganui, New Zealand") */
  location: "Your City, Your Country",

  /** Genre/style badge in hero (e.g., "Acoustic Covers") */
  genre: "Your Genre",

  /** Site URL - used for SEO and schema. Update after deploying. */
  url: "https://your-website.vercel.app",

  /** Default SEO metadata */
  metadata: {
    title: "Your Band Name - Live Music",
    description: "Professional live music for weddings, events, and corporate functions. Book your entertainment today.",
    keywords: "live music, wedding band, event musician, acoustic duo, band hire",
  },

  /** Accent color for buttons, links, highlights. Use Tailwind classes: slate, zinc, neutral, etc. */
  accentColor: "slate" as const,
};
