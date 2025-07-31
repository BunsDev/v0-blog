import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { posts } from "@/lib/data/posts"
import { authors } from "@/lib/data/authors"
import { formatDate, getReadingTime } from "@/lib/utils"
import { Calendar, User, Clock, Heart, MessageCircle, Share2, Twitter, Linkedin, Facebook } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [authors.find((a) => a.slug === post.author)?.name || "Unknown"],
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const author = authors.find((a) => a.slug === post.author)
  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="container py-8">
      <div className="animate-fade-slide-in">
        <Breadcrumbs items={[{ label: "Posts", href: "/posts" }, { label: post.title }]} />
      </div>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="space-y-6 mb-8 animate-fade-slide-in delay-100">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </div>
            {author && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <Link href={`/authors/${author.slug}`} className="hover:text-primary">
                  {author.name}
                </Link>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {getReadingTime(post.body)} min read
            </div>
            <div className="flex items-center gap-4">
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

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="animate-fade-slide-in delay-200">
                <Link href={`/tags/${tag}`}>#{tag}</Link>
              </Badge>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Share:</span>
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
            <Button variant="outline" size="sm">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Copy link</span>
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video relative mb-8 rounded-lg overflow-hidden animate-fade-slide-in delay-300">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none animate-fade-slide-in delay-300">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>

        <Separator className="my-8" />

        {/* Author Bio */}
        {author && (
          <div className="bg-muted/50 rounded-lg p-6 mb-8 animate-fade-slide-in delay-300">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  <Link href={`/authors/${author.slug}`} className="hover:text-primary">
                    {author.name}
                  </Link>
                </h3>
                <p className="text-muted-foreground">{author.bio}</p>
                <div className="flex gap-2">
                  {author.social.twitter && (
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                  {author.social.linkedin && (
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {author.social.github && (
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 animate-fade-slide-in delay-300">
            <h2 className="text-2xl font-bold">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="space-y-3 animate-fade-slide-in delay-300">
                   <Link href={`/posts/${relatedPost.slug}`} className="hover:text-primary">
                      
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                      </Link>
                  <div className="space-y-2">
                    <h3 className="font-semibold line-clamp-2">
                      <Link href={`/posts/${relatedPost.slug}`} className="hover:text-primary">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.description}</p>
                    <div className="text-xs text-muted-foreground">{formatDate(relatedPost.date)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
