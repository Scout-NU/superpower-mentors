import styles from "./quality.module.css";
import { DropdownSection } from "../../frontend/DropdownSection";
import AnimatedSection from "@/frontend/AnimatedSection";
import { VettingBullet } from "../../frontend/VettingBullet";

function HeroSection() {
  return (
    <section className={styles.heroBlock}>
      <div className={styles.heroBand}>
          <div className={styles.heroHeadingWrap}><span className={styles.heroHeading}>Safety <br/>&amp; Quality Assurance</span></div>
      </div>
      <img className={styles.heroImage} src="https://placehold.co/1102x830" />
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className={styles.commitmentBlock}>
      <div className={styles.commitmentHeadingWrap}><span className={styles.commitmentHeading}>OUR COMMITMENT. </span></div>
      <div className={styles.vettingDescriptionWrap}><span className={styles.vettingDescription}>The mentors of Superpower Mentors are young adults aged 20-30 who have personal experience overcoming adversity with ADHD, Dyslexia, Autism, and/or other learning challenges. We understand the importance of working with qualified and trustworthy mentors who can effectively support the unique needs of students with Dyslexia, ADHD, and Autism. That&apos;s why we&apos;ve implemented a rigorous six-step vetting and quality assurance process for our mentors. The purpose of this six-step process is to screen every angle of the mentor from both our perspective, and the client’s perspective. Through this process we are able to gain a complete picture and understanding of the mentor’s background, personality, relatability, mentoring effectiveness, and responsibility.<br/></span></div>
    </section>
  );
}

function VettingSection() {
  return (
    <section className={styles.vettingBlock}>
      <div className={styles.vettingBand}>
        <div className={styles.vettingHeadingWrap}>
          <span className={styles.vettingHeading}>SAFETY AND MENTOR VETTING</span>
        </div>
        <div className={styles.vettingColumns}>
          <div className={styles.vettingColumn}>
            <VettingBullet className={styles.vettingItemWrap} textClassName={styles.sectionEyebrowRepeat}>
              Three Step 3rd Party Background Check<br/>
            </VettingBullet>
            <VettingBullet className={styles.vettingItemWrap} textClassName={styles.stepsHeading}>
              Highly Selective Interview Process<br/>
            </VettingBullet>
            <VettingBullet className={styles.vettingItemWrap} textClassName={styles.certificationCourse}>
              3 Hour Certification Course
            </VettingBullet>
          </div>
          <div className={styles.vettingColumn}>
            <VettingBullet className={styles.vettingItemWrap} textClassName={styles.biweeklyMeeting}>
              Mentors meet with Team Leader Bi-Weekly
            </VettingBullet>
            <VettingBullet className={styles.vettingItemWrap} textClassName={styles.mentorApproval}>
              Meet your Mentor prior to agreement <br/>
            </VettingBullet>
            <VettingBullet className={styles.vettingItemWrap} textClassName={styles.sessionRecaps}>
              Mentor Session Recaps <br/>
            </VettingBullet>
          </div>
        </div>
        <VettingBullet className={styles.vettingItemWrap} textClassName={styles.monthlyCheckIns}>
          Included “check in” calls with Mentor, team leader, and parent/legal guardian once a month
        </VettingBullet>
        <div className={styles.stepsSpacerWrap}><span className={styles.stepsSpacer}><br/></span></div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className={styles.approachBlock}>
      <div className={styles.approachSection}>
        <div className={styles.approachPanelBg}></div>
        <div className={styles.approachHeadingWrap}><span className={styles.approachHeading}>Our Safe, Structured <br/>Approach to Mentorship</span></div>
        <div className={styles.approachDropdownWrap}>
          <DropdownSection />
        </div>
      </div>
    </section>
  );
}

import { Space_Grotesk } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });


export default function QualityPage() {
  return (
    <main className={`min-h-screen ${styles.pageRoot}`}>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <CommitmentSection />
      </AnimatedSection>
      <AnimatedSection>
        <VettingSection />
      </AnimatedSection>
      <AnimatedSection>
        <ApproachSection />
      </AnimatedSection>
    </main>
  );
}
  