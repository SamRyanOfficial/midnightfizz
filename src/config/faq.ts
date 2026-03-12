/**
 * Frequently Asked Questions.
 * Add, edit, or remove questions as needed.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What types of events do you perform at?",
    answer: "We perform at weddings, corporate events, birthdays, private parties, and venues. Tell us about your event and we'll tailor our set to match the vibe.",
  },
  {
    question: "What kind of music do you play?",
    answer: "We cover a wide range of genres. Add your own description here - what styles, eras, and vibes you bring to your performances.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking as early as possible, especially for weddings and peak dates. Contact us to check availability.",
  },
  {
    question: "Do you provide your own equipment?",
    answer: "Yes, we bring our own instruments and PA system. For larger venues or outdoor events, we can discuss additional equipment needs.",
  },
  {
    question: "What areas do you cover?",
    answer: "We're based in [Your City] and perform locally and regionally. For events further afield, get in touch and we can discuss travel arrangements.",
  },
];
