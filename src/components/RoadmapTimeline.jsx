export default function RoadmapTimeline({ roadmap }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
      {roadmap.map((week) => (
        <div
          key={week.week}
          style={{
            background: "white", borderRadius: 12, padding: "24px 28px",
            border: "1px solid #ebebeb",
            display: "flex", gap: 24, alignItems: "flex-start",
          }}
        >
          <div style={{
            background: "var(--brand-charcoal)", color: "var(--brand-cream)",
            borderRadius: 8, padding: "6px 14px",
            fontSize: 12, fontWeight: 800,
            whiteSpace: "nowrap", flexShrink: 0,
            letterSpacing: "0.04em",
          }}>
            Week {week.week}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "var(--brand-charcoal)", marginBottom: 4 }}>
              {week.focus_skill}
            </p>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginBottom: 10 }}>
              {week.why_it_matters}
            </p>
            <ul style={{ paddingLeft: 16, margin: 0 }}>
              {week.action_items.map((item, i) => (
                <li key={i} style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
