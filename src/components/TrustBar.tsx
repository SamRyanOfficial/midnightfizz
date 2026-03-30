import { trustBarStats } from "@/data/about"

export default function TrustBar() {
  return (
    <section className="relative py-10 bg-[#140F15] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-rule" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#C9A84C]/10">
          {trustBarStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-6">
              <span className="font-serif text-4xl md:text-5xl font-light gradient-text tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs text-[#9A8A7A] uppercase tracking-[0.2em] font-sans font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 crimson-rule" />
    </section>
  )
}
