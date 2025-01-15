import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Is RedNote Safe?",
    description: "Is RedNote Safe? A Comprehensive Review for Users",
    date: "2024-01-14",
    slug: "is-rednote-safe",
    content: "Full article content here..."
  },
  // ... 其他博客文章
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-pink-50 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">RedNote Blog</h1>
            <p className="text-gray-600">Latest updates, guides, and insights about RedNote</p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
              >
                <article className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 space-y-4">
                  <h2 className="text-2xl font-bold hover:text-red-500">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.description}</p>
                  <div className="flex items-center gap-4">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <span className="text-red-500">Read more →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 