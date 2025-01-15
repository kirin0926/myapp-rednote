import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How to Use Red Note: Comprehensive Guides and Tutorials",
  description: "Learn how to use Red Note effectively with step-by-step guides, tips, and tutorials. Start mastering Red Note today!",
  keywords: "Red Note, how to use Red Note, Red Note tutorial, Red Note guide",
  authors: [{ name: "howtouserednote.org" }],
  robots: "index, follow",
  openGraph: {
    title: "How to Use Red Note: Comprehensive Guides and Tutorials",
    description: "Step into the world of Red Note with our easy-to-follow tutorials and expert tips. Master Red Note today!",
    images: [{ url: "https://howtouserednote.org/og-image.jpg" }],
    url: "https://howtouserednote.org",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Red Note: Comprehensive Guides and Tutorials",
    description: "Unlock the full potential of Red Note with our in-depth tutorials.",
    images: ["https://howtouserednote.org/twitter-image.jpg"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7897104007345492"
              crossOrigin="anonymous"
            />
            <Script
              src="https://plausible.io/js/script.js"
              data-domain="howtouserednote.org"
              defer
              strategy="lazyOnload"
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
