"use client"

import Image from "next/image"
import { brandImages } from "@/config/brand-images"
import { siteConfig } from "@/config/site"
import { aboutConfig } from "@/data/about"

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#8B1A2E]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20 items-center">
          <div>
            <div className="flex items-center justify-center gap-4 mb-6 md:justify-start">
              <div className="w-12 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">About Us</span>
              <div className="w-12 h-px bg-[#C9A84C]" />
            </div>

            <h2 className="text-center font-serif text-5xl md:text-6xl font-light text-[#F0E4C4] leading-tight mb-8 md:text-left">
              Behind the <em className="gradient-text not-italic">Music</em>
            </h2>

            {aboutConfig.bio.map((paragraph, i) => (
              <p key={i} className="text-[#9A8A7A] text-base leading-relaxed mb-6 font-sans last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#8B1A2E]/40 z-0" />
            <div className="relative overflow-hidden aspect-[4/3] z-10 glow-gold">
              <Image
                src={brandImages.aboutImage}
                alt={`${siteConfig.name} — Sammie Campbell, Kane Sherwood, Manuel Kahura, and Sam Shirley live`}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0E]/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/30 z-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
