export default function CTABanner() {
  return (
    /* cta-section class needed for ::before pseudo-element in global.css */
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
          <button
            type="button"
            className="cursor-pointer border-none font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: "var(--brand-charcoal)",
              color: "var(--brand-cream)",
              borderRadius: 40,
              padding: "14px 36px",
              fontSize: 15,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
}
