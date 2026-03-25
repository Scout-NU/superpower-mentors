"use client";

import { useState } from "react";

const CATEGORIES = ["ADHD", "Autism", "Mentoring", "Students"];

const FEATURED = {
  title: "Case: College Transition",
  excerpt:
    '"We are proud to say that while nationally the college dropout rate between freshman and sophomore years is 30%, the dropout rate is ZERO for students who have had a Morelli Foundation (Superpower) Mentor!"',
  tags: ["Mentoring", "Students"],
};

const ARTICLES = [
  {
    id: 0,
    date: "Date",
    tags: ["ADHD"],
    title: "Why Some People with ADHD Focus Better at Night",
    excerpt:
      "If you're someone with ADHD who suddenly comes alive at 10 p.m. — tidying your whole room, starting a creative project, or finally getting through that long list of things you've been meaning to do — you're not alone.",
  },
  {
    id: 1,
    date: "Date",
    tags: ["ADHD"],
    title: "How ADHD is a Superpower",
    excerpt:
      "Let's get something straight from the beginning: ADHD is not a flaw. It's not a lack. The truth is, ADHD isn't about not trying hard enough. It's about having a brain that works differently, and in a lot of ways, that difference is a strength.",
  },
  {
    id: 2,
    date: "Date",
    tags: ["ADHD"],
    title: "Is ADHD Overdiagnosed? Unpacking the Truth with Compassion and Clarity",
    excerpt:
      "Is ADHD over or under-diagnosed? What impact does over or under-diagnosis have on families, communities, and students?",
  },
  {
    id: 3,
    date: "Date",
    tags: ["ADHD"],
    title: "ADHD in Adulthood: Thoughts and Strategies on Late Diagnosed ADHD",
    excerpt:
      "Whether you've lived with ADHD your whole life or discovered it recently, you deserve support, tools, and a way forward that honors your brain's unique design.",
  },
  {
    id: 4,
    date: "Date",
    tags: ["ADHD", "Autism"],
    title: "Are ADHD and Autism Linked? Understanding the Overlap",
    excerpt:
      "ADHD and ASD have links and overlaps. The more we learn, the more we realize just how complex, nuanced, and intertwined these conditions can be.",
  },
  {
    id: 5,
    date: "Date",
    tags: ["Mentoring"],
    title: "Top Summer Recommendations for Superpower Mentor Mentees",
    excerpt:
      "Superpower Mentors tips and tricks for a successful summer for the whole family!",
  },
  {
    id: 6,
    date: "Date",
    tags: ["Students"],
    title: "New School Transitions for Learning Diverse Students",
    excerpt:
      "For some, the end of another school year and especially a graduation brings not just excitement for what's to come but also fear of what's to come...",
  },
  {
    id: 7,
    date: "Date",
    tags: ["Autism"],
    title: "Autism Spectrum Disorder Superpower Mentors Stories",
    excerpt:
      "In honor of Autism Acceptance Month and celebrating and acknowledging those in our lives who have Autism Spectrum Disorder (ASD), some of our wonderful ASD Superpower Mentors have shared something about themselves with you.",
  },
  {
    id: 8,
    date: "Date",
    tags: ["Mentoring"],
    title: "Unlock the Power of Mentorship",
    excerpt:
      "The constant negative reinforcement felt by those with ADHD, Dyslexia, and other learning challenges...",
  },
];

function ImgPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-zinc-200 flex items-center justify-center ${className}`}>
      <span className="text-zinc-400 text-xs">IMG</span>
    </div>
  );
}

function TagPill({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-3 py-1 text-[10px] font-semibold border-2 transition-colors whitespace-nowrap"
      style={{
        backgroundColor: active ? "#000" : "transparent",
        color: active ? "#fff" : "#2563eb",
        borderColor: active ? "#000" : "#2563eb",
      }}
    >
      {label}
    </button>
  );
}

function ArticleCard({ article }: { article: (typeof ARTICLES)[number] }) {
  return (
    <div className="flex flex-col bg-white h-full items-center pt-7 pb-6 gap-4">
      <div className="flex justify-between items-center w-4/5">
        <span className="text-xs text-zinc-400">{article.date}</span>
        <div className="flex gap-1.5 flex-wrap justify-end">
          {article.tags.map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>
      </div>
      <ImgPlaceholder className="w-4/5 h-40" />
      <div style={{ width: "80%" }}>
        <p className="font-bold text-sm text-black mb-2">{article.title}</p>
        <p className="text-xs text-zinc-500 leading-relaxed">{article.excerpt}</p>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? ARTICLES.filter((a) => a.tags.includes(activeCategory))
    : ARTICLES;

  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero */}
      <section className="px-6 py-16" style={{ background: "#571377" }}>
        <div className="max-w-7xl mx-auto">
          <h1
            className="font-medium text-white leading-none text-center"
            style={{ fontSize: "clamp(64px, 10vw, 120px)" }}
          >
            Insights &amp; Stories
          </h1>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 pt-8 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 items-start mb-6">
          <h2
            className="font-bold text-black leading-snug"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            {FEATURED.title}
          </h2>

          <div className="w-full">
            <p className="w-full text-2xl font-bold text-black leading-relaxed mb-4">
              {FEATURED.excerpt}
            </p>

            <div className="flex gap-2 flex-wrap items-center w-full">
              {FEATURED.tags.map((t) => (
                <TagPill key={t} label={t} />
              ))}
              <button className="ml-auto bg-blue-600 text-white text-xs font-bold px-5 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>

        <ImgPlaceholder className="w-full h-[480px]" />
      </section>

      {/* Category Filter Bar */}
      <section className="px-6 py-3 max-w-7xl mx-auto flex gap-3 items-center flex-wrap">
        <span className="text-lg font-bold text-black mr-auto">Categories</span>
        {CATEGORIES.map((c) => (
          <TagPill
            key={c}
            label={c}
            active={activeCategory === c}
            onClick={() =>
              setActiveCategory(activeCategory === c ? null : c)
            }
          />
        ))}
      </section>

      {/* Blog Grid */}
      <section className="px-6 py-8 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-3">
          {filtered.map((article, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <div
                key={article.id}
                style={{
                  minHeight: "390px",
                  borderTop: row === 0 ? "2px solid #000" : "none",
                  borderBottom: "2px solid #000",
                  borderLeft: col === 0 ? "2px solid #000" : "none",
                  borderRight: "2px solid #000",
                }}
              >
                <ArticleCard article={article} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
