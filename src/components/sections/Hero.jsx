/* Roadmap card displayed on the hero right side — purely coded, no image dependency */
function scrollToSection(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
function RoadmapCard() {
  const steps = [
    { done: true,  label: "Python Fundamentals",   tag: "Completed",   progress: 100 },
    { done: true,  label: "Data Structures & Algo", tag: "In Progress", progress: 65  },
    { done: false, label: "Machine Learning Basics", tag: "Up Next",    progress: 0   },
  ];

  return (
    <div className="roadmap-card">
      {/* card header */}
      <div className="roadmap-card-header">
        <div className="roadmap-card-dot pulse" />
        <span className="roadmap-card-label">Your AI Roadmap</span>
        <span className="roadmap-card-badge">Live</span>
      </div>

      {/* profile row */}
      <div className="roadmap-profile">
        <div className="roadmap-avatar">SK</div>
        <div>
          <p className="roadmap-name">Skill Analysis Complete</p>
          <p className="roadmap-meta">3 gaps identified · 12 courses curated</p>
        </div>
      </div>

      {/* steps */}
      <div className="roadmap-steps">
        {steps.map((s, i) => (
          <div key={s.label} className="roadmap-step">
            <div className={`roadmap-step-indicator ${s.done ? "done" : ""} ${i === 1 ? "active" : ""}`}>
              {s.done && i === 0 ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <span>{i + 1}</span>
              )}
            </div>
            {i < steps.length - 1 && <div className="roadmap-step-line" />}
            <div className="roadmap-step-content">
              <div className="roadmap-step-top">
                <span className="roadmap-step-name">{s.label}</span>
                <span className={`roadmap-step-tag tag-${s.tag.toLowerCase().replace(" ", "-")}`}>{s.tag}</span>
              </div>
              {s.progress > 0 && (
                <div className="roadmap-progress-bar">
                  <div className="roadmap-progress-fill" style={{ width: `${s.progress}%` }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* skill tags */}
      <div className="roadmap-skill-tags">
        {["Python", "NumPy", "Pandas", "Scikit-learn", "SQL"].map((sk) => (
          <span key={sk} className="roadmap-skill-pill">{sk}</span>
        ))}
      </div>

      {/* overall progress */}
      <div className="roadmap-footer">
        <span className="roadmap-footer-label">Overall Progress</span>
        <span className="roadmap-footer-pct">38%</span>
      </div>
      <div className="roadmap-overall-bar">
        <div className="roadmap-overall-fill" style={{ width: "38%" }} />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">
          <span className="hero-eyebrow">AI-Powered Career Intelligence</span>
          <h1 className="hero-heading">
            Grow Your Skills.<br />
            <span className="hero-heading-accent">Shape Your Future.</span>
          </h1>
          <p className="hero-sub">
            SkillSync helps you discover personalized learning paths and career
            opportunities using AI — designed to match your goals and strengths.
          </p>
          <div className="hero-actions">
            <button className="get-started" type="button">
              Get Started Free
            </button>
            <button
              className="hero-btn-ghost"
              type="button"
              onClick={() => scrollToSection("#how-it-works")}
            >
              See How It Works ↓
            </button>
          </div>

        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hero-right">
          <RoadmapCard />
        </div>
      </div>
    </section>
  );
}
