import QuizModal from "../frontend/PopupQuiz";

// Color constants
const BLUE   = "#001EDF";
const ORANGE = "#FF9925";

// Placeholder image block
function ImgPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-zinc-200 rounded-full flex items-center justify-center ${className}`}>
      <span className="text-zinc-400 text-xs">IMG</span>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="bg-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Text content */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight text-black uppercase">
            Relate.<br />
            <span style={{ color: BLUE }}>Empower.</span><br />
            <span style={{ color: BLUE }}>Transform.</span>
          </h1>
          <p className="mt-4 text-zinc-600 max-w-sm">
            Trusted online mentorship to launch youth with ADHD, Dyslexia,
            Autism, and other learning differences.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <button style={{ backgroundColor: BLUE }} className="hover:opacity-90 text-white font-semibold px-6 py-3 rounded-md transition-opacity">
              Start Your Journey
            </button>
            <button className="border-2 border-black text-black hover:bg-blue-50 font-semibold px-6 py-3 rounded-md transition-colors">
              Become a Mentor
            </button>
          </div>
        </div>

        {/* Statistics yuh statistics */}
        <div className="mt-10 flex flex-wrap gap-8 items-center">
          <div className="border-2 border-black bg-white rounded-xl px-5 py-3 text-center">
            <p className="text-2xl font-extrabold text-black">14K+</p>
            <p className="text-xs text-zinc-500">Sessions</p>
          </div>
          <div style={{ backgroundColor: ORANGE }} className="border-2 border-black text-black rounded-xl px-6 py-3 text-center min-w-[110px]">
            <p className="text-2xl font-extrabold">XXX+</p>
            <p className="text-xs">Mentees</p>
          </div>
          <div style={{ backgroundColor: BLUE }} className="border-2 border-black text-white rounded-xl px-6 py-3 text-center min-w-[110px]">
            <p className="text-2xl font-extrabold text-white">93%</p>
            <p className="text-xs text-white">Improvement</p>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-10">
          <p className="text-xs text-zinc-400 uppercase tracking-widest mb-4">
            Discover Our Partners
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-20 h-10 bg-zinc-100 rounded flex items-center justify-center text-zinc-300 text-xs">
                Logo
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Meet Our Mentors
const MENTORS = [
  { name: "Christiana W.", bio: "Los Angeles, USA. ADHD. Creative Art Director, Advertising, Social Media & Semi-Professional Athlete." },
  { name: "Jeff S.",       bio: "Bronx, NY. ADHD, Aerospace Research Engineer @ NASA, Blockchain Affiliate Marketer." },
  { name: "Dylann C.",     bio: "Philadelphia, MSA. WS, ADHD, Educator, Writer, Artist, Blogger, Neurodivergent, Entrepreneur." },
];

function MeetMentorsSection() {
  return (
    <section style={{ backgroundColor: BLUE }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white uppercase mb-10">
          Meet Our Mentors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 items-stretch">
          {MENTORS.map((m) => (
            <div key={m.name} className="border-2 border-black bg-white rounded-2xl p-8 pb-4 flex flex-col items-start gap-3 w-65 h-full">
            <div className="w-full flex justify-center">
              <ImgPlaceholder className="w-24 h-24" />
            </div>
            <p className="font-bold text-black text-sm">{m.name}</p>
            <p className="text-zinc-500 text-xs leading-relaxed">{m.bio}</p>
          </div>
          ))}
        </div>
        <div className="mt-8 flex text-black">
          <button className="bg-white border-2 border-black hover:bg-zinc-100 font-semibold px-8 py-3 rounded-md transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

// Discover Superpowers
const SUPERPOWERS = [
  { highlight: false, title: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { highlight: true,  title: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { highlight: false, title: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

function SuperpowersSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-black uppercase">
          Discover Your Child&apos;s{" "}
          <span style={{ color: BLUE }}>Superpowers</span>
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {SUPERPOWERS.map((s, i) => (
            <div
            key={i}
            style={s.highlight ? { backgroundColor: ORANGE } : { backgroundColor: BLUE }}
            className={`rounded-2xl p-6 flex flex-col gap-3 w-60 h-65 ${
              s.highlight
                ? "text-black"
                : "text-white border border-zinc-100 mt-8"
            }`}
          >
              <ImgPlaceholder className={`w-12 h-12 ${s.highlight ? "bg-orange-300" : ""}`} />
              <p className={`font-bold text-sm ${s.highlight ? "text-black" : "text-white"}`}>{s.title}</p>
              <p className={`text-xs leading-relaxed ${s.highlight ? "text-black/80" : "text-white/90"}`}>
                {s.body}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works
const STEPS = [
  { n: 1, title: "Get Matched",      body: "During the mentor matching process, we learn about the needs of each mentee on an individual basis and match them to a mentor who is the older version of them." },
  { n: 2, title: "Meet Your Mentor", body: "Before mentorship begins, families meet and approve each mentor. These meetings allow both the mentor and the family to get to know each other and see if the match is the right fit." },
  { n: 3, title: "In the Session",   body: "We are focused on delivering content that is custom to each mentee; all activities, conversations, and media are based on each mentee's specific interests and age." },
  { n: 4, title: "Family Matters",   body: "Each month you and your child's mentor hop on a call to debrief the sessions, set goals, and talk progress. This helps keep everyone on the same page throughout the relationship!" },
  { n: 5, title: "For the Parents",  body: "The value of being a member of Superpower Mentors does not stop with your child. Parents gain access to our Facebook community, member only Q+As, expert interviews, weekly updates, and more!" },
];

function HowItWorksSection() {
  return (
    <section style={{ backgroundColor: BLUE }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white uppercase mb-12">
          How It Works
        </h2>
        {/* Two-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="border-2 border-black bg-white rounded-2xl p-6 flex gap-4 items-start">
              <span style={{ backgroundColor: "#FFFB00" }} className="border-2 border-black text-black font-extrabold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">
                {s.n}
              </span>
              <div>
                <p className="font-bold text-black text-sm">{s.title}</p>
                <p className="text-zinc-500 text-xs leading-relaxed mt-1">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
const TESTIMONIALS = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", quoteColor: "YELLOW" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", quoteColor: "black" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", quoteColor: ORANGE },
];

function TestimonialsSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-black uppercase mb-10">
          Hear From Other Parents
        </h2>
        <div className="grid grid-cols-3 gap-6 items-center">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col overflow-hidden rounded-md ${i === 1 ? "scale-105" : "mt-18"}`}
              style={{ width: "260px" }}
            >
              {/* Image on top for side cards */}
              {i !== 1 && (
                <div className="w-full h-40 bg-zinc-200 flex items-center justify-center text-zinc-400 text-xs">
                  Image Placeholder
                </div>
              )}
              {/* Blue text block */}
              <div style={{ backgroundColor: BLUE }} className="p-6 flex flex-col gap-3">
                <span style={{ color: t.quoteColor }} className="text-4xl font-serif leading-none">&ldquo;</span>
                <p className="text-white text-sm leading-relaxed">{t.quote}</p>
                <p className="text-white font-bold text-sm">- Parent</p>
              </div>
              {/* Image on bottom for center card */}
              {i === 1 && (
                <div className="w-full h-40 bg-zinc-200 flex items-center justify-center text-zinc-400 text-xs">
                  Image Placeholder
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Page root
export default function HomePage() {
  return (
    <>
      <QuizModal />
      <main className="min-h-screen">
        <HeroSection />
        <MeetMentorsSection />
        <SuperpowersSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
    </>
  );
}