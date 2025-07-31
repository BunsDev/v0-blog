"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { tags } from "@/lib/data/tags"
import { posts } from "@/lib/data/posts"
import { Search } from "lucide-react"

export function TagsClient() {
  const [searchQuery, setSearchQuery] = useState("")

  const tagsWithCounts = useMemo(() => {
    return tags
      .map((tag) => ({
        name: tag,
        count: posts.filter((post) => post.tags.includes(tag)).length,
      }))
      .sort((a, b) => b.count - a.count)
  }, [])

  const filteredTags = useMemo(() => {
    return tagsWithCounts.filter((tag) => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [tagsWithCounts, searchQuery])

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md animate-fade-slide-in">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Tags Cloud */}
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Showing {filteredTags.length} of {tagsWithCounts.length} tags
        </p>

        <div className="flex flex-wrap gap-3">
          {filteredTags.map((tag) => (
            <Badge
              key={tag.name}
              variant="outline"
              className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-slide-in"
            >
              <Link href={`/tags/${tag.name}`} className="flex items-center gap-2">
                #{tag.name}
                <span className="text-xs bg-muted px-2 py-1 rounded-full">{tag.count}</span>
              </Link>
            </Badge>
          ))}
        </div>

        {filteredTags.length === 0 && (
          <div className="text-center py-12 animate-fade-slide-in">
            <p className="text-muted-foreground">No tags found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
