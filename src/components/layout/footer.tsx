import Link from "next/link"

const productLinks = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Guide", href: "#guide" },
]

const communityLinks = [
  { name: "Featured Creators", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Blog", href: "#blog" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-pink-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-red-500">📱</span>
              <span className="text-xl font-bold text-red-500">RedNote Bio</span>
            </Link>
            <p className="text-gray-600">
              The ultimate bio link platform for content creators
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-red-500">
                <span className="sr-only">Twitter</span>
                𝕏
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-500">
                <span className="sr-only">Email</span>
                ✉️
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-red-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-red-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-red-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © 2024 RedNote Bio • All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 