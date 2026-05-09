import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Navbar          from "../components/Navbar"
import GapVisualizer   from "../components/GapVisualizer"
import CourseCards     from "../components/CourseCard"
import RoadmapTimeline from "../components/RoadmapTimeline"
import api             from "../services/api"

export default function SharedRoadmap() {
  const { uuid } = useParams()
  const [result, setResult]   = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(false)

  useEffect(() => {
    async function fetchRoadmap() {
      try {
        const res = await api.get(`/api/roadmap/${uuid}`)
        setResult(res.data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchRoadmap()
  }, [uuid])

  /* ── Loading ── */
  if (loading) {
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
        Loading roadmap...
      </div>
    )
  }

  /* ── Error ── */
  if (error || !result) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--section-bg)",
          fontFamily: "'Montserrat', sans-serif",
          padding: 24,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: 16,
            padding: "48px 40px",
            maxWidth: 440,
            width: "100%",
            textAlign: "center",
            border: "1px solid #ebebeb",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--brand-charcoal)",
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            Roadmap not found or this link has expired.
          </p>
          <Link
            to="/dashboard"
            style={{
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
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive-dk)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive)")}
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  /* ── Success ── */
  const { target_role, experience_level, matched, missing, courses, roadmap } = result

  return (
    <>
      <Navbar page="dashboard" />

      {/* Dark header bar */}
      <div
        style={{
          backgroundColor: "var(--brand-charcoal)",
          paddingTop: 52 + 88, /* navbar height offset */
          paddingBottom: 48,
          paddingLeft: 24,
          paddingRight: 24,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--brand-olive-lt)",
            marginBottom: 10,
          }}
        >
          Shared Roadmap
        </p>
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 30,
            fontWeight: 800,
            color: "var(--brand-cream)",
            letterSpacing: "-0.4px",
            marginBottom: 14,
          }}
        >
          {target_role}
        </h1>
        {experience_level && (
          <span
            style={{
              display: "inline-block",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "capitalize",
              color: "var(--brand-olive)",
              backgroundColor: "rgba(125, 155, 118, 0.15)",
              border: "1px solid rgba(125, 155, 118, 0.3)",
              padding: "4px 16px",
              borderRadius: 20,
            }}
          >
            {experience_level}
          </span>
        )}
      </div>

      {/* Content area */}
      <div style={{ backgroundColor: "var(--section-bg)", minHeight: "60vh", paddingBottom: 60 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 0" }}>

          {/* Skill Gap */}
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--brand-charcoal)",
              marginBottom: 20,
              letterSpacing: "-0.3px",
            }}
          >
            Skill Gap Analysis
          </h2>
          <GapVisualizer matched={matched} missing={missing} />

          {/* Courses */}
          {courses?.length > 0 && (
            <>
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "var(--brand-charcoal)",
                  marginBottom: 20,
                  letterSpacing: "-0.3px",
                }}
              >
                Recommended Courses
              </h2>
              <CourseCards courses={courses} />
            </>
          )}

          {/* Roadmap */}
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--brand-charcoal)",
              marginBottom: 20,
              letterSpacing: "-0.3px",
            }}
          >
            Learning Roadmap
          </h2>
          <RoadmapTimeline roadmap={roadmap} />

          {/* CTA box */}
          <div
            style={{
              background: "white",
              borderRadius: 12,
              padding: "20px 28px",
              border: "1px solid #ebebeb",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                color: "var(--brand-charcoal)",
                margin: 0,
              }}
            >
              Want your own personalized roadmap?
            </p>
            <Link
              to="/dashboard"
              style={{
                display: "inline-block",
                backgroundColor: "var(--brand-olive)",
                color: "#ffffff",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                padding: "10px 24px",
                borderRadius: 40,
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background-color 0.25s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive-dk)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--brand-olive)")}
            >
              Analyze My Skills
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
