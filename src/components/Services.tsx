import { Briefcase, Music2, Users } from "lucide-react"

const services = [
  {
    icon: Music2,
    title: "Weddings",
    desc: "Create a soundtrack for the most important day of your life. We handle ceremony, cocktail hour, and reception with grace and energy.",
    highlights: ["Live Ceremony", "Canapes set", "Full reception"],
    accentColor: "#D4547A",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Elevate your next conference, gala, or product launch with a band that understands the corporate environment and delivers impeccably.",
    highlights: ["Award nights", "Gala dinners", "Product launches"],
    accentColor: "#C9A84C",
  },
  {
    icon: Users,
    title: "Private Functions",
    desc: "Birthday milestones, private parties, exclusive soirees — we tailor our performance to your vibe, your guests, and your vision.",
    highlights: ["Birthdays", "Anniversaries", "Private Parties"],
    accentColor: "#8B1A2E",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-[#8B1A2E]" />
            <span className="text-[#C9A84C] text-xs font-sans font-semibold uppercase tracking-[0.25em]">What We Offer</span>
            <div className="w-12 h-px bg-[#8B1A2E]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#F0E4C4]">
            Built for Every <em className="gradient-text not-italic">Occasion</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative border border-[#C9A84C]/10 bg-[#140F15] p-8 sm:p-10 hover:border-[#C9A84C]/35 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-16 h-16 opacity-20"
                  style={{ background: `radial-gradient(circle at top left, ${service.accentColor}, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 border flex items-center justify-center mb-8 transition-colors duration-300"
                  style={{ borderColor: `${service.accentColor}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color: service.accentColor }} aria-hidden="true" />
                </div>

                <h3 className="font-serif text-2xl font-light text-[#F0E4C4] mb-4">{service.title}</h3>
                <p className="text-[#9A8A7A] text-sm leading-relaxed mb-8 font-sans">{service.desc}</p>

                <ul className="flex flex-col gap-3">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-[#9A8A7A] font-sans">
                      <span className="w-1.5 h-1.5 flex-shrink-0" style={{ backgroundColor: service.accentColor }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
