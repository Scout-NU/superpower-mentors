import QuizModal from "../frontend/PopupQuiz";
export default function HomePage() {
  return (
    <>
      <QuizModal />
      
      <main className="min-h-screen pt-24 px-6">
        <h1 className="text-4xl font-bold">
          Home
        </h1>
      </main>
    </>
  );
}