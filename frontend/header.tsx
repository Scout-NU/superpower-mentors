import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-xl border-b border-white/10 shadow-sm">
      {/* Optional animated logo */}
      {/* 
      <div className="absolute left-5 top-1/2 -translate-y-1/2">
        <Logo />
      </div> 
      */}

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="px-8 py-3 bg-zinc-200 rounded-lg text-black text-lg font-semibold"
        >
          Logo
        </Link>

        <div className="flex items-center gap-8 text-lg font-medium">
          <Link href="/about-us" className="hover:text-zinc-600 transition-colors">
            About Us
          </Link>
          <Link href="/mentoring" className="hover:text-zinc-600 transition-colors">
            Mentoring
          </Link>
          <Link href="/partnership" className="hover:text-zinc-600 transition-colors">
            Partnerships
          </Link>
          <Link href="/quality" className="hover:text-zinc-600 transition-colors">
            Quality
          </Link>
          <Link href="/blog" className="hover:text-zinc-600 transition-colors">
            Blog
          </Link>
        </div>

        <Link
          href="/mentoring#strategy-call-form"
          className="glow-btn glow-btn--alt px-6 py-2.5 bg-blue-600 hover:bg-blue-700 !text-white text-lg font-medium rounded-lg transition-colors"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}