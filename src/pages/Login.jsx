import { Link } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"
import logoImage from "../assets/images/SkillSync.png"

async function handleGoogleSignIn() {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/dashboard",
    },
  })
}

export default function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1a",
        fontFamily: "'Montserrat', sans-serif",
        padding: "24px",
      }}
    >
      {/* Card */}
      <div
        style={{
          background: "var(--brand-charcoal)",
          border: "1px solid rgba(125, 155, 118, 0.2)",
          borderRadius: 16,
          padding: "48px 40px",
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <img
          src={logoImage}
          alt="SkillSync"
          style={{
            width: 160,
            height: 50,
            objectFit: "contain",
            objectPosition: "center",
            display: "block",
            marginBottom: 28,
          }}
        />

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26,
            fontWeight: 800,
            color: "var(--brand-cream)",
            textAlign: "center",
            margin: "0 0 8px",
            letterSpacing: "-0.3px",
          }}
        >
          Welcome back
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "var(--brand-cream2)",
            textAlign: "center",
            margin: "0 0 32px",
            lineHeight: 1.5,
          }}
        >
          Sign in to save and revisit your roadmaps.
        </p>

        {/* Google button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          style={{
            width: "100%",
            padding: "13px 24px",
            backgroundColor: "var(--brand-olive)",
            color: "#ffffff",
            border: "none",
            borderRadius: 40,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            transition: "background-color 0.25s ease",
            marginBottom: 14,
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive-dk)")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive)")}
        >
          Continue with Google
        </button>

        {/* Note */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: "rgba(245, 245, 233, 0.4)",
            textAlign: "center",
            margin: "0 0 28px",
          }}
        >
          No account needed to generate a roadmap.
        </p>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            marginBottom: 24,
          }}
        />

        {/* Back link */}
        <Link
          to="/dashboard"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--brand-olive)",
            textDecoration: "none",
          }}
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
