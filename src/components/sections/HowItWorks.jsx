const steps = [
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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="section-inner">
        <p className="section-eyebrow">Simple. Smart. Effective.</p>
        <h2 className="section-title">How SkillSync Works</h2>
        <p className="section-sub">
          Three steps from where you are to where you want to be.
        </p>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={step.number} className="step-card">
              {/* connector line between cards */}
              {i < steps.length - 1 && <div className="step-connector" />}

              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
