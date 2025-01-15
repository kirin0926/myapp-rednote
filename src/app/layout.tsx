import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RedNote Bio",
  description: "Share your moments without TikTok",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-red-500">RedNote Bio</div>
            <div className="space-x-6">
              <a href="#" className="hover:text-red-500">Features</a>
              <a href="#" className="hover:text-red-500">Guide</a>
              <a href="#" className="hover:text-red-500">Showcase</a>
              <Button variant="ghost" className="text-red-500 hover:text-red-600">
                Get Started →
              </Button>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
