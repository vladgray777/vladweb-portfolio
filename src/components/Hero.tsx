import GlitchText from "../utils/GlitchText";
import Terminal from "./Terminal";

export default // ─── Hero section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12"
      style={{ zIndex: 1 }}
    >
      <div className="text-center mb-10 fade-in">
        <div
          style={{
            fontSize: "0.75rem",
            color: "#2a4a2a",
            letterSpacing: "0.3em",
            marginBottom: 16,
          }}
        >
          ── INITIALIZING PORTFOLIO.EXE ──
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          <span style={{ color: "#1a3a1a" }}>Hello, I&apos;m </span>
          <span className="text-glow" style={{ color: "#00ff41" }}>
            <GlitchText text="Vladimir " />
          </span>
        </h1>
        <div
          style={{
            fontSize: "0.85rem",
            color: "#00b32c",
            letterSpacing: "0.2em",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "#4a6a4a" }}>// </span>
          FULL STACK ENGINEER
          <span style={{ color: "#4a6a4a" }}> &amp;&amp; </span>
          SYSTEMS ARCHITECT
        </div>
      </div>

      <Terminal />

      <div className="flex gap-4 mt-10 flex-wrap justify-center fade-in">
        {[
          { label: "$ ./view_projects", href: "#projects", primary: true },
          { label: "$ cat resume.pdf", href: "#contact", primary: false },
        ].map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            style={{
              fontFamily: "monospace",
              fontSize: "0.78rem",
              padding: "10px 20px",
              border: btn.primary ? "1px solid #00ff41" : "1px solid #1f3a1f",
              color: btn.primary ? "#0a0e0a" : "#00b32c",
              background: btn.primary ? "#00ff41" : "transparent",
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              if (!btn.primary) {
                ;(e.currentTarget as HTMLElement).style.borderColor = "#00ff41"
                ;(e.currentTarget as HTMLElement).style.color = "#00ff41"
              }
            }}
            onMouseLeave={(e) => {
              if (!btn.primary) {
                ;(e.currentTarget as HTMLElement).style.borderColor = "#1f3a1f"
                ;(e.currentTarget as HTMLElement).style.color = "#00b32c"
              }
            }}
          >
            {btn.label}
          </a>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-blink"
        style={{ color: "#1f3a1f", fontSize: "0.7rem", letterSpacing: "0.2em" }}
      >
        ▼ SCROLL
      </div>
    </section>
  )
}