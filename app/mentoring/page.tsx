'use client'

import { useState } from 'react'
import styles from './mentoring.module.css'

type Mentor = {
  id: number
  name: string
  description: string
  image: string
}

type ProgramItem = {
  id: number
  title: string
  content: string
}

type Program = {
  id: number
  title: string
  description: string
  image: string
  buttonText: string
  items: ProgramItem[]
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/mentors/mentor-1.jpg',
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/mentors/mentor-2.jpg',
  },
  {
    id: 3,
    name: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/mentors/mentor-3.jpg',
  },
]

const programs: Program[] = [
  {
    id: 1,
    title: 'Kids & Teens',
    description:
      'Program description coming soon... please reach out to us at info@superpowermentors.com for more information.',
    image: '/programs/program-1.jpg',
    buttonText: 'Find Your Mentor',
    items: [
      {
        id: 1,
        title: 'Ages 7-10 Mentorship',
        content:
          'This program helps younger students build confidence, communication, and healthy routines while learning how to understand their strengths.',
      },
      {
        id: 2,
        title: 'Ages 11-14 Mentorship',
        content:
          'The most common age in our program is 11-14 year olds. In this bracket, your child will dive into deeper concepts, learn how to embrace their Superpower, and work through challenges like bullying, communication, and emotional expression.',
      },
    ],
  },
  {
    id: 2,
    title: 'High School & College',
    description:
      'In the United States, 40% of college students drop out each year and 30% of those students are Freshman. Our mission is to lower this percentage significantly.',
    image: '/programs/program-2.jpg',
    buttonText: 'Find Your Mentor',
    items: [
      {
        id: 1,
        title: 'High School Mentorship',
        content:
          'Students get support with identity, academic pressure, confidence, goal setting, and preparing for the transition into college or work.',
      },
      {
        id: 2,
        title: 'College Mentorship',
        content:
          'College students get guidance on independence, time management, burnout, belonging, and staying on track through the hardest transition years.',
      },
    ],
  },
  {
    id: 3,
    title: 'Graduation & the Workplace',
    description:
      'Program description coming soon... please reach out to us at info@superpowermentors.com for more information.',
    image: '/programs/program-3.jpg',
    buttonText: 'Find Your Mentor',
    items: [
      {
        id: 1,
        title: 'Graduation Mentorship',
        content:
          'This track helps students move from school into adult life with more clarity, confidence, and a practical plan for what comes next.',
      },
      {
        id: 2,
        title: 'Workplace Mentorship',
        content:
          'Young professionals get support with communication, workplace confidence, leadership habits, boundaries, and career growth.',
      },
    ],
  },
]

export default function MentoringPage() {
  const [openItems, setOpenItems] = useState<Record<number, number | null>>({
    1: 2,
    2: 2,
    3: 2,
  })

  const toggleItem = (programId: number, itemId: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [programId]: prev[programId] === itemId ? null : itemId,
    }))
  }

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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.programsSection}>
        <div className={styles.inner}>
          <h2 className={styles.programsTitle}>Our Programs</h2>

          <div className={styles.programsLayout}>
            <article className={styles.programCard}>
              <div className={styles.programImageWrap}>
                <img
                  src={programs[0].image}
                  alt={programs[0].title}
                  className={styles.programImage}
                />
              </div>

              <h3 className={styles.programName}>{programs[0].title}</h3>
              <p className={styles.programDescription}>{programs[0].description}</p>

              <div className={styles.accordionGroup}>
                {programs[0].items.map((item) => {
                  const isOpen = openItems[programs[0].id] === item.id

                  return (
                    <div
                      key={item.id}
                      className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
                    >
                      <button
                        type="button"
                        className={styles.accordionTrigger}
                        onClick={() => toggleItem(programs[0].id, item.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.title}</span>
                        <span
                          className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ''}`}
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
                  )
                })}
              </div>

              <button type="button" className={styles.programButton}>
                {programs[0].buttonText}
              </button>
            </article>

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

            <article className={styles.programCard}>
              <div className={styles.programImageWrap}>
                <img
                  src={programs[1].image}
                  alt={programs[1].title}
                  className={styles.programImage}
                />
              </div>

              <h3 className={styles.programName}>{programs[1].title}</h3>
              <p className={styles.programDescription}>{programs[1].description}</p>

              <div className={styles.accordionGroup}>
                {programs[1].items.map((item) => {
                  const isOpen = openItems[programs[1].id] === item.id

                  return (
                    <div
                      key={item.id}
                      className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
                    >
                      <button
                        type="button"
                        className={styles.accordionTrigger}
                        onClick={() => toggleItem(programs[1].id, item.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.title}</span>
                        <span
                          className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ''}`}
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
                  )
                })}
              </div>

              <button type="button" className={styles.programButton}>
                {programs[1].buttonText}
              </button>
            </article>

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

            <article className={styles.programCard}>
              <div className={styles.programImageWrap}>
                <img
                  src={programs[2].image}
                  alt={programs[2].title}
                  className={styles.programImage}
                />
              </div>

              <h3 className={styles.programName}>{programs[2].title}</h3>
              <p className={styles.programDescription}>{programs[2].description}</p>

              <div className={styles.accordionGroup}>
                {programs[2].items.map((item) => {
                  const isOpen = openItems[programs[2].id] === item.id

                  return (
                    <div
                      key={item.id}
                      className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
                    >
                      <button
                        type="button"
                        className={styles.accordionTrigger}
                        onClick={() => toggleItem(programs[2].id, item.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.title}</span>
                        <span
                          className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ''}`}
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
                  )
                })}
              </div>

              <button type="button" className={styles.programButton}>
                {programs[2].buttonText}
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaCard}>
            <div
              className={styles.ctaBg}
              style={{ backgroundImage: "url('/cta-bg.jpg')" }}
            />
            <div className={styles.ctaOverlay} />

            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Get Matched Today</h2>
              <button className={styles.ctaButton}>Find Your Mentor</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}