import { trustBarStats } from "@/data/about"

export default function TrustBar() {
  return (
    <section className="relative bg-[#140F15] py-4 md:py-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-rule" />

      <div className="mx-auto max-w-7xl px-3 md:px-6">
        <div className="grid grid-cols-3 gap-1 md:gap-0 md:divide-x md:divide-[#C9A84C]/10">
          {trustBarStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-1 py-0.5 text-center md:px-6 md:py-0"
            >
              <span className="font-serif text-xl font-light tracking-tight gradient-text md:text-5xl">
                {stat.value}
              </span>
              <span className="mt-0.5 whitespace-nowrap text-[0.5rem] font-medium uppercase leading-tight tracking-[0.12em] text-[#9A8A7A] font-sans md:mt-2 md:max-w-none md:text-xs md:leading-normal md:tracking-[0.2em]">
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

