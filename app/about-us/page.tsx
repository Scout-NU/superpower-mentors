'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './about-us.module.css'
import AnimatedSection from '@/frontend/AnimatedSection'

export default function AboutPage() {
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<string[]>([])

  const heroRef = useRef<HTMLElement | null>(null)
  const whyRef = useRef<HTMLElement | null>(null)
  const founderRef = useRef<HTMLElement | null>(null)
  const superpowerRef = useRef<HTMLElement | null>(null)
  const letterRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const refs = [
      { key: 'hero', ref: heroRef },
      { key: 'why', ref: whyRef },
      { key: 'founder', ref: founderRef },
      { key: 'superpower', ref: superpowerRef },
      { key: 'letter', ref: letterRef },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute('data-section')
          if (entry.isIntersecting && key) {
            setVisibleSections((prev) =>
              prev.includes(key) ? prev : [...prev, key]
            )
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    refs.forEach(({ key, ref }) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', key)
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const revealClass = (key: string) =>
    `${styles.revealSection} ${
      visibleSections.includes(key) ? styles.revealSectionVisible : ''
    }`

  return (
    <main className={styles.page}>
      <AnimatedSection>
        <section ref={heroRef} className={`${styles.hero} ${revealClass('hero')}`}>
          <div className={styles.inner}>
            <h1 className={styles.heroTitle}>About Us</h1>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section ref={whyRef} className={`${styles.whySection} ${revealClass('why')}`}>
          <div className={styles.inner}>
            <div className={styles.whyGrid}>
              <div className={styles.whyContent}>
                <h2 className={styles.whyTitle}>
                  <span className={styles.whyTitleBlack}>Our </span>
                  <span className={styles.whyTitlePurple}>WHY</span>
                </h2>

                <p className={styles.whyText}>
                  Our mission is to empower the next generation of neurodiverse
                  thinkers to confidently succeed in any environment.
                </p>
              </div>

              <div className={styles.imageWrap}>
                <img
                  src="/aboutus.png"
                  alt="Superpower Mentors team"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          ref={founderRef}
          className={`${styles.founderSection} ${revealClass('founder')}`}
        >
          <div className={styles.inner}>
            <h2 className={styles.founderTitle}>
              Hear from our <span>FOUNDER</span>
            </h2>

            <div className={styles.founderContent}>
              <div className={styles.quoteMark}>“</div>

              <div>
                <p className={styles.founderIntro}>
                  My name is Jake Sussman. Founder and President at Superpower
                  Mentors
                </p>

                <p className={styles.founderText}>
                  I founded Superpower Mentors after being sick and tired of
                  constantly hearing the horror stories of kids with learning
                  differences, like myself, falling through the cracks. Enough is
                  enough. After doing extensive research, we identified three
                  major gaps that are not being taught in school and are being
                  missed in the mental health space.
                </p>
              </div>
            </div>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/RiwiAOCSVJY"
                title="Founder video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoEmbed}
              />
            </div>

            <div className={styles.founderList}>
              <p>
                <span>1)</span> Students are not taught the foundational skills
                that lead to independence.
              </p>

              <p>
                <span>2)</span> Students are expected to show up to school, and
                just learn. But that is not how it works for kids who are so
                triggered by learning itself due to their learning differences.
              </p>

              <p>
                <span>3)</span> We have become obsessed with fixing the problem.
                That, in itself, is the problem.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          ref={superpowerRef}
          className={`${styles.superpowerSection} ${revealClass('superpower')}`}
        >
          <div className={styles.inner}>
            <h2 className={styles.superpowerTitle}>
              What is a <span>SUPERPOWER?</span>
            </h2>

            <div className={styles.superpowerContent}>
              <p>
                We were all misunderstood for how we learned. It felt like
                everyone around us was trying to fix us. We were often
                misunderstood by our teachers, peers, professionals and sometimes
                even loved ones. With this came anxiety, constantly comparing
                ourselves. Don’t even get us started with reading or math...
              </p>

              <p>
                The funny thing is, we also are brilliant. We have the craziest
                ideas and wildest dreams. We are often extremely empathetic and
                when we put our minds to something, we are unstoppable.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          ref={letterRef}
          className={`${styles.letterSection} ${revealClass('letter')}`}
        >
          <div className={styles.inner}>
            <button
              type="button"
              className={styles.letterButton}
              onClick={() => setIsLetterOpen(true)}
              aria-label="Open letter from Jake and Max"
            >
              <img
                src="/about-letter-closed.png"
                alt="Closed letter from Jake and Max"
                className={styles.letterImage}
              />
            </button>
          </div>
        </section>
      </AnimatedSection>

      {isLetterOpen && (
        <div
          className={styles.letterModalOverlay}
          onClick={() => setIsLetterOpen(false)}
        >
          <div
            className={styles.letterModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.letterClose}
              onClick={() => setIsLetterOpen(false)}
              aria-label="Close letter"
            >
              ×
            </button>

            <img
              src="/about-letter-open.png"
              alt="Letter from Jake and Max"
              className={styles.letterOpenImage}
            />
          </div>
        </div>
      )}
    </main>
  )
}