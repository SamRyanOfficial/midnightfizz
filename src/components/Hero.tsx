"use client"

import Image from "next/image"
import Link from "next/link"
import { brandImages } from "@/config/brand-images"
import { siteConfig } from "@/config/site"

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-x-hidden" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <Image
          src={brandImages.heroBackground}
          alt={`${siteConfig.name} performing`}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A0E]/65 via-[#0D0A0E]/55 to-[#0D0A0E]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1A2E]/15 via-transparent to-[#7B2FFF]/10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-[#0D0A0E] to-transparent" />
      </div>

      <div className="absolute top-1/3 left-1/4 w-[min(500px,50vw)] h-[min(500px,50vw)] rounded-full bg-[#8B1A2E]/8 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[min(400px,45vw)] h-[min(400px,45vw)] rounded-full bg-[#7B2FFF]/8 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-12 pt-28 sm:pt-32 md:pt-36">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          {/* ~30% larger than previous max-w-sm (24rem): 24 × 1.3 ≈ 31.2rem */}
          <div className="animate-fade-in-up mx-auto w-full max-w-[31rem] px-2">
            <Image
              src={brandImages.logo}
              alt={siteConfig.name}
              width={780}
              height={390}
              className="h-auto w-full object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <div className="animate-fade-in-up-delay-1 gold-rule mx-auto mb-8 mt-4 w-32" />

          <p className="animate-fade-in-up-delay-1 mb-2 font-serif text-2xl font-light italic tracking-[0.15em] text-[#F0E4C4]/90 md:text-3xl">
            {siteConfig.tagline}
          </p>

          <p className="animate-fade-in-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-[#9A8A7A] font-sans md:text-lg">
            {siteConfig.taglineSubtitle}
          </p>

          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#contact"
              className="animate-pulse-gold border border-[#C9A84C] px-9 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#0D0A0E]"
            >
              Check Availability
            </Link>
            <Link
              href="#videos"
              className="border border-[#F0E4C4]/20 px-9 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-[#F0E4C4]/70 transition-all duration-300 hover:border-[#F0E4C4]/50 hover:text-[#F0E4C4]"
            >
              Watch Live
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 sm:mt-14">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#9A8A7A]">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-[#C9A84C]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
