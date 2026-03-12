import { NextResponse } from "next/server"
import { Resend } from "resend"
import { headers } from "next/headers"
import { z } from "zod"
import { rateLimit } from "@/lib/rate-limit"
import { contactApiConfig } from "@/config/contact-api"

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
})

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
})

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const sanitizeHtml = (str: string) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  try {
    const contactEmail = process.env.CONTACT_EMAIL || contactApiConfig.fallbackContactEmail
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"

    if (!resend) {
      return NextResponse.json(
        {
          error: `Email service not configured. Please try again later or contact us directly at ${contactEmail}`,
          details: "Missing RESEND_API_KEY",
        },
        { status: 503 }
      )
    }

    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1"

    try {
      await limiter.check(5, ip)
    } catch {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await req.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const errorMessages = result.error.errors.map(err => `${err.path}: ${err.message}`).join(", ")
      return NextResponse.json(
        { error: "Invalid input", details: errorMessages },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = result.data

    const sanitizedName = sanitizeHtml(name)
    const sanitizedEmail = sanitizeHtml(email)
    const sanitizedSubject = sanitizeHtml(subject)
    const sanitizedMessage = sanitizeHtml(message)

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      reply_to: sanitizedEmail,
      subject: `New Contact Form: ${sanitizedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, "<br/>")}</p>
      `,
    })

    if (error) {
      if (error.message?.toLowerCase().includes("domain is not verified")) {
        return NextResponse.json(
          {
            error: `Email service not fully configured. Please try again later or contact us directly at ${contactEmail}`,
            details: "Domain verification pending",
          },
          { status: 503 }
        )
      }

      return NextResponse.json(
        {
          error: "Failed to send email. Please try again later.",
          details: error.message,
        },
        {
          status: 500,
          headers: {
            "Content-Security-Policy": "default-src 'self'",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "no-referrer",
          },
        }
      )
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
        headers: {
          "Content-Security-Policy": "default-src 'self'",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "no-referrer",
        },
      }
    )
  } catch (error) {
    const contactEmail = process.env.CONTACT_EMAIL || contactApiConfig.fallbackContactEmail
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
        headers: {
          "Content-Security-Policy": "default-src 'self'",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "no-referrer",
        },
      }
    )
  }
}
