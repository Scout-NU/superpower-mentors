import styles from "./quality.module.css";
import { DropdownSection } from "../../frontend/DropdownSection";

export default function QualityPage() {
    return (
      <main>
        <div className={styles.page}>
          <div className={styles.heroBand}></div>
          <div className={styles.heroSection}>
            <div className={styles.heroHeadingWrap}><span className={styles.heroHeading}>Safety <br/>&amp; Quality Assurance</span></div>
          </div>
          <div className={styles.vettingBand}></div>
          <div className={styles.backgroundCheckTitle}><span className={styles.sectionEyebrow}>Three Step 3rd Party Background Check<br/></span></div>
          <div className={styles.commitmentHeadingWrap}><span className={styles.commitmentHeading}>OUR COMMITMENT. </span></div>
          <div className={styles.vettingHeadingWrap}><span className={styles.vettingHeading}>SAFETY AND MENTOR VETTING</span></div>
          <div className={styles.vettingDescriptionWrap}><span className={styles.vettingDescription}>The mentors of Superpower Mentors are young adults aged 20-30 who have personal experience overcoming adversity with ADHD, Dyslexia, Autism, and/or other learning challenges. We understand the importance of working with qualified and trustworthy mentors who can effectively support the unique needs of students with Dyslexia, ADHD, and Autism. That&apos;s why we&apos;ve implemented a rigorous six-step vetting and quality assurance process for our mentors. The purpose of this six-step process is to screen every angle of the mentor from both our perspective, and the client’s perspective. Through this process we are able to gain a complete picture and understanding of the mentor’s background, personality, relatability, mentoring effectiveness, and responsibility.<br/></span></div>
          <div className={styles.backgroundCheckTitleRepeat}><span className={styles.sectionEyebrowRepeat}>Three Step 3rd Party Background Check<br/></span></div>
          <div className={styles.approachSection}>
            <div className={styles.approachPanelBg}></div>
            <div className={styles.approachHeadingWrap}><span className={styles.approachHeading}>Our Safe, Structured <br/>Approach to Mentorship</span></div>
            <div style={{ position: "absolute", right: "50px", top: "50%", transform: "translateY(-50%)", zIndex: 20 }}>
              <DropdownSection />
            </div>
          </div>
          <div className={styles.stepsHeadingWrap}>
          <span className={styles.stepsHeading}>Highly Selective Interview Process<br/></span></div>
          <div className={styles.stepsSpacerWrap}><span className={styles.stepsSpacer}><br/></span></div>
          <div className={styles.certificationCourseWrap}><span className={styles.certificationCourse}>3 Hour Certification Course</span></div>
          <div className={styles.biweeklyMeetingWrap}><span className={styles.biweeklyMeeting}>Mentors meet with Team Leader Bi-Weekly</span></div>
          <div className={styles.mentorApprovalWrap}><span className={styles.mentorApproval}>Meet your Mentor prior to agreement <br/></span></div>
          <div className={styles.sessionRecapsWrap}><span className={styles.sessionRecaps}>Mentor Session Recaps <br/></span></div>
          <div className={styles.monthlyCheckInsWrap}><span className={styles.monthlyCheckIns}>Included “check in” calls with Mentor, team leader, and parent/legal guardian once a month</span></div>
          <img className={styles.heroImage} src="https://placehold.co/1102x830" />
        </div>
      </main>
    );
  }
  