"use client";

import { useState } from "react";
import React from "react";
import styles from "./mentoring.module.css";
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

const programs: Program[] = [
  {
    id: 1,
    title: "Neurodiversity & Confidence",
    description:
      "Program description coming soon... please reach out to us at info@superpowermentors.com for more information.",
    image: "/mentor_kids.jpg",
    items: [
      {
        id: 1,
        title: "Neurodiversity",
        content:
          "This program helps younger students build confidence, communication, and healthy routines while learning how to understand their strengths.",
      },
      {
        id: 2,
        title: "Confidence",
        content:
          "The most common age in our program is 11-14 year olds. In this bracket, your child will dive into deeper concepts, learn how to embrace their Superpower, and work through challenges like bullying, communication, and emotional expression.",
      },
    ],
  },
  {
    id: 2,
    title: "Transition & Direction",
    description:
      "Program description coming soon... please reach out to us at info@superpowermentors.com for more information.",
    image: "/mentor_hs.jpg",
    items: [
      {
        id: 1,
        title: "Transitions",
        content:
          "Students get support with identity, academic pressure, confidence, goal setting, and preparing for the transition into college or work.",
      },
      {
        id: 2,
        title: "Direction",
        content:
          "College students get guidance on independence, time management, burnout, belonging, and staying on track through the hardest transition years.",
      },
    ],
  },
];

function CircleDivider() {
  return (
    <div className={styles.circleDivider} aria-hidden="true">
      <span className={styles.circle1}></span>
      <span className={styles.circle2}></span>
      <span className={styles.circle3}></span>
      <span className={styles.circle4}></span>
      <span className={styles.circle5}></span>
      <span className={styles.circle6}></span>
      <span className={styles.circle7}></span>
      <span className={styles.circle8}></span>
    </div>
  );
}

export default function MentoringPage() {
  const [openItems, setOpenItems] = useState<Record<number, number[]>>({
    1: [],
    2: [],
  });

  const toggleItem = (programId: number, itemId: number) => {
    setOpenItems((prev) => {
      const current = prev[programId] || [];
      const isOpen = current.includes(itemId);

      return {
        ...prev,
        [programId]: isOpen
          ? current.filter((id) => id !== itemId)
          : [...current, itemId],
      };
    });
  };

  const midpoint = Math.ceil(roots.length / 2);
  const topRowRoots = roots.slice(0, midpoint);
  const bottomRowRoots = roots.slice(midpoint);

  const onFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const body = Object.fromEntries(formData);
      await apiService.bookStrategyCall(body);
      // clear form fields
      e.target.reset();
    } catch (error) {
      console.log("Error submitting form", error);
      // show a toast message indicating failure?
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
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
        </div>
      </section>

      <section className={styles.programsSection}>
        <div className={styles.inner}>
          <h2 className={styles.programsTitle}>Our Value Programs</h2>

          <div className={styles.programsLayout}>
            <CircleDivider />

            <article className={styles.programCard}>
              <div className={styles.programImageWrap}>
                <img
                  src={programs[0].image}
                  alt={programs[0].title}
                  className={styles.programImage}
                />
              </div>

              <h3 className={styles.programName}>{programs[0].title}</h3>
              <p className={styles.programDescription}>
                {programs[0].description}
              </p>

              <div className={styles.accordionGroup}>
                {programs[0].items.map((item) => {
                  const isOpen = openItems[programs[0].id].includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className={`${styles.accordionItem} ${
                        isOpen ? styles.accordionItemOpen : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={styles.accordionTrigger}
                        onClick={() => toggleItem(programs[0].id, item.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.title}</span>
                        <span
                          className={`${styles.accordionIcon} ${
                            isOpen ? styles.accordionIconOpen : ""
                          }`}
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className={styles.accordionContent}>
                          <p>{item.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>

            <CircleDivider />

            <article className={styles.programCard}>
              <div className={styles.programImageWrap}>
                <img
                  src={programs[1].image}
                  alt={programs[1].title}
                  className={styles.programImage}
                />
              </div>

              <h3 className={styles.programName}>{programs[1].title}</h3>
              <p className={styles.programDescription}>
                {programs[1].description}
              </p>

              <div className={styles.accordionGroup}>
                {programs[1].items.map((item) => {
                  const isOpen = openItems[programs[1].id].includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className={`${styles.accordionItem} ${
                        isOpen ? styles.accordionItemOpen : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={styles.accordionTrigger}
                        onClick={() => toggleItem(programs[1].id, item.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.title}</span>
                        <span
                          className={`${styles.accordionIcon} ${
                            isOpen ? styles.accordionIconOpen : ""
                          }`}
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className={styles.accordionContent}>
                          <p>{item.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>

            <CircleDivider />
          </div>

          <div className={styles.programsCta}>
            <a
              href="#strategy-call-form"
              className={`${styles.programButton} glow-btn glow-btn--alt`}
            >
              Find Your Mentor
            </a>
          </div>

          <div className={styles.rootsSectionWhite}>
            <p className={styles.rootsLabelWhite}>OUR MENTOR’S ROOTS</p>

            <div className={styles.logoCarouselStack}>
              <div className={styles.logoCarouselRow}>
                <div className={styles.logoTrackLeft}>
                  {[...topRowRoots, ...topRowRoots].map((logo, index) => (
                    <div
                      key={`top-${logo.id}-${index}`}
                      className={styles.logoItemWhite}
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className={styles.logoImageWhite}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.logoCarouselRow}>
                <div className={styles.logoTrackRight}>
                  {[...bottomRowRoots, ...bottomRowRoots].map((logo, index) => (
                    <div
                      key={`bottom-${logo.id}-${index}`}
                      className={styles.logoItemWhite}
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className={styles.logoImageWhite}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <div className={styles.inner}>
          <h2 className={styles.howItWorksTitle}>How It Works</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineRail} aria-hidden="true" />

            <div className={styles.timelineRow}>
              <div className={styles.timelineNumber}>1</div>
              <div className={styles.timelineCard}>
                <h3 className={styles.timelineCardTitle}>Strategy Call</h3>
                <p className={styles.timelineCardText}>
                  Book a call with our founder, Jake Sussman, where we’ll learn
                  more about your family to discover your unique needs and
                  answer your questions.
                </p>
              </div>
            </div>

            <div className={styles.timelineRow}>
              <div className={styles.timelineNumber}>2</div>
              <div className={styles.timelineCard}>
                <h3 className={styles.timelineCardTitle}>Mentor Matching</h3>
                <p className={styles.timelineCardText}>
                  We work diligently to match your child with a mentor that
                  works for them. Finding the perfect match can take time.
                </p>
              </div>
            </div>

            <div className={styles.timelineRow}>
              <div className={styles.timelineNumber}>3</div>
              <div className={styles.timelineCard}>
                <h3 className={styles.timelineCardTitle}>A Match Made</h3>
                <p className={styles.timelineCardText}>
                  You will meet your child’s mentor, accompanied by our Program
                  Success Manager, to explore the mentor fit.
                </p>
              </div>
            </div>

            <div className={styles.timelineRow}>
              <div className={styles.timelineNumber}>4</div>
              <div className={styles.timelineCard}>
                <h3 className={styles.timelineCardTitle}>
                  Your Child’s First Meeting
                </h3>
                <p className={styles.timelineCardText}>
                  Fully virtual, mentor to mentee. Our mentors are expert
                  communicators and will ease first-session stressors to help
                  your child become more confident with each session.
                </p>
              </div>
            </div>

            <div className={styles.timelineRow}>
              <div className={styles.timelineNumber}>5</div>
              <div className={styles.timelineCard}>
                <h3 className={styles.timelineCardTitle}>
                  Family Matters Meeting
                </h3>
                <p className={styles.timelineCardText}>
                  Parents meet with mentors monthly. We discuss progress, goals
                  and how your child could best be supported at home, school and
                  in their social lives. Next month, repeat steps 4 and 5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.videoCtaSection}>
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

      <section id="strategy-call" className={styles.formSection}>
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
                  <option value="partner"> Organization/Partner </option>
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
