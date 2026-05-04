import logoImage from "../assets/images/SkillSync.png";

const footerLinks = [
  { href: "#top",          label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features",     label: "Features" },
];

function handleScroll(e, href) {
  if (href.startsWith("#")) {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--brand-charcoal)",
        borderTop: "4px solid var(--brand-olive)",
        paddingTop: 72,
      }}
    >
      {/* footer-inner class hook needed for responsive @media in global.css */}
      <div
        className="footer-inner grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px 60px",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: 48,
        }}
      >
        {/* Brand */}
        <div>
          <img
            src={logoImage}
            alt="SkillSync"
            className="block object-contain"
            style={{ width: 160, height: 50, objectPosition: "left center", marginBottom: 16 }}
          />
          <p style={{ fontSize: 13, color: "var(--brand-cream2)", lineHeight: 1.6, maxWidth: 280, marginBottom: 20 }}>
            AI-powered skill gap analysis and personalized career roadmaps.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center transition-colors duration-200 hover:opacity-80"
            aria-label="GitHub"
            style={{
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "var(--brand-cream2)",
              textDecoration: "none",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <p
            className="font-bold uppercase"
            style={{ fontSize: 13, letterSpacing: "0.08em", color: "var(--brand-cream)", marginBottom: 20 }}
          >
            Quick Links
          </p>
          <ul className="list-none flex flex-col" style={{ margin: 0, padding: 0, gap: 10 }}>
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => handleScroll(e, l.href)}
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ fontSize: 14, color: "var(--brand-cream2)", textDecoration: "none" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p
            className="font-bold uppercase"
            style={{ fontSize: 13, letterSpacing: "0.08em", color: "var(--brand-cream)", marginBottom: 20 }}
          >
            Get In Touch
          </p>
          <p style={{ fontSize: 13, color: "var(--brand-cream2)", lineHeight: 1.6, marginBottom: 14 }}>
            Built for students and professionals who want smarter career paths.
          </p>
          <a
            href="mailto:hello@skillsync.ai"
            className="transition-colors duration-200 hover:opacity-80"
            style={{ fontSize: 14, fontWeight: 600, color: "var(--brand-olive)", textDecoration: "none" }}
          >
            hello@skillsync.ai
          </a>
        </div>
      </div>

      {/* footer-bottom class hook needed for responsive @media in global.css */}
      <div
        className="footer-bottom flex justify-between items-center"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px 40px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          gap: 12,
        }}
      >
        <p style={{ fontSize: 13, color: "rgba(245,245,233,0.4)" }}>© {new Date().getFullYear()} SkillSync. All rights reserved.</p>
        <p style={{ fontSize: 13, color: "rgba(245,245,233,0.4)" }}>Built with ❤️ for smarter career growth.</p>
      </div>
    </footer>
  );
}
