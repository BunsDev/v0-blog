export interface Author {
  name: string
  slug: string
  bio: string
  avatar: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
  postCount: number
}

export const authors: Author[] = [
  {
    name: "Ethan Kim",
    slug: "ethan-kim",
    bio: "Full-stack developer and tech entrepreneur with over 8 years of experience building scalable web applications.",
    avatar: "https://placehold.co/400x400",
    social: {
      twitter: "ethankim_dev",
      linkedin: "ethan-kim-dev",
      github: "ethankim",
      website: "https://ethankim.dev",
    },
    postCount: 12,
  },
  {
    name: "Fiona Zhang",
    slug: "fiona-zhang",
    bio: "AI researcher and machine learning engineer passionate about healthcare applications and ethical AI development.",
    avatar: "https://placehold.co/400x400",
    social: {
      twitter: "fiona_ai",
      linkedin: "fiona-zhang-ai",
      github: "fionazhang",
    },
    postCount: 8,
  },
  {
    name: "Oscar Dubois",
    slug: "oscar-dubois",
    bio: "Senior software architect and team lead with expertise in distributed systems and cloud architecture.",
    avatar: "https://placehold.co/400x400",
    social: {
      linkedin: "oscar-dubois",
      github: "oscardubois",
      website: "https://oscardubois.com",
    },
    postCount: 15,
  },
  {
    name: "Julia White",
    slug: "julia-white",
    bio: "Python developer and data scientist specializing in web scraping, automation, and data visualization.",
    avatar: "https://placehold.co/400x400",
    social: {
      twitter: "julia_codes",
      github: "juliawhite",
      website: "https://juliawhite.dev",
    },
    postCount: 10,
  },
  {
    name: "Diana Patel",
    slug: "diana-patel",
    bio: "UX designer turned developer, focusing on creating beautiful and accessible user interfaces.",
    avatar: "https://placehold.co/400x400",
    social: {
      twitter: "diana_designs",
      linkedin: "diana-patel-ux",
    },
    postCount: 7,
  },
]
