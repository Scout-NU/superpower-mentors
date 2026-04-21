"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/about-us", label: "About Us" },
    { href: "/mentoring", label: "Mentoring" },
    { href: "/partnership", label: "Partnerships" },
    { href: "/quality", label: "Quality" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-xl border-b border-white/10 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/spm_logo.png"
            alt="Logo"
            className="h-12 md:h-20 w-auto"
            width={100}
            height={40}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-zinc-600 transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/mentoring#strategy-call-form"
          className="hidden md:inline-flex glow-btn glow-btn--alt px-6 py-2.5 bg-blue-600 hover:bg-blue-700 !text-white text-lg font-medium rounded-lg transition-colors"
        >
          Get Started
        </Link>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-black/5 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/80 backdrop-blur-xl border-t border-white/10`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-lg font-medium">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-zinc-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/mentoring#strategy-call-form"
            className="glow-btn glow-btn--alt mt-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 !text-white text-center font-medium rounded-lg transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}