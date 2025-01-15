import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { type ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background font-sans antialiased">
      <Header />
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}