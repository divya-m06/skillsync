import { useState } from "react"
import Navbar          from "../components/Navbar"
import SkillTagInput   from "../components/SkillTagInput"
import GapVisualizer   from "../components/GapVisualizer"
import CourseCards     from "../components/CourseCard"
import RoadmapTimeline from "../components/RoadmapTimeline"
import api             from "../services/api"

const ROLES = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Engineer",
  "DevOps Engineer",
  "Android Developer",
  "Cloud Architect",
  "Product Manager",
]





export default function Dashboard() {
  const [role, setRole] = useState("")
  const [skills, setSkills] = useState([])
  const [experience, setExperience] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  const canSubmit = role && skills.length > 0 && experience

  async function handleSubmit() {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await api.post("/api/dashboard", {
        target_role: role,
        user_skills: skills,
        experience_level: experience.toLowerCase(),
      })
      setResult(res.data)
    } catch (err) {
      setError("Something went wrong. Make sure the backend is running.")
    } finally {
      setLoading(false)
    }
  }

  function copyShareLink() {
    if (result?.uuid) {
      navigator.clipboard.writeText(`${window.location.origin}/roadmap/${result.uuid}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const cardStyle = {
    background: "white", borderRadius: 16, padding: "28px 32px",
    marginBottom: 20, border: "1px solid #ebebeb",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  }

  const labelStyle = {
    fontSize: 12, fontWeight: 700, textTransform: "uppercase",
    letterSpacing: "0.08em", color: "var(--brand-charcoal)",
    marginBottom: 12, display: "block",
  }

  return (
    <>
      <Navbar page="dashboard" />
      <div style={{ paddingTop: 60, minHeight: "100vh", background: "var(--section-bg)" }}>

        {/* Page header */}
        <div style={{
          background: "var(--brand-charcoal)", padding: "52px 40px",
          textAlign: "center",
        }}>
          <h1 style={{
            fontSize: 34, fontWeight: 800, color: "var(--brand-cream)",
            marginBottom: 10, letterSpacing: "-0.5px",
          }}>
            Analyze Your Skill Gap
          </h1>
          <p style={{ fontSize: 16, color: "var(--brand-olive-lt)", maxWidth: 500, margin: "0 auto" }}>
            Select your target role, enter your skills, and get an AI-generated roadmap in seconds.
          </p>
        </div>

        {/* Form */}
        <div style={{ maxWidth: 760, margin: "48px auto", padding: "0 24px" }}>

          {/* Role */}
          <div style={cardStyle}>
            <span style={labelStyle}>Target Role</span>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              style={{
                width: "100%", padding: "12px 16px",
                border: "1.5px solid #e0e0d8", borderRadius: 10,
                fontSize: 15, fontFamily: "'Montserrat', sans-serif",
                background: "#fafaf8", color: role ? "var(--brand-charcoal)" : "#999",
                outline: "none",
              }}
            >
              <option value="">Select a role...</option>
              {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {/* Skills */}
          <div style={cardStyle}>
            <span style={labelStyle}>Your Current Skills</span>
            <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
              Type a skill and press Enter to add it
            </p>
            <SkillTagInput skills={skills} setSkills={setSkills} />
          </div>

          {/* Experience */}
          <div style={cardStyle}>
            <span style={labelStyle}>Experience Level</span>
            <div style={{ display: "flex", gap: 12 }}>
              {["Beginner", "Intermediate", "Advanced"].map(level => (
                <button
                  key={level}
                  onClick={() => setExperience(level)}
                  style={{
                    flex: 1, padding: "11px 0",
                    border: experience === level
                      ? "1.5px solid var(--brand-olive)"
                      : "1.5px solid #e0e0d8",
                    borderRadius: 10,
                    background: experience === level
                      ? "rgba(125,155,118,0.1)"
                      : "white",
                    color: experience === level
                      ? "var(--brand-olive-dk)"
                      : "#666",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 14, fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!canSubmit || loading}
            style={{
              width: "100%", padding: "15px",
              background: canSubmit && !loading ? "var(--brand-olive)" : "#ccc",
              color: "white", border: "none", borderRadius: 12,
              fontSize: 16, fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              cursor: canSubmit && !loading ? "pointer" : "not-allowed",
              transition: "background 0.2s ease",
              marginBottom: 48,
            }}
          >
            {loading ? "Generating your roadmap..." : "Analyze My Skills"}
          </button>

          {/* Error */}
          {error && (
            <div style={{
              background: "rgba(193,18,31,0.08)", border: "1px solid rgba(193,18,31,0.2)",
              borderRadius: 10, padding: "16px 20px", marginBottom: 24,
              color: "#c1121f", fontSize: 14, fontWeight: 500,
            }}>
              {error}
            </div>
          )}

          {/* Results */}
          {result && (
            <div>
              <h2 style={{
                fontSize: 22, fontWeight: 800, color: "var(--brand-charcoal)",
                marginBottom: 20, letterSpacing: "-0.3px",
              }}>
                Skill Gap Analysis
              </h2>
              <GapVisualizer matched={result.matched} missing={result.missing} />

              {result.courses?.length > 0 && (
                <>
                  <h2 style={{
                    fontSize: 22, fontWeight: 800, color: "var(--brand-charcoal)",
                    marginBottom: 20, letterSpacing: "-0.3px",
                  }}>
                    Recommended Courses
                  </h2>
                  <CourseCards courses={result.courses} />
                </>
              )}

              <h2 style={{
                fontSize: 22, fontWeight: 800, color: "var(--brand-charcoal)",
                marginBottom: 20, letterSpacing: "-0.3px",
              }}>
                Your Learning Roadmap
              </h2>
              <RoadmapTimeline roadmap={result.roadmap} />

              {/* Share link */}
              <div style={{
                background: "white", borderRadius: 12, padding: "20px 24px",
                border: "1px solid #ebebeb",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--brand-charcoal)", marginBottom: 2 }}>
                    Share your roadmap
                  </p>
                  <p style={{ fontSize: 13, color: "#888" }}>
                    Anyone with the link can view this roadmap
                  </p>
                </div>
                <button
                  onClick={copyShareLink}
                  style={{
                    background: copied ? "var(--brand-olive)" : "var(--brand-charcoal)",
                    color: "var(--brand-cream)", border: "none",
                    borderRadius: 8, padding: "10px 20px",
                    fontSize: 13, fontWeight: 600,
                    fontFamily: "'Montserrat', sans-serif",
                    cursor: "pointer", transition: "background 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}