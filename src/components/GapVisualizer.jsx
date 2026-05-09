export default function GapVisualizer({ matched, missing }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
      <div
        style={{
          background: "white", borderRadius: 12, padding: "24px",
          border: "1px solid #ebebeb",
        }}
      >
        <p style={{
          fontSize: 12, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.08em", color: "var(--brand-olive-dk)", marginBottom: 14,
        }}>
          Skills You Have
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {matched.length === 0 ? (
            <p style={{ fontSize: 13, color: "#999" }}>None matched</p>
          ) : matched.map(skill => (
            <span key={skill} style={{
              background: "rgba(125,155,118,0.12)",
              border: "1px solid rgba(125,155,118,0.25)",
              color: "var(--brand-olive-dk)",
              padding: "4px 12px", borderRadius: 20,
              fontSize: 13, fontWeight: 600,
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div
        style={{
          background: "white", borderRadius: 12, padding: "24px",
          border: "1px solid #ebebeb",
        }}
      >
        <p style={{
          fontSize: 12, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.08em", color: "#c1121f", marginBottom: 14,
        }}>
          Skills You Are Missing
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {missing.length === 0 ? (
            <p style={{ fontSize: 13, color: "#999" }}>No gaps found</p>
          ) : missing.map(skill => (
            <span key={skill} style={{
              background: "rgba(193,18,31,0.07)",
              border: "1px solid rgba(193,18,31,0.2)",
              color: "#c1121f",
              padding: "4px 12px", borderRadius: 20,
              fontSize: 13, fontWeight: 600,
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
