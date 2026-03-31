"use client";
import React from 'react';
import AnimatedSection from "@/frontend/AnimatedSection";
import "./page.css";
import { motion } from "framer-motion";

// Color constants
const BLACK  = "#000000";

const PURPLE = "#571377";
const ORANGE = "#FFC92A";
const BLUE = "#001EDF";
const DARK_PURPLE = "#350B49";
const LIGHT_PURPLE = "#B959F1";

function ImgPlaceholder({ className = "" }) {
  return (
    <div className={`bg-gray-300 flex items-center justify-center ${className}`}>
      <span className="text-gray-500 text-xs">IMG</span>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="bg-white pt-32 pb-16 px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-full">
          <h1 className="font-bold leading-none text-black uppercase" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '96px', letterSpacing: '-0.02em' }}>
            RELATE.<br />
            <span style={{ color: PURPLE }}>EMPOWER.</span><br />
            TRANSFORM.
          </h1>
          
          <div className="mt-6 flex justify-between items-start gap-12">
            <p className="text-zinc-700 text-lg" style={{ fontFamily: 'DM Sans', maxWidth: '600px' }}>
              Trusted online mentorship to launch youth with ADHD, Dyslexia, Autism, and other learning differences.
            </p>

            <div className="flex gap-4 flex-shrink-0">
              <button 
                style={{ backgroundColor: BLUE, fontFamily: 'DM Sans', width: '234px', height: '67px' }} 
                className="text-white font-semibold rounded-full"
              >
                Start Your Journey
              </button>
              <button 
                style={{ fontFamily: 'DM Sans', width: '234px', height: '67px' }}
                className="bg-black text-white font-semibold rounded-full"
              >
                Become a Mentor
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden relative z-20 mx-auto mb-[-400px]" style={{ width: '1373px', height: '771px', maxWidth: '100%' }}>
          <ImgPlaceholder className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

// Meet Our Mentors
function MeetMentorsSection() {
  const mentors = [
    { name: "Christiana W.", bio: "Los Angeles, USA. ADHD. Creative Art Director, Advertising, Social Media & Semi-Professional Athlete.", tags: ["Los Angeles, USA", "Dyslexia"] },
    { name: "Jeff S.", bio: "Bronx, NY. ADHD, Aerospace Research Engineer @ NASA, Blockchain Affiliate Marketer.", tags: ["Bronx, NY", "Dyslexia"] },
    { name: "Dylann C.", bio: "Philadelphia, USA. WS, ADHD, Educator, Writer, Artist, Blogger, Neurodivergent, Entrepreneur.", tags: ["Los Angeles, USA", "Dyslexia"] },
  ];

  return (
    <section style={{ backgroundColor: PURPLE }} className="pt-96 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white uppercase mb-12" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          MEET OUR MENTORS
        </h2>
        <div className="flex gap-6 justify-center">
          {mentors.map((m, i) => (
            <div key={i} className="border-2 border-black bg-white rounded-3xl overflow-hidden flex flex-col" style={{ width: '380px', height: '417px' }}>
              <div style={{ width: '380px', height: '206px' }}>
                <ImgPlaceholder className="w-full h-full" />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <p className="font-bold text-black text-base mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>{m.name}</p>
                <p className="text-zinc-600 text-xs leading-relaxed mb-4 flex-1" style={{ fontFamily: 'DM Sans' }}>{m.bio}</p>
                <div className="flex gap-2 flex-wrap">
                  {m.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      style={{ backgroundColor: PURPLE, fontFamily: 'DM Sans' }} 
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

        <div className="mt-20 text-center">
          <p className="text-xs text-white opacity-60 uppercase tracking-widest mb-6" style={{ fontFamily: 'DM Sans', letterSpacing: '0.15em' }}>
            DISCOVER OUR PARTNERS
          </p>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-20 h-12 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-white text-xs opacity-50">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Study Section
function RealImpactSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-black uppercase mb-16" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          REAL IMPACT, REAL RESULTS
        </h2>

        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="relative flex items-center justify-center" style={{ width: '220px', height: '220px' }}>
            <div style={{ backgroundColor: PURPLE }} className="w-full h-full rounded-full flex items-center justify-center">
              <p className="text-white font-bold text-xl text-center px-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>Confidence</p>
            </div>
            <div className="absolute bottom-6 flex gap-2">
              <div style={{ backgroundColor: ORANGE, width: '22px', height: '22px' }} className="rounded-full"></div>
              <div style={{ backgroundColor: ORANGE, width: '32px', height: '32px' }} className="rounded-full"></div>
              <div style={{ backgroundColor: ORANGE, width: '22px', height: '22px' }} className="rounded-full"></div>
            </div>
          </div>

          <div className="relative flex items-center justify-center" style={{ width: '300px', height: '300px' }}>
            <div style={{ backgroundColor: PURPLE }} className="w-full h-full rounded-full flex items-center justify-center">
              <p className="text-white font-bold text-2xl text-center px-8" style={{ fontFamily: 'Plus Jakarta Sans' }}>Neurodiversity</p>
            </div>
            <div className="absolute bottom-10 flex gap-3">
              <div style={{ backgroundColor: ORANGE, width: '26px', height: '26px' }} className="rounded-full"></div>
              <div style={{ backgroundColor: ORANGE, width: '38px', height: '38px' }} className="rounded-full"></div>
              <div style={{ backgroundColor: ORANGE, width: '26px', height: '26px' }} className="rounded-full"></div>
            </div>
          </div>

          <div className="relative flex items-center justify-center" style={{ width: '220px', height: '220px' }}>
            <div style={{ backgroundColor: PURPLE }} className="w-full h-full rounded-full flex items-center justify-center">
              <p className="text-white font-bold text-xl text-center px-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>Accountability</p>
            </div>
            <div className="absolute bottom-6 flex gap-2">
              <div style={{ backgroundColor: ORANGE, width: '22px', height: '22px' }} className="rounded-full"></div>
              <div style={{ backgroundColor: ORANGE, width: '32px', height: '32px' }} className="rounded-full"></div>
              <div style={{ backgroundColor: ORANGE, width: '22px', height: '22px' }} className="rounded-full"></div>
            </div>
          </div>
        </div>

        <p className="text-xl font-semibold text-black mb-12" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          30% reduction in school dropout rates among our mentees
        </p>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="bg-gray-200 rounded-2xl h-64"></div>
          </div>
          
          <div className="col-span-8 bg-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>The Data</h3>
            <p className="text-sm text-zinc-700 leading-relaxed" style={{ fontFamily: 'DM Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>Beyond the Numbers</h3>
            <p className="text-sm text-zinc-700 leading-relaxed" style={{ fontFamily: 'DM Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>What This Means</h3>
            <p className="text-sm text-zinc-700 leading-relaxed" style={{ fontFamily: 'DM Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorksSection() {
  const steps = [
    { n: 1, title: "Get Matched", body: "During the mentor matching process, we learn about the needs of each mentee on an individual basis and match them to mentor who is the older version of them." },
    { n: 2, title: "Meet Your Mentor", body: "Before mentorship begins, families meet and approve each mentor. These meetings allow both the mentor and the family to get to know each other and see if the match is the right fit." },
    { n: 3, title: "In the Session", body: "We are focused on delivering content that is custom to each mentee; all activities, conversations, and needs are based on each mentee's specific interests and age." },
    { n: 4, title: "Family Matters", body: "Each month you and your child's mentor hop on a call to debrief the sessions, set goals, and talk progress. This helps keep everyone on the same page throughout the relationship!" },
    { n: 5, title: "For the Parents", body: "The value of being a member of Superpower Mentors does not stop with your child. Parents gain access to our Facebook community, member only Q+As, expert interviews, weekly updates, and more!" },
  ];

  return (
    <section style={{ backgroundColor: PURPLE }} className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-white uppercase mb-16" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          HOW IT WORKS
        </h2>
        
        <div className="relative">
        <div className="absolute left-7 top-0 w-px bg-white opacity-40" style={{ height: 'calc(100% - 80px)' }}></div>
          
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="relative flex gap-6 items-start">
                <div 
                  className="w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center flex-shrink-0 relative z-10 font-bold text-2xl"
                  style={{ fontFamily: 'Plus Jakarta Sans' }}
                >
                  {s.n}
                </div>
                <div className="bg-white rounded-2xl p-6 flex-1">
                  <p className="font-bold text-black text-lg mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>{s.title}</p>
                  <p className="text-zinc-700 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials
function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-black uppercase mb-16" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          HEAR FROM OTHER PARENTS
        </h2>
        
        <div className="grid gap-6 justify-center mx-auto" style={{ gridTemplateColumns: '337.67px 337.67px 337.67px', gridTemplateRows: '384px 339px', width: 'fit-content' }}>
          <div className="rounded-3xl overflow-hidden">
            <ImgPlaceholder className="w-full h-full" />
          </div>
          
          <div className="rounded-3xl p-8 flex flex-col justify-center bg-black relative overflow-visible">
            <div className="absolute" style={{ left: '-20px', top: '-10px', width: '100px', height: '88px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="88" viewBox="0 0 50 44" fill="none">
                <path d="M19.0576 0C20.0132 0.000111737 20.6958 0.279479 21.1056 0.837638C21.652 1.25667 21.9264 1.88587 21.9264 2.72392C21.9264 3.56202 21.6521 4.33061 21.1056 5.02903C20.5594 5.72703 19.8768 6.21555 19.0576 6.4949C16.3254 7.333 14.2067 8.87018 12.704 11.1051C11.3382 13.3398 10.6561 15.6445 10.656 18.0188C10.656 21.5109 11.8168 23.8864 14.1392 25.1435C16.4614 26.4006 18.1696 27.5877 19.2624 28.7051C20.3551 29.8226 20.9008 31.4994 20.9008 33.7341C20.9007 36.5276 19.9445 38.9715 18.032 41.0667C16.1195 43.0222 14.1388 44 12.0896 44C8.12825 43.9999 5.1227 42.3943 3.0736 39.182C1.02445 35.9693 0 31.9869 0 27.2376C0.00014303 23.0474 1.16098 18.8569 3.48321 14.6667C5.80548 10.4764 8.53815 6.98497 11.68 4.19139C14.822 1.39773 17.2817 0 19.0576 0Z" fill="#FFC92A"/>
              </svg>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-white" style={{ fontFamily: 'DM Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="font-bold text-sm text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>- Parent</p>
          </div>
          
          <div className="rounded-3xl overflow-hidden">
            <ImgPlaceholder className="w-full h-full" />
          </div>
          
          <div className="rounded-3xl p-8 flex flex-col justify-center bg-black relative overflow-visible">
            <div className="absolute" style={{ left: '-20px', top: '-10px', width: '100px', height: '88px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="88" viewBox="0 0 50 44" fill="none">
                <path d="M19.0576 0C20.0132 0.000111737 20.6958 0.279479 21.1056 0.837638C21.652 1.25667 21.9264 1.88587 21.9264 2.72392C21.9264 3.56202 21.6521 4.33061 21.1056 5.02903C20.5594 5.72703 19.8768 6.21555 19.0576 6.4949C16.3254 7.333 14.2067 8.87018 12.704 11.1051C11.3382 13.3398 10.6561 15.6445 10.656 18.0188C10.656 21.5109 11.8168 23.8864 14.1392 25.1435C16.4614 26.4006 18.1696 27.5877 19.2624 28.7051C20.3551 29.8226 20.9008 31.4994 20.9008 33.7341C20.9007 36.5276 19.9445 38.9715 18.032 41.0667C16.1195 43.0222 14.1388 44 12.0896 44C8.12825 43.9999 5.1227 42.3943 3.0736 39.182C1.02445 35.9693 0 31.9869 0 27.2376C0.00014303 23.0474 1.16098 18.8569 3.48321 14.6667C5.80548 10.4764 8.53815 6.98497 11.68 4.19139C14.822 1.39773 17.2817 0 19.0576 0Z" fill="#FFC92A"/>
              </svg>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-white" style={{ fontFamily: 'DM Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="font-bold text-sm text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>- Parent</p>
          </div>
          
          <div className="rounded-3xl overflow-hidden row-span-2">
            <ImgPlaceholder className="w-full h-full" />
          </div>
          
          <div className="rounded-3xl p-8 flex flex-col justify-center bg-black relative overflow-visible">
            <div className="absolute" style={{ left: '-20px', top: '-10px', width: '100px', height: '88px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="88" viewBox="0 0 50 44" fill="none">
                <path d="M19.0576 0C20.0132 0.000111737 20.6958 0.279479 21.1056 0.837638C21.652 1.25667 21.9264 1.88587 21.9264 2.72392C21.9264 3.56202 21.6521 4.33061 21.1056 5.02903C20.5594 5.72703 19.8768 6.21555 19.0576 6.4949C16.3254 7.333 14.2067 8.87018 12.704 11.1051C11.3382 13.3398 10.6561 15.6445 10.656 18.0188C10.656 21.5109 11.8168 23.8864 14.1392 25.1435C16.4614 26.4006 18.1696 27.5877 19.2624 28.7051C20.3551 29.8226 20.9008 31.4994 20.9008 33.7341C20.9007 36.5276 19.9445 38.9715 18.032 41.0667C16.1195 43.0222 14.1388 44 12.0896 44C8.12825 43.9999 5.1227 42.3943 3.0736 39.182C1.02445 35.9693 0 31.9869 0 27.2376C0.00014303 23.0474 1.16098 18.8569 3.48321 14.6667C5.80548 10.4764 8.53815 6.98497 11.68 4.19139C14.822 1.39773 17.2817 0 19.0576 0Z" fill="#FFC92A"/>
              </svg>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-white" style={{ fontFamily: 'DM Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="font-bold text-sm text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>- Parent</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    "Why should my child have a mentor?",
    "What are the benefits of mentoring?",
    "What is the difference between tutoring and mentoring?",
    "How do you track your impact?",
    "Who are your mentors?"
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-12 bg-white">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2
                className="text-black mb-8"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: '48px',
                  fontWeight: 700
                }}
              >
                Frequently Asked Questions
              </h2>
              <button
                className="bg-black text-white px-8 py-3 rounded-full"
                style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
              >
                Read Full FAQs
              </button>
            </div>

            <div
              style={{
                backgroundColor: DARK_PURPLE,
                width: '662px',
                height: '522px'
              }}
              className="rounded-3xl p-8"
            >
              {faqs.map((faq, i) => (
                <div key={i}>
                  <div className="py-5 flex justify-between items-center cursor-pointer">
                    <p className="text-white font-medium text-base" style={{ fontFamily: 'DM Sans' }}>
                      {faq}
                    </p>
                    <span className="text-white text-xl">▼</span>
                  </div>
                  {i < faqs.length - 1 && (
                    <div
                      style={{ backgroundColor: LIGHT_PURPLE, height: '1px' }}
                    ></div>
                  )}
                </div>
              ))}
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