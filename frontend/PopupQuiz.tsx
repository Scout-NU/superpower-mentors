"use client";
import QUIZ_QUESTIONS, { QuizEnd, QuizQuestion } from "./utils/quizQuestions";
import * as emailService from "../backend/utils/apiService";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PURPLE = "#571377";
const BLUE = "#001EDF";

export default function QuizModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(QUIZ_QUESTIONS[0]);
  const [answers, setAnswers] = useState<
    { question: string; answer: string }[]
  >([]);
  const [showResult, setShowResult] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const quizCompleted = sessionStorage.getItem("quizCompleted");
    const quizShown = sessionStorage.getItem("quizShown");

    if (!quizCompleted && !quizShown) {
      setIsOpen(true);
      sessionStorage.setItem("quizShown", "true");
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleAnswer = (answer: {
    message: string;
    nextQuestionId: number;
  }) => {
    const newAnswers = [
      ...answers,
      {
        question: (currentQuestion as QuizQuestion).question,
        answer: answer.message,
      },
    ];
    setAnswers(newAnswers);

    // set next question
    const nextQuestion = QUIZ_QUESTIONS.find(
      (q) => q.id === answer.nextQuestionId,
    ) as QuizEnd | QuizQuestion;
    if (!nextQuestion) {
      console.error(`next question with id ${answer.nextQuestionId} not found`);
    }

    setCurrentQuestion(nextQuestion);

    // if quiz end, show results
    if (!("answers" in nextQuestion)) {
      setShowResult(true);
      sessionStorage.setItem("quizCompleted", "true");
    }
  };

  const onSubmitAnswers = async (
    email: string,
    answers: { question: string; answer: string }[],
  ) => {
    try {
      await emailService.sendQuizAnswers(email, answers);
    } catch (e) {
      console.log(e);
    }
  };

  const closeModal = () => {
    setIsOpen(false);

    const quizCompleted = sessionStorage.getItem("quizCompleted");
    if (!quizCompleted) {
      timeoutRef.current = setTimeout(
        () => {
          setIsOpen(true);
          setCurrentQuestion(QUIZ_QUESTIONS[0]);
          setAnswers([]);
          setShowResult(false);
        },
        10 * 60 * 1000, // 10 minutes in milliseconds
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "clamp(8px, 4vw, 16px)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "clamp(280px, 90vw, 900px)",
          backgroundColor: "#FFFFFF",
          borderRadius: "clamp(16px, 4vw, 24px)",
          padding: "clamp(24px, 6vw, 48px)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "clamp(12px, 3vw, 24px)",
            right: "clamp(12px, 3vw, 24px)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "clamp(24px, 5vw, 32px)",
            color: "#1A1A1A",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {!showResult && "answers" in currentQuestion ? (
          /** if not done with quiz and currently in a question*/
          <div>
            <h1
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: "clamp(16px, 4vw, 24px)",
                letterSpacing: "-0.02em",
              }}
            >
              FIND YOUR MATCH
            </h1>
            <div style={{ marginBottom: "clamp(24px, 4vw, 40px)" }}>
              <p
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                  color: "#666",
                  marginBottom: "clamp(8px, 2vw, 12px)",
                }}
              >
                Question {answers.length + 1} of {QUIZ_QUESTIONS.filter((q) => "answers" in q).length}
              </p>
              <div
                style={{
                  width: "100%",
                  height: "12px",
                  backgroundColor: "#E5E5E5",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${((answers.length + 1) / QUIZ_QUESTIONS.filter((q) => "answers" in q).length) * 100}%`,
                    height: "100%",
                    backgroundColor: PURPLE,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>

            <h2
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "clamp(20px, 5vw, 32px)",
                fontWeight: 700,
                marginBottom: "clamp(20px, 4vw, 32px)",
                color: "#1A1A1A",
              }}
            >
              {(currentQuestion as QuizQuestion).question}
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 2vw, 16px)" }}
            >
              {(currentQuestion as QuizQuestion).answers.map(
                (answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "clamp(12px, 3vw, 20px) clamp(16px, 4vw, 28px)",
                      borderRadius: "50px",
                      border: `3px solid ${hoveredIndex === index ? BLUE : PURPLE}`,
                      backgroundColor: "#FFFFFF",
                      fontFamily: "DM Sans",
                      fontSize: "clamp(14px, 3vw, 18px)",
                      fontWeight: 500,
                      color: "#1A1A1A",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {answer.message}
                  </button>
                ),
              )}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "clamp(24px, 4vw, 40px) 0" }}>
            <div
              style={{
                width: "clamp(60px, 12vw, 80px)",
                height: "clamp(60px, 12vw, 80px)",
                backgroundColor: "#E8F4FF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto clamp(16px, 4vw, 24px)",
              }}
            >
              <svg
                style={{ width: "clamp(30px, 6vw, 40px)", height: "clamp(30px, 6vw, 40px)", color: BLUE }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "clamp(24px, 5vw, 40px)",
                fontWeight: 700,
                marginBottom: "clamp(12px, 2vw, 16px)",
              }}
            >
              {(currentQuestion as QuizEnd).title}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              {(currentQuestion as QuizEnd).message}
            </p>

            <div className="space-y-3">
              <Link
                passHref={(currentQuestion as QuizEnd).href !== undefined}
                href={(currentQuestion as QuizEnd).href ?? ""}
                onClick={(e) => {
                  // if no href, simply close modal, else redirect to provided link
                  if (!(currentQuestion as QuizEnd).href) {
                    e.preventDefault();
                  }
                  closeModal();
                }}
                style={{
                  width: "100%",
                  backgroundColor: BLUE,
                  color: "#FFFFFF",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 3vw, 18px)",
                  padding: "clamp(12px, 3vw, 16px) clamp(20px, 4vw, 32px)",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {(currentQuestion as QuizEnd).buttonMessage || "Back to Page"}
              </Link>
              <br />

              <button
                onClick={closeModal}
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "#666",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 3vw, 18px)",
                  padding: "clamp(12px, 3vw, 16px) clamp(20px, 4vw, 32px)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Back to Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
