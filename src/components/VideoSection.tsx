"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { youtubeVideos, youtubeChannelUrl } from "@/data/music"

export default function VideoSection() {
  if (youtubeVideos.length === 0) return null

  return (
    <section id="videos" className="relative py-32 velvet-section overflow-hidden section-glow-crimson">
      <div className="absolute top-0 left-0 right-0 gold-rule" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">Watch Us Perform</span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#F0E4C4] tracking-tight">
            See Us <em className="gradient-text not-italic">Live</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {youtubeVideos.map((videoId, i) => (
            <div
              key={`${videoId}-${i}`}
              className="group relative overflow-hidden border border-[#C9A84C]/10 bg-[#0D0A0E] hover:border-[#C9A84C]/40 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`${siteConfig.name} performance ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-sans font-semibold text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0D0A0E] transition-all duration-300"
          >
            View More on YouTube
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 crimson-rule" />
    </section>
  )
}
