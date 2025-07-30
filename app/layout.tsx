import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "TechBlog - Insights, Tutorials & Industry News",
    template: "%s | TechBlog",
  },
  description:
    "Discover the latest in technology, programming, career advice, and productivity tips from industry experts.",
  keywords: ["technology", "programming", "web development", "career", "productivity", "AI", "machine learning"],
  authors: [{ name: "TechBlog Team" }],
  creator: "TechBlog",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techblog.com",
    siteName: "TechBlog",
    title: "TechBlog - Insights, Tutorials & Industry News",
    description:
      "Discover the latest in technology, programming, career advice, and productivity tips from industry experts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBlog - Insights, Tutorials & Industry News",
    description:
      "Discover the latest in technology, programming, career advice, and productivity tips from industry experts.",
    creator: "@techblog",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
