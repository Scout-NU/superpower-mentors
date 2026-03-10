import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#D9D9D9" }}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-sm text-black">
          © {new Date().getFullYear()} Superpower Mentors
        </div>

        <div className="flex items-center gap-8">
          <Link 
            href="/become-a-mentor" 
            className="text-sm font-medium text-black hover:text-zinc-400 transition-colors"
          >

            Become a Mentor
          </Link>

          <Link
            href="/careers"
            className="text-sm font-medium text-black hover:text-zinc-400 transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-black hover:text-zinc-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
