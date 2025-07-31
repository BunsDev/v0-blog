import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { categories } from "@/lib/data/categories"

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse blog posts by category. Find content about technology, programming, career advice, and more.",
}

export default function CategoriesPage() {
  return (
    <div className="container py-8">
      <div className="animate-fade-slide-in">
        <Breadcrumbs items={[{ label: "Categories" }]} />
      </div>

      <div className="space-y-8">
        <div className="animate-fade-slide-in">
          <h1 className="text-4xl font-bold mb-4">Categories</h1>
          <p className="text-muted-foreground text-lg">
            Explore our content organized by topic and find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer animate-fade-slide-in">
                <div className="aspect-video relative">
                  <Image
                    src={category.bannerImage || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
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
      </div>
    </div>
  )
}
