"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    id: 0,
    logo: "/images/jm-logo.png",
    tagline: "Empowering Students with Dyslexia",
    image: "partnerships_morelli.jpg",
    quote:
      '"We are proud to say that while nationally the college dropout rate between freshman and sophomore years is 30%, the dropout rate is ZERO for students who have had a Morelli Foundation (Superpower) Mentor!"',
    author: "Barbara Wirostko Morelli",
    authorTitle: "Co-Founder of Joseph James Morelli Foundation",
  },
  {
    id: 1,
    logo: null,
    name: "",
    subtitle: "",
    tagline: "",
    image: null,
    quote:
      '"I\'m shouting from the rooftops because what you have created has changed my son\'s life, and I cannot thank you enough."',
    author: "SPM parent",
    authorTitle: "",
  },
];

const PARTNERS = [
  { name: "Redwood Schools", logo: "partnerships_redwood.png" },
  { name: "ALDS - Association of LD Schools", logo: "partnerships_alds.png" },
  {
    name: "Freudigman & Billings LLC",
    logo: "partnerships_freudigman.png",
  },
];

const BENEFITS = [
  {
    icon: "/partnerships_transition.png",
    title: "Transition Program",
    description:
      "Helping to ensure successful transitions at every educational stage, and beyond the walls of the school.",
  },
  {
    icon: "/partnerships_intervention.png",
    title: "Intervention Program",
    description:
      "Providing support to students who need it most. Offering a custom-matched mentor for struggling students.",
  },
  {
    icon: "/partnerships_alumni.png",
    title: "Alumni Engagement",
    description:
      "Activate your alumni and community to pay it forward. Guiding and mentoring the next generation.",
  },
  {
    icon: "/partnerships_workshops.png",
    title: "Live Workshops",
    description:
      "SPM Provides in-depth customized workshops for parents and teachers to support at-risk students.",
  },
];

const PARTNER_QUOTE = {
  heading: "What partners have to say:",
  quote:
    '"I\'ve seen students beaming from the impact of Superpower Mentors gaining confidence in relationships, clarity around careers, and the support they need to navigate the real layers of adulting. This was the missing piece."',
  author: "APRIL MILLER",
  authorTitle: "FOUNDER\nLD COLLEGE CONSULTANTS",
  logo: "LD College Expert, LLC",
};

function ImgPlaceholder({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`bg-zinc-200 flex items-center justify-center ${className}`} style={style}>
      <span className="text-zinc-400 text-xs">IMG</span>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col gap-3 shadow-sm" style={{ minWidth: "280px", maxWidth: "320px", minHeight: "480px" }}>
      {testimonial.image ? (
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-40 object-cover rounded"
        />
      ) : testimonial.logo ? (
        <ImgPlaceholder className="w-full h-32 rounded" />
      ) : (
        <ImgPlaceholder className="w-full h-32 rounded" />
      )}

      {testimonial.name && (
        <div className="text-center">
          <p className="font-extrabold text-sm text-black leading-tight">
            {testimonial.name}
          </p>
          <p className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">
            {testimonial.subtitle}
          </p>
          <p className="text-[9px] text-zinc-500 italic">{testimonial.tagline}</p>
        </div>
      )}

      <p className="text-lg text-black leading-relaxed">{testimonial.quote}</p>

      <div className="mt-auto flex items-center gap-2">
        {testimonial.authorTitle && (
          <div className="w-6 h-6 rounded-full bg-zinc-300 flex-shrink-0" />
        )}
        <div>
          <p className="text-xs font-bold text-black">{testimonial.author}</p>
          {testimonial.authorTitle && (
            <p className="text-[9px] text-zinc-400">{testimonial.authorTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ benefit }: { benefit: (typeof BENEFITS)[number] }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-3">
      <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 object-contain" />
      <p className="font-extrabold text-lg text-black">{benefit.title}</p>
      <p className="text-sm text-zinc-600 leading-relaxed">
        {benefit.description}
      </p>
    </div>
  );
}

function PartnerQuoteCard() {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col gap-4 text-center justify-center"
      style={{
        background: "#571377",
        border: "3px solid rgba(255,255,255,0.4)",
      }}
    >
      <p className="text-white font-bold italic text-lg">{PARTNER_QUOTE.heading}</p>
      <p className="text-white text-base leading-relaxed">{PARTNER_QUOTE.quote}</p>
      <div className="flex justify-between items-end mt-2">
        <img src="partnerships_ld_logo.png" alt="LD College Expert, LLC" className="h-15 object-contain" />
        <img src="partnerships_april_miller.png" alt="April Miller, Founder, LD College Consultants" className="h-9 object-contain" />
      </div>
    </div>
  );
}

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-44" style={{ background: "#571377" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-2 items-center">
          <div>
          <h1
            className="text-white leading-[1.05] mb-6 max-w-[700px]"
            style={{ fontSize: "clamp(48px, 6vw, 90px)" }}
          >
              The Impact Speaks for Itself.
            </h1>
            <p className="text-white text-lg leading-relaxed opacity-90"
               style={{ fontSize: "clamp(18px, 1.6vw, 22px)" }}
            >
              We offer a full-service mentorship solution for your organization
              designed to be customized, implemented, and managed by Superpower
              Mentors
            </p>
          </div>
          <img src="partnerships_impact.jpg" alt="Impact" className="w-3/4 ml-auto rounded-lg object-cover" style={{ aspectRatio: "1 / 1" }} />
        </div>
      </section>

      {/* How We're Changing the Game */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 items-start">
          {/* Left: Heading */}
          <div>
            <h2
              className="font-bold text-black leading-tight"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              How
              <br />
              We're 🚀
              <br />
              Changing
              <br />
              the Game
            </h2>
          </div>

          {/* Center & Right: Testimonial Cards */}
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Dot Image Placeholder */}
        <div className="flex justify-center mt-16 mb-2">
          <img src="partnerships_dots.png" />
        </div>
      </section>

      {/* Our Partners */}
      <section className="px-6 pt-4 pb-12 max-w-7xl mx-auto text-center">
        <h2
          className="font-bold text-black mb-10"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Our Partners
        </h2>
        <div className="flex justify-center items-center gap-16 flex-wrap">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2">
              <img src={p.logo} alt={p.name} className="w-48 h-16 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* How Our Partners Benefit */}
      <section className="px-6 py-20 mt-8" style={{ background: "#571377" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-white text-center mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            How Our Partners Benefit
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              <BenefitCard benefit={BENEFITS[0]} />
              <BenefitCard benefit={BENEFITS[2]} />
            </div>

            {/* Center: Partner Quote */}
            <div className="flex items-center">
              <PartnerQuoteCard />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              <BenefitCard benefit={BENEFITS[1]} />
              <BenefitCard benefit={BENEFITS[3]} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}