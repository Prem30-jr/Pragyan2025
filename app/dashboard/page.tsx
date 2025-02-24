import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Brain, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Overview Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Your Progress Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45%</div>
              <Progress value={45} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">3 of 6 episodes completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,450</div>
              <p className="text-xs text-muted-foreground mt-2">Rank: Advanced Defender</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground mt-2">Last 7 days: 92%</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              title: "Completed Episode 3",
              time: "2 hours ago",
              points: "+350",
              icon: CheckCircle2,
            },
            {
              title: "Achievement Unlocked: Quick Thinker",
              time: "5 hours ago",
              points: "+100",
              icon: Trophy,
            },
            {
              title: "Started Episode 4",
              time: "1 day ago",
              points: "+50",
              icon: Target,
            },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div className="flex items-center gap-4">
                <activity.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
              <Badge variant="secondary">{activity.points}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Learning Statistics</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Learning Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">7 Days</div>
              <p className="text-sm text-muted-foreground">Keep it up! You're building great habits.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Time Invested
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">5.5 Hours</div>
              <p className="text-sm text-muted-foreground">Total time spent learning</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

