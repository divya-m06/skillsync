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
    desc: "Get a week-by-week learning plan generated for your specific skill gaps — with focus areas and action items for each week.",
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
    <section id="features" className="features-section">
      <div className="section-inner">
        <p className="section-eyebrow">What We Offer</p>
        <h2 className="section-title light">Feature Highlights</h2>
        <p className="section-sub light">
          Everything you need to accelerate your career — intelligently.
        </p>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <span className="feature-tag">{f.tag}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
