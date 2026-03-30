"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronUp, MapPin, Calendar, Music, PartyPopper, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import { Review, reviews } from "@/data/reviews"

const INITIAL_DISPLAY_COUNT = 6

const getEventIcon = (eventType: string) => {
  const type = eventType.toLowerCase()
  if (type.includes("wedding")) return <Music className="w-3 h-3 sm:w-4 sm:h-4 text-[#C9A84C] flex-shrink-0" />
  if (type.includes("corporate")) return <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-[#C9A84C] flex-shrink-0" />
  return <PartyPopper className="w-3 h-3 sm:w-4 sm:h-4 text-[#C9A84C] flex-shrink-0" />
}

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = review.text.length > 200

  return (
    <div className="relative border border-[#C9A84C]/10 bg-[#0D0A0E] p-8 sm:p-10 hover:border-[#C9A84C]/30 transition-all duration-300 group overflow-hidden flex flex-col h-full">
      <span
        className="absolute top-4 right-6 font-serif text-7xl sm:text-8xl text-[#C9A84C]/8 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <div className="flex-1">
        <p className="font-serif text-lg sm:text-xl font-light text-[#F0E4C4] leading-relaxed italic">
          {shouldTruncate && !isExpanded ? `${review.text.slice(0, 200)}...` : review.text}
        </p>

        {shouldTruncate && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#C9A84C] hover:text-[#E2C97E] transition-colors flex items-center gap-1 text-xs sm:text-sm font-medium mt-3 font-sans"
          >
            {isExpanded ? (
              <>
                Read less
                <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
              </>
            ) : (
              <>
                Read more
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
              </>
            )}
          </button>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-[#C9A84C]/10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] font-serif text-sm flex-shrink-0">
            {review.author.charAt(0)}
          </div>
          <div>
            <p className="text-[#F0E4C4] text-sm font-sans font-semibold">{review.author}</p>
            <div className="flex flex-col gap-1 mt-2 text-xs text-[#9A8A7A] font-sans">
              <div className="flex items-center gap-2">
                {getEventIcon(review.event)}
                <span>{review.event}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                <span className="break-words">{review.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                <span>{review.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

const Testimonials = () => {
  const [filter, setFilter] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const filteredReviews = reviews.filter((review) => {
    if (filter === "all") return true
    if (filter === "weddings") return review.event.toLowerCase().includes("wedding")
    if (filter === "corporate") return review.event.toLowerCase().includes("corporate")
    return review.event.toLowerCase().includes("birthday")
  })

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, INITIAL_DISPLAY_COUNT)

  return (
    <section id="reviews" className="relative py-32 velvet-section overflow-hidden section-glow-gold">
      <div className="absolute top-0 left-0 right-0 gold-rule" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">What Clients Say</span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#F0E4C4]">
            Loved by <em className="gradient-text not-italic">Clients</em>
          </h2>
          <p className="text-[#9A8A7A] text-center mt-5 max-w-2xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
            Read reviews from clients who have experienced our live music at their events.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12">
          {["all", "weddings", "corporate", "birthdays"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              className={cn(
                "px-4 sm:px-6 py-2 rounded-none text-xs sm:text-sm font-medium transition-all duration-300",
                "uppercase tracking-widest font-sans border",
                filter === type
                  ? "border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]"
                  : "border-[#C9A84C]/15 text-[#9A8A7A] hover:border-[#C9A84C]/40 hover:text-[#F0E4C4]"
              )}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {filteredReviews.length > INITIAL_DISPLAY_COUNT && (
          <div className="flex justify-center mt-10 sm:mt-14">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm font-sans font-semibold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0A0E] transition-all duration-300 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show More Reviews
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 crimson-rule" />
    </section>
  )
}

export default Testimonials
