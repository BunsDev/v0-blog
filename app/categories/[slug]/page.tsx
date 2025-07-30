import type { Metadata } from "next"
import { categories } from "@/lib/data/categories"
import { notFound } from "next/navigation"
import CategoryPageClient from "./CategoryPageClient"

interface CategoryPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = params
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
  const { slug } = params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  return <CategoryPageClient params={{ slug: slug }} />
}
