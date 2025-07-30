export interface Post {
  title: string
  slug: string
  description: string
  body: string
  date: string
  author: string
  likes: number
  comments: number
  tags: string[]
  image: string
}

export const posts: Post[] = [
  {
    title: "How to Run Effective Virtual Meetings",
    slug: "how-to-run-effective-virtual-meetings",
    description:
      "Learn the essential strategies for conducting productive virtual meetings that keep everyone engaged and focused.",
    body: "# How to Run Effective Virtual Meetings\n\nVirtual meetings have become an integral part of modern work culture. Here are some key strategies to make them more effective:\n\n## Preparation is Key\n\n- Set a clear agenda\n- Share materials in advance\n- Test technology beforehand\n\n## During the Meeting\n\n- Start on time\n- Keep discussions focused\n- Encourage participation\n- Use visual aids effectively\n\n## Follow-up Actions\n\n- Send meeting notes\n- Assign clear action items\n- Schedule follow-up meetings if needed",
    date: "2025-03-05",
    author: "ethan-kim",
    likes: 99,
    comments: 72,
    tags: ["productivity", "remote", "communication"],
    image: "https://placehold.co/1280x720",
  },
  {
    title: "The Future of Machine Learning in Healthcare",
    slug: "the-future-of-machine-learning-in-healthcare",
    description: "Exploring how AI and machine learning are revolutionizing healthcare delivery and patient outcomes.",
    body: "# The Future of Machine Learning in Healthcare\n\nMachine learning is transforming healthcare in unprecedented ways. From diagnostic imaging to drug discovery, AI is revolutionizing how we approach medical challenges.\n\n## Current Applications\n\n- Medical imaging analysis\n- Drug discovery acceleration\n- Personalized treatment plans\n- Predictive analytics for patient outcomes\n\n## Future Possibilities\n\nThe potential for ML in healthcare is virtually limitless, with emerging applications in genomics, robotic surgery, and preventive care.",
    date: "2025-07-14",
    author: "fiona-zhang",
    likes: 64,
    comments: 47,
    tags: ["ai", "ml", "healthcare", "technology"],
    image: "https://placehold.co/1280x720",
  },
  {
    title: "Building a Personal Brand as a Developer",
    slug: "building-a-personal-brand-as-a-developer",
    description: "A comprehensive guide to establishing and growing your personal brand in the tech industry.",
    body: "# Building a Personal Brand as a Developer\n\nIn today's competitive tech landscape, having a strong personal brand can set you apart from other developers.\n\n## Why Personal Branding Matters\n\n- Career opportunities\n- Network expansion\n- Thought leadership\n- Increased visibility\n\n## Building Your Brand\n\n1. **Define your niche** - What makes you unique?\n2. **Create valuable content** - Share your knowledge\n3. **Be consistent** - Maintain your voice across platforms\n4. **Engage with the community** - Participate in discussions\n\n## Platforms to Consider\n\n- GitHub for code portfolios\n- LinkedIn for professional networking\n- Twitter for tech discussions\n- Personal blog for in-depth content",
    date: "2025-04-17",
    author: "ethan-kim",
    likes: 61,
    comments: 50,
    tags: ["career", "branding", "development"],
    image: "https://placehold.co/1280x720",
  },
  {
    title: "Why Soft Skills Matter in Tech",
    slug: "why-soft-skills-matter-in-tech",
    description: "Understanding the importance of communication, teamwork, and leadership skills in technical careers.",
    body: "# Why Soft Skills Matter in Tech\n\nWhile technical skills get you in the door, soft skills often determine how far you'll go in your career.\n\n## Essential Soft Skills for Tech Professionals\n\n### Communication\n- Explaining complex concepts simply\n- Writing clear documentation\n- Presenting ideas effectively\n\n### Collaboration\n- Working in cross-functional teams\n- Code reviews and feedback\n- Mentoring junior developers\n\n### Problem-Solving\n- Breaking down complex problems\n- Creative thinking\n- Analytical reasoning\n\n## Developing Your Soft Skills\n\n1. Practice active listening\n2. Seek feedback regularly\n3. Take on leadership opportunities\n4. Join professional communities",
    date: "2025-02-15",
    author: "oscar-dubois",
    likes: 541,
    comments: 39,
    tags: ["career", "soft-skills", "professional-development"],
    image: "https://placehold.co/1280x720",
  },
  {
    title: "Top Python Libraries for Web Development",
    slug: "top-python-libraries-for-web-development",
    description: "A curated list of the most useful Python libraries for building modern web applications.",
    body: "# Top Python Libraries for Web Development\n\nPython offers a rich ecosystem of libraries for web development. Here are some of the most essential ones:\n\n## Web Frameworks\n\n### Django\n- Full-featured framework\n- Built-in admin interface\n- ORM included\n- Great for large applications\n\n### Flask\n- Lightweight and flexible\n- Minimal setup required\n- Perfect for small to medium projects\n- Extensive ecosystem\n\n### FastAPI\n- Modern, fast framework\n- Automatic API documentation\n- Type hints support\n- Async support\n\n## Database Libraries\n\n- **SQLAlchemy** - Powerful ORM\n- **Alembic** - Database migrations\n- **Psycopg2** - PostgreSQL adapter\n\n## Utility Libraries\n\n- **Requests** - HTTP library\n- **Celery** - Task queue\n- **Pillow** - Image processing",
    date: "2025-07-12",
    author: "julia-white",
    likes: 60,
    comments: 38,
    tags: ["python", "web-development", "programming"],
    image: "https://placehold.co/1280x720",
  },
]
