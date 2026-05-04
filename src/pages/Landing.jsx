import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// ─── Hero ────────────────────────────────────────────────────────────────────

const tagInlineStyles = {
  "completed":   { background: "rgba(125,155,118,0.2)",   color: "var(--brand-olive)" },
  "in-progress": { background: "rgba(255,200,80,0.15)",   color: "#f0b429" },
  "up-next":     { background: "rgba(255,255,255,0.07)",  color: "var(--brand-cream2)" },
};

function indicatorStyle(s, i) {
  if (i === 1) return { background: "rgba(125,155,118,0.2)", border: "1.5px solid var(--brand-olive)", color: "var(--brand-olive)", boxShadow: "0 0 0 4px rgba(125,155,118,0.1)" };
  if (s.done)  return { background: "var(--brand-olive)",     border: "1.5px solid var(--brand-olive)", color: "#fff" };
  return         { background: "rgba(125,155,118,0.1)",        border: "1.5px solid rgba(125,155,118,0.3)", color: "var(--brand-cream2)" };
}

function scrollToSection(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function RoadmapCard() {
  const steps = [
    { done: true,  label: "Python Fundamentals",    tag: "Completed",   progress: 100 },
    { done: true,  label: "Data Structures & Algo", tag: "In Progress", progress: 65  },
    { done: false, label: "Machine Learning Basics", tag: "Up Next",    progress: 0   },
  ];

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        background: "var(--brand-charcoal3)",
        border: "1px solid rgba(125,155,118,0.2)",
        borderRadius: 20,
        padding: 28,
        maxWidth: 420,
        boxShadow: "0 0 60px rgba(125,155,118,0.08), 0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center gap-2" style={{ marginBottom: 20 }}>
        <div
          className="rounded-full animate-[pulse-dot_2s_infinite]"
          style={{ width: 8, height: 8, background: "var(--brand-olive)", flexShrink: 0 }}
        />
        <span className="font-bold flex-1" style={{ fontSize: 14, color: "var(--brand-cream)" }}>Your AI Roadmap</span>
        <span
          className="font-semibold"
          style={{ fontSize: 11, color: "var(--brand-olive)", background: "rgba(125,155,118,0.15)", padding: "3px 10px", borderRadius: 20, letterSpacing: "0.05em" }}
        >
          Live
        </span>
      </div>

      <div
        className="flex items-center gap-3"
        style={{ padding: 14, background: "rgba(0,0,0,0.25)", borderRadius: 12, marginBottom: 22 }}
      >
        <div
          className="rounded-full flex items-center justify-center font-bold text-white"
          style={{ width: 40, height: 40, background: "var(--brand-olive)", fontSize: 13, fontWeight: 700, flexShrink: 0 }}
        >
          SK
        </div>
        <div>
          <p className="font-semibold" style={{ fontSize: 13, color: "var(--brand-cream)", marginBottom: 2 }}>Skill Analysis Complete</p>
          <p style={{ fontSize: 11, color: "var(--brand-cream2)" }}>3 gaps identified · 12 courses curated</p>
        </div>
      </div>

      <div className="flex flex-col" style={{ marginBottom: 20 }}>
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-start gap-3 relative" style={{ paddingBottom: i === steps.length - 1 ? 0 : 16 }}>
            <div
              className="rounded-full flex items-center justify-center font-bold relative"
              style={{ width: 28, height: 28, fontSize: 11, flexShrink: 0, zIndex: 1, ...indicatorStyle(s, i) }}
            >
              {s.done && i === 0 ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <span>{i + 1}</span>
              )}
            </div>
            {i < steps.length - 1 && <div className="roadmap-step-line" />}
            <div className="flex-1" style={{ paddingTop: 4 }}>
              <div className="flex items-center justify-between gap-2" style={{ marginBottom: 6 }}>
                <span className="font-semibold" style={{ fontSize: 12, color: "var(--brand-cream)" }}>{s.label}</span>
                <span
                  className="font-semibold whitespace-nowrap"
                  style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, ...tagInlineStyles[s.tag.toLowerCase().replace(" ", "-")] }}
                >
                  {s.tag}
                </span>
              </div>
              {s.progress > 0 && (
                <div className="rounded-full overflow-hidden" style={{ height: 4, background: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.progress}%`, background: "var(--brand-olive)", transition: "width 0.6s ease" }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap" style={{ gap: 6, marginBottom: 18 }}>
        {["Python", "NumPy", "Pandas", "Scikit-learn", "SQL"].map((sk) => (
          <span
            key={sk}
            className="font-medium"
            style={{ fontSize: 11, color: "var(--brand-cream2)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "3px 10px", borderRadius: 20 }}
          >
            {sk}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center" style={{ marginBottom: 6 }}>
        <span className="font-medium" style={{ fontSize: 11, color: "var(--brand-cream2)" }}>Overall Progress</span>
        <span className="font-bold" style={{ fontSize: 13, color: "var(--brand-olive)" }}>38%</span>
      </div>
      <div className="overflow-hidden" style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 6 }}>
        <div
          style={{ width: "38%", height: "100%", background: "linear-gradient(90deg, var(--brand-olive-dk), var(--brand-olive))", borderRadius: 6 }}
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center"
      style={{ backgroundColor: "var(--brand-charcoal)" }}
    >
      <div
        className="grid grid-cols-2 items-center hero-inner"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px", gap: 60 }}
      >
        <div className="flex flex-col items-start gap-5 hero-left">
          <span
            className="inline-flex items-center gap-2 font-semibold uppercase"
            style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              color: "var(--brand-olive)",
              background: "rgba(125,155,118,0.12)",
              padding: "6px 14px",
              borderRadius: 30,
              border: "1px solid rgba(125,155,118,0.25)",
            }}
          >
            AI-Powered Career Intelligence
          </span>
          <h1
            className="font-extrabold m-0 hero-heading"
            style={{ fontSize: 56, lineHeight: 1.08, letterSpacing: "-1.5px", color: "var(--brand-cream)" }}
          >
            Grow Your Skills.<br />
            <span style={{ color: "var(--brand-olive)" }}>Shape Your Future.</span>
          </h1>
          <p
            className="hero-sub"
            style={{ fontSize: 17, lineHeight: 1.7, color: "var(--brand-cream2)", maxWidth: 480 }}
          >
            SkillSync helps you discover personalized learning paths and career
            opportunities using AI, designed to match your goals and strengths.
          </p>
          <div className="flex items-center gap-4 flex-wrap hero-actions">
            <Link
              to="/dashboard"
              className="cursor-pointer border-none font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
              style={{
                borderRadius: 40,
                background: "var(--brand-olive)",
                padding: "13px 32px",
                fontSize: 15,
                fontFamily: "'Montserrat', sans-serif",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get Started Free
            </Link>
            <button
              type="button"
              className="cursor-pointer bg-transparent font-medium transition-all duration-200 hover:opacity-90"
              style={{
                border: "1.5px solid rgba(125,155,118,0.4)",
                borderRadius: 40,
                padding: "12px 28px",
                fontSize: 15,
                fontFamily: "'Montserrat', sans-serif",
                color: "var(--brand-cream2)",
              }}
              onClick={() => scrollToSection("#how-it-works")}
            >
              See How It Works ↓
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <RoadmapCard />
        </div>
      </div>
    </section>
  );
}

// ─── HowItWorks ───────────────────────────────────────────────────────────────

const howItWorksSteps = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 2a10 10 0 110 20A10 10 0 0116 6zm-1 4v7l5.25 3.15.75-1.23-4.5-2.67V10H15z" fill="#7d9b76"/>
        <circle cx="16" cy="16" r="3" fill="#7d9b76" opacity="0.3"/>
      </svg>
    ),
    title: "Enter Your Skills",
    desc: "Tell us what you know. Add your current skills, experience level, and career goals in minutes.",
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 10h20M6 16h14M6 22h9" stroke="#7d9b76" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="26" cy="20" r="5" stroke="#7d9b76" strokeWidth="2"/>
        <path d="M29.5 23.5l2.5 2.5" stroke="#7d9b76" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Discover Skill Gaps",
    desc: "Our AI analyses your profile against real job market data and pinpoints exactly what's missing.",
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 28V16M14 28V8M20 28V18M26 28V4" stroke="#7d9b76" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="8"  cy="14" r="2" fill="#7d9b76"/>
        <circle cx="14" cy="6"  r="2" fill="#7d9b76"/>
        <circle cx="20" cy="16" r="2" fill="#7d9b76"/>
        <circle cx="26" cy="2"  r="2" fill="#7d9b76"/>
      </svg>
    ),
    title: "Get Your Personalized Roadmap",
    desc: "Receive a step-by-step AI-generated roadmap with curated courses, timelines, and milestones.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ backgroundColor: "var(--section-bg)", padding: "100px 0" }}
    >
      <div
        className="text-center"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}
      >
        <p
          className="block text-center font-semibold uppercase"
          style={{ fontSize: 13, letterSpacing: "0.12em", color: "var(--brand-olive)", marginBottom: 12 }}
        >
          Simple. Smart. Effective.
        </p>
        <h2
          className="font-extrabold text-center"
          style={{ fontSize: 38, lineHeight: 1.15, letterSpacing: "-0.5px", color: "var(--brand-charcoal)", marginBottom: 14 }}
        >
          How SkillSync Works
        </h2>
        <p
          style={{ fontSize: 17, color: "#666", maxWidth: 520, marginBottom: 56, lineHeight: 1.65, textAlign: "center", margin: "0 auto 56px" }}
        >
          Three steps from where you are to where you want to be.
        </p>

        <div className="steps-grid grid grid-cols-3 relative" style={{ gap: 0, marginTop: 8 }}>
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="step-card relative text-center bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                padding: "36px 32px",
                border: "1px solid #ebebeb",
                borderRadius: 16,
                margin: "0 12px",
              }}
            >
              <div
                className="font-extrabold leading-none"
                style={{ fontSize: 48, color: "rgba(125,155,118,0.15)", marginBottom: 16, letterSpacing: "-2px" }}
              >
                {step.number}
              </div>
              <div className="flex justify-center" style={{ marginBottom: 18 }}>{step.icon}</div>
              <h3
                className="font-bold"
                style={{ fontSize: 17, color: "var(--brand-charcoal)", marginBottom: 12, lineHeight: 1.3 }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="10" fill="#7d9b76" fillOpacity="0.12"/>
        <path d="M20 10a10 10 0 100 20 10 10 0 000-20zm-1 4h2v8h-2v-8zm0 10h2v2h-2v-2z" fill="#7d9b76" fillOpacity="0.6"/>
        <circle cx="20" cy="20" r="5" fill="#7d9b76"/>
        <path d="M13 13l3 3M27 13l-3 3M13 27l3-3M27 27l-3-3" stroke="#7d9b76" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: "Skill Gap Analysis",
    desc: "Enter your current skills and target role. SkillSync compares them against real job market data to show exactly what you're missing.",
    tag: "Powered by NLP",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="10" fill="#7d9b76" fillOpacity="0.12"/>
        <path d="M10 30V18l10-8 10 8v12H24v-8h-8v8H10z" fill="#7d9b76" fillOpacity="0.5"/>
        <path d="M10 30V18l10-8 10 8v12" stroke="#7d9b76" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="17" y="22" width="6" height="8" rx="1" stroke="#7d9b76" strokeWidth="1.5"/>
      </svg>
    ),
    title: "AI Learning Roadmap",
    desc: "Get a week-by-week learning plan generated for your specific skill gaps, with focus areas and action items for each week.",
    tag: "Powered by LLM",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="10" fill="#7d9b76" fillOpacity="0.12"/>
        <rect x="9" y="13" width="22" height="15" rx="3" stroke="#7d9b76" strokeWidth="2"/>
        <path d="M13 20h5M13 24h8" stroke="#7d9b76" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="20" r="3" fill="#7d9b76" opacity="0.7"/>
        <path d="M14 9h12" stroke="#7d9b76" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: "Course Recommendations",
    desc: "Each roadmap includes relevant courses matched to your missing skills from a curated dataset of free and paid resources.",
    tag: "Curated Dataset",
  },
];

function Features() {
  return (
    <section
      id="features"
      style={{ backgroundColor: "var(--section-dark)", padding: "100px 0" }}
    >
      <div
        className="text-center"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}
      >
        <p
          className="block text-center font-semibold uppercase"
          style={{ fontSize: 13, letterSpacing: "0.12em", color: "var(--brand-olive)", marginBottom: 12 }}
        >
          What We Offer
        </p>
        <h2
          className="font-extrabold text-center"
          style={{ fontSize: 38, lineHeight: 1.15, letterSpacing: "-0.5px", color: "var(--brand-cream)", marginBottom: 14 }}
        >
          Feature Highlights
        </h2>
        <p
          style={{ fontSize: 17, color: "var(--brand-cream2)", maxWidth: 520, lineHeight: 1.65, textAlign: "center", margin: "0 auto 56px" }}
        >
          Everything you need to accelerate your career, intelligently.
        </p>

        <div className="features-grid grid grid-cols-3 text-left" style={{ gap: 24 }}>
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "var(--brand-charcoal3)",
                border: "1px solid rgba(125,155,118,0.15)",
                borderRadius: 16,
                padding: "32px 28px",
              }}
            >
              <div style={{ marginBottom: 14 }}>{f.icon}</div>
              <span
                className="inline-block font-semibold uppercase"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  color: "var(--brand-olive)",
                  background: "rgba(125,155,118,0.12)",
                  padding: "3px 10px",
                  borderRadius: 20,
                  marginBottom: 14,
                }}
              >
                {f.tag}
              </span>
              <h3
                className="font-bold"
                style={{ fontSize: 18, color: "var(--brand-cream)", marginBottom: 12, lineHeight: 1.3 }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--brand-cream2)", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTABanner ────────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section
      id="cta"
      className="cta-section relative overflow-hidden"
      style={{ backgroundColor: "var(--brand-olive)", padding: "100px 0" }}
    >
      <div
        className="relative"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "0 40px",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          className="font-semibold uppercase"
          style={{ fontSize: 12, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", marginBottom: 16, textAlign: "center", width: "100%" }}
        >
          Your next step starts here
        </p>
        <h2
          className="font-extrabold text-white cta-heading"
          style={{ fontSize: 42, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: 18, textAlign: "center" }}
        >
          Ready to close your skill gap?
        </h2>
        <p
          style={{ fontSize: 16, color: "rgba(255,255,255,0.82)", lineHeight: 1.7, maxWidth: 540, marginBottom: 36, textAlign: "center" }}
        >
          Select a role, enter your skills, and get a personalized AI roadmap in seconds.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="/dashboard"
            style={{
              background: "var(--brand-charcoal)",
              color: "var(--brand-cream)",
              borderRadius: 40,
              padding: "14px 36px",
              fontSize: 15,
              fontFamily: "'Montserrat', sans-serif",
              textDecoration: "none",
              display: "inline-block",
              fontWeight: 700,
            }}
          >
            Get Started for Free
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Landing (main export) ────────────────────────────────────────────────────

export default function Landing() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <Hero />
        <HowItWorks />
        <Features />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}