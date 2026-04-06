"use client";

import { useState } from "react";
// import styles from "../app/globals.css";
// Color constants
const DARK_PURPLE = "#350B49";
const LIGHT_PURPLE = "#B959F1";


export function DropdownSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "Why should my child have a mentor?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { q: "What are the benefits of mentoring?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { q: "What is the difference between tutoring and mentoring?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { q: "How do you track your impact?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { q: "Who are your mentors?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  ];

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div style={{ backgroundColor: DARK_PURPLE, width: '662px' }} className="rounded-3xl p-8">
      {faqs.map((faq, i) => (
        <div key={i}>
          <div className="py-5 flex justify-between items-center cursor-pointer gap-4" onClick={() => toggle(i)}>
            <p className="text-white font-medium text-base" style={{ fontFamily: 'DM Sans' }}>{faq.q}</p>
            <span
              className="text-white text-sm flex-shrink-0"
              style={{ display: 'inline-block', transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
            >
              ▼
            </span>
          </div>
          <div style={{ maxHeight: openIdx === i ? '200px' : '0px', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
            <p className="text-white text-sm leading-relaxed pb-4 opacity-80" style={{ fontFamily: 'DM Sans' }}>{faq.a}</p>
          </div>
          {i < faqs.length - 1 && <div style={{ backgroundColor: LIGHT_PURPLE, height: '1px' }}></div>}
        </div>
      ))}
    </div>
          
  );
}