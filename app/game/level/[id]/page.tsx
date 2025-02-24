"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Timer, AlertTriangle, CheckCircle2 } from "lucide-react"

// Mock scenario data - in a real app, this would come from an API or database
const scenarios = {
  1: {
    title: "Suspicious Email Alert",
    description:
      "You receive an urgent email from your bank asking you to verify your account details by clicking a link. The email address is support@bank-secure-verify.com. What do you do?",
    options: [
      {
        id: "a",
        text: "Click the link to verify your account",
        correct: false,
        feedback: "This is likely a phishing attempt. Legitimate banks never ask for verification through email links.",
      },
      {
        id: "b",
        text: "Delete the email and contact your bank directly",
        correct: true,
        feedback: "Correct! Always verify suspicious communications by contacting your bank through official channels.",
      },
      {
        id: "c",
        text: "Reply asking for more information",
        correct: false,
        feedback: "Never engage with suspicious emails. Scammers may use your response to appear more legitimate.",
      },
    ],
  },
  // Add more scenarios for other levels
}

export default function LevelPage({
  params,
}: {
  params: { id: string }
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(120) // 2 minutes in seconds
  const levelId = Number.parseInt(params.id)
  const scenario = scenarios[levelId as keyof typeof scenarios]

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const handleSubmit = () => {
    if (selectedOption) {
      setShowFeedback(true)
    }
  }

  const selectedOptionData = scenario.options.find((opt) => opt.id === selectedOption)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        {/* Level Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Level {levelId}: {scenario.title}
            </h1>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-2">
                <Timer className="h-4 w-4" />
                {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, "0")}
              </Badge>
              <Progress value={(timeRemaining / 120) * 100} className="w-32" />
            </div>
          </div>
        </div>

        {/* Scenario Card */}
        <Card className="p-6 mb-8 bg-white dark:bg-gray-800">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Scenario</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{scenario.description}</p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {scenario.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`w-full p-4 rounded-lg border-2 transition-colors ${
                  selectedOption === option.id
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800"
                }`}
              >
                <p className="text-left text-gray-900 dark:text-gray-100">{option.text}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Link href="/">
              <Button variant="outline">Exit Level</Button>
            </Link>
            <Button onClick={handleSubmit} disabled={!selectedOption}>
              Submit Answer
            </Button>
          </div>
        </Card>
      </main>

      {/* Feedback Dialog */}
      <AlertDialog open={showFeedback} onOpenChange={setShowFeedback}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {selectedOptionData?.correct ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-500" />
              )}
              {selectedOptionData?.correct ? "Correct!" : "Not quite right"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base">{selectedOptionData?.feedback}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Link href="/">
                <Button>Continue</Button>
              </Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

