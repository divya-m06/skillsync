export default function CourseCards({ courses }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
      {courses.map((course, i) => (
        <div
          key={i}
          style={{
            background: "white", borderRadius: 12, padding: "20px 22px",
            border: "1px solid #ebebeb",
            display: "flex", flexDirection: "column", gap: 8,
          }}
        >
          <span style={{
            fontSize: 10, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.08em", color: "var(--brand-olive)",
            background: "rgba(125,155,118,0.1)",
            padding: "3px 10px", borderRadius: 20,
            alignSelf: "flex-start",
          }}>
            {course.platform}
          </span>
          <p style={{ fontSize: 14, fontWeight: 700, color: "var(--brand-charcoal)", lineHeight: 1.4 }}>
            {course.title}
          </p>
          {course.url && (
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13, color: "var(--brand-olive-dk)", fontWeight: 600,
                textDecoration: "none", marginTop: "auto",
              }}
            >
              View Course
            </a>
          )}
        </div>
      ))}
    </div>
  )
}
