"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { contactConfig } from "@/config/contact"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ValidationErrors {
  [key: string]: string
}

const socialLinks = [
  { href: contactConfig.social.facebook, icon: Facebook, label: "Facebook" },
  { href: contactConfig.social.instagram, icon: Instagram, label: "Instagram" },
  { href: contactConfig.social.youtube, icon: Youtube, label: "YouTube" },
].filter((link) => link.href)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.3rem] font-bold text-white text-center">
              Get in{" "}
              <span className="text-slate-400">Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              <span className="font-semibold text-slate-400">No robots here</span> — this goes direct to you. Feel free
              to call, text, or email!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-200">
                <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <a href={`tel:${contactConfig.phone.replace(/\s/g, "")}`} className="text-sm sm:text-base text-gray-300 hover:text-slate-400 transition-colors">
                  {contactConfig.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-200">
                <Mail className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="text-sm sm:text-base text-gray-300 hover:text-slate-400 transition-colors break-all"
                >
                  {contactConfig.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-200">
                <MapPin className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-300">{contactConfig.location}</span>
              </div>
            </div>

            {socialLinks.length > 0 && (
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-slate-400 hover:scale-110 transition-all duration-200 h-10 w-10"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>

          <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-4 sm:p-6">
              {isSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="text-3xl mb-2">🎸</div>
                  <h3 className="text-xl font-semibold text-white">Thanks for your message!</h3>
                  <p className="text-gray-300">You will hear from us very soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-11 focus:border-slate-400 transition-colors ${
                          validationErrors.name ? "border-red-400" : ""
                        }`}
                        required
                      />
                      {validationErrors.name && <p className="text-red-400 text-xs mt-1">{validationErrors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-11 focus:border-slate-400 transition-colors ${
                          validationErrors.email ? "border-red-400" : ""
                        }`}
                        required
                      />
                      {validationErrors.email && <p className="text-red-400 text-xs mt-1">{validationErrors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Booking inquiry, collaboration, etc."
                      className={`bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 h-11 focus:border-slate-400 transition-colors ${
                        validationErrors.subject ? "border-red-400" : ""
                      }`}
                      required
                    />
                    {validationErrors.subject && <p className="text-red-400 text-xs mt-1">{validationErrors.subject}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event or venue..."
                      rows={4}
                      className={`bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 resize-none focus:border-slate-400 transition-colors ${
                        validationErrors.message ? "border-red-400" : ""
                      }`}
                      required
                    />
                    {validationErrors.message && <p className="text-red-400 text-xs mt-1">{validationErrors.message}</p>}
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed h-11"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
