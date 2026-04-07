"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./partnership.module.css";

const TESTIMONIALS = [
  {
    id: 0,
    image: "partnerships_morelli.jpg",
    avatar: "partnerships_barbara.png",
    quote: "...",
    author: "Barbara Wirostko Morelli",
    authorTitle: "Co-Founder of Joseph James Morelli Foundation",
  },
  {
    id: 1,
    image: null,
    quote:
      "\"I'm shouting from the rooftops because what you have created has changed my son's life, and I cannot thank you enough.\"",
    author: "SPM parent",
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
    <div
      className={`${styles.testimonialCard} bg-white rounded-[28px] p-5 flex flex-col gap-3`}
      style={{
        minWidth: "280px",
        maxWidth: "320px",
        minHeight: "480px",
      }}
    >
      {testimonial.image ? (
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-full h-40 object-cover rounded"
        />
      ) : (
        <div className="w-full h-32 rounded bg-zinc-200 flex items-center justify-center">
          <span className="text-zinc-400 text-xs">IMG</span>
        </div>
      )}

      <p className="text-lg text-black leading-relaxed">{testimonial.quote}</p>

      <div className="mt-auto flex items-center gap-2">
        {testimonial.avatar && (
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
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
          <circle
            className={styles.statTrack}
            cx="85"
            cy="85"
            r={radius}
          />
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
  const [openBenefitIds, setOpenBenefitIds] = useState<number[]>([]);
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
          if (entry.isIntersecting && key) {
            setVisibleSections((prev) =>
              prev.includes(key) ? prev : [...prev, key]
            );

            if (key === "stats") {
              setStatsVisible(true);
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
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

  const isVisible = (key: string) =>
    `${styles.revealSection} ${
      visibleSections.includes(key) ? styles.revealSectionVisible : ""
    }`;

  return (
    <main className="min-h-screen bg-white font-['Plus_Jakarta_Sans']">
      <section
        ref={heroRef}
        className={`${isVisible("hero")} px-6 py-44`}
        style={{ background: "#571377" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-2 items-center">
          <div>
            <h1
              className="text-white leading-[1.05] mb-6 max-w-[700px]"
              style={{ fontSize: "clamp(48px, 6vw, 90px)" }}
            >
              The Impact Speaks for Itself.
            </h1>

            <p
              className="text-white text-lg leading-relaxed opacity-90"
              style={{ fontSize: "clamp(18px, 1.6vw, 22px)" }}
            >
              We offer a full-service mentorship solution for your organization
              designed to be customized, implemented, and managed by Superpower
              Mentors
            </p>
          </div>

          <img
            src="partnerships_impact.jpg"
            alt="Impact"
            className="w-3/4 ml-auto rounded-lg object-cover"
            style={{ aspectRatio: "1 / 1" }}
          />
        </div>
      </section>

      <section
        ref={gameRef}
        className={`${isVisible("game")} px-6 py-20 max-w-7xl mx-auto`}
      >
        <div className="grid grid-cols-3 gap-8 items-start">
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

          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center mt-16 mb-2">
          <div className="flex items-center justify-center gap-8 mt-8">
            <span className="w-8 h-8 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow" />
            <span className="w-12 h-12 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow" />
            <span className="w-16 h-16 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow" />
            <span className="w-24 h-24 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow" />
            <span className="w-16 h-16 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow" />
            <span className="w-12 h-12 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow" />
            <span className="w-8 h-8 rounded-full bg-[linear-gradient(145deg,#ffe941,#ffc92a)] circle-glow" />
          </div>
        </div>
      </section>

      <section
        ref={partnersRef}
        className={`${isVisible("partners")} px-6 pt-4 pb-12 max-w-7xl mx-auto text-center`}
      >
        <h2
          className="font-bold text-black mb-10"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
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
              I’ve seen students beaming from the impact of Superpower Mentors
              gaining confidence in relationships, clarity around careers, and the
              support they need to navigate the real layers of adulting. This was the
              missing piece.
            </p>

            <div className={styles.partnerStatsAuthorBlock}>
              <p className={styles.partnerStatsAuthor}>April Miller</p>
              <p className={styles.partnerStatsRole}>Founder</p>
              <p className={styles.partnerStatsCompany}>LD College Consultants</p>
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