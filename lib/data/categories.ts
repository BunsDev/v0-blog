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
    bannerImage: "/img/ywannavr.png",
    image: "/img/ywannavr.png",
    postCount: 25,
  },
  {
    title: "Programming",
    slug: "programming",
    description: "Coding tutorials, best practices, and programming language guides.",
    bannerImage: "/img/ugfrckfk.png",
    image: "/img/ugfrckfk.png",
    postCount: 18,
  },
  {
    title: "Career",
    slug: "career",
    description: "Professional development, career advice, and industry insights.",
    bannerImage: "/img/mpdhdpok.png",
    image: "/img/mpdhdpok.png",
    postCount: 22,
  },
  {
    title: "Productivity",
    slug: "productivity",
    description: "Tips and tools to boost your productivity and work efficiency.",
    bannerImage: "/img/akuqtqmc.png",
    image: "/img/akuqtqmc.png",
    postCount: 15,
  },
  {
    title: "Lifestyle",
    slug: "lifestyle",
    description: "Work-life balance, health, and personal development topics.",
    bannerImage: "/img/nvepobwa.png",
    image: "/img/nvepobwa.png",
    postCount: 12,
  },
  {
    title: "Design",
    slug: "design",
    description: "UI/UX design principles, tools, and creative inspiration.",
    bannerImage: "/img/mvygvbjo.png",
    image: "/img/mvygvbjo.png",
    postCount: 14,
  },
]
