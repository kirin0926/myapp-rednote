import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-pink-50">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-l border-black" />
        ))}
      </div>
      
      <div className="relative z-10 text-center space-y-6 max-w-3xl">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Share Your <span className="text-red-500">Moments</span>,
          <br />
          Without TikTok
        </h1>
        
        {/* Chinese text */}
        <h2 className="text-3xl md:text-4xl font-medium">
          分享您的时刻，
          <br />
          没有 TikTok
        </h2>

        {/* Description */}
        <div className="space-y-4 text-gray-600">
          <p>Join RedNote - the new social platform where creativity meets authenticity.</p>
          <p>Create, share, and discover short-form videos in a fresh and engaging way.</p>
        </div>

        {/* Download buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" className="bg-red-500 hover:bg-red-600">
            Download iOS App
          </Button>
          <Button size="lg" variant="outline">
            Android
          </Button>
        </div>

        {/* Bottom text */}
        <p className="text-gray-600 pt-8">
          Share Your Content Everywhere, and Earn.
        </p>
      </div>
    </main>
  )
}
