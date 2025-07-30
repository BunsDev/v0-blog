"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { authors } from "@/lib/data/authors"
import { posts } from "@/lib/data/posts"
import { formatDate } from "@/lib/utils"
import { Calendar, Heart, MessageCircle, Twitter, Linkedin, Github, Globe } from "lucide-react"
import { notFound } from "next/navigation"

interface AuthorPageProps {
  params: { slug: string }
}

export default function AuthorPageClient({ params }: AuthorPageProps) {
  const author = authors.find((a) => a.slug === params.slug)

  if (!author) {
    notFound()
  }

  const authorPosts = posts
    .filter((post) => post.author === author.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "Authors", href: "/authors" }, { label: author.name }]} />

      <div className="space-y-8">
        {/* Author Profile */}
        <div className="bg-muted/50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0">
              <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{author.name}</h1>
                <p className="text-muted-foreground text-lg">{author.bio}</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {author.social.twitter && (
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                )}
                {author.social.linkedin && (
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                )}
                {author.social.github && (
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                )}
                {author.social.website && (
                  <Button variant="outline" size="sm">
                    <Globe className="h-4 w-4 mr-2" />
                    Website
                  </Button>
                )}
              </div>
              <div className="text-sm text-muted-foreground">{authorPosts.length} posts published</div>
            </div>
          </div>
        </div>

        {/* Author's Posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Posts by {author.name}</h2>

          {authorPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authorPosts.map((post) => (
                <Link key={post.slug} href={`/posts/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-video relative">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No posts published yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
