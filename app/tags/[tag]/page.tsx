import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { tags } from "@/lib/data/tags"
import { posts } from "@/lib/data/posts"
import { authors } from "@/lib/data/authors"
import { formatDate } from "@/lib/utils"
import { Calendar, User, Heart, MessageCircle, Hash } from "lucide-react"

interface TagPageProps {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  return tags.map((tag) => ({
    tag: tag,
  }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params

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
  const { tag } = await params

  if (!tags.includes(tag)) {
    notFound()
  }

  const tagPosts = posts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container py-8">
      <div className="animate-fade-slide-in">
        <Breadcrumbs items={[{ label: "Tags", href: "/tags" }, { label: `#${tag}` }]} />
      </div>

      <div className="space-y-8">
        {/* Tag Header */}
        <div className="text-center space-y-4 animate-fade-slide-in">
          <div className="flex items-center justify-center gap-2">
            <Hash className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">{tag}</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {tagPosts.length} posts tagged with #{tag}
          </p>
        </div>

        {/* Posts */}
        {tagPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tagPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-slide-in">
                <div className="aspect-video relative">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                    <User className="h-4 w-4 ml-2" />
                    {authors.find((a) => a.slug === post.author)?.name}
                  </div>
                  <CardTitle className="line-clamp-2">
                    <Link href={`/posts/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((postTag) => (
                        <Badge key={postTag} variant={postTag === tag ? "default" : "secondary"}>
                          <Link href={`/tags/${postTag}`}>{postTag}</Link>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-slide-in">
            <p className="text-muted-foreground text-lg">No posts found with this tag.</p>
            <Link href="/posts" className="text-primary hover:underline mt-2 inline-block">
              Browse all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
