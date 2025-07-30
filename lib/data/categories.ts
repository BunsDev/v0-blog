export interface Category {
  title: string
  slug: string
  description: string
  bannerImage: string
  image: string
  postCount: number
}

export const categories: Category[] = [
  {
    title: "Technology",
    slug: "technology",
    description: "Latest trends and insights in technology, from AI to web development.",
    bannerImage: "https://placehold.co/1200x400",
    image: "https://placehold.co/400",
    postCount: 25,
  },
  {
    title: "Programming",
    slug: "programming",
    description: "Coding tutorials, best practices, and programming language guides.",
    bannerImage: "https://placehold.co/1200x400",
    image: "https://placehold.co/400",
    postCount: 18,
  },
  {
    title: "Career",
    slug: "career",
    description: "Professional development, career advice, and industry insights.",
    bannerImage: "https://placehold.co/1200x400",
    image: "https://placehold.co/400",
    postCount: 22,
  },
  {
    title: "Productivity",
    slug: "productivity",
    description: "Tips and tools to boost your productivity and work efficiency.",
    bannerImage: "https://placehold.co/1200x400",
    image: "https://placehold.co/400",
    postCount: 15,
  },
  {
    title: "Lifestyle",
    slug: "lifestyle",
    description: "Work-life balance, health, and personal development topics.",
    bannerImage: "https://placehold.co/1200x400",
    image: "https://placehold.co/400",
    postCount: 12,
  },
  {
    title: "Design",
    slug: "design",
    description: "UI/UX design principles, tools, and creative inspiration.",
    bannerImage: "https://placehold.co/1200x400",
    image: "https://placehold.co/400",
    postCount: 14,
  },
]
