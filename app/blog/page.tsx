"use client";

import { useState } from "react";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import AnimatedSection from "@/frontend/AnimatedSection";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const CATEGORIES = ["ADHD", "Autism", "Mentoring", "Students"];

const FEATURED = {
  image: "/blog_dropoutrate.png"
};

const ARTICLES = [
  {
    id: 0,
    slug: "why-some-people-with-adhd-focus-better-at-night",
    date: "Date",
    tags: ["ADHD"],
    title: "Why Some People with ADHD Focus Better at Night",
    image: "/images/ADHD1.jpg",
    excerpt:
      "If you're someone with ADHD who suddenly comes alive at 10 p.m. — tidying your whole room, starting a creative project, or finally getting through that long list of things you've been meaning to do — you're not alone.",
  },
  {
    id: 1,
    slug: "how-adhd-is-a-superpower",
    date: "Date",
    tags: ["ADHD"],
    title: "How ADHD is a Superpower",
    image: "/images/ADHD2.jpg",
    excerpt:
      "Let's get something straight from the beginning: ADHD is not a flaw. It's not a lack. The truth is, ADHD isn't about not trying hard enough. It's about having a brain that works differently, and in a lot of ways, that difference is a strength.",
  },
  {
    id: 2,
    slug: "is-adhd-overdiagnosed",
    date: "Date",
    tags: ["ADHD"],
    title: "Is ADHD Overdiagnosed? Unpacking the Truth with Compassion and Clarity",
    image: "/images/ADHD3.jpg",
    excerpt:
      "Is ADHD over or under-diagnosed? What impact does over or under-diagnosis have on families, communities, and students?",
  },
  {
    id: 3,
    slug: "adhd-in-adulthood-late-diagnosis",
    date: "Date",
    tags: ["ADHD"],
    title: "ADHD in Adulthood: Thoughts and Strategies on Late Diagnosed ADHD",
    image: "/images/ADHD4.jpg",
    excerpt:
      "Whether you've lived with ADHD your whole life or discovered it recently, you deserve support, tools, and a way forward that honors your brain's unique design.",
  },
  {
    id: 4,
    slug: "are-adhd-and-autism-linked",
    date: "Date",
    tags: ["ADHD", "Autism"],
    title: "Are ADHD and Autism Linked? Understanding the Overlap",
    image: "/images/ADHD5.jpg",
    excerpt:
      "ADHD and ASD have links and overlaps. The more we learn, the more we realize just how complex, nuanced, and intertwined these conditions can be.",
  },
  {
    id: 5,
    slug: "top-summer-recommendations-for-mentees",
    date: "Date",
    tags: ["Mentoring"],
    title: "Top Summer Recommendations for Superpower Mentor Mentees",
    image: "/images/Mentor1.jpg",
    excerpt:
      "Superpower Mentors tips and tricks for a successful summer for the whole family!",
  },
  {
    id: 6,
    slug: "new-school-transitions-for-learning-diverse-students",
    date: "Date",
    tags: ["Students"],
    title: "New School Transitions for Learning Diverse Students",
    image: "/images/Students1.jpg",
    excerpt:
      "For some, the end of another school year and especially a graduation brings not just excitement for what's to come but also fear of what's to come...",
  },
  {
    id: 7,
    slug: "autism-spectrum-disorder-superpower-mentors-stories",
    date: "Date",
    tags: ["Autism"],
    title: "Autism Spectrum Disorder Superpower Mentors Stories",
    image: "/images/Autism1.jpg",
    excerpt:
      "In honor of Autism Acceptance Month and celebrating and acknowledging those in our lives who have Autism Spectrum Disorder (ASD), some of our wonderful ASD Superpower Mentors have shared something about themselves with you.",
  },
  {
    id: 8,
    slug: "unlock-the-power-of-mentorship",
    date: "Date",
    tags: ["Mentoring"],
    title: "Unlock the Power of Mentorship",
    image: "/images/Mentor2.jpg",
    excerpt:
      "The constant negative reinforcement felt by those with ADHD, Dyslexia, and other learning challenges...",
  },
];


export { ARTICLES };

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
    <Link
      href={`/blog/${article.slug}`}
      className="flex flex-col bg-white h-full items-center pt-7 pb-6 gap-4 group"
    >
      <div className="flex justify-between items-center w-4/5">
        <span className="text-xs text-zinc-400">{article.date}</span>
        <div className="flex gap-1.5 flex-wrap justify-end">
          {article.tags.map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>
      </div>

      {article.image ? (
        <img
          src={article.image}
          alt={article.title}
          className="w-4/5 h-60 object-cover"
        />
      ) : (
        <div className="bg-zinc-200 flex items-center justify-center w-4/5 h-40">
          <span className="text-zinc-400 text-xs">IMG</span>
        </div>
      )}

      <div style={{ width: "80%" }}>
        <p className="font-bold text-sm text-black mb-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </p>
        <p className="text-xs text-zinc-500 leading-relaxed">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? ARTICLES.filter((a) => a.tags.includes(activeCategory))
    : ARTICLES;

  return (
    <main className={`${spaceGrotesk.className} min-h-screen pt-20 bg-white`}>
      {/* Hero */}
      <AnimatedSection>
        <section className="px-6 py-24" style={{ background: "#571377" }}>
          <div className="max-w-7xl mx-auto">
            <h1
              className={`${jakarta.className} text-white leading-none text-center`}
              style={{ fontSize: "clamp(64px, 10vw, 120px)", fontWeight: 500 }}
            >
              Insights & Stories
            </h1>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured */}
      <AnimatedSection>
        <section className="px-6 pt-8 pb-10 max-w-7xl mx-auto">
          <a
            href="https://www.researchsquare.com/article/rs-5189431/v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FEATURED.image}
              className="w-full h-full object-cover cursor-pointer"
            />
          </a>
        </section>
      </AnimatedSection>

      {/* Category Filter Bar */}
      <AnimatedSection>
        <section className="px-6 py-3 max-w-7xl mx-auto flex gap-3 items-center flex-wrap">
          <span className="text-lg font-bold text-black mr-auto">
            Categories
          </span>
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
      </AnimatedSection>

      {/* Blog Grid */}
      <AnimatedSection>
        <section id="articles" className="px-6 py-8 pb-16 max-w-7xl mx-auto">
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
      </AnimatedSection>
    </main>
  );
}