/**
 * Upcoming shows and events.
 * Add, edit, or remove shows. Leave empty array [] to hide the Shows section.
 */

export interface Show {
  date: string;
  venue: string;
  location: string;
  time: string;
  year: string;
  isFree: boolean;
  ticketLink?: string;
}

export const shows: Show[] = [
  {
    date: "Jan 15",
    venue: "Sample Show",
    location: "Venue Name",
    time: "8:00 PM - 11:00 PM",
    year: "2025",
    isFree: true,
  },
  {
    date: "Feb 20",
    venue: "Another Gig",
    location: "Local Bar",
    time: "9:00 PM - 12:00 AM",
    year: "2025",
    isFree: false,
    ticketLink: "https://example.com/tickets",
  },
];
