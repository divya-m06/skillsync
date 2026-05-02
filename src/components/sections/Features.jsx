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

export default function Features() {
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
