import logoImage from "../../assets/images/SkillSync.png";

const navLinks = [
  { href: "#top",          label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features",     label: "Features" },
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

/*
  Navbar: Uses inline style props for pixel-exact values that Tailwind v4's scanner
  cannot reliably generate from arbitrary-value classes (px-[50px], border-b-[8px], etc.).
  Standard Tailwind classes are used for layout utilities (flex, fixed, w-full, etc.)
  which are always in Tailwind's base set and don't require scanning.
*/
export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center w-full fixed top-0 left-0 text-white"
      style={{
        padding: "16px 50px",
        background: "rgba(20, 20, 20, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "6px solid #7d9b76",
        zIndex: 50,
        width: "100%",
      }}
    >
      <a href="#top" aria-label="SkillSync home" onClick={(e) => handleSmoothScroll(e, "#top")}>
        <img
          src={logoImage}
          alt="SkillSync"
          className="logo block object-contain"
          style={{ width: 180, height: 56, objectPosition: "left center" }}
        />
      </a>

      <ul className="flex items-center list-none" style={{ margin: 0, padding: 0 }}>
        {navLinks.map((link) => (
          <li key={link.label} style={{ display: "inline-block", padding: "0 16px" }}>
            <a
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="hover:text-[var(--brand-olive)] transition-colors duration-[250ms]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: "var(--brand-cream)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li style={{ display: "inline-block", padding: "0 16px" }}>
          <button
            type="button"
            className="hover:opacity-90 transition-opacity duration-[250ms]"
            style={{
              backgroundColor: "var(--brand-olive)",
              padding: "9px 26px",
              border: "none",
              borderRadius: 40,
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            Login / Signup
          </button>
        </li>
      </ul>
    </nav>
  );
}
