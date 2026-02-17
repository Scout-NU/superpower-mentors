import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-black/[.08] dark:bg-black/80 dark:border-white/[.145]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Superpower Mentors
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/become-a-mentor"
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Become a Mentor
          </Link>

          <Link
            href="/careers"
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
