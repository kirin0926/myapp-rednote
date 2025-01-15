'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

// 定义步骤数据
const steps = [
  {
    number: 1,
    title: "Download the App",
    description: "Get RedNote from the App Store or use our web version to start your journey.",
    image: "/app-download.png"
  },
  {
    number: 2,
    title: "Create Your Profile",
    description: "Set up your profile with a bio, profile picture, and links to your other social media accounts.",
    image: "/create-profile.png"
  },
  {
    number: 3,
    title: "Share Your First Post",
    description: "Create and share your first video or photo post. Import videos directly from TikTok or upload your own content using our easy-to-use tools.",
    image: "/share-post.png"
  },
  {
    number: 4,
    title: "Connect & Grow",
    description: "Engage with the community, follow other creators, and start growing your audience.",
    image: "/connect-grow.png"
  }
]

export default function Home() {
  const [activeStep, setActiveStep] = useState(1)

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

      {/* Get Started Section */}
      <section className="w-full max-w-7xl px-4 py-24">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-500 rounded-full text-sm font-medium">
              Guide
            </div>
            <h2 className="text-4xl font-bold">Get Started with RedNote</h2>
            <p className="text-gray-600">Join the most creative community in four easy steps:</p>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
            
            {/* Steps */}
            <div className="relative flex justify-between max-w-4xl mx-auto">
              {steps.map((step) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`relative flex flex-col items-center ${
                    activeStep === step.number ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 
                    ${activeStep === step.number ? 'bg-red-500 text-white' : 'bg-white text-gray-500 border-2 border-gray-200'}`}
                  >
                    {step.number}
                  </div>
                  <div className="absolute top-12 w-48 text-center">
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step Image */}
          <div className="mt-32 relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src={steps[activeStep - 1].image}
              alt={steps[activeStep - 1].title}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
