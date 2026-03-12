/**
 * Contact form API configuration.
 * These values are used when sending emails via Resend.
 *
 * IMPORTANT: For production, set these as environment variables in Vercel:
 * - RESEND_API_KEY (required)
 * - CONTACT_EMAIL (recipient email)
 * - RESEND_FROM_EMAIL (e.g., "Your Band <contact@yourdomain.com>")
 *
 * See .env.example for details.
 */

export const contactApiConfig = {
  /** Fallback email shown in error messages when Resend is not configured */
  fallbackContactEmail: "your@email.com",
};
