"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqs } from "@/config/faq"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm",
                  "border border-gray-800/50 rounded-lg overflow-hidden transition-all duration-300",
                  "hover:from-gray-900/90 hover:to-black/90"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", openIndex === index ? "rotate-180" : "")}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-4 text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
