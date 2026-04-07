/**
 * Customer reviews and testimonials.
 */

export interface Review {
  id: number
  text: string
  author: string
  event: string
  venue: string
}

export const reviews: Review[] = [
  {
    id: 1,
    text:
      "We\'re just at Sydney Airport, having a glass of vino before we head off on our honeymoon. We just wanted to send a massive thank you for absolutely bringing the house down on our wedding night. \"It\'s Raining Men\" will honestly never be the same again, and Campbell\'s hilarious piano song will live in our minds forever. Thank you so much for rolling with our comedy show, embracing all the chaos, and keeping the dance floor pumping all night. Your energy and incredible talent made the night unforgettable, and we couldn\'t have asked for a better band.",
    author: "Victoria & Campbell Hooker",
    event: "Bay of Plenty Wedding",
    venue: "Hillbrook Estate",
  },
  {
    id: 2,
    text:
      "Booked Midnight Fizz for my 50th (60 people at local restaurant). The whole experience was effortless, from hiring, to the band\'s timeliness, professionalism and no fuss set up. Then when they started to play... wow... everyone was blown away! These guys were fantastic, they got everyone up on the dance floor (even our perpetual bar-leaning blokes couldn\'t help themselves). Loved their rendition of Learn to Fly (my favourite). Just book these guys - you won\'t regret it.",
    author: "Ange Maunsell",
    event: "Whakatane 50th Birthday",
    venue: "Cigol Restaurant",
  },
  {
    id: 3,
    text:
      "On Saturday evening we had the pleasure of being entertained by Midnight Fizz at our wedding. They were amazing. Almost everyone got up dancing including our 82 year old guest. The music was great and lots of people singing along. They played solidly for 3 hours with a very short break. Sammie has a wonderful voice and the musicians are talented. All of them were really pleasant to deal with. I would not hesitate to recommend this band and would definitely use them again if I had an event.",
    author: "Christine Birchall",
    event: "Whakatane Wedding",
    venue: "Private Residence",
  },
]
