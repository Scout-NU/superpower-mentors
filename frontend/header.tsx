import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[.08] dark:bg-black/80 dark:border-white/[.145]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-black dark:text-white">
          HOME
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            href="/mentoring" 
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Mentoring
          </Link>
          <Link 
            href="/about-us" 
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="/community" 
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Community
          </Link>
          <Link 
            href="/quality" 
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Quality
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}