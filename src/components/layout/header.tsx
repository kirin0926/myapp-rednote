import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pink-50/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-red-500">📱</span>
          <span className="text-xl font-bold text-red-500">How to Use RedNote</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {/* <Link href="/features" className="hover:text-red-500">Features</Link> */}
            <Link href="/#guide" className="hover:text-red-500">Guide</Link>
            <Link href="/#blog" className="hover:text-red-500">Blog</Link>
            {/* <Link href="/showcase" className="hover:text-red-500">Showcase</Link> */}
          </div>
          <Link href="https://xiaohongshu.com/explore">
            <Button variant="ghost" className="text-red-500 hover:text-red-600">
              Get Started →
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden">
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </nav>
    </header>
  )
} 