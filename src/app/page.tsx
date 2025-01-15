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
    image: "/images/assets/XiaoHongShu vs Douyin.png"
  },
  {
    number: 2,
    title: "Create Your Profile",
    description: "Set up your profile with a bio, profile picture, and links to your other social media accounts.",
    image: "/images/assets/signing-up-for-xiaohongshu-is-a-piece-of-cake-it-only-takes.png"
  },
  {
    number: 3,
    title: "Share Your First Post",
    description: "Create and share your first video or photo post. Import videos directly from TikTok or upload your own content using our easy-to-use tools.",
    image: "/images/assets/photo.png"
  },
  {
    number: 4,
    title: "Connect & Grow",
    description: "Engage with the community, follow other creators, and start growing your audience.",
    image: "/images/assets/5-years-xhs-rednote-marketing-specialist-here-ama.png"
  }
]

// 在文件顶部添加特性数据
const features = [
  {
    icon: "💰",
    title: "One Link for All",
    description: "Share all your social media profiles and content with just one link"
  },
  {
    icon: "🎨",
    title: "Beautiful Themes",
    description: "Customize your bio page with stunning themes and layouts"
  },
  {
    icon: "🔗",
    title: "Social Integration",
    description: "Connect seamlessly with Xiaohongshu, Instagram, and more"
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Track visitor engagement and optimize your profile"
  },
  {
    icon: "📱",
    title: "Mobile Optimized",
    description: "Perfect display on all devices and screens"
  },
  {
    icon: "⚡",
    title: "Quick Updates",
    description: "Update your links and content in real-time, with AI"
  },
  {
    icon: "🎥",
    title: "Video Integration",
    description: "Import videos from TikTok or upload your own content directly"
  },
  {
    icon: "🔄",
    title: "Cross-Platform Sharing",
    description: "Share your videos across TikTok, Instagram, and more with one click"
  },
  {
    icon: "⬇️",
    title: "Easy to Download TikTok Videos",
    description: "Download your TikTok video and translate it to Chinese in 1 click"
  }
]

// 添加博客数据
const blogPosts = [
  {
    id: 1,
    title: "Is RedNote Safe?",
    description: "Is RedNote Safe? A Comprehensive Review for Users",
    date: "2024-01-14",
    slug: "is-rednote-safe"
  },
  {
    id: 2,
    title: "How to Fix Issues with Rednote Not Sending Verification Codes",
    description: "How to Fix Issues with Rednote Not Sending Verification Codes",
    date: "2024-01-14",
    slug: "fix-verification-codes"
  },
  {
    id: 3,
    title: "The Rise of RedNote How TikTok's Ban Created an Unexpected Cultural Bridge",
    description: "The Rise of RedNote How TikTok's Ban Created an Unexpected Cultural Bridge",
    date: "2024-01-14",
    slug: "rise-of-rednote"
  },
  {
    id: 4,
    title: "RedNote vs. TikTok The Social Media Showdown of 2025 Amid Looming Ban",
    description: "RedNote vs. TikTok The Social Media Showdown of 2025 Amid Looming Ban",
    date: "2024-01-14",
    slug: "rednote-vs-tiktok"
  },
  {
    id: 5,
    title: "Beyond TikTok Unleash Your Viral Potential with Rednote",
    description: "Beyond TikTok Unleash Your Viral Potential with Rednote",
    date: "2024-01-14",
    slug: "beyond-tiktok"
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
              src="/images/assets/sddefault.jpg"
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
      <section id="guide" className="w-full max-w-7xl px-4 py-24">
        <div>
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-500 rounded-full text-sm font-medium">
              Guide
            </div>
            <h2 className="text-4xl font-bold">Get Started with RedNote</h2>
            <p className="text-gray-600">Join the most creative community in four easy steps:</p>
          </div>

          {/* Steps Timeline - Desktop */}
          <div className="relative hidden md:block mb-12">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
            
            {/* Steps */}
            <div className="relative flex justify-between max-w-4xl mx-auto">
              {steps.map((step) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`relative flex flex-col items-center transition-opacity duration-300 ${
                    activeStep === step.number ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors duration-300
                    ${activeStep === step.number ? 'bg-red-500 text-white' : 'bg-white text-gray-500 border-2 border-gray-200'}`}
                  >
                    {step.number}
                  </div>
                  <div className="absolute top-12 w-48 text-center pb-16">
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Steps List - Mobile */}
          <div className="md:hidden space-y-8 mb-12">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className={`w-full flex items-start space-x-4 p-4 rounded-lg transition-all duration-300
                  ${activeStep === step.number ? 'bg-red-50' : 'opacity-50'}`}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center
                  ${activeStep === step.number ? 'bg-red-500 text-white' : 'bg-white text-gray-500 border-2 border-gray-200'}`}
                >
                  {step.number}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Step Image */}
          <div className="mt-16 md:mt-36 relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={steps[activeStep - 1].image}
              alt={steps[activeStep - 1].title}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full max-w-7xl px-4 py-24">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Why Choose RedNote Bio</h2>
            <p className="text-gray-600">The ultimate bio link platform for content creators</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section id="blog" className="w-full max-w-7xl px-4 py-24">
        <div className="space-y-12">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">Latest Blog Posts</h2>
            <Link 
              href="/blog" 
              className="text-red-500 hover:text-red-600 flex items-center gap-2"
            >
              View all posts →
            </Link>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="block p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <article className="space-y-2">
                  <h3 className="text-xl font-semibold hover:text-red-500">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.description}</p>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
