"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Youtube, Menu, X } from "lucide-react"
import { siteConfig } from "@/config/site"
import { contactConfig } from "@/config/contact"

const socialLinks = [
  { href: contactConfig.social.instagram, icon: Instagram },
  { href: contactConfig.social.facebook, icon: Facebook },
  { href: contactConfig.social.youtube, icon: Youtube },
].filter((link) => link.href)

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-white hover:text-slate-400 transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-slate-400 transition-all duration-200">
              About
            </Link>
            <Link href="#music" className="text-sm font-medium text-gray-300 hover:text-slate-400 transition-all duration-200">
              Music
            </Link>
            <Link href="#shows" className="text-sm font-medium text-gray-300 hover:text-slate-400 transition-all duration-200">
              Shows
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-gray-300 hover:text-slate-400 transition-all duration-200">
              Gallery
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-gray-300 hover:text-slate-400 transition-all duration-200">
              Reviews
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-300 hover:text-slate-400 transition-all duration-200">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-slate-400 transition-all duration-200">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {socialLinks.length > 0 && (
              <div className="flex items-center space-x-2">
                {socialLinks.map(({ href, icon: Icon }) => (
                  <Button
                    key={href}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-slate-400 hover:scale-110 transition-all duration-200 h-8 w-8"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Social link">
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            )}

            <Button className="hidden md:inline-flex bg-slate-600 hover:bg-slate-500 text-white" asChild>
              <Link href="#contact">Book Us</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-400 hover:text-slate-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link href="#about" className="text-lg font-medium text-gray-300 hover:text-slate-400 py-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="#music" className="text-lg font-medium text-gray-300 hover:text-slate-400 py-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Music
            </Link>
            <Link href="#shows" className="text-lg font-medium text-gray-300 hover:text-slate-400 py-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Shows
            </Link>
            <Link href="#gallery" className="text-lg font-medium text-gray-300 hover:text-slate-400 py-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="#reviews" className="text-lg font-medium text-gray-300 hover:text-slate-400 py-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Reviews
            </Link>
            <Link href="#faq" className="text-lg font-medium text-gray-300 hover:text-slate-400 py-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="#contact" className="text-lg font-medium text-gray-300 hover:text-slate-400 py-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Button className="bg-slate-600 hover:bg-slate-500 text-white mt-4 py-3 w-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="#contact">Book Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
