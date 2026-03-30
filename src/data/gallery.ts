/**
 * Gallery images.
 * Replace placeholder URLs with your own images in /public/images/
 * `span` controls the bento-style layout (Tailwind grid classes).
 */

export interface GalleryImage {
  src: string
  alt: string
  objectPosition?: string
  /** Tailwind grid span classes, e.g. "col-span-2 row-span-2" */
  span?: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://placehold.co/800x600/140F15/C9A84C?text=Performance+1",
    alt: "Band performing on stage",
    span: "col-span-2",
  },
  {
    src: "https://placehold.co/400x600/1E1220/D4547A?text=On+Stage",
    alt: "Singer performing",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://placehold.co/400x400/140F15/C9A84C?text=Live+Event",
    alt: "Corporate event performance",
    span: "col-span-1",
  },
  {
    src: "https://placehold.co/400x400/1E1220/8B1A2E?text=Wedding",
    alt: "Wedding performance",
    span: "col-span-1",
  },
  {
    src: "https://placehold.co/800x400/140F15/C9A84C?text=Full+Band",
    alt: "Full band setup",
    span: "col-span-2",
  },
]
