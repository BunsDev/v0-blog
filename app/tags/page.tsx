import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { TagsClient } from "./tags-client"

export const metadata: Metadata = {
  title: "Tags",
  description:
    "Browse all tags and discover content by topic. Find posts about specific technologies, concepts, and themes.",
}

export default function TagsPage() {
  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "Tags" }]} />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">All Tags</h1>
          <p className="text-muted-foreground text-lg">
            Discover content by exploring our comprehensive tag system. Find posts about specific topics that interest
            you.
          </p>
        </div>

        <TagsClient />
      </div>
    </div>
  )
}
