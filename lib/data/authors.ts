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
    avatar: "/authors/xhthronr.png",
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
    avatar: "/authors/fbmvgnea.png",
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
    avatar: "/authors/lhictjkz.png",
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
    avatar: "/authors/lizqetis.png",
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
    avatar: "/authors/zbyzigsg.png",
    social: {
      twitter: "diana_designs",
      linkedin: "diana-patel-ux",
    },
    postCount: 7,
  },
  {
    name: "Mateo Alvarez",
    slug: "mateo-alvarez",
    bio: "Cloud infrastructure engineer obsessed with DevOps, observability, and zero-downtime deployments.",
    avatar: "/authors/mkbvlcbj.png",
    social: {
      github: "mateoalvarez",
      linkedin: "mateo-alvarez-dev",
      website: "https://mateo.cloud",
    },
    postCount: 9,
  },
  {
    name: "Leila Nasser",
    slug: "leila-nasser",
    bio: "Front-end engineer focused on performance, web standards, and design systems at scale.",
    avatar: "/authors/blhymigs.png",
    social: {
      twitter: "leila_ui",
      github: "leilanasser",
    },
    postCount: 11,
  },
  {
    name: "Noah Becker",
    slug: "noah-becker",
    bio: "Backend developer with a love for Rust, databases, and designing resilient APIs.",
    avatar: "/authors/pcwlbdrv.png",
    social: {
      twitter: "noah_codes",
      linkedin: "noah-becker",
      github: "noahbecker",
    },
    postCount: 13,
  },
  {
    name: "Saanvi Rao",
    slug: "saanvi-rao",
    bio: "Data engineer and ETL specialist passionate about building high-throughput data pipelines.",
    avatar: "/authors/yirwuemr.png",
    social: {
      github: "saanvirao",
      linkedin: "saanvi-rao",
    },
    postCount: 6,
  },
  {
    name: "Jonas Meier",
    slug: "jonas-meier",
    bio: "Security-focused developer advocating for privacy-first development and zero-trust systems.",
    avatar: "/authors/kpplcmxz.png",
    social: {
      twitter: "jonas_infosec",
      github: "jonasmeier",
      website: "https://jonas.dev",
    },
    postCount: 5,
  },
  {
    name: "Tara Benson",
    slug: "tara-benson",
    bio: "Creative technologist blending art and code to explore interactive storytelling on the web.",
    avatar: "/authors/hlqeduwh.png",
    social: {
      twitter: "tara_creates",
      linkedin: "tara-benson",
      website: "https://tarabenson.art",
    },
    postCount: 7,
  },
  {
    name: "Kenji Sato",
    slug: "kenji-sato",
    bio: "Mobile engineer building cross-platform apps with Flutter and Kotlin Multiplatform.",
    avatar: "/authors/ttguprop.png",
    social: {
      github: "kenjisato",
      linkedin: "kenji-sato",
    },
    postCount: 10,
  },
  {
    name: "Amina Yusuf",
    slug: "amina-yusuf",
    bio: "MLops engineer focused on deploying and monitoring production-grade machine learning models.",
    avatar: "/authors/psgkcuxg.png",
    social: {
      twitter: "amina_mlops",
      github: "aminayusuf",
    },
    postCount: 8,
  },
  {
    name: "Victor Tan",
    slug: "victor-tan",
    bio: "Game developer and real-time graphics engineer passionate about performance optimization and shaders.",
    avatar: "/authors/waihfnkt.png",
    social: {
      twitter: "victor_gamedev",
      github: "victortan",
      website: "https://victortan.games",
    },
    postCount: 9,
  },
  {
    name: "Rita Fernandes",
    slug: "rita-fernandes",
    bio: "Tech writer and developer advocate who loves turning complex topics into accessible guides.",
    avatar: "/authors/mkeorovv.png",
    social: {
      twitter: "rita_docs",
      linkedin: "rita-fernandes",
      website: "https://ritawrites.dev",
    },
    postCount: 14,
  },
  {
    name: "Lukas Schmidt",
    slug: "lukas-schmidt",
    bio: "Embedded systems engineer working on firmware, low-level C, and IoT integrations.",
    avatar: "/authors/pzylkuzn.png",
    social: {
      github: "lukasschmidt",
      linkedin: "lukas-schmidt-iot",
    },
    postCount: 6,
  },
];
