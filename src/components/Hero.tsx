"use client"

import Image from "next/image"
import Link from "next/link"
import { brandImages, heroMobileDimensions } from "@/config/brand-images"
import { siteConfig } from "@/config/site"

/** Shared mobile CTA: equal height, no pulse shadow (avoids “taller” primary button). */
const mobileHeroCtaBase =
  "flex min-h-[2.75rem] w-full max-w-[14.75rem] shrink-0 items-center justify-center whitespace-nowrap border px-2 py-1.5 text-center font-sans text-[0.625rem] font-semibold uppercase leading-none tracking-wide transition-all duration-300 sm:text-[0.75rem]"

function HeroContent({ variant }: { variant: "mobile" | "desktop" }) {
  const isMobile = variant === "mobile"
  return (
    <div
      className={
        isMobile
          ? "absolute inset-0 z-10 flex min-h-0 flex-col items-center justify-end overflow-hidden px-4 pb-4 pt-8 sm:px-5 sm:pb-5"
          : "relative z-10 mx-auto hidden w-full max-w-5xl flex-1 flex-col items-center justify-start px-6 pb-12 pt-20 sm:pt-24 md:flex md:pt-28"
      }
    >
      {/* Mobile: logo centered in hero; size capped so bottom CTAs stay usable */}
      {isMobile && (
        <div className="pointer-events-none absolute inset-0 z-[11] flex items-center justify-center px-4 pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]">
          <div className="pointer-events-auto flex w-full max-w-[min(82vw,32rem)] translate-y-6 flex-col items-center justify-center">
            <div className="animate-fade-in-up flex w-full flex-col items-center justify-center leading-none">
              <Image
                src={brandImages.heroLogo}
                alt={siteConfig.name}
                width={1024}
                height={1024}
                sizes="(max-width: 767px) 82vw"
                className="mx-auto block h-auto max-h-[min(56svh,14.5rem)] w-auto max-w-full object-contain object-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={
          isMobile
            ? "flex w-full max-w-[min(22rem,92vw)] shrink-0 flex-col items-center gap-2.5 text-center"
            : "flex w-full max-w-3xl flex-col items-center text-center"
        }
      >
        {!isMobile && (
          <div className="relative z-[1] mx-auto mt-[20vh] w-full max-w-[min(31rem,90vw)] translate-y-9 px-2 sm:translate-y-11 md:translate-y-12">
            <div className="animate-fade-in-up w-full leading-none">
              <Image
                src={brandImages.heroLogo}
                alt={siteConfig.name}
                width={1024}
                height={1024}
                sizes="(max-width: 1535px) 90vw, 31rem"
                className="h-auto w-full max-w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        )}

        <div
          className={
            isMobile
              ? "animate-fade-in-up-delay-1 gold-rule w-full max-w-[6.5rem]"
              : "animate-fade-in-up-delay-1 gold-rule mx-auto mb-4 mt-1 w-32 sm:mb-6"
          }
        />

        {!isMobile && (
          <p className="animate-fade-in-up-delay-1 mb-2 font-serif text-xl font-light italic tracking-[0.15em] text-[#F0E4C4]/90 sm:text-2xl md:text-3xl">
            {siteConfig.tagline}
          </p>
        )}

        {isMobile ? (
          <p className="animate-fade-in-up-delay-1 max-w-[min(20rem,92vw)] text-balance font-serif font-light italic leading-snug text-[#F0E4C4]/90 [font-size:clamp(0.7rem,calc(2.2vw + 0.3rem),0.9rem)] [letter-spacing:0.06em]">
            {siteConfig.heroSubtextMobile}
          </p>
        ) : (
          <p className="animate-fade-in-up-delay-2 mt-3 max-w-lg text-sm leading-relaxed text-[#9A8A7A] font-sans sm:mt-4 sm:text-base md:text-lg">
            {siteConfig.taglineSubtitle}
          </p>
        )}

        <div
          className={
            isMobile
              ? "animate-fade-in-up-delay-3 mt-1 flex w-full flex-col items-center gap-1.5"
              : "animate-fade-in-up-delay-3 mt-6 flex flex-col items-center gap-3 sm:mt-10 sm:gap-4 sm:flex-row sm:justify-center"
          }
        >
          <Link
            href="#contact"
            className={
              isMobile
                ? `${mobileHeroCtaBase} border-[#E2C97E] bg-[#C9A84C]/22 text-[#F3DF9C] shadow-[0_0_30px_rgba(201,168,76,0.45)] ring-1 ring-[#C9A84C]/45 hover:bg-[#E2C97E] hover:text-[#0D0A0E]`
                : "animate-pulse-gold border border-[#E2C97E] bg-[#C9A84C]/18 px-7 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#F3DF9C] shadow-[0_0_34px_rgba(201,168,76,0.48)] ring-1 ring-[#C9A84C]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(201,168,76,0.6)] hover:bg-[#E2C97E] hover:text-[#0D0A0E] sm:px-9 sm:py-4 sm:text-sm"
            }
          >
            Check Availability
          </Link>
          <Link
            href="#videos"
            className={
              isMobile
                ? `${mobileHeroCtaBase} border-[#F0E4C4]/25 text-[#F0E4C4]/75 hover:border-[#F0E4C4]/45 hover:text-[#F0E4C4]`
                : "border border-[#F0E4C4]/20 px-7 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#F0E4C4]/70 transition-all duration-300 hover:border-[#F0E4C4]/50 hover:text-[#F0E4C4] sm:px-9 sm:py-4 sm:text-sm"
            }
          >
            Watch Live
          </Link>
        </div>

        {!isMobile && (
          <div className="mt-4 flex flex-col items-center gap-2 sm:mt-10">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#9A8A7A]">Scroll</span>
            <div className="h-10 w-px bg-gradient-to-b from-[#C9A84C]/60 to-transparent sm:h-12" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const mobileAspectStyle = {
    aspectRatio: `${heroMobileDimensions.width} / ${heroMobileDimensions.height}`,
  } as const

  return (
    <section
      className="relative flex flex-col overflow-x-hidden md:min-h-[100svh]"
      aria-label="Hero"
    >
      {/* Mobile: section height follows image aspect ratio (shrinks with viewport width) */}
      <div className="relative w-full shrink-0 md:hidden">
        <div className="relative w-full" style={mobileAspectStyle}>
          <div className="absolute inset-0 bg-[#0D0A0E]" aria-hidden />
          <Image
            src={brandImages.heroBackgroundMobile}
            alt={`${siteConfig.name} — Sammie Campbell, Kane Sherwood, Manuel Kahura, and Sam Shirley`}
            fill
            className="object-cover object-[center_16%]"
            sizes="100vw"
            priority
          />
          {/* Lighter than desktop so the band stays visible on small screens */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A0E]/40 via-[#0D0A0E]/35 to-[#0D0A0E]/70" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1A2E]/10 via-transparent to-[#7B2FFF]/8" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0D0A0E] via-[#0D0A0E]/90 to-transparent sm:h-36" />
        </div>
        <HeroContent variant="mobile" />
      </div>

      {/* Tablet & desktop: full-viewport hero */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={brandImages.heroBackground}
          alt={`${siteConfig.name} performing`}
          fill
          className="hidden object-cover object-center 2xl:block"
          sizes="100vw"
          priority
        />
        <Image
          src={brandImages.heroBackgroundIpad}
          alt={`${siteConfig.name} — Sam Shirley, Manuel Kahura, Sammie Campbell, and Kane Sherwood on the boardwalk`}
          fill
          className="hidden object-cover object-center md:block 2xl:hidden"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A0E]/65 via-[#0D0A0E]/55 to-[#0D0A0E]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1A2E]/15 via-transparent to-[#7B2FFF]/10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-[#0D0A0E] to-transparent" />
      </div>

      <div className="absolute top-1/3 left-1/4 hidden h-[min(500px,50vw)] w-[min(500px,50vw)] rounded-full bg-[#8B1A2E]/8 blur-[140px] pointer-events-none md:block" />
      <div className="absolute bottom-1/3 right-1/4 hidden h-[min(400px,45vw)] w-[min(400px,45vw)] rounded-full bg-[#7B2FFF]/8 blur-[120px] pointer-events-none md:block" />

      <HeroContent variant="desktop" />
    </section>
  )
}
