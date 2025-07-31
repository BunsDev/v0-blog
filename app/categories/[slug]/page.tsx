import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { categories } from "@/lib/data/categories"
import { posts } from "@/lib/data/posts"
import { authors } from "@/lib/data/authors"
import { formatDate } from "@/lib/utils"
import { Calendar, User, Heart, MessageCircle } from "lucide-react"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.title} Posts`,
    description: `${category.description} Browse all posts in the ${category.title} category.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  // Filter posts that have tags related to this category
  const categoryPosts = posts
    .filter((post) =>
      post.tags.some(
        (tag) =>
          tag.toLowerCase().includes(category.title.toLowerCase()) ||
          category.title.toLowerCase().includes(tag.toLowerCase()),
      ),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container py-8">
      <div className="animate-fade-slide-in">
        <Breadcrumbs items={[{ label: "Categories", href: "/categories" }, { label: category.title }]} />
      </div>

      <div className="space-y-8">
        {/* Category Header */}
        <div className="relative animate-fade-slide-in">
          <div className="aspect-[3/1] relative rounded-lg overflow-hidden mb-6">
            <Image
              src={category.bannerImage || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
                <p className="text-lg md:text-xl max-w-2xl">{category.description}</p>
              </div>
            </div>
          </div>

          <div className="text-muted-foreground">{categoryPosts.length} posts in this category</div>
        </div>

        {/* Posts */}
        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryPosts.map((post) => (
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
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          <Link href={`/tags/${tag}`}>{tag}</Link>
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
            <p className="text-muted-foreground text-lg">No posts found in this category yet.</p>
            <Link href="/posts" className="text-primary hover:underline mt-2 inline-block">
              Browse all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
