"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 sm:py-8">
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          <div className="flex items-center justify-center md:justify-start">
            <span className="text-lg font-bold text-white">{siteConfig.name}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 md:justify-end">
            <Link href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
