import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Unlock } from "lucide-react"

const episodes = [
  {
    id: 1,
    title: "The Phishing Net",
    description: "Chapter 1: Navigate through a complex web of deceptive emails and messages.",
    progress: 0,
    unlocked: true,
    duration: "20 mins",
  },
  {
    id: 2,
    title: "Social Engineering Maze",
    description: "Chapter 2: Master the art of identifying social engineering tactics.",
    progress: 0,
    unlocked: true,
    duration: "25 mins",
  },
  {
    id: 3,
    title: "Identity Theft Crisis",
    description: "Chapter 3: Learn to protect yourself from identity theft schemes.",
    progress: 0,
    unlocked: false,
    duration: "30 mins",
  },
  {
    id: 4,
    title: "Digital Payment Perils",
    description: "Chapter 4: Navigate the risks in digital payment systems.",
    progress: 0,
    unlocked: false,
    duration: "25 mins",
  },
  {
    id: 5,
    title: "Investment Fraud Detective",
    description: "Chapter 5: Spot and avoid sophisticated investment scams.",
    progress: 0,
    unlocked: false,
    duration: "35 mins",
  },
  {
    id: 6,
    title: "The Final Challenge",
    description: "Chapter 6: Put your skills to the test in this comprehensive finale.",
    progress: 0,
    unlocked: false,
    duration: "40 mins",
  },
]

export default function EpisodesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Episodes</h1>
        <p className="text-muted-foreground">
          Follow the story and learn through interactive scenarios. Complete each episode to unlock the next chapter.
        </p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {episodes.map((episode) => (
          <Card key={episode.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle>{episode.title}</CardTitle>
                  <CardDescription>{episode.description}</CardDescription>
                </div>
                {episode.unlocked ? (
                  <Unlock className="h-5 w-5 text-primary" />
                ) : (
                  <Lock className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline">{episode.duration}</Badge>
                <Progress value={episode.progress} className="flex-1" />
                <span className="text-sm text-muted-foreground">{episode.progress}%</span>
              </div>
              <div className="flex justify-end">
                <Link href={`/episodes/${episode.id}`}>
                  <Button disabled={!episode.unlocked}>
                    {episode.progress > 0 ? "Continue Episode" : "Start Episode"}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

