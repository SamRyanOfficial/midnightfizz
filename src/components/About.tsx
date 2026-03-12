"use client"

import Image from "next/image"
import { Award, Users, Music } from "lucide-react"
import { aboutConfig } from "@/data/about"
import { siteConfig } from "@/config/site"

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Why{" "}
                <span className="text-slate-400">{siteConfig.name}</span>?
              </h2>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-slate-500">
              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-300 text-center lg:text-left">
                &ldquo;{aboutConfig.quote}&rdquo;
              </p>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-gray-300">
              {aboutConfig.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8">
              {aboutConfig.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  {i === 0 && <Award className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 mx-auto mb-2" />}
                  {i === 1 && <Users className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 mx-auto mb-2" />}
                  {i === 2 && <Music className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 mx-auto mb-2" />}
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-400">{stat.value}</div>
                  <div className="text-[11px] sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/600x600/1a1a1a/666666?text=Add+About+Photo"
                alt={`${siteConfig.name} performing`}
                width={500}
                height={500}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
