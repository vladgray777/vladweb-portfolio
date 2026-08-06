import SectionHeader from "./SectionHeader"

const skillGroups = [
  {
    label: "LANGUAGES",
    icon: "⌨",
    items: [
      { name: "TypeScript", level: 82 },
      { name: "JavaScript", level: 84 },
      { name: "C#", level: 75 },
      { name: "Python", level: 72 },
      { name: "Java", level: 65 },
      { name: "VB / VBS", level: 88 },
    ],
  },
  {
    label: "FRONTEND",
    icon: "◈",
    items: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 70 },
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Material UI", level: 78 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    label: "CLOUD & BACKEND",
    icon: "☁",
    items: [
      { name: "AWS", level: 75 },
      { name: "REST APIs", level: 78 },
      { name: "DynamoDB", level: 72 },
      { name: "MongoDB", level: 68 },
      { name: "SQL", level: 80 },
      { name: "Auth0", level: 70 },
    ],
  },
  {
    label: "TOOLS & SECURITY",
    icon: "🛡",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 82 },
      { name: "CI/CD", level: 72 },
      { name: "Cybersecurity", level: 88 },
      { name: "Agile / Scrum", level: 84 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="02" title="skill_tree.json" />
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.label}
              style={{
                border: "1px solid #1f3a1f",
                background: "rgba(0,255,65,0.02)",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#4a6a4a",
                  letterSpacing: "0.2em",
                  marginBottom: 16,
                }}
              >
                <span style={{ color: "#00ff41", marginRight: 6 }}>
                  {group.icon}
                </span>
                {group.label}
              </div>
              <div className="flex flex-col gap-3">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span style={{ fontSize: "0.75rem", color: "#00b32c" }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: "0.7rem", color: "#2a4a2a" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: 2,
                        background: "#1a2e1a",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="progress-bar"
                        style={{
                          height: "100%",
                          width: `${skill.level}%`,
                          background:
                            "linear-gradient(90deg, #00b32c, #00ff41)",
                          boxShadow: "0 0 6px #00ff41",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}