"use client"

import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { youtubeVideos, youtubeChannelUrl } from "@/data/music"
import { siteConfig } from "@/config/site"

export default function Music() {
  return (
    <section id="music" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.3rem] font-bold text-white">
            Watch Us{" "}
            <span className="text-slate-400">Perform</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Add your own intro text here — why people should watch your videos
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8 sm:mb-12">
          {youtubeVideos.slice(0, 2).map((videoId, i) => (
            <div key={i} className="space-y-4 group">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`${siteConfig.name} Performance ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            asChild
          >
            <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer">
              <Volume2 className="mr-2 h-4 w-4" />
              View More Videos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
