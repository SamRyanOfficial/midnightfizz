"use client"

import { galleryImages } from "@/data/gallery"

export default function Gallery() {
  if (galleryImages.length === 0) return null

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4547A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-[#8B1A2E]" />
            <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">Our Work</span>
            <div className="w-12 h-px bg-[#8B1A2E]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#F0E4C4]">
            Moments That <em className="gradient-text not-italic">Last</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 auto-rows-[minmax(180px,240px)]">
          {galleryImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`${img.span ?? ""} relative overflow-hidden group cursor-pointer border border-transparent hover:border-[#C9A84C]/30 transition-all duration-300`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
              />
              <div className="absolute inset-0 bg-[#8B1A2E]/0 group-hover:bg-[#8B1A2E]/10 transition-colors duration-300" />
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
