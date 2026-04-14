"use client";

import { useState } from "react";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ARTICLES } from "@/data/articles";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const CATEGORIES = ["ADHD", "Autism", "Mentoring", "Students"];

const FEATURED = {
  title: "Case: College Transition",
  excerpt:
    '"We are proud to say that while nationally the college dropout rate between freshman and sophomore years is 30%, the dropout rate is ZERO for students who have had a Morelli Foundation (Superpower) Mentor!"',
  tags: ["Mentoring", "Students"],
};

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

function ImgPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-zinc-200 flex items-center justify-center ${className}`}
    >
      <span className="text-zinc-400 text-xs">IMG</span>
    </div>
  );
}

function ArticleCard({
  article,
}: {
  article: (typeof ARTICLES)[number];
}) {
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
        <ImgPlaceholder className="w-4/5 h-40" />
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
  const [activeCategory, setActiveCategory] = useState<string | null>(
    null
  );

  const filtered = activeCategory
    ? ARTICLES.filter((a) => a.tags.includes(activeCategory))
    : ARTICLES;

  return (
    <main
      className={`${spaceGrotesk.className} min-h-screen pt-24 bg-white`}
    >
      {/* Hero */}
      <section className="px-6 py-16" style={{ background: "#571377" }}>
        <div className="max-w-7xl mx-auto">
          <h1
            className={`${jakarta.className} text-white leading-none text-center`}
            style={{
              fontSize: "clamp(64px, 10vw, 120px)",
              fontWeight: 500,
            }}
          >
            Insights & Stories
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
              <button className="glow-btn glow-btn--alt ml-auto bg-blue-600 text-white text-xs font-bold px-5 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>

        <ImgPlaceholder className="w-full h-[480px]" />
      </section>

      {/* Category Filter Bar */}
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