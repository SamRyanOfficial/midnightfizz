"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import TrustBar from "@/components/TrustBar"
import About from "@/components/About"
import VideoSection from "@/components/VideoSection"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0A0E] text-[#F0E4C4] font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <About />
        <VideoSection />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
