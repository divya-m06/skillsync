import logoImage from "../../assets/images/SkillSync.png";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b-[8px] border-[var(--brand-olive)] bg-[var(--brand-charcoal)] text-[var(--brand-cream)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-4 px-5 py-5 md:flex-row md:justify-between md:px-[50px] md:py-[10px]">
        <a href="#top" aria-label="SkillSync home">
          <img
            className="h-20 w-[250px] object-cover"
            src={logoImage}
            alt="SkillSync"
          />
        </a>

        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
          {navLinks.map((link) => (
            <li key={link.label} className="md:px-5">
              <a
                className="text-lg font-medium text-[var(--brand-cream)] transition-colors duration-300 hover:text-[var(--brand-olive)]"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="md:px-5">
            <button
              className="cursor-pointer rounded-[40px] bg-[var(--brand-olive)] px-[25px] py-2 text-base text-white transition-opacity duration-300 hover:opacity-80"
              type="button"
            >
              Login/Signup
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
