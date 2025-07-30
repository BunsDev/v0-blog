import type { Metadata } from "next"
import { tags } from "@/lib/data/tags"
import TagPageClient from "./TagPageClient"

interface TagPageProps {
  params: { tag: string }
}

export async function generateStaticParams() {
  return tags.map((tag) => ({
    tag: tag,
  }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = params

  if (!tags.includes(tag)) {
    return {
      title: "Tag Not Found",
    }
  }

  return {
    title: `#${tag} Posts`,
    description: `Browse all posts tagged with #${tag}. Discover content related to ${tag}.`,
  }
}

export default async function TagPage({ params }: TagPageProps) {
  return <TagPageClient params={params} />
}
