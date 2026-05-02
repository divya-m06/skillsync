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
          {steps.map((step, i) => (
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
