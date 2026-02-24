"use client";

import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Who are you looking for support for?",
    options: [
      "My child/teen",
      "Myself",
      "A student I work with",
      "Just exploring options"
    ]
  },
  {
    id: 2,
    question: "What learning difference best describes your situation?",
    options: [
      "ADHD",
      "Dyslexia",
      "Autism/ASD",
      "Multiple or other learning differences"
    ]
  },
  {
    id: 3,
    question: "What's your biggest challenge right now?",
    options: [
      "Building confidence and self-advocacy",
      "Academic organization and study skills",
      "Social connections and communication",
      "Planning for college or career"
    ]
  },
  {
    id: 4,
    question: "What type of mentor support would be most helpful?",
    options: [
      "Someone who understands neurodivergence firsthand",
      "Help with executive function and time management",
      "Guidance on navigating school systems",
      "Career and future planning advice"
    ]
  },
  {
    id: 5,
    question: "What would success look like for you?",
    options: [
      "Increased independence and confidence",
      "Better grades and academic performance",
      "Stronger self-understanding and acceptance",
      "Clear goals and a path forward"
    ]
  }
];

export default function QuizModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!showResult ? (
          <div>
            <div className="mb-6">
              <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span className="font-medium">Find Your Match</span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all text-zinc-700 dark:text-zinc-300"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Superpower Mentors Is For You! 🚀
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              We specialize in supporting youth with ADHD, Dyslexia, Autism, and other learning differences. Our mentors understand your unique strengths and challenges because they've been there too.
            </p>

            <div className="space-y-3">
              <button
                onClick={closeModal}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Connect With a Mentor
              </button>
              <button
                onClick={closeModal}
                className="w-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white font-medium py-3 transition-colors"
              >
                Learn More First
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}