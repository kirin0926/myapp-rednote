"use client"
import { notFound } from "next/navigation"
import Link from "next/link"

import { useParams } from 'next/navigation';

const blogPosts = [
  {
    id: 1,
    title: "Is RedNote Safe?",
    description: "Is RedNote Safe? A Comprehensive Review for Users",
    date: "2024-01-14",
    slug: "is-rednote-safe",
    content: `
      <h2>Introduction</h2>
      <p>As RedNote continues to gain popularity as an alternative to TikTok, many users are asking about its safety...</p>
      
      <h2>Security Features</h2>
      <p>RedNote implements several security measures to protect user data...</p>
      
      <h2>Privacy Policy</h2>
      <p>Let's examine RedNote's privacy policy and what it means for users...</p>
      
      <h2>Conclusion</h2>
      <p>Based on our comprehensive review, RedNote provides a secure platform...</p>
    `
  },
  // ... 其他博客文章
]

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-pink-50 py-24">
      <article className="max-w-3xl mx-auto px-4">
        <div className="space-y-8">
          {/* 返回链接 */}
          <Link 
            href="/blog"
            className="text-red-500 hover:text-red-600 flex items-center gap-2"
          >
            ← Back to blog
          </Link>

          {/* 文章头部 */}
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <time className="text-gray-500">{post.date}</time>
          </header>

          {/* 文章内容 */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </main>
  )
} 