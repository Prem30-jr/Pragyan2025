import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The Great Scam Escape",
  description: "Level up against fraud through interactive storytelling",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </body>
    </html>
  )
}

