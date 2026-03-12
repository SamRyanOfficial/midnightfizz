import { shows } from "@/data/shows"
import { siteConfig } from "@/config/site"

export default function EventSchema() {
  const validFromDate = "2024-01-01T00:00:00.000Z"

  try {
    const eventSchemaData = {
      "@context": "https://schema.org",
      "@graph": shows
        .map((show) => {
          try {
            const dateStr = `${show.year} ${show.date}`
            const fullDate = new Date(dateStr)

            if (isNaN(fullDate.getTime())) return null

            const time24 = (() => {
              try {
                const timeParts = show.time.split(" ")
                if (timeParts.length < 2) return "12:00:00"
                const [time, period] = timeParts
                const [hours, minutes] = time.split(":")
                if (!hours || !minutes) return "12:00:00"
                let hour24 = parseInt(hours, 10)
                if (isNaN(hour24)) hour24 = 12
                if (period === "PM" && hour24 !== 12) hour24 += 12
                if (period === "AM" && hour24 === 12) hour24 = 0
                return `${hour24.toString().padStart(2, "0")}:${minutes.padStart(2, "0")}:00`
              } catch {
                return "12:00:00"
              }
            })()

            const dateISO = fullDate.toISOString().split("T")[0]

            return {
              "@type": "MusicEvent",
              "name": `${siteConfig.name} Live Performance`,
              "startDate": `${dateISO}T${time24}`,
              "endDate": `${dateISO}T${time24}`,
              "performer": {
                "@type": "MusicGroup",
                "@id": `${siteConfig.url}/#organization`,
                "name": siteConfig.name,
              },
              "location": {
                "@type": "Place",
                "name": show.venue,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": show.location,
                  "addressCountry": "US",
                },
              },
              "offers": {
                "@type": "Offer",
                "price": show.isFree ? "0" : "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": validFromDate,
              },
            }
          } catch {
            return null
          }
        })
        .filter((event): event is NonNullable<typeof event> => event !== null),
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemaData) }}
      />
    )
  } catch {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [] }) }}
      />
    )
  }
}
