import { useState, useEffect } from "react";
import logoImage from "../../assets/images/SkillSync.png";

const navLinks = [
  { href: "#top",        label: "Home" },
  { href: "#dashboard",  label: "Dashboard" },
  { href: "#roadmaps",   label: "My Roadmaps" },
];

function handleSmoothScroll(e, href) {
  if (href.startsWith("#")) {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`myNav${scrolled ? " scrolled" : ""}`}>
      <a href="#top" aria-label="SkillSync home" onClick={(e) => handleSmoothScroll(e, "#top")}>
        <img className="logo" src={logoImage} alt="SkillSync" />
      </a>

      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button className="login" type="button">
            Login / Signup
          </button>
        </li>
      </ul>
    </nav>
  );
}
