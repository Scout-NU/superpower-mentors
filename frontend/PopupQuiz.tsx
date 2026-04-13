"use client";
import QUIZ_QUESTIONS, { QuizEnd, QuizQuestion } from "./utils/quizQuestions";
import * as emailService from "../backend/utils/emailService";
import { useState, useEffect, useRef } from "react";

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
  const [email, setEmail] = useState<string>("");
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
        padding: "16px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          padding: "48px",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "32px",
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
                fontSize: "48px",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              FIND YOUR MATCH
            </h1>
            <div style={{ marginBottom: "40px" }}>
              <div
                style={{
                  width: "100%",
                  height: "12px",
                  backgroundColor: "#E5E5E5",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                {/* Progress bar inner div commented out — restore when ready:
                <div
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    height: '100%',
                    backgroundColor: PURPLE,
                    transition: 'width 0.3s ease'
                  }}
                /> */}
              </div>
            </div>

            <h2
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "32px",
                fontWeight: 700,
                marginBottom: "32px",
                color: "#1A1A1A",
              }}
            >
              {(currentQuestion as QuizQuestion).question}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {(currentQuestion as QuizQuestion).answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(answer)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "20px 28px",
                    borderRadius: "50px",
                    border: `3px solid ${hoveredIndex === index ? BLUE : PURPLE}`,
                    backgroundColor: "#FFFFFF",
                    fontFamily: "DM Sans",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#1A1A1A",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {answer.message}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#E8F4FF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <svg
                style={{ width: "40px", height: "40px", color: BLUE }}
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
                fontSize: "40px",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              {(currentQuestion as QuizEnd).title}
            </h2>
            {/* <p
              style={{
                fontFamily: "DM Sans",
                fontSize: "18px",
                color: "#666",
                marginBottom: "32px",
                lineHeight: "1.6",
              }}
            >
              We specialize in supporting youth with ADHD, Dyslexia, Autism, and other learning
              differences. Our mentors understand your unique strengths and challenges because
              they've been there too.
            </p> */}

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                onClick={() => {
                  if ((currentQuestion as QuizEnd).onButtonClick) {
                    (currentQuestion as QuizEnd).onButtonClick!();
                  }
                  closeModal}
                }
                style={{
                  width: "100%",
                  backgroundColor: BLUE,
                  color: "#FFFFFF",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  fontSize: "18px",
                  padding: "16px 32px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {(currentQuestion as QuizEnd).buttonMessage || "Back to Page"}
              </button>
              <button
                onClick={closeModal}
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "#666",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  fontSize: "18px",
                  padding: "16px 32px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Back to Page
              </button>
            </div>
            {/*<hr className="text-purple-600 my-3" />
            <div className="p-2 mt-3 flex gap-5 mb-0">
              <span className="float-start text-left text-zinc-600 dark:text-zinc-400">
                {" "}
                Add your email here to send us your answers!{" "}
              </span>
              <input
                type="text"
                className="border-2 p-2 rounded-xl float-end border-blue-400 focus:border-blue-600 size-fit"
                placeholder={"superpower@gmail..."}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <button
              className="w-fit float-end p-2 me-5 rounded-2 glow-btn rounded-2xl"
              onClick={() => onSubmitAnswers(email, answers)}
            >
              Send
            </button>*/}
          </div>
        )}
      </div>
    </div>
  );
}