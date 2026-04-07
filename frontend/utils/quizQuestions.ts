import { redirect } from "next/navigation";

export interface QuizQuestion {
  id: number;
  question: string;
  answers: {
    message: string;
    nextQuestionId: number; // -1 for direct close
  }[];
}

export interface QuizEnd {
  id: number;
  title: string;
  message: string;
  buttonMessage?: string;
  href?: string; // for end-of-quiz flows that require external link access (for example, mentorship applications)
}


const mentorRedirect = () => {
    redirect('/mentoring');
}


const QUIZ_QUESTIONS: (QuizQuestion | QuizEnd)[] = [
  {
    id: 0,
    question: "Welcome to Superpower Mentors! 🚀 How can we help?",
    answers: [
      {
        message: "I'm a mentee/want to apply",
        nextQuestionId: -1,
      },
      {
        message: "I'm just exploring",
        nextQuestionId: -3,
      },
      {
        message: "Support and mentorship",
        nextQuestionId: 1,
      },
      {
        message: "I'm a partner",
        nextQuestionId: 2,
      },
    ],
  },
  {
    id: 1,
    question: "Who are you looking support for?", //grammar?,
    answers: [
      { message: "Myself", nextQuestionId: 3 },
      { message: "My child", nextQuestionId: 4 },
      { message: "A student I work with", nextQuestionId: 4 },
    ],
  },
  {
    id: 2,
    question: "What type of organization do you represent?",
    answers: [
      { message: "Nonprofit", nextQuestionId: 5 },
      { message: "Community & Social Outreach", nextQuestionId: 5 },
      { message: "Educational", nextQuestionId: 5 },
      { message: "Other", nextQuestionId: 5 },
    ],
  },
  {
    id: 3,
    question: "What's your biggest challenge right now?",
    answers: [
      { message: "Building confidence", nextQuestionId: 6 },
      { message: "Academic organization and study skills", nextQuestionId: 6 },
      { message: "Social connections and communication", nextQuestionId: 6 },
      { message: "Planning for college and/or my career", nextQuestionId: 6 },
    ],
  },
  {
    id: 4,
    question:
      "What level of education is your child/student currently attending?",
    answers: [
      { message: "Elementary", nextQuestionId: 7 },
      { message: "Middle School", nextQuestionId: 7 },
      { message: "High School", nextQuestionId: 7 },
      { message: "Homeschooled or alternative education", nextQuestionId: 7 },
      { message: "College/University", nextQuestionId: -2 },
    ],
  },
  {
    id: 5,
    question: "Which of our services are you interested in?",
    answers: [
      { message: "Our mentoring plans", nextQuestionId: 20 },
      { message: "Our mentors and faculty", nextQuestionId: 20},
      { message: "Collaborating with SPM", nextQuestionId: 20},
    ],
  },
  {
    id: 6,
    question: "What would success look like for you?",
    answers: [
      { message: "Independence and self-confidence", nextQuestionId: 8 },
      { message: "Self-acceptance and understanding", nextQuestionId: 8 },
      { message: "Improving academic performance", nextQuestionId: 8 },
      { message: "Having clear goals for the future", nextQuestionId: 8 },
    ],
  },
  {
    id: 7,
    question: "How old is your child/student?",
    answers: [
      { message: "12 and under", nextQuestionId: 11 },
      { message: "13 to 18", nextQuestionId: 11 },
      { message: "Older than 18", nextQuestionId: 11 },
    ],
  },
  {
    id: 8,
    question:
      "What type of mentor support do you think would be most helpful? ",
    answers: [
      { message: "Neurodiversity Mentorship", nextQuestionId: 10 },
      { message: "Confidence Mentorship", nextQuestionId: 10 },
      { message: "Transition Mentorship", nextQuestionId: 10 },
      { message: "Direction Mentorship", nextQuestionId: 10 },
    ],
  },
  {
    id: 11,
    question: "Is your child/student neurodiverse?",
    answers: [
      { message: "Yes", nextQuestionId: 3 },
      { message: "No", nextQuestionId: 3 },
      { message: "Not sure", nextQuestionId: 3 },
    ],
  },
  // Quiz Closing messages
  {
    id: 10,
    title: "SPM is for You! 🚀",
    message:
      "Good news! Based on your answers, we believe our services can be a good fit for you. Feel free to continue exploring our mentorship options or book a call with us.",
    buttonMessage: "Book a Call",
    href: "/mentoring/#strategy-call-form",
  },
  {
    id: 20,
    title: "Thanks for reaching out! 🚀",
    message:
      "We're excited to hear more from you! Click below to schedule a call with us.",
    buttonMessage: "Book a Call",
    href: "/mentoring/#strategy-call-form",
  },
  {
    id: -1,
    title: "Mentorship Application",
    message: "We're excited for you to join the SPM team!",
    buttonMessage: "Continue to Application",
    href: "/mentor-app",
  },
  {
    id: -2,
    title: "We're sorry...",
    message:
      "Unfortunately, we do not have dedicated mentorship programs for the circumstances you've described. Feel free to book a call with us in case there are other ways we can support you.",
  },
  {
    id: -3,
    title: "",
    message: "Happy searching!",
  },
];

export default QUIZ_QUESTIONS;
