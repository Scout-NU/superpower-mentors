"use client";

import { useState } from "react";
// import styles from "../app/globals.css";
// Color constants
const DARK_PURPLE = "#350B49";
const LIGHT_PURPLE = "#B959F1";


export function DropdownSection() {
  const [openIdxs, setOpenIdxs] = useState<number[]>([]);

  const faqs = [
    { q: "Step 1: Third-party background checks (local, state, federal levels)", a: "The first step in our vetting process is a comprehensive third-party background check at the local, state, and federal levels. \n \n \nThe objective of these checks is to thoroughly investigate the potential mentor's criminal history. These searches are conducted across multiple databases to ensure that no stone is left unturned. From local police records to national criminal databases, from sex offender registries to a history of domestic violence, we make sure that the individuals we bring on board as mentors have clean records and are trustworthy. \n \nBy conducting such in-depth background checks, we strive to create a safe, secure, and positive environment for our students. We understand that the safety of your child is paramount, and we take every step to ensure that they are protected." },
    { q: "Step 2: Mandatory certification course for mentors (Dyslexia, ADHD, Autism)", a: "The second step in our vetting process at Superpower Mentors involves a mandatory certification course, carefully designed to equip mentors with the necessary skills and knowledge to support students with Dyslexia and ADHD. This is an intensive, structured program that is both comprehensive and in-depth. The course was designed in partnership with professionals in the education and social work spaces. \n \nThe goal of our certification course is not only to educate our mentors but also to prepare them to help their mentees effectively advocate for their needs. By understanding their mentees' challenges, listening actively, and using storytelling to inspire confidence, our mentors can empower their mentees to become master self-advocates.\n \nPlease feel free to reach out for more information." },
    { q: "Step 3: Monthly meetings with team leaders", a: "The third step in our vetting process involves regular monthly meetings between our mentors and team leaders/Program Success Managers. These meetings serve multiple crucial purposes.\n \nFirstly, they provide an opportunity for mentors to discuss any challenges or successes they are experiencing in their mentorship role. Secondly, these monthly meetings allow our team leaders to monitor the progress and performance of our mentors. Thirdly, these meetings act as a continuous professional development platform. Our team leaders provide ongoing training and updates on best practices for supporting students with Dyslexia and ADHD. Finally, this regular interaction creates a sense of community among our mentors. By fostering a culture of collaboration and shared learning, we believe that we can enhance the overall quality of the mentorship our students receive." },
    { q: "Step 4: Meetings between the family and prospective mentors", a: "The fourth step in our vetting process involves facilitating 'Meet Your Mentor' sessions. We understand the significance of a strong relationship between the mentor and the student, and these sessions aim to establish that connection right from the start.\n \nWe encourage the student's participation in these sessions to ensure they feel comfortable with the potential mentor. This helps the student to voice their feelings, expectations, and any concerns they might have, contributing to a stronger mentor-student relationship." },
    { q: "Step 5: Regular monthly progress check meetings with parents", a: "The fifth step in our vetting process is what we call 'Family Matters Meetings'. These are regular meetings where mentors share updates on the student's progress with the parents. We believe that a child's success is a collaborative effort, and these meetings foster strong communication and collaboration between the mentor and the family." },
    { q: "Step 6: Dedicated and personalized support", a: "The final step in our vetting process is a close collaboration with parents facilitated by our dedicated Program Success Manager. The Program Success Manager is a dedicated professional who works closely with parents throughout the mentorship process. Their primary role is to ensure that parents are informed, empowered, and actively engaged in their child's mentorship journey.\n \nIf parents have concerns about their child's progress, the effectiveness of the mentorship strategies, or the mentor-student relationship, the Program Success Manager is ready to listen, understand, and find solutions. The Program Success Manager plays a pivotal role in ensuring that parents are not just observers but active participants in their child's mentorship journey. Through this close collaboration, we aim to create a supportive, transparent, and effective mentorship experience that truly helps each child unlock their full potential." },
  ];

  const toggle = (i: number) => {
    setOpenIdxs((prev) =>
      prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
    );
  };

  return (
    <div
      style={{
        backgroundColor: DARK_PURPLE,
        width: "100%",
        maxWidth: "700px",
        boxSizing: "border-box",
      }}
      className="rounded-3xl p-8"
    >
      {faqs.map((faq, i) => {
        const isOpen = openIdxs.includes(i);
        const paragraphs = faq.a
          .split(/\n\s*\n/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean);

        return (
        <div key={i}>
          <div className="py-5 flex justify-between items-center cursor-pointer gap-4" onClick={() => toggle(i)}>
            <p className="text-white font-medium text-base" style={{ fontFamily: 'DM Sans' }}>{faq.q}</p>
            <span
              className="text-white text-sm flex-shrink-0"
              style={{ display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
            >
              ▼
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s ease' }}>
            <div style={{ overflow: 'hidden' }}>
              <div className="text-white text-sm leading-relaxed pb-4 opacity-80" style={{ fontFamily: 'DM Sans' }}>
                {paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      style={{ marginBottom: idx === paragraphs.length - 1 ? 0 : '0.9rem', whiteSpace: 'pre-line' }}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          {i < faqs.length - 1 && <div style={{ backgroundColor: LIGHT_PURPLE, height: '1px' }}></div>}
        </div>
      )})}
    </div>
          
  );
}