"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./partnership.module.css";

const TESTIMONIALS = [
  {
    id: 0,
    image: "partnerships_morelli.jpg",
    avatar: "partnerships_barbara.png",
    quote:
      "We are proud to say that while nationally the college dropout rate between freshman and sophomore years is 30%, the dropout rate is 0% for students who have had a Morelli Foundation (Superpower) Mentor.",
    author: "Barbara Wirostko Morelli",
    authorTitle: "Co-Founder, Joseph James Morelli Foundation",
  },
  {
    id: 1,
    image: null,
    avatar: null,
    quote:
      "I’m shouting from the rooftops because what you have created has changed my son's life, and I cannot thank you enough.",
    author: "SPM Parent",
    authorTitle: "",
  },
];

const PARTNERS = [
  { name: "Redwood Schools", logo: "partnerships_redwood.png" },
  { name: "ALDS - Association of LD Schools", logo: "partnerships_alds.png" },
  { name: "Freudigman & Billings LLC", logo: "partnerships_freudigman.png" },
  { name: "YMCA", logo: "partnerships_ymca.png" },
  { name: "Landmark", logo: "partnerships_landmark.jpg" },
  { name: "Bridge", logo: "partnerships_bridge_logo.png" },
  { name: "Crimson", logo: "partnerships_crimson.png" },
  { name: "Aspen", logo: "partnerships_aspen.png" },
  { name: "Rhone", logo: "partnerships_rhone.png" },
  { name: "Sasco", logo: "partnerships_sasco.png" },
];

const BENEFITS = [
  {
    id: 1,
    title: "Transition Program",
    description:
      "Placeholder text for the Transition Program. Add the real copy here later.",
  },
  {
    id: 2,
    title: "Intervention Program",
    description:
      "Placeholder text for the Intervention Program. Add the real copy here later.",
  },
  {
    id: 3,
    title: "Alumni Engagement",
    description:
      "Placeholder text for Alumni Engagement. Add the real copy here later.",
  },
  {
    id: 4,
    title: "Live Workshops/Webinars",
    description:
      "Placeholder text for Live Workshops and Webinars. Add the real copy here later.",
  },
];

const STATS = [
  { id: 1, value: 93, display: "93%", label: "Improvement in well-being" },
  { id: 2, value: 100, display: "100%", label: "College Retention" },
  { id: 3, value: 91, display: "91%", label: "Parent Satisfaction" },
  { id: 4, value: 100, display: "16k", label: "Sessions Complete" },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <article
      className={`${styles.testimonialCard} bg-white rounded-[28px] p-5 flex flex-col gap-4 h-full`}
    >
      {testimonial.image ? (
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-full h-48 object-cover rounded-[20px]"
        />
      ) : (
        <div className="w-full h-48 rounded-[20px] bg-zinc-200 flex items-center justify-center">
          <span className="text-zinc-400 text-xs">IMG</span>
        </div>
      )}

      <p className="text-black leading-relaxed text-[18px] md:text-[17px]">
        {testimonial.quote}
      </p>

      <div className="mt-auto flex items-center gap-3 pt-2">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-zinc-200 flex-shrink-0" />
        )}

        <div>
          <p className="text-sm font-semibold text-black">{testimonial.author}</p>
          {testimonial.authorTitle ? (
            <p className="text-xs text-zinc-500">{testimonial.authorTitle}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function StatCircle({
  value,
  display,
  label,
  animate,
}: {
  value: number;
  display: string;
  label: string;
  animate: boolean;
}) {
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <div className={styles.statCard}>
      <div className={styles.statCircleWrap}>
        <svg
          className={styles.statSvg}
          width="170"
          height="170"
          viewBox="0 0 170 170"
          aria-hidden="true"
        >
          <circle className={styles.statTrack} cx="85" cy="85" r={radius} />
          <circle
            className={styles.statProgress}
            cx="85"
            cy="85"
            r={radius}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: animate ? offset : circumference,
            }}
          />
        </svg>

        <div className={styles.statValue}>{display}</div>
      </div>

      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

export default function PartnershipsPage() {
  const [openBenefitIds, setOpenBenefitIds] = useState<number[]>([1]);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [statsVisible, setStatsVisible] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const gameRef = useRef<HTMLElement | null>(null);
  const partnersRef = useRef<HTMLElement | null>(null);
  const benefitsRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLElement | null>(null);

  const toggleBenefit = (id: number) => {
    setOpenBenefitIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const refs = [
      { key: "hero", ref: heroRef },
      { key: "game", ref: gameRef },
      { key: "partners", ref: partnersRef },
      { key: "benefits", ref: benefitsRef },
      { key: "stats", ref: statsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute("data-section");
          if (!entry.isIntersecting || !key) return;

          setVisibleSections((prev) =>
            prev.includes(key) ? prev : [...prev, key]
          );

          if (key === "stats") {
            setStatsVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    refs.forEach(({ key, ref }) => {
      if (!ref.current) return;
      ref.current.setAttribute("data-section", key);
      observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (key: string) =>
    `${styles.revealSection} ${
      visibleSections.includes(key) ? styles.revealSectionVisible : ""
    }`;

  return (
    <main className="min-h-screen bg-white font-['Plus_Jakarta_Sans'] text-black">
      <section
        ref={heroRef}
        className={`${isVisible("hero")} bg-white`}
      >
        <div className="h-20 bg-white"></div>
        <div className="bg-[#571377] px-6 pt-10 pb-20 md:pt-20 md:pb-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-12">
            <div>
              <h1
                className="mb-6 max-w-[760px] text-white leading-[0.98]"
                style={{ fontSize: "clamp(3.2rem, 7vw, 6.4rem)" }}
              >
                The Impact
                <br />
                Speaks for
                <br />
                Itself.
              </h1>

              <p
                className="max-w-[720px] text-white/90 leading-relaxed"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)" }}
              >
                We offer a full-service mentorship solution for your organization,
                designed to be customized, implemented, and managed by Superpower
                Mentors.
              </p>
            </div>

            <div className="w-full lg:justify-self-end">
              <img
                src="partnerships_impact.jpg"
                alt="Impact"
                className="w-full max-w-[520px] rounded-[28px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                style={{ aspectRatio: "1 / 1" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={gameRef}
        className={`${isVisible("game")} px-6 py-20 md:py-24`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_repeat(2,minmax(0,1fr))] lg:items-start">
            <div>
              <h2
                className="font-semibold leading-[0.95] text-black"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
              >
                How
                <br />
                We&apos;re 🚀
                <br />
                Changing
                <br />
                the Game
              </h2>
            </div>

            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <span className="h-5 w-5 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow md:h-8 md:w-8" />
              <span className="h-8 w-8 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow md:h-12 md:w-12" />
              <span className="h-12 w-12 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow md:h-16 md:w-16" />
              <span className="h-16 w-16 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow md:h-24 md:w-24" />
              <span className="h-12 w-12 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow md:h-16 md:w-16" />
              <span className="h-8 w-8 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow md:h-12 md:w-12" />
              <span className="h-5 w-5 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow md:h-8 md:w-8" />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={partnersRef}
        className={`${isVisible("partners")} px-6 pb-16 pt-4`}
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2
            className="mb-10 font-semibold text-black"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Our Partners
          </h2>

          <div className={styles.partnerCarouselRow}>
            <div className={styles.partnerTrack}>
              {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={styles.partnerItem}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={styles.partnerLogo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={benefitsRef}
        className={`${styles.benefitsSection} ${isVisible("benefits")}`}
      >
        <div className={styles.benefitsInner}>
          <h2 className={styles.benefitsTitle}>How Our Partners Benefit</h2>

          <div className={styles.benefitsLayout}>
            <div className={styles.benefitsImageWrap}>
              <img
                src="/partnerships_symbols.png"
                alt="Programs and support illustration"
                className={styles.benefitsImage}
              />
            </div>

            <div className={styles.benefitsAccordion}>
              {BENEFITS.map((benefit) => {
                const isOpen = openBenefitIds.includes(benefit.id);

                return (
                  <div key={benefit.id} className={styles.benefitItem}>
                    <button
                      type="button"
                      className={styles.benefitTrigger}
                      onClick={() => toggleBenefit(benefit.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{benefit.title}</span>

                      <span
                        className={`${styles.benefitIcon} ${
                          isOpen ? styles.benefitIconOpen : ""
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
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`${styles.benefitContent} ${
                        isOpen ? styles.benefitContentOpen : ""
                      }`}
                    >
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={statsRef}
        className={`${styles.partnerStatsSection} ${isVisible("stats")}`}
      >
        <div className={styles.partnerStatsInner}>
          <div className={styles.partnerStatsLeft}>
            <div className={styles.partnerStatsQuoteMark}>“</div>

            <h2 className={styles.partnerStatsHeading}>
              What partners have to say:
            </h2>

            <p className={styles.partnerStatsQuote}>
              I’ve seen students beaming from the impact of Superpower Mentors,
              gaining confidence in relationships, clarity around careers, and the
              support they need to navigate the real layers of adulting. This was
              the missing piece.
            </p>

            <div className={styles.partnerStatsAuthorBlock}>
              <p className={styles.partnerStatsAuthor}>April Miller</p>
              <p className={styles.partnerStatsRole}>Founder</p>
              <p className={styles.partnerStatsCompany}>
                LD College Consultants
              </p>
            </div>
          </div>

          <div className={styles.partnerStatsRight}>
            <div className={styles.statsGrid}>
              {STATS.map((stat) => (
                <StatCircle
                  key={stat.id}
                  value={stat.value}
                  display={stat.display}
                  label={stat.label}
                  animate={statsVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}