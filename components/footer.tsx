import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">TechBlog</h3>
            <p className="text-sm text-muted-foreground">
              Discover insights, tutorials, and industry news from leading developers and tech experts.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Content</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/posts" className="text-muted-foreground hover:text-foreground">
                  All Posts
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/authors" className="text-muted-foreground hover:text-foreground">
                  Authors
                </Link>
              </li>
              <li>
                <Link href="/tags" className="text-muted-foreground hover:text-foreground">
                  Tags
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 TechBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
