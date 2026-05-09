import { useState } from "react"

export default function SkillTagInput({ skills, setSkills }) {
  const [input, setInput] = useState("")

  function handleKeyDown(e) {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault()
      const newSkill = input.trim()
      if (!skills.map(s => s.toLowerCase()).includes(newSkill.toLowerCase())) {
        setSkills([...skills, newSkill])
      }
      setInput("")
    }
    if (e.key === "Backspace" && !input && skills.length > 0) {
      setSkills(skills.slice(0, -1))
    }
  }

  function removeSkill(skill) {
    setSkills(skills.filter(s => s !== skill))
  }

  return (
    <div
      style={{
        display: "flex", flexWrap: "wrap", gap: 8,
        padding: "10px 12px",
        border: "1.5px solid #e0e0d8",
        borderRadius: 10,
        background: "#fafaf8",
        minHeight: 52, alignItems: "center", cursor: "text",
      }}
      onClick={e => e.currentTarget.querySelector("input").focus()}
    >
      {skills.map(skill => (
        <span
          key={skill}
          style={{
            background: "rgba(125,155,118,0.15)",
            border: "1px solid rgba(125,155,118,0.3)",
            color: "var(--brand-olive-dk)",
            padding: "4px 12px", borderRadius: 20,
            fontSize: 13, fontWeight: 600,
            display: "flex", alignItems: "center", gap: 6,
          }}
        >
          {skill}
          <span
            onClick={() => removeSkill(skill)}
            style={{ cursor: "pointer", opacity: 0.5, fontSize: 15, lineHeight: 1 }}
          >
            ×
          </span>
        </span>
      ))}
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={skills.length === 0 ? "Type a skill and press Enter..." : "Add more..."}
        style={{
          border: "none", outline: "none", background: "transparent",
          fontSize: 14, fontFamily: "'Montserrat', sans-serif",
          flex: 1, minWidth: 160, color: "var(--brand-charcoal)",
        }}
      />
    </div>
  )
}
