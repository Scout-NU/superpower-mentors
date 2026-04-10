"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/frontend/AnimatedSection";
import Image from "next/image";

// Color constants
const BLACK = "#000000";
const PURPLE = "#571377";
const BLUE = "#001EDF";
const DARK_PURPLE = "#350B49";
const LIGHT_PURPLE = "#B959F1";

function ImgPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-gray-300 flex items-center justify-center ${className}`}>
      <span className="text-gray-500 text-xs">IMG</span>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-white pt-32 pb-0 px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-full">
          <h1
            className="font-bold leading-none text-black uppercase"
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "96px",
              letterSpacing: "-0.02em",
            }}
          >
            RELATE.
            <br />
            <span style={{ color: PURPLE }}>EMPOWER.</span>
            <br />
            TRANSFORM.
          </h1>

          <div className="mt-6 flex justify-between items-start gap-12">
            <p
              className="text-zinc-700 text-lg"
              style={{ fontFamily: "DM Sans", maxWidth: "600px" }}
            >
              Trusted online mentorship to launch youth with ADHD, Dyslexia,
              Autism, and other learning differences.
            </p>

            <div className="flex gap-4 flex-shrink-0">
              <button
                style={{
                  backgroundColor: BLUE,
                  fontFamily: "DM Sans",
                  width: "234px",
                  height: "67px",
                }}
                className="glow-btn glow-btn--alt text-white font-semibold rounded-full"
              >
                Start Your Journey
              </button>

              <button
                style={{
                  backgroundColor: BLACK,
                  fontFamily: "DM Sans",
                  width: "234px",
                  height: "67px",
                }}
                className="glow-btn text-white font-semibold rounded-full"
              >
                Become a Mentor
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-16 rounded-3xl overflow-hidden relative z-20 mx-auto mb-[0]"
          style={{ width: "1373px", height: "771px", maxWidth: "100%" }}
        >
          <ImgPlaceholder className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

function MeetMentorsSection() {
  const mentors = [
    {
      name: "Christiana W.",
      bio: "Los Angeles, USA. Dyslexic. Art Director, Advertising, Social Media Influencer, Semi-Professional Athlete",
      tags: ["Los Angeles, USA", "Dyslexia"],
      image: "/home_christiana.png",
    },
    {
      name: "Jeff S.",
      bio: "Bronx, NY. ADHD, Aerospace Research Engineer @ NASA, Blockchain Affiliate Marketer.",
      tags: ["Bronx, NY", "Dyslexia"],
      image: "/home_jeff.png",
    },
    {
      name: "Dylann C.",
      bio: "Philadelphia, USA. WS, ADHD, Educator, Writer, Artist, Blogger, Neurodivergent, Entrepreneur.",
      tags: ["Los Angeles, USA", "Dyslexia"],
      image: "/home_dylann.png",
    },
  ];

  return (
    <section style={{ backgroundColor: PURPLE }} className="pt-96 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl font-bold text-white uppercase mb-12"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          MEET OUR MENTORS
        </h2>

        <div className="flex gap-6 justify-center pt-4">
          {mentors.map((m, i) => (
            <div
              key={i}
              className="border-0 border-black bg-white rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,201,42,0.6)]"
              style={{
                width: "380px",
                height: "417px",
              }}
            >
              <div style={{ width: "380px", height: "206px" }} className="rounded-t-3xl overflow-hidden relative">
              <Image
                src={m.image || "/placeholder.jpg"}
                alt={m.name}
                fill
                className="object-cover"
              />
            </div>

              <div className="p-6 flex flex-col flex-1">
                <p
                  className="font-bold text-black text-base mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  {m.name}
                </p>

                <p
                  className="text-zinc-600 text-xs leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {m.bio}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {m.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{ backgroundColor: PURPLE, fontFamily: "DM Sans" }}
                      className="text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CircleDivider() {
  const circles = [
    { w: 20, h: 20 },
    { w: 28, h: 28 },
    { w: 40, h: 40 },
    { w: 58, h: 58 },
    { w: 72, h: 72 },
    { w: 46, h: 46 },
    { w: 26, h: 26 },
    { w: 18, h: 18 },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
        paddingTop: "110px",
      }}
      aria-hidden="true"
    >
      {circles.map((c, i) => (
        <span
          key={i}
          style={{
            display: "block",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #FFE941, #FFC92A)",
            width: c.w,
            height: c.h,
          }}
        />
      ))}
    </div>
  );
}

function RealImpactSection() {
  const programs = [
    { title: "Neurodiversity" },
    { title: "Transitions" },
    { title: "Confidence" },
    { title: "Direction" },
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl font-bold text-black uppercase mb-16"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          HOW WE CAN HELP
        </h2>

        <div className="flex justify-center items-start gap-6 mb-12">
          <div className="flex flex-col gap-6">
            <div className="border-2 border-[#571377] w-[401px] h-[272px] rounded-[22.09px] bg-white flex items-center justify-center">
              <h3
                className="font-bold text-center text-[48px] text-[#571377]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                {programs[0].title}
              </h3>
            </div>

            <div className="border-2 border-[#571377] w-[401px] h-[272px] rounded-[22.09px] bg-white flex items-center justify-center">
              <h3
                className="font-bold text-center text-[48px] text-[#571377]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                {programs[2].title}
              </h3>
            </div>
          </div>

          <CircleDivider />

          <div className="flex flex-col gap-6">
            <div className="border-2 border-[#571377] w-[401px] h-[272px] rounded-[22.09px] bg-white flex items-center justify-center">
              <h3
                className="font-bold text-center text-[48px] text-[#571377]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                {programs[1].title}
              </h3>
            </div>

            <div className="border-2 border-[#571377] w-[401px] h-[272px] rounded-[22.09px] bg-white flex items-center justify-center">
              <h3
                className="font-bold text-center text-[48px] text-[#571377]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                {programs[3].title}
              </h3>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "48px",
          }}
        >
          <Link href="/mentoring">
            <button
              type="button"
              style={{
                border: 0,
                borderRadius: "20px",
                background: BLUE,
                color: "#fff",
                fontFamily: "DM Sans",
                fontSize: "1rem",
                fontWeight: 700,
                padding: "18px 34px",
                cursor: "pointer",
              }}
              className="glow-btn glow-btn--alt"
            >
              Our Programs
            </button>
          </Link>
        </div>

        <p
          className="text-2xl font-bold text-black mb-12"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          30% Reduction In School Dropout Rates
        </p>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="bg-gray-200 rounded-2xl h-64"></div>
          </div>

          <div className="col-span-8 bg-gray-100 rounded-2xl p-8">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Case
            </h3>

            <p
              className="text-sm text-zinc-700 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              College Transition (Navigating Freshman Year). Superpower Mentors
              was hired to use their successful mentorship model to lower the
              high dropout rate among Freshman. After five years of a thriving
              partnership, the results are proven to be a success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 rounded-2xl p-8">
            <blockquote
              className="text-sm text-zinc-700 leading-relaxed italic mb-4"
              style={{ fontFamily: "DM Sans" }}
            >
              "We are proud to say that while nationally the college dropout
              rate between freshman and sophomore years is 30%, the dropout rate
              is ZERO for students who have had a Morelli Foundation
              (Superpower) Mentor!"
            </blockquote>

            <p
              className="font-bold text-sm text-black"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Barbara Wirostko Morelli
            </p>

            <p
              className="text-xs text-zinc-500"
              style={{ fontFamily: "DM Sans" }}
            >
              Chair & Founder @ Joseph James Morelli Foundation
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              What This Means
            </h3>

            <p
              className="text-sm text-zinc-700 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              For families considering mentorship for their neurodivergent
              children, this partnership proves that with the right support,
              academic success is possible. The Morelli Foundation case study
              validates the approach: matching students with mentors who
              understand their journey creates lasting impact that goes far
              beyond a single school year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      n: 1,
      title: "Get Matched",
      body: "During the mentor matching process, we learn about the needs of each mentee on an individual basis and match them to mentor who is the older version of them.",
    },
    {
      n: 2,
      title: "Meet Your Mentor",
      body: "Before mentorship begins, families meet and approve each mentor. These meetings allow both the mentor and the family to get to know each other and see if the match is the right fit.",
    },
    {
      n: 3,
      title: "In the Session",
      body: "We are focused on delivering content that is custom to each mentee; all activities, conversations, and needs are based on each mentee's specific interests and age.",
    },
    {
      n: 4,
      title: "Family Matters",
      body: "Each month you and your child's mentor hop on a call to debrief the sessions, set goals, and talk progress. This helps keep everyone on the same page throughout the relationship!",
    },
    {
      n: 5,
      title: "For the Parents",
      body: "The value of being a member of Superpower Mentors does not stop with your child. Parents gain access to our Facebook community, member only Q+As, expert interviews, weekly updates, and more!",
    },
  ];

  return (
    <section style={{ backgroundColor: PURPLE }} className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-5xl font-bold text-white uppercase mb-16"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          HOW IT WORKS
        </h2>

        <div className="relative">
          <div
            className="absolute left-7 top-0 w-px bg-white opacity-40"
            style={{ height: "calc(100% - 80px)" }}
          ></div>

          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="relative flex gap-6 items-start">
                <div
                  className="w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center flex-shrink-0 relative z-10 font-bold text-2xl"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  {s.n}
                </div>

                <div className="bg-white rounded-2xl p-6 flex-1">
                  <p
                    className="font-bold text-black text-lg mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    {s.title}
                  </p>

                  <p
                    className="text-zinc-700 text-sm leading-relaxed"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const testimonials = [
    {
      text: "The transition from high school to college is tough for anyone. Now throw in LD, ADHD, and virtual college. My daughter said for the first time in her life, after numerous unsuccessful therapists and learning consultants, she is actually excited to be able to use and apply the things they are working on. Our Superpower Mentor gets her because she was her!",
      author: "Liz R",
      location: "Austin, Texas",
      top: "0%",
      left: "0%",
    },
    {
      text: "Our Superpower Mentor offers something that no other professional can, his full attention and belief that my son will succeed. He creates positive bonds with his mentees like no one else. Our mentor looks for small wins to build confidence, and it is working. I am grateful for all you are doing for my son.",
      author: "John D",
      location: "London, England",
      top: "15%",
      left: "30%",
    },
    {
      text: "Our son has really opened up and gained so much confidence while working with Superpower Mentor in just a short time. He is gaining such an understanding of how his own mind works through their conversations and is viewing these differences as strengths instead of a challenge.",
      author: "Ashley P",
      location: "Nashville, Tennessee",
      top: "5%",
      left: "55%",
    },
    {
      text: "Our Superpower Mentor has a very intuitive way of reaching my son and can turn things around in sessions that I never thought possible!",
      author: "Diana T",
      location: "Long Island, New York",
      top: "10%",
      left: "10%",
    },
    {
      text: "My son's relationship with his Superpower Mentor has been pivotal.",
      author: "Bethany K",
      location: "Miami, Florida",
      top: "20%",
      left: "40%",
    },
    {
      text: "IN JUST THREE SESSIONS, my son opened up in ways like I have never seen before. I was holding back tears!",
      author: "Rebecca H",
      location: "Austin, Texas",
      top: "8%",
      left: "65%",
    },
  ];

  const goTo = (idx: number) => {
    if (idx === activeIdx) return;

    setFading(true);

    setTimeout(() => {
      setActiveIdx(idx);
      setFading(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);

      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
        setFading(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const QuoteMark = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="70"
      viewBox="0 0 78 44"
      fill="none"
    >
      <path
        d="M19.0576 0C20.0132 0.000111737 20.6958 0.279479 21.1056 0.837638C21.652 1.25667 21.9264 1.88587 21.9264 2.72392C21.9264 3.56202 21.6521 4.33061 21.1056 5.02903C20.5594 5.72703 19.8768 6.21555 19.0576 6.4949C16.3254 7.333 14.2067 8.87018 12.704 11.1051C11.3382 13.3398 10.6561 15.6445 10.656 18.0188C10.656 21.5109 11.8168 23.8864 14.1392 25.1435C16.4614 26.4006 18.1696 27.5877 19.2624 28.7051C20.3551 29.8226 20.9008 31.4994 20.9008 33.7341C20.9007 36.5276 19.9445 38.9715 18.032 41.0667C16.1195 43.0222 14.1388 44 12.0896 44C8.12825 43.9999 5.1227 42.3943 3.0736 39.182C1.02445 35.9693 0 31.9869 0 27.2376C0.00014303 23.0474 1.16098 18.8569 3.48321 14.6667C5.80548 10.4764 8.53815 6.98497 11.68 4.19139C14.822 1.39773 17.2817 0 19.0576 0Z"
        fill="#FFC92A"
      />
      <path
        d="M46.0576 0C47.0132 0.000111737 47.6958 0.279479 48.1056 0.837638C48.652 1.25667 48.9264 1.88587 48.9264 2.72392C48.9264 3.56202 48.6521 4.33061 48.1056 5.02903C47.5594 5.72703 46.8768 6.21555 46.0576 6.4949C43.3254 7.333 41.2067 8.87018 39.704 11.1051C38.3382 13.3398 37.6561 15.6445 37.656 18.0188C37.656 21.5109 38.8168 23.8864 41.1392 25.1435C43.4614 26.4006 45.1696 27.5877 46.2624 28.7051C47.3551 29.8226 47.9008 31.4994 47.9008 33.7341C47.9007 36.5276 46.9445 38.9715 45.032 41.0667C43.1195 43.0222 41.1388 44 39.0896 44C35.1283 43.9999 32.1227 42.3943 30.0736 39.182C28.0245 35.9693 27 31.9869 27 27.2376C27.0001 23.0474 28.161 18.8569 30.4832 14.6667C32.8055 10.4764 35.5382 6.98497 38.68 4.19139C41.822 1.39773 44.2817 0 46.0576 0Z"
        fill="#FFC92A"
      />
    </svg>
  );

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl font-bold text-black uppercase mb-16"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          HEAR FROM OTHER PARENTS
        </h2>

        <div style={{ position: "relative", width: "100%", height: "360px" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl p-10 bg-black absolute"
              style={{
                top: t.top,
                left: t.left,
                width: "380px",
                opacity: activeIdx === i ? (fading ? 0 : 1) : 0,
                transition: "opacity 0.4s ease",
                pointerEvents: activeIdx === i ? "auto" : "none",
              }}
            >
              <div className="absolute" style={{ left: "-16px", top: "-12px" }}>
                <QuoteMark />
              </div>

              <p
                className="text-base leading-relaxed mb-4 text-white"
                style={{ fontFamily: "DM Sans" }}
              >
                {t.text}
              </p>

              <p
                className="font-bold text-sm text-white"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                {t.author}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === activeIdx ? "32px" : "10px",
                height: "10px",
                borderRadius: "999px",
                background: i === activeIdx ? PURPLE : "#d1d5db",
                border: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const faqs = [
    {
      q: "Why should my child have a mentor?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "What are the benefits of mentoring?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "What is the difference between tutoring and mentoring?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "How do you track your impact?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "Who are your mentors?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const toggle = (i: number) => {
    setOpenIndices((prev) =>
      prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
    );
  };

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-12 bg-white">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2
                className="text-black mb-8"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "48px",
                  fontWeight: 700,
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div
              style={{ backgroundColor: DARK_PURPLE, width: "662px" }}
              className="rounded-3xl p-8"
            >
              {faqs.map((faq, i) => {
                const isOpen = openIndices.includes(i);

                return (
                  <div key={i}>
                    <div
                      className="py-5 flex justify-between items-center cursor-pointer gap-4"
                      onClick={() => toggle(i)}
                    >
                      <p
                        className="text-white font-medium text-base"
                        style={{ fontFamily: "DM Sans" }}
                      >
                        {faq.q}
                      </p>

                      <span
                        className="text-white text-sm flex-shrink-0"
                        style={{
                          display: "inline-block",
                          transform: isOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.25s ease",
                        }}
                      >
                        ▼
                      </span>
                    </div>

                    <div
                      style={{
                        maxHeight: isOpen ? "200px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <p
                        className="text-white text-sm leading-relaxed pb-4 opacity-80"
                        style={{ fontFamily: "DM Sans" }}
                      >
                        {faq.a}
                      </p>
                    </div>

                    {i < faqs.length - 1 && (
                      <div
                        style={{ backgroundColor: LIGHT_PURPLE, height: "1px" }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection>
        <MeetMentorsSection />
      </AnimatedSection>

      <AnimatedSection>
        <RealImpactSection />
      </AnimatedSection>

      <AnimatedSection>
        <HowItWorksSection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>
    </main>
  );
}