import SectionHeader from "./SectionHeader";

// ─── Projects section ─────────────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    name: "SPYRO_SEC",
    desc: "Cloud-based SIEM prototype that collects endpoint health data, executes approved Python security scripts, and displays results through an administrative dashboard.",
    tags: ["C#", "React", "AWS", "DynamoDB"],
    status: "ACTIVE",
    stars: 0,
  },
  {
    id: "02",
    name: "CABINET_BUILDER",
    desc: "Web-based cabinet design and ordering platform with configurable cabinet standards, customer presets, pricing, 3D visualization, and KCD software integration.",
    tags: ["React", "TypeScript", "AWS", "Three.js"],
    status: "ACTIVE",
    stars: 0,
  },
  {
    id: "03",
    name: "N400_QUIZ",
    desc: "Interactive study application for the United States naturalization civics test with randomized questions, answer tracking, pagination, and special consideration support.",
    tags: ["React", "TypeScript", "MUI", "Education"],
    status: "WIP",
    stars: 0,
  },
  {
    id: "04",
    name: "TASK_MANAGER",
    desc: "Task management application with local storage persistence, completion tracking, item selection, deletion, and automatic organization of completed tasks.",
    tags: ["React", "TypeScript", "LocalStorage", "CSS"],
    status: "COMPLETED",
    stars: 0,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="01" title="ls -la ./projects" />
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #1f3a1f",
                background: "#0d1117",
                padding: "24px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = "#00ff41"
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px rgba(0,255,65,0.1)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = "#1f3a1f"
                ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "#2a4a2a",
                      marginRight: 8,
                    }}
                  >
                    [{p.id}]
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#00ff41",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                    className="text-glow"
                  >
                    {p.name}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.6rem",
                    padding: "2px 6px",
                    border: `1px solid ${
                      p.status === "ACTIVE"
                        ? "#00ff41"
                        : p.status === "WIP"
                          ? "#ffb800"
                          : "#333"
                    }`,
                    color:
                      p.status === "ACTIVE"
                        ? "#00ff41"
                        : p.status === "WIP"
                          ? "#ffb800"
                          : "#555",
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.status}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#4a6a4a",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
              {/* <div style={{ fontSize: "0.65rem", color: "#2a4a2a" }}>
                ★ {p.stars.toLocaleString()} stars
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}