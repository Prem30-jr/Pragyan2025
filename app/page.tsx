import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Brain, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to The Great Scam Escape</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Embark on an interactive journey to master fraud prevention
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/episodes">
            <Button size="lg">Start Your Journey</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg">
              View Progress
            </Button>
          </Link>
        </div>
      </section>

      {/* Episodes Preview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Latest Episodes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "The Phishing Net",
              description: "Navigate through a complex web of deceptive emails and messages.",
              progress: 0,
              icon: Shield,
              status: "New",
            },
            {
              title: "Social Engineering Maze",
              description: "Learn to identify and counter social engineering tactics.",
              progress: 35,
              icon: Brain,
              status: "In Progress",
            },
            {
              title: "Identity Theft Crisis",
              description: "Protect yourself from sophisticated identity theft schemes.",
              progress: 100,
              icon: Target,
              status: "Completed",
            },
          ].map((episode, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <episode.icon className="h-8 w-8 text-primary" />
                  <Badge
                    variant={
                      episode.status === "Completed"
                        ? "default"
                        : episode.status === "In Progress"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {episode.status}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">{episode.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{episode.description}</p>
                <Progress value={episode.progress} className="mb-2" />
                <p className="text-sm text-muted-foreground">{episode.progress}% complete</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Interactive Stories",
              description: "Engage with realistic scenarios through animated storytelling.",
            },
            {
              title: "Skill-Building Games",
              description: "Test and improve your fraud detection skills through games.",
            },
            {
              title: "Progress Tracking",
              description: "Monitor your learning journey with detailed analytics.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card text-card-foreground">
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

