/**
 * Full-bleed brand imagery (hero, logo, about).
 * Local files live under /public/images/.
 */

export const brandImages = {
  /**
   * Site-wide logo. Prefer a true PNG with alpha (RGBA).
   * If your file is JPEG data saved as `.png`, it cannot be transparent — use PNG export from your design tool.
   */
  /** Gold script logo — source: `Midnight Fizz Promo + Marketing/Logo Redesign/Redesigned Midnight Fizz Logo.png` */
  logo: "/images/midnight-fizz-logo-v3.png",
  /** Hero mark (same art as `logo`). */
  heroLogo: "/images/midnight-fizz-logo-hero-v3.png",
  /** Large desktop hero (wide shot) — `2xl` and up (≈1536px+) */
  heroBackground:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4pc%2025-6a4DR7xzHdt0grwfSEneMe3yezjGNZ.jpg",
  /** iPad / tablet — boardwalk lineup (`md` through below `2xl`) */
  heroBackgroundIpad: "/images/hero-ipad.png",
  /** Phone — portrait group shot (below `md`) */
  heroBackgroundMobile: "/images/hero-mobile.png",
  aboutImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4pc%2045-ThZU1taivpb170gc2ax0QfsFevnqK6.jpg",
} as const

/** Pixel size of `hero-mobile.png` — used so the mobile hero height scales with viewport width */
export const heroMobileDimensions = { width: 682, height: 1024 } as const
