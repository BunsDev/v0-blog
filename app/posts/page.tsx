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
      <Breadcrumbs items={[{ label: "Posts" }]} />
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">All Posts</h1>
          <p className="text-muted-foreground text-lg">
            Discover insights, tutorials, and industry news from our expert contributors.
          </p>
        </div>
        <PostsClient />
      </div>
    </div>
  )
}
