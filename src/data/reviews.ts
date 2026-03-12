/**
 * Customer reviews and testimonials.
 * Add your own reviews - each needs: id, text, author, event, venue, and date.
 */

export interface Review {
  id: number;
  text: string;
  author: string;
  event: string;
  venue: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    text: "Add your first review here. Replace this with a real testimonial from a happy client.",
    author: "Client Name",
    event: "Wedding",
    venue: "Venue Name",
    date: "1/1/2024",
  },
  {
    id: 2,
    text: "Add your second review here. You can add as many as you like - just copy the structure above.",
    author: "Another Client",
    event: "Corporate Event",
    venue: "Company Name",
    date: "1/1/2024",
  },
];
