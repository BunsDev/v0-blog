import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowRight, Users, BookOpen, Target, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechBlog, our mission, and the team behind the content. Discover why we're passionate about sharing knowledge in technology and programming.",
}

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="animate-fade-slide-in">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 animate-fade-slide-in delay-100">
          <h1 className="text-4xl md:text-5xl font-bold">About TechBlog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a community of passionate developers, designers, and tech enthusiasts sharing knowledge, insights, and
            experiences to help others grow in their careers.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-slide-in delay-200">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              At TechBlog, we believe that knowledge should be accessible to everyone. Our mission is to create
              high-quality, practical content that helps developers and tech professionals stay current with industry
              trends, learn new skills, and advance their careers.
            </p>
            <p className="text-muted-foreground text-lg">
              Whether you're just starting your journey in tech or you're a seasoned professional, our content is
              designed to provide value at every stage of your career.
            </p>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src="/img/swjlfibr.png" alt="Team collaboration" fill className="object-cover" />
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-8 animate-fade-slide-in delay-300">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center animate-fade-slide-in delay-300">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Quality Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We prioritize accuracy, depth, and practical value in every piece of content we publish.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-slide-in delay-300">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We foster an inclusive community where everyone can learn, share, and grow together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-slide-in delay-300">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Practical Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our content is designed to be immediately applicable to real-world projects and challenges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-slide-in">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We're genuinely passionate about technology and love sharing that enthusiasm with others.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/50 rounded-lg p-8 animate-fade-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Expert Authors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Monthly Readers</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 animate-fade-slide-in">
          <h2 className="text-3xl font-bold">Join Our Community</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to dive into our content? Explore our latest posts, discover new topics, and connect with fellow
            developers and tech enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/posts">
                Browse Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/authors">Meet Our Authors</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
