"use client"

import { useState } from "react"
import Image from "next/image"
import { galleryImages } from "@/data/gallery"

export default function Gallery() {
  const [showAllMobile, setShowAllMobile] = useState(false)

  if (galleryImages.length === 0) return null

  return (
    <section id="gallery" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4547A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-[#8B1A2E]" />
            <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">Our Gallery</span>
            <div className="w-12 h-px bg-[#8B1A2E]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#F0E4C4]">
            Midnight Fizz <em className="gradient-text not-italic">Moments</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`relative aspect-[4/3] overflow-hidden group cursor-pointer border border-transparent hover:border-[#C9A84C]/30 transition-all duration-300 ${
                i >= 4 && !showAllMobile ? "hidden md:block" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-[center_22%] transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: img.objectPosition ?? "50% 22%" }}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#8B1A2E]/0 group-hover:bg-[#8B1A2E]/10 transition-colors duration-300" />
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {galleryImages.length > 4 && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() => setShowAllMobile((prev) => !prev)}
              className="px-6 py-2 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#C9A84C]/10 transition-colors duration-300"
            >
              {showAllMobile ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
