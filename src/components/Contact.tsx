"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { contactConfig } from "@/config/contact"
import { siteConfig } from "@/config/site"

const EVENT_TYPES = ["Wedding", "Birthday", "Private", "Bar", "Venue", "Corporate", "Other"] as const

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ValidationErrors {
  [key: string]: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setValidationErrors({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 400 && data.details) {
          const errors: ValidationErrors = {}
          data.details.split(", ").forEach((err: string) => {
            const [field, message] = err.split(": ")
            errors[field] = message
          })
          setValidationErrors(errors)
          throw new Error("Please fix the validation errors")
        } else if (response.status === 429) {
          throw new Error("Too many requests. Please try again in a minute.")
        } else {
          throw new Error(data.error || "Failed to send message")
        }
      }

      setIsSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#8B1A2E]/8 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-[#8B1A2E]" />
            <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">Let&apos;s Talk</span>
            <div className="w-12 h-px bg-[#8B1A2E]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#F0E4C4]">
            Book <em className="gradient-text not-italic">{siteConfig.name}</em>
          </h2>
          <p className="mt-5 text-[#9A8A7A] text-base max-w-lg mx-auto leading-relaxed font-sans">
            Tell us about your event — we read every message and usually reply within one business day.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 flex flex-col gap-10">
            <div>
              <h3 className="font-serif text-2xl font-light text-[#F0E4C4] mb-8">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#C9A84C]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[#9A8A7A] text-xs font-sans uppercase tracking-widest font-semibold">Email Us</p>
                    <a
                      href={`mailto:${contactConfig.email}`}
                      className="text-[#F0E4C4] text-sm font-sans mt-1 hover:text-[#C9A84C] transition-colors break-all"
                    >
                      {contactConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#C9A84C]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[#9A8A7A] text-xs font-sans uppercase tracking-widest font-semibold">Call Us</p>
                    <a
                      href={`tel:${contactConfig.phone.replace(/\s/g, "")}`}
                      className="text-[#F0E4C4] text-sm font-sans mt-1 hover:text-[#C9A84C] transition-colors"
                    >
                      {contactConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#C9A84C]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[#9A8A7A] text-xs font-sans uppercase tracking-widest font-semibold">Based In</p>
                    <p className="text-[#F0E4C4] text-sm font-sans mt-1">{contactConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#C9A84C]/15 bg-[#C9A84C]/5 p-7">
              <div className="w-8 h-px bg-[#C9A84C] mb-4" />
              <p className="text-[#C9A84C] font-sans font-semibold text-sm uppercase tracking-widest mb-2">Fast Response</p>
              <p className="text-[#9A8A7A] text-sm leading-relaxed font-sans">
                For urgent requests, call us directly. We read every message and reply as soon as we can.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 border border-[#C9A84C]/10 bg-[#140F15] p-10">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                <div className="w-16 h-16 border border-[#C9A84C]/40 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl font-light text-[#F0E4C4]">Message Sent</h3>
                <p className="text-[#9A8A7A] text-sm font-sans max-w-sm">Thanks for reaching out — we&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[#9A8A7A] text-xs font-sans font-semibold uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full bg-[#0D0A0E] border text-[#F0E4C4] placeholder-[#9A8A7A]/50 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C9A84C]/50 transition-colors ${
                        validationErrors.name ? "border-red-500/80" : "border-[#C9A84C]/15"
                      }`}
                    />
                    {validationErrors.name && <p className="text-red-400 text-xs">{validationErrors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[#9A8A7A] text-xs font-sans font-semibold uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full bg-[#0D0A0E] border text-[#F0E4C4] placeholder-[#9A8A7A]/50 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C9A84C]/50 transition-colors ${
                        validationErrors.email ? "border-red-500/80" : "border-[#C9A84C]/15"
                      }`}
                    />
                    {validationErrors.email && <p className="text-red-400 text-xs">{validationErrors.email}</p>}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[#9A8A7A] text-xs font-sans font-semibold uppercase tracking-widest">
                    Event type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-[#0D0A0E] border px-4 py-3 text-sm font-sans text-[#F0E4C4] focus:outline-none focus:border-[#C9A84C]/50 transition-colors ${
                      validationErrors.subject ? "border-red-500/80" : "border-[#C9A84C]/15"
                    }`}
                  >
                    <option value="" className="bg-[#0D0A0E]">
                      Select event type…
                    </option>
                    {EVENT_TYPES.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0D0A0E]">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {validationErrors.subject && <p className="text-red-400 text-xs">{validationErrors.subject}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[#9A8A7A] text-xs font-sans font-semibold uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event or venue..."
                    className={`w-full bg-[#0D0A0E] border text-[#F0E4C4] placeholder-[#9A8A7A]/50 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none ${
                      validationErrors.message ? "border-red-500/80" : "border-[#C9A84C]/15"
                    }`}
                  />
                  {validationErrors.message && <p className="text-red-400 text-xs">{validationErrors.message}</p>}
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-4 border border-[#C9A84C] text-[#C9A84C] font-sans font-semibold text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0D0A0E] transition-all duration-300 glow-gold-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
