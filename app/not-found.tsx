"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-muted-foreground text-lg">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
            wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/posts">
              <Search className="mr-2 h-4 w-4" />
              Browse Posts
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/posts" className="text-primary hover:underline">
              All Posts
            </Link>
            <Link href="/categories" className="text-primary hover:underline">
              Categories
            </Link>
            <Link href="/authors" className="text-primary hover:underline">
              Authors
            </Link>
            <Link href="/about" className="text-primary hover:underline">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
