"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { posts } from "@/lib/data/posts"
import { authors } from "@/lib/data/authors"
import { formatDate } from "@/lib/utils"
import { Calendar, User, Heart, MessageCircle, Search, Filter } from "lucide-react"

const POSTS_PER_PAGE = 9

interface CategoryPageClientProps {
  category: {
    slug: string
    title: string
    description: string
    bannerImage?: string
    postCount: number
    tags?: string[]
  }
}

export function CategoryPageClient({ category }: CategoryPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [currentPage, setCurrentPage] = useState(1)

  // Get posts that belong to this category
  const categoryPosts = useMemo(() => {
    return posts.filter((post) => category.tags?.some((tag) => post.tags.includes(tag)) || false)
  }, [category.tags])

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = categoryPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      return matchesSearch
    })

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "likes":
          return b.likes - a.likes
        case "comments":
          return b.comments - a.comments
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [categoryPosts, searchTerm, sortBy])

  const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredAndSortedPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  const resetFilters = () => {
    setSearchTerm("")
    setSortBy("date")
    setCurrentPage(1)
  }

  return (
    <div className="space-y-8">
      {/* Category Header */}
      <div className="space-y-6">
        {category.bannerImage && (
          <div className="aspect-[3/1] relative rounded-lg overflow-hidden">
            <Image
              src={category.bannerImage || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
          <p className="text-muted-foreground text-lg mb-4">{category.description}</p>
          <p className="text-sm text-muted-foreground">{categoryPosts.length} posts in this category</p>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search posts in this category..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10"
            />
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Latest</SelectItem>
              <SelectItem value="likes">Most Liked</SelectItem>
              <SelectItem value="comments">Most Commented</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Showing {paginatedPosts.length} of {filteredAndSortedPosts.length} posts
          </p>
          {(searchTerm || sortBy !== "date") && (
            <Button variant="outline" onClick={resetFilters} size="sm" className="w-fit bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      {/* Posts Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
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
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
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
          <p className="text-muted-foreground text-lg">No posts found in this category.</p>
          {searchTerm && (
            <Button variant="outline" onClick={resetFilters} className="mt-4 bg-transparent">
              Clear Search
            </Button>
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-10"
                  >
                    {pageNum}
                  </Button>
                )
              })}
            </div>

            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      )}
    </div>
  )
}
