"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Brain, Trophy } from "lucide-react";

const games = [
  {
    id: "quiz",
    title: "Fraud Detection Quiz",
    description: "Test your knowledge with challenging scenarios",
    icon: Brain,
    difficulty: "Medium",
    timeToComplete: "10 mins",
    highScore: 850,
  },
  {
    id: "spot-fraud",
    title: "Spot the Scam",
    description: "Find suspicious elements in simulated environments",
    icon: Target,
    difficulty: "Hard",
    timeToComplete: "15 mins",
    highScore: 920,
  },
];

const quizQuestions = [
  {
    question: "What is phishing?",
    options: [
      "A type of online scam to steal personal information",
      "A way to protect your bank details",
      "A secure transaction method",
      "A type of two-factor authentication",
    ],
    correctAnswer: "A type of online scam to steal personal information",
  },
  {
    question: "Which of these is a red flag for fraud?",
    options: [
      "Emails asking for sensitive information",
      "Strong passwords",
      "Using multi-factor authentication",
      "Shopping from verified sources",
    ],
    correctAnswer: "Emails asking for sensitive information",
  },
  {
    question: "What should you do if you receive a suspicious link?",
    options: [
      "Click it to check if it's safe",
      "Report and avoid clicking",
      "Forward it to your contacts",
      "Ignore it and do nothing",
    ],
    correctAnswer: "Report and avoid clicking",
  },
];

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[quizIndex].correctAnswer) {
      setScore(score + 10);
    }

    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(quizIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {selectedGame === "quiz" ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold">Fraud Detection Quiz</h1>
            {!quizCompleted ? (
              <div className="mt-6">
                <h2 className="text-xl font-semibold">
                  {quizQuestions[quizIndex].question}
                </h2>
                <div className="flex flex-col mt-4 space-y-3">
                  {quizQuestions[quizIndex].options.map((option, index) => (
                    <Button
                      key={index}
                      className={`w-full ${
                        selectedAnswer === option ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                <Button
                  className="mt-6"
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer}
                >
                  {quizIndex + 1 < quizQuestions.length ? "Next Question" : "Finish Quiz"}
                </Button>
              </div>
            ) : (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold">
                  Quiz Completed! Your Score: {score}
                </h2>
                <Button className="mt-4" onClick={() => setSelectedGame(null)}>
                  Back to Games
                </Button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Challenge Your Skills</h1>
              <p className="text-lg text-muted-foreground">
                Put your fraud detection skills to the test with our interactive games
              </p>
            </div>

            {/* Game Selection */}
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              {games.map((game) => (
                <Card
                  key={game.id}
                  className={`relative overflow-hidden transition-all ${
                    selectedGame === game.id
                      ? "ring-2 ring-primary"
                      : "hover:ring-2 hover:ring-primary/50"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <game.icon className="h-8 w-8 text-primary" />
                      <Badge variant="secondary">{game.difficulty}</Badge>
                    </div>
                    <CardTitle className="mt-4">{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Time to complete
                        </span>
                        <span>{game.timeToComplete}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Your High Score
                        </span>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span>{game.highScore}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full mt-4"
                        onClick={() => setSelectedGame(game.id)}
                      >
                        Play Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
