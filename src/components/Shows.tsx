"use client"

import Link from "next/link"
import { shows } from "@/data/shows"

function splitShowDate(date: string): { day: string; month: string } {
  const parts = date.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    return { month: parts[0], day: parts[1] }
  }
  return { month: "", day: date }
}

const typeBadge: Record<string, { bg: string; text: string; border: string }> = {
  Free: { bg: "bg-[#C9A84C]/10", text: "text-[#C9A84C]", border: "border-[#C9A84C]/30" },
  Tickets: { bg: "bg-[#D4547A]/10", text: "text-[#D4547A]", border: "border-[#D4547A]/30" },
  Public: { bg: "bg-[#8B1A2E]/15", text: "text-[#F0E4C4]/60", border: "border-[#8B1A2E]/40" },
}

function badgeForShow(show: (typeof shows)[number]): string {
  if (show.isFree) return "Free"
  if (show.ticketLink) return "Tickets"
  return "Public"
}

export default function Shows() {
  if (shows.length === 0) return null

  return (
    <section id="events" className="relative py-32 velvet-section overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-rule" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">Where We Are</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-[#F0E4C4]">
              Upcoming <em className="gradient-text not-italic">Shows</em>
            </h2>
          </div>
          <Link
            href="#contact"
            className="self-start md:self-auto px-7 py-3.5 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-sans font-semibold uppercase tracking-widest hover:bg-[#C9A84C]/10 transition-colors duration-300"
          >
            Book for Your Event
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          {shows.map((show, i) => {
            const { day, month } = splitShowDate(show.date)
            const badgeKey = badgeForShow(show)
            const badge = typeBadge[badgeKey] ?? typeBadge.Public

            return (
              <div
                key={`${show.venue}-${i}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border border-[#C9A84C]/8 bg-[#0D0A0E] p-6 hover:border-[#C9A84C]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 text-center">
                  <p className="font-serif text-3xl font-light text-[#F0E4C4] leading-none">{day}</p>
                  <p className="text-xs text-[#C9A84C] font-sans font-semibold uppercase tracking-widest mt-1">{month}</p>
                  <p className="text-[10px] text-[#9A8A7A] font-sans mt-0.5">{show.year}</p>
                </div>

                <div className="hidden sm:block w-px h-10 bg-[#C9A84C]/15 flex-shrink-0" />

                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-light text-[#F0E4C4] group-hover:text-[#C9A84C] transition-colors truncate">
                    {show.venue}
                  </h3>
                  <p className="text-[#9A8A7A] text-sm font-sans mt-0.5">
                    {show.location} · {show.time}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                  <span
                    className={`flex-shrink-0 text-xs font-sans font-semibold px-3 py-1 border ${badge.bg} ${badge.text} ${badge.border}`}
                  >
                    {badgeKey}
                  </span>
                  {!show.isFree && show.ticketLink && (
                    <Link
                      href={show.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-sans uppercase tracking-widest text-[#C9A84C] border border-[#C9A84C]/30 px-3 py-1 hover:bg-[#C9A84C]/10 transition-colors"
                    >
                      Get tickets
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 crimson-rule" />
    </section>
  )
}
