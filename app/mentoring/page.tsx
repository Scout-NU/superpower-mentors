"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./mentoring.module.css";
import React from "react";
import * as apiService from "../../backend/utils/apiService";

type Mentor = {
  id: number;
  name: string;
  description: string;
  quote: string;
  image: string;
};

type ProgramItem = {
  id: number;
  title: string;
  content: string;
};

type Program = {
  id: number;
  title: string;
  description: string;
  image: string;
  items: ProgramItem[];
};

type RootLogo = {
  id: number;
  name: string;
  image: string;
};

type TimelineStep = {
  id: number;
  title: string;
  description: string;
};

type ValueCard = {
  title: string;
  back: string;
};

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Meet Tyler",
    description:
      "Professional music artist and sound engineer with millions of Spotify streams, as well as an OCD advocate and podcast host.",
    quote:
      "“Your differences can become your edge once you learn how to work with them instead of against them.”",
    image: "/mentor_tyler.png",
  },
  {
    id: 2,
    name: "Meet Eden",
    description:
      "Marketing agency CEO w/ ADHD partnering with brands such as Dove, Samsung, and Amazon.",
    quote:
      "“Confidence grows when you stop trying to fit a mold that was never built for you.”",
    image: "/mentor_eden.png",
  },
  {
    id: 3,
    name: "Meet Franck",
    description:
      "Growth strategist, educator, advocate, and technologist with ADHD.",
    quote:
      "“The right direction starts with understanding how your mind works, then building from there.”",
    image: "/mentor_franck.png",
  },
];

const roots: RootLogo[] = [
  { id: 1, name: "Apple", image: "/mentor_apple_logo.png" },
  {
    id: 2,
    name: "Northeastern University",
    image: "/mentor_northeastern_logo.jpg",
  },
  { id: 3, name: "Harvard University", image: "/mentor_harvard_logo.png" },
  { id: 4, name: "Hubspot", image: "/mentor_hubspot_logo.png" },
  { id: 5, name: "NASA", image: "/mentor_nasa_logo.png" },
  { id: 6, name: "Spotify", image: "/mentor_spotify_logo.png" },
  { id: 7, name: "United Nations", image: "/mentor_un_logo.png" },
  { id: 8, name: "US Figure Skating", image: "/mentor_skating_logo.png" },
  { id: 9, name: "Duke University", image: "/mentor_duke_logo.png" },
];

const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: "Get Matched",
    description:
      "During the mentor matching process, we learn about the needs of each mentee on an individual basis and match them to mentor who is the older version of them.",
  },
  {
    id: 2,
    title: "Meet Your Mentor",
    description:
      "Before mentorship begins, families meet and approve each mentor. These meetings allow both the mentor and the family to get to know each other and see if this match is the right fit.",
  },
  {
    id: 3,
    title: "In the Session",
    description:
      "We are focused on delivering content that is custom to each mentee; all activities, conversations, and needs are based on each mentee’s specific interests and age.",
  },
  {
    id: 4,
    title: "Family Matters",
    description:
      "Each month you and your child’s mentor hop on a call to debrief the sessions, set goals, and talk progress. This helps keep everyone on the same page throughout the relationship!",
  },
  {
    id: 5,
    title: "For the Parents",
    description:
      "The value of being a member of Superpower Mentors does not stop with your child. Parents gain access to our Facebook community, member only Q+As, expert interviews, weekly updates, and more!",
  },
];

const valueCards: ValueCard[] = [
  {
    title: "Neurodiversity",
    back:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Transitions",
    back:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Confidence",
    back:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Direction",
    back:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

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
    <div className={styles.circleDivider} aria-hidden="true">
      {circles.map((c, i) => (
        <span
          key={i}
          style={{
            width: `${c.w}px`,
            height: `${c.h}px`,
          }}
        />
      ))}
    </div>
  );
}

function ValuesSection() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesHeader}>
        <div className={styles.inner}>
          <h2 className={styles.valuesTitle}>How We Can Help</h2>
        </div>
      </div>

      <div className={styles.valuesBody}>
        <div className={styles.inner}>
          <div className={styles.valuesCardsWrap}>
            <div className={styles.valuesCardsColumn}>
              {[valueCards[0], valueCards[2]].map((card) => (
                <div key={card.title} className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <h3 className={styles.flipCardTitle}>{card.title}</h3>
                    </div>

                    <div className={styles.flipCardBack}>
                      <p className={styles.flipCardBackText}>{card.back}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <CircleDivider />

            <div className={styles.valuesCardsColumn}>
              {[valueCards[1], valueCards[3]].map((card) => (
                <div key={card.title} className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <h3 className={styles.flipCardTitle}>{card.title}</h3>
                    </div>

                    <div className={styles.flipCardBack}>
                      <p className={styles.flipCardBackText}>{card.back}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MentoringPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const valuesRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    timelineItemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index + 1);
          }
        },
        {
          threshold: 0.55,
          rootMargin: "-10% 0px -35% 0px",
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const refs = [
      { key: "values", ref: valuesRef },
      { key: "hero", ref: heroRef },
      { key: "timeline", ref: timelineRef },
      { key: "video", ref: videoRef },
      { key: "form", ref: formRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute("data-section");
          if (entry.isIntersecting && key) {
            setVisibleSections((prev) =>
              prev.includes(key) ? prev : [...prev, key]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    refs.forEach(({ key, ref }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", key);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const revealClass = (key: string) =>
    `${styles.revealSection} ${
      visibleSections.includes(key) ? styles.revealSectionVisible : ""
    }`;

  const midpoint = Math.ceil(roots.length / 2);
  const topRowRoots = roots.slice(0, midpoint);
  const bottomRowRoots = roots.slice(midpoint);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const body = Object.fromEntries(formData);
      await apiService.bookStrategyCall(body);
      form.reset();
    } catch (error) {
      console.log("Error submitting form", error);
    }
  };

  return (
    <main className={styles.page}>
      <div ref={valuesRef} className={revealClass("values")}>
        <ValuesSection />
      </div>

      <section ref={heroRef} className={`${styles.hero} ${revealClass("hero")}`}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Hear From our Mentors</h1>

          <div className={styles.grid}>
            {mentors.map((mentor) => (
              <article key={mentor.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  <h2 className={styles.name}>{mentor.name}</h2>
                  <p className={styles.text}>{mentor.description}</p>
                  <p className={styles.quote}>{mentor.quote}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.mentorTreeSection}>
            <p className={styles.mentorTreeLabel}>DISCOVER OUR MENTORS</p>
            <div className={styles.mentorTreeImageWrap}>
              <img
                src="/images/mentortree.png"
                alt="Mentor Tree"
                className={styles.mentorTreeImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={timelineRef}
        className={`${styles.howItWorksSection} ${revealClass("timeline")}`}
      >
        <div className={styles.inner}>
          <h2 className={styles.howItWorksTitle}>How It Works</h2>

          <div className={styles.purpleTimeline}>
            <div className={styles.purpleTimelineRail} aria-hidden="true" />

            {timelineSteps.map((step, index) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep > step.id;

              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    timelineItemRefs.current[index] = el;
                  }}
                  className={styles.purpleTimelineRow}
                >
                  <div
                    className={`${styles.purpleTimelineTitleWrap} ${
                      isActive
                        ? styles.purpleTimelineTitleWrapActive
                        : isPast
                        ? styles.purpleTimelineTitleWrapPast
                        : ""
                    }`}
                  >
                    <h3 className={styles.purpleTimelineTitle}>{step.title}</h3>
                  </div>

                  <div className={styles.purpleTimelineCenter}>
                    <span
                      className={`${styles.purpleTimelineDot} ${
                        isActive
                          ? styles.purpleTimelineDotActive
                          : isPast
                          ? styles.purpleTimelineDotPast
                          : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`${styles.purpleTimelineDescriptionWrap} ${
                      isActive
                        ? styles.purpleTimelineDescriptionWrapActive
                        : isPast
                        ? styles.purpleTimelineDescriptionWrapPast
                        : ""
                    }`}
                  >
                    <p className={styles.purpleTimelineDescription}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={videoRef}
        className={`${styles.videoCtaSection} ${revealClass("video")}`}
        style={{
          marginTop: "-4rem",
          paddingTop: "2rem",
        }}
      >
        <div className={styles.inner}>
          <h2 className={styles.videoCtaTitle}>
            Unlock Your Child&apos;s Full Potential
          </h2>
          <p className={styles.videoCtaSubtitle}>
            Watch “Dear Younger Self,” our message to those struggling with
            learning differences.
          </p>

          <div className={styles.videoCtaGrid}>
            <div className={styles.videoFrame}>
              <iframe
                src="https://www.youtube.com/embed/RiwiAOCSVJY"
                title="Dear Younger Self"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoEmbed}
              />
            </div>

            <div className={styles.videoCtaContent}>
              <p className={styles.videoCtaText}>
                Every mentor on our team, including our founder Jake Sussman,
                truly understands the challenges of being misunderstood, as they
                have all navigated their own learning differences.
              </p>

              <a
                href="#strategy-call-form"
                className={`${styles.programButton} glow-btn glow-btn--alt`}
              >
                Find Your Mentor
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={formRef}
        id="strategy-call"
        className={`${styles.formSection} ${revealClass("form")}`}
      >
        <div className={styles.formInner}>
          <h2 className={styles.formTitle}>
            Book Your Free Strategy Call Today!
          </h2>
          <p className={styles.formSubtitle}>
            Meet with Founder and Program Director of Superpower Mentors, Jake
            Sussman, by filling out this form!
          </p>

          <form
            id="strategy-call-form"
            className={styles.strategyForm}
            onSubmit={onFormSubmit}
          >
            <div className={styles.formGrid}>
              <div className={styles.fieldGroup}>
                <label htmlFor="firstName" className={styles.formLabel}>
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="lastName" className={styles.formLabel}>
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="phoneNumber" className={styles.formLabel}>
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.fieldGroupFull}>
              <label htmlFor="descriptionType" className={styles.formLabel}>
                What most closely describes you?
              </label>
              <div className={styles.selectWrap}>
                <select
                  id="descriptionType"
                  name="descriptionType"
                  className={styles.formSelect}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="parent">Parent</option>
                  <option value="student">Student</option>
                  <option value="guardian">Guardian</option>
                  <option value="educator">Educator</option>
                  <option value="partner">Organization/Partner</option>
                  <option value="other">Other</option>
                </select>

                <span className={styles.selectIcon} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className={styles.formButtonWrap}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className={styles.formCornerLeft} aria-hidden="true">
          <span className={styles.formCircleSmallTop}></span>
          <span className={styles.formCircleLarge}></span>
          <span className={styles.formCircleSmallBottom}></span>
        </div>

        <div className={styles.formCornerRight} aria-hidden="true">
          <span className={styles.formCircleSmallTop}></span>
          <span className={styles.formCircleLarge}></span>
          <span className={styles.formCircleSmallBottom}></span>
        </div>
      </section>
    </main>
  );
}