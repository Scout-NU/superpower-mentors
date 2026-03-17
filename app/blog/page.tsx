"use client";

import { useState } from "react";

const CATEGORIES = ["All", "ADHD", "Autism", "Mentoring", "Students", "Parenting", "Success Stories"];

const FEATURED = {
  title: "Article Title Article Title",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  tags: ["ADHD", "Parenting", "Success Stories"],
};

const ARTICLES = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  date: "Jan 1, 2025",
  tag: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1],
  title: "Lorem ipsum dolor sit amet",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}));

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
      className="rounded-full px-3 py-1 text-xs font-semibold border-2 border-black transition-colors whitespace-nowrap"
      style={{
        backgroundColor: active ? "#000" : "transparent",
        color: active ? "#fff" : "#000",
      }}
    >
      {label}
    </button>
  );
}

function ArticleCard({ article }: { article: (typeof ARTICLES)[number] }) {
  return (
    <div className="flex flex-col bg-white h-full items-center pt-7 pb-0 gap-4">
      <div className="flex justify-between items-center w-4/5">
        <span className="text-xs text-zinc-400">{article.date}</span>
        <TagPill label={article.tag} />
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.tag === activeCategory);

  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero */}
      <section className="px-6 pt-8 pb-10 max-w-7xl mx-auto">
        <h1 className="font-light leading-none mb-8 text-black text-center" style={{ fontSize: "clamp(64px, 10vw, 120px)" }}>
          Insights &amp; Stories
        </h1>

        <div className="grid grid-cols-2 gap-12 items-start mb-6">
          <h2 className="font-light text-black leading-snug" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
            {FEATURED.title}
          </h2>
          <div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              {FEATURED.excerpt}
            </p>
            <div className="flex gap-2 flex-wrap items-center">
              {FEATURED.tags.map((t) => (
                <TagPill key={t} label={t} />
              ))}
              <button
                className="ml-auto bg-zinc-400 text-white text-xs font-bold px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <ImgPlaceholder className="w-full h-[480px]" />
      </section>

      {/* Category Filter Bar */}
      <section className="px-6 py-3 max-w-7xl mx-auto flex gap-3 items-center flex-wrap">
        <span className="text-sm font-bold text-black mr-auto">Categories</span>
        {CATEGORIES.map((c) => (
          <TagPill
            key={c}
            label={c}
            active={activeCategory === c}
            onClick={() => setActiveCategory(c)}
          />
        ))}
      </section>

      {/* Blog Grid */}
      <section className="px-6 py-8 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-3">
          {filtered.map((article, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const totalRows = Math.ceil(filtered.length / 3);
            const isLastInRow = col === 2 || i === filtered.length - 1;
            const isLastRow = row === totalRows - 1;
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
