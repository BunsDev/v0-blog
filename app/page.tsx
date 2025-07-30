import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { posts } from "@/lib/data/posts"
import { categories } from "@/lib/data/categories"
import { authors } from "@/lib/data/authors"
import { tags } from "@/lib/data/tags"
import { formatDate } from "@/lib/utils"
import { ArrowRight, Calendar, User, Heart, MessageCircle } from "lucide-react"

export default function HomePage() {
  const featuredPosts = posts.slice(0, 3)
  const popularCategories = categories.slice(0, 6)
  const featuredAuthors = authors.slice(0, 4)
  const popularTags = tags.slice(0, 12)

  return (
    <div className="container py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">TechBlog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover insights, tutorials, and industry news from leading developers and tech experts. Stay ahead of the
            curve with our curated content.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/posts">
              Explore Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Posts</h2>
          <Button variant="outline" asChild>
            <Link href="/posts">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                  <CardTitle className="line-clamp-2 hover:text-primary">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
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
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Popular Categories</h2>
          <Button variant="outline" asChild>
            <Link href="/categories">
              View All Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCategories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="hover:text-primary">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">{category.postCount} posts</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Authors */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Authors</h2>
          <Button variant="outline" asChild>
            <Link href="/authors">
              View All Authors <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAuthors.map((author) => (
            <Link key={author.slug} href={`/authors/${author.slug}`}>
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden">
                    <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
                  </div>
                  <CardTitle className="hover:text-primary">{author.name}</CardTitle>
                  <CardDescription className="line-clamp-3">{author.bio}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">{author.postCount} posts</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Tags */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Popular Tags</h2>
          <Button variant="outline" asChild>
            <Link href="/tags">
              View All Tags <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-sm py-2 px-4">
              <Link href={`/tags/${tag}`} className="hover:text-primary">
                #{tag}
              </Link>
            </Badge>
          ))}
        </div>
      </section>
    </div>
  )
}
