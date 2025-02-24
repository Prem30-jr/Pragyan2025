import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Shield, Target, Brain, Eye, Lock, Star, Award, Crown } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Quick Learner",
    description: "Complete your first episode with 100% accuracy",
    icon: Brain,
    progress: 100,
    unlocked: true,
    rarity: "Common",
    points: 100,
  },
  {
    id: 2,
    title: "Vigilant Guardian",
    description: "Successfully identify 50 scam attempts",
    icon: Shield,
    progress: 75,
    unlocked: false,
    rarity: "Rare",
    points: 250,
  },
  {
    id: 3,
    title: "Master Detective",
    description: "Achieve 90% accuracy across all episodes",
    icon: Eye,
    progress: 60,
    unlocked: false,
    rarity: "Epic",
    points: 500,
  },
  {
    id: 4,
    title: "Speed Runner",
    description: "Complete an episode in under 10 minutes",
    icon: Target,
    progress: 100,
    unlocked: true,
    rarity: "Uncommon",
    points: 150,
  },
  {
    id: 5,
    title: "Perfect Score",
    description: "Get 100% on any game mode",
    icon: Star,
    progress: 40,
    unlocked: false,
    rarity: "Rare",
    points: 300,
  },
  {
    id: 6,
    title: "Grand Master",
    description: "Complete all episodes with perfect scores",
    icon: Crown,
    progress: 20,
    unlocked: false,
    rarity: "Legendary",
    points: 1000,
  },
]

const rarityColors = {
  Common: "text-gray-400",
  Uncommon: "text-green-400",
  Rare: "text-blue-400",
  Epic: "text-purple-400",
  Legendary: "text-yellow-400",
}

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Achievements</h1>
        <p className="text-lg text-muted-foreground">
          Track your progress and earn rewards for mastering fraud prevention
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Achievements Earned</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/30</div>
            <p className="text-xs text-muted-foreground mt-2">40% Complete</p>
            <Progress value={40} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Points</CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450</div>
            <p className="text-xs text-muted-foreground mt-2">Next milestone: 3,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Silver</div>
            <p className="text-xs text-muted-foreground mt-2">Top 25% of users</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className={`relative ${!achievement.unlocked && "opacity-75"}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-secondary">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {achievement.title}
                      {!achievement.unlocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
                <Badge variant="secondary" className={rarityColors[achievement.rarity as keyof typeof rarityColors]}>
                  {achievement.rarity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <Progress value={achievement.progress} />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{achievement.points} Points</span>
                  </div>
                  {achievement.unlocked && <Badge variant="default">Completed</Badge>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

