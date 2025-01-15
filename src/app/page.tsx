import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-pink-50">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4">
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
      </section>

      {/* AI Tools Section */}
      <section className="w-full max-w-7xl px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-red-500 to-blue-600 rounded-lg overflow-hidden">
            <Image
              src="/xiaohongshu-vs-social.png"
              alt="XiaoHongShu vs Social Media Platforms"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">All-in-One AI Tools<br />for RedNote</h2>
              <p className="text-gray-600">
                Your AI-powered assistant for creating, translating, and managing RedNote content with ease
              </p>
            </div>

            <div className="space-y-6">
              {/* AI Content Creation */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  AI Content Creation
                </h3>
                <p className="text-gray-600">
                  Generate engaging captions, hashtags, and content ideas tailored for RedNote's style with AI assistance.
                </p>
              </div>

              {/* Auto Translation */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  Auto Translation
                </h3>
                <p className="text-gray-600">
                  Instantly translate your content between Chinese and English while maintaining the perfect tone and style.
                </p>
              </div>

              {/* Video Tools */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">🎥</span>
                  Video Tools
                </h3>
                <p className="text-gray-600">
                  Download TikTok videos, add Chinese subtitles, and repurpose content for RedNote with one click.
                </p>
              </div>

              {/* Smart Analytics */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Smart Analytics
                </h3>
                <p className="text-gray-600">
                  AI-powered insights to track engagement, analyze trends, and optimize your content strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
