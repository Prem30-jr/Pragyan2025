"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const episodeData = {
  1: {
    title: "The Phishing Net",
    description: "Chapter 1: Navigate through a complex web of deceptive emails and messages.",
    scenes: [
      { type: "story", content: "Sarah sits down at her computer one morning to find an urgent email from her bank..." },
      {
        type: "question",
        content: "The email asks Sarah to click a link to verify her account. What should she do?",
        options: [
          { id: "a", text: "Click the link", correct: false, feedback: "This could be a phishing attempt." },
          { id: "b", text: "Call her bank", correct: true, feedback: "Correct! Always verify suspicious messages." },
          { id: "c", text: "Reply to the email", correct: false, feedback: "Never engage with suspicious emails." },
        ],
      },
      { type: "story", content: "Sarah decides to be cautious and calls her bank's official number." },
    ],
  },
};

export default function EpisodePage({ params }: { params: { id: string } }) {
  const [currentScene, setCurrentScene] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(0);

  const episode = episodeData[params.id as keyof typeof episodeData];
  const scene = episode.scenes[currentScene];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    if (scene.type === "question" && !selectedOption) return;

    if (currentScene < episode.scenes.length - 1) {
      if (scene.type === "question") {
        setShowFeedback(true);
      } else {
        setCurrentScene((prev) => prev + 1);
        setProgress(((currentScene + 1) / episode.scenes.length) * 100);
      }
    }
  };

  const handleFeedbackContinue = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    setCurrentScene((prev) => prev + 1);
    setProgress(((currentScene + 1) / episode.scenes.length) * 100);
  };

  const selectedOptionData = scene.type === "question" ? scene.options.find((opt) => opt.id === selectedOption) : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{episode.title}</h1>
            <Progress value={progress} className="w-32" aria-label="Episode progress" />
          </div>
          <p className="text-muted-foreground">{episode.description}</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Scene {currentScene + 1}</CardTitle>
            <CardDescription>{scene.type === "story" ? "Story Development" : "Decision Point"}</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">{scene.content}</p>
            {scene.type === "question" && (
              <div className="space-y-4">
                {scene.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                      selectedOption === option.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Link href="/episodes">
            <Button variant="outline">Exit Episode</Button>
          </Link>
          <Button onClick={handleContinue} disabled={scene.type === "question" && !selectedOption}>
            Continue
          </Button>
        </div>
      </div>

      <Dialog open={showFeedback} onOpenChange={setShowFeedback}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Feedback</DialogTitle>
            <DialogDescription>{selectedOptionData?.feedback}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleFeedbackContinue}>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
