import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { authors } from "@/lib/data/authors"
import { Twitter, Linkedin, Github, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Authors",
  description:
    "Meet our talented team of writers and contributors sharing their expertise in technology, programming, and more.",
}

export default function AuthorsPage() {
  return (
    <div className="container py-8">
      <div className="animate-fade-slide-in">
        <Breadcrumbs items={[{ label: "Authors" }]} />
      </div>

      <div className="space-y-8">
        <div className="animate-fade-slide-in">
          <h1 className="text-4xl font-bold mb-4">Our Authors</h1>
          <p className="text-muted-foreground text-lg">
            Meet the talented individuals behind our content. Each author brings unique expertise and perspective to our
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <Link key={author.slug} href={`/authors/${author.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-slide-in">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                    <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
                  </div>
                  <CardTitle className="hover:text-primary">{author.name}</CardTitle>
                  <CardDescription className="line-clamp-3">{author.bio}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-sm text-muted-foreground">{author.postCount} posts</div>
                  <div className="flex justify-center gap-2">
                    {author.social.twitter && (
                      <Badge variant="outline" className="p-2">
                        <Twitter className="h-4 w-4" />
                      </Badge>
                    )}
                    {author.social.linkedin && (
                      <Badge variant="outline" className="p-2">
                        <Linkedin className="h-4 w-4" />
                      </Badge>
                    )}
                    {author.social.github && (
                      <Badge variant="outline" className="p-2">
                        <Github className="h-4 w-4" />
                      </Badge>
                    )}
                    {author.social.website && (
                      <Badge variant="outline" className="p-2">
                        <Globe className="h-4 w-4" />
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
