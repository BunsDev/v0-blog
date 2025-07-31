import type { Metadata } from "next"
import { PostsClient } from "./posts-client"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "All Posts",
  description: "Browse all blog posts about technology, programming, career advice, and more.",
}

export default function PostsPage() {
  return (
    <div className="container py-8">
      <div className="animate-fade-slide-in">
        <Breadcrumbs items={[{ label: "Posts" }]} />
      </div>
      <div className="space-y-8">
        <div className="animate-fade-slide-in delay-100">
          <h1 className="text-4xl font-bold mb-4">All Posts</h1>
          <p className="text-muted-foreground text-lg">
            Discover insights, tutorials, and industry news from our expert contributors.
          </p>
        </div>
        <div className="animate-fade-slide-in delay-200">
          <PostsClient />
        </div>
      </div>
    </div>
  )
}
