"use client";

import { useState, useEffect, useRef } from "react";

const PURPLE = "#571377";
const BLUE = "#001EDF";

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

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      sessionStorage.setItem("quizCompleted", "true");
    }
  };

  const closeModal = () => {
    setIsOpen(false);

    const quizCompleted = sessionStorage.getItem("quizCompleted");
    if (!quizCompleted) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(true);
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
      }, 10 * 60 * 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '16px'
      }}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '32px',
            color: '#1A1A1A',
            lineHeight: 1
          }}
        >
          ✕
        </button>

        {!showResult ? (
          <div>
            <h1 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '48px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}
            >
              FIND YOUR MATCH
            </h1>

            <div style={{ marginBottom: '40px' }}>
              <p 
                style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '12px'
                }}
              >
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <div 
                style={{
                  width: '100%',
                  height: '12px',
                  backgroundColor: '#E5E5E5',
                  borderRadius: '6px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    height: '100%',
                    backgroundColor: PURPLE,
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
            </div>

            <h2 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '32px',
                fontWeight: 700,
                marginBottom: '32px',
                color: '#1A1A1A'
              }}
            >
              {questions[currentQuestion].question}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '20px 28px',
                    borderRadius: '50px',
                    border: `3px solid ${hoveredIndex === index ? BLUE : PURPLE}`,
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'DM Sans',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#1A1A1A',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E8F4FF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}
            >
              <svg style={{ width: '40px', height: '40px', color: BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '40px',
                fontWeight: 700,
                marginBottom: '16px'
              }}
            >
              Superpower Mentors Is For You! 🚀
            </h2>
            <p 
              style={{
                fontFamily: 'DM Sans',
                fontSize: '18px',
                color: '#666',
                marginBottom: '32px',
                lineHeight: '1.6'
              }}
            >
              We specialize in supporting youth with ADHD, Dyslexia, Autism, and other learning differences. Our mentors understand your unique strengths and challenges because they've been there too.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={closeModal}
                style={{
                  width: '100%',
                  backgroundColor: BLUE,
                  color: '#FFFFFF',
                  fontFamily: 'DM Sans',
                  fontWeight: 600,
                  fontSize: '18px',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Connect With a Mentor
              </button>
              <button
                onClick={closeModal}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: '#666',
                  fontFamily: 'DM Sans',
                  fontWeight: 600,
                  fontSize: '18px',
                  padding: '16px 32px',
                  border: 'none',
                  cursor: 'pointer'
                }}
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