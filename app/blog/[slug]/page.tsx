import { notFound } from "next/navigation";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ARTICLES, type Article, type ContentBlock } from "@/data/articles";
import AnimatedSection from "@/frontend/AnimatedSection";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

function TagPill({ label }: { label: string }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-[10px] font-semibold border-2"
      style={{ color: "#2563eb", borderColor: "#2563eb" }}
    >
      {label}
    </span>
  );
}

function BodyBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          className="font-bold text-black mt-10 mb-4"
          style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="font-bold text-black mt-8 mb-3 text-xl">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-zinc-700 leading-relaxed mb-4 text-base">
          {block.text}
        </p>
      );
    case "italic":
      return (
        <p className="text-zinc-700 leading-relaxed mb-4 text-base italic">
          {block.text}
        </p>
      );
  }
}

function getRelatedArticles(current: Article): Article[] {
  return ARTICLES.filter(
    (a) =>
      a.id !== current.id && a.tags.some((t) => current.tags.includes(t))
  ).slice(0, 2);
}


export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) return notFound();

  const related = getRelatedArticles(article);

  return (
    <main
      className={`${spaceGrotesk.className} min-h-screen bg-white pt-24`}
    >
      {}
      <AnimatedSection>
        <section className="px-6 py-20" style={{ background: "#571377" }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`${jakarta.className} text-white leading-tight`}
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                fontWeight: 500,
              }}
            >
              {article.title}
            </h1>
          </div>
        </section>
      </AnimatedSection>

      {}
      <AnimatedSection>
        <section className="px-6 py-6 max-w-4xl mx-auto">
          <div className="flex gap-2 mt-4">
            {article.tags.map((t) => (
              <TagPill key={t} label={t} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {}
      {article.image && (
        <AnimatedSection>
          <section className="px-6 max-w-4xl mx-auto">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto max-h-[520px] object-cover"
            />
          </section>
        </AnimatedSection>
      )}

      <AnimatedSection>
        <section className="px-6 py-6 max-w-4xl mx-auto">
          <div className="flex gap-2 mt-4">
            <p className="text-lg font-bold text-black leading-relaxed">
            {article.excerpt}
          </p>
          </div>
        </section>
      </AnimatedSection>

      {}
      <AnimatedSection>
        <article className="px-6 py-12 max-w-3xl mx-auto">
          {article.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}
        </article>
      </AnimatedSection>

      {}
      {related.length > 0 && (
        <AnimatedSection>
          <section className="px-6 py-12 max-w-4xl mx-auto border-t-2 border-black">
            <h2
              className="font-bold text-black mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Related Stories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="group block"
                >
                  {r.image && (
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-48 object-cover mb-3"
                    />
                  )}
                  <p className="font-bold text-sm text-black group-hover:text-blue-600 transition-colors">
                    {r.title}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        </AnimatedSection>
      )}
    </main>
  );
}