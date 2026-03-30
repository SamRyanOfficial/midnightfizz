"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqs } from "@/config/faq"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 velvet-section overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-rule" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">Help</span>
              <div className="w-12 h-px bg-[#C9A84C]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F0E4C4]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "border border-[#C9A84C]/10 bg-[#0D0A0E] overflow-hidden transition-all duration-300",
                  "hover:border-[#C9A84C]/25"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base font-medium text-[#F0E4C4] font-sans">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-[#C9A84C] flex-shrink-0 transition-transform duration-300",
                      openIndex === index ? "rotate-180" : ""
                    )}
                  />
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", openIndex === index ? "max-h-96" : "max-h-0")}>
                  <p className="px-6 pb-4 text-[#9A8A7A] leading-relaxed text-sm font-sans">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 crimson-rule" />
    </section>
  )
}

export default FAQ
