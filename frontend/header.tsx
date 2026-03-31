import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-black/[.08]">
      {/* use the following code to add animated logo to the site: 
      <div className="absolute left-5 top-1/2 -translate-y-1/2">
        <Logo />
      </div> */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="px-8 py-3 bg-zinc-200 rounded-lg text-black font-medium">
          Logo
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            href="/about-us" 
            className="text-sm font-medium text-black hover:text-zinc-600 transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="/mentoring" 
            className="text-sm font-medium text-black hover:text-zinc-600 transition-colors"
          >
            Mentoring
          </Link>
          <Link 
            href="/partnership" 
            className="text-sm font-medium text-black hover:text-zinc-600 transition-colors"
          >
            Partnerships
          </Link>
          <Link 
            href="/quality" 
            className="text-sm font-medium text-black hover:text-zinc-600 transition-colors"
          >
            Quality
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium text-black hover:text-zinc-600 transition-colors"
          >
            Blog
          </Link>
        </div>

        <Link 
          href="/get-started"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 !text-white font-medium rounded-lg transition-colors"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}