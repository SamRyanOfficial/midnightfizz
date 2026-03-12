"use client"

import Image from "next/image"
import { galleryImages } from "@/data/gallery"

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.3rem] font-bold text-white">
            <span className="text-slate-400">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">Moments from our performances</p>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                style={{ objectPosition: image.objectPosition || "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
