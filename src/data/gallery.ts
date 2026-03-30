/**
 * Gallery images under /public/images/gallery/
 */

export interface GalleryImage {
  src: string
  alt: string
  objectPosition?: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/01.png",
    alt: "Midnight Fizz — full lineup in front of a brick wall, Bay of Plenty",
  },
  {
    src: "/images/gallery/02.png",
    alt: "Midnight Fizz — band on a coastal boardwalk with palm trees",
  },
  {
    src: "/images/gallery/03.png",
    alt: "Midnight Fizz — low-angle group shot against blue sky",
  },
  {
    src: "/images/gallery/04.png",
    alt: "Midnight Fizz — four-piece against a slatted wall",
  },
  {
    src: "/images/gallery/05.png",
    alt: "Midnight Fizz — Sammie Campbell, Kane Sherwood, Manuel Kahura, and Sam Shirley seated on a concrete ledge",
  },
  {
    src: "/images/gallery/06.png",
    alt: "Midnight Fizz — promo shot outside urban storefront",
  },
  {
    src: "/images/gallery/07.png",
    alt: "Midnight Fizz — golden hour in front of glass building",
  },
  {
    src: "/images/gallery/08.png",
    alt: "Midnight Fizz — harbour and hills, Bay of Plenty, New Zealand",
  },
]
