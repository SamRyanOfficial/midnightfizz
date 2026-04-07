"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { brandImages } from "@/config/brand-images"
import { siteConfig } from "@/config/site"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[#C9A84C]/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image
            src={brandImages.logo}
            alt={siteConfig.name}
            width={1024}
            height={1024}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#9A8A7A] hover:text-[#C9A84C] transition-colors duration-200 tracking-widest uppercase font-sans"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-none border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0D0A0E] transition-all duration-300 font-sans"
        >
          Book Now
        </Link>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-[#C9A84C]/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#9A8A7A] hover:text-[#C9A84C] transition-colors uppercase tracking-widest font-sans"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0A0E] transition-all duration-300 font-sans"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
