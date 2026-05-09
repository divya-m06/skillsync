import { useState, useEffect } from "react"
import { Link }    from "react-router-dom"
import Navbar      from "../components/Navbar"
import { useAuth } from "../hooks/useAuth"
import { supabase } from "../lib/supabaseClient"
import api         from "../services/api"

function formatDate(iso) {
  if (!iso) return ""
  const d = new Date(iso)
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
}

/* ── Shared centered-card wrapper ───────────────────────── */
function CenteredCard({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1a",
        fontFamily: "'Montserrat', sans-serif",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "var(--brand-charcoal)",
          borderRadius: 16,
          padding: "48px 40px",
          maxWidth: 440,
          width: "100%",
          textAlign: "center",
          border: "1px solid rgba(125, 155, 118, 0.2)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        {children}
      </div>
    </div>
  )
}

/* ── Shared olive pill button / Link ─────────────────────── */
const pillLinkStyle = {
  display: "inline-block",
  backgroundColor: "var(--brand-olive)",
  color: "#ffffff",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 15,
  fontWeight: 700,
  padding: "12px 32px",
  borderRadius: 40,
  textDecoration: "none",
  transition: "background-color 0.25s ease",
}

export default function MyRoadmaps() {
  const { user, loading: authLoading } = useAuth()

  const [roadmaps, setRoadmaps] = useState(null)   // null = not fetched yet
  const [fetching, setFetching] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    if (!user) return

    async function fetchRoadmaps() {
      setFetching(true)
      setFetchError(false)
      try {
        const { data: { session } } = await supabase.auth.getSession()
        const res = await api.get("/api/roadmaps/me", {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        })
        // Sort newest first
        const sorted = (res.data || []).sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        )
        setRoadmaps(sorted)
      } catch {
        setFetchError(true)
        setRoadmaps([])
      } finally {
        setFetching(false)
      }
    }

    fetchRoadmaps()
  }, [user])

  /* ── Auth loading ── */
  if (authLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 16,
          fontWeight: 600,
          color: "var(--brand-olive)",
          backgroundColor: "var(--section-bg)",
        }}
      >
        Loading...
      </div>
    )
  }

  /* ── Logged out ── */
  if (!user) {
    return (
      <CenteredCard>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 22,
            fontWeight: 800,
            color: "var(--brand-cream)",
            marginBottom: 12,
            letterSpacing: "-0.3px",
          }}
        >
          Sign in to view your roadmaps
        </h2>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            color: "var(--brand-cream2)",
            lineHeight: 1.6,
            marginBottom: 28,
          }}
        >
          Your saved roadmaps will appear here once you sign in.
        </p>
        <Link
          to="/login"
          style={pillLinkStyle}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive-dk)")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive)")}
        >
          Sign In
        </Link>
      </CenteredCard>
    )
  }

  /* ── Roadmaps loading ── */
  if (fetching || roadmaps === null) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 16,
          fontWeight: 600,
          color: "var(--brand-olive)",
          backgroundColor: "var(--section-bg)",
        }}
      >
        Loading...
      </div>
    )
  }

  /* ── Empty state ── */
  if (roadmaps.length === 0) {
    return (
      <CenteredCard>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 22,
            fontWeight: 800,
            color: "var(--brand-cream)",
            marginBottom: 12,
            letterSpacing: "-0.3px",
          }}
        >
          No roadmaps yet
        </h2>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            color: "var(--brand-cream2)",
            lineHeight: 1.6,
            marginBottom: 28,
          }}
        >
          Generate your first roadmap to see it saved here.
        </p>
        <Link
          to="/dashboard"
          style={pillLinkStyle}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive-dk)")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive)")}
        >
          Go to Dashboard
        </Link>
      </CenteredCard>
    )
  }

  /* ── Loaded state ── */
  return (
    <>
      <Navbar page="dashboard" />

      {/* Dark header */}
      <div
        style={{
          backgroundColor: "var(--brand-charcoal)",
          paddingTop: 52 + 88,
          paddingBottom: 48,
          paddingLeft: 24,
          paddingRight: 24,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 30,
            fontWeight: 800,
            color: "var(--brand-cream)",
            letterSpacing: "-0.4px",
            marginBottom: 10,
          }}
        >
          My Roadmaps
        </h1>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "var(--brand-olive-lt)",
          }}
        >
          {user.email}
        </p>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: "var(--section-bg)", minHeight: "60vh", paddingBottom: 60 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 0" }}>

          {fetchError && (
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 14,
                color: "#c1121f",
                marginBottom: 24,
                fontWeight: 500,
              }}
            >
              Could not load roadmaps. Please refresh and try again.
            </p>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {roadmaps.map((rm) => (
              <div
                key={rm.uuid}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: "20px 24px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                {/* Left — info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--brand-charcoal)",
                      marginBottom: 8,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {rm.target_role}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {rm.experience_level && (
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "capitalize",
                          color: "var(--brand-olive)",
                          backgroundColor: "rgba(125,155,118,0.12)",
                          border: "1px solid rgba(125,155,118,0.25)",
                          padding: "3px 10px",
                          borderRadius: 20,
                        }}
                      >
                        {rm.experience_level}
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 12,
                        color: "#999",
                        fontWeight: 500,
                      }}
                    >
                      {formatDate(rm.created_at)}
                    </span>
                  </div>
                </div>

                {/* Right — link */}
                <Link
                  to={`/roadmap/${rm.uuid}`}
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--brand-charcoal)",
                    color: "var(--brand-cream)",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "9px 20px",
                    borderRadius: 40,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "background-color 0.25s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a3a3a")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--brand-charcoal)")}
                >
                  View Roadmap
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
