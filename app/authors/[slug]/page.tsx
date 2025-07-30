import type { Metadata } from "next"
import { authors } from "@/lib/data/authors"
import AuthorPageClient from "./AuthorPageClient"

interface AuthorPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }))
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = params
  const author = authors.find((a) => a.slug === slug)

  if (!author) {
    return {
      title: "Author Not Found",
    }
  }

  return {
    title: `${author.name} - Author`,
    description: `${author.bio} Read all posts by ${author.name}.`,
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  return <AuthorPageClient params={params} />
}
