/**
 * Gallery images.
 * Replace placeholder URLs with your own images in /public/images/
 * Add images to public/images/ and reference them as /images/your-photo.jpg
 */

export interface GalleryImage {
  src: string;
  alt: string;
  objectPosition?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://placehold.co/600x600/1a1a1a/666666?text=Add+Photo+1",
    alt: "Add your first photo - replace with /images/photo1.jpg",
  },
  {
    src: "https://placehold.co/600x600/1a1a1a/666666?text=Add+Photo+2",
    alt: "Add your second photo - replace with /images/photo2.jpg",
  },
  {
    src: "https://placehold.co/600x600/1a1a1a/666666?text=Add+Photo+3",
    alt: "Add your third photo - replace with /images/photo3.jpg",
  },
  {
    src: "https://placehold.co/600x600/1a1a1a/666666?text=Add+Photo+4",
    alt: "Add your fourth photo - replace with /images/photo4.jpg",
  },
  {
    src: "https://placehold.co/600x600/1a1a1a/666666?text=Add+Photo+5",
    alt: "Add your fifth photo - replace with /images/photo5.jpg",
  },
  {
    src: "https://placehold.co/600x600/1a1a1a/666666?text=Add+Photo+6",
    alt: "Add your sixth photo - replace with /images/photo6.jpg",
  },
];
