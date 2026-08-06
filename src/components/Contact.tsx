import { useState } from "react"
import SectionHeader from "./SectionHeader"

// ─── Contact section ──────────────────────────────────────────────────────────
export default function Contact() {
  const [input, setInput] = useState("")
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return
    setSent(true)
    setInput("")
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-2xl mx-auto">
        <SectionHeader index="03" title="ssh contact@portfolio" />
        <div
          style={{
            border: "1px solid #1f3a1f",
            background: "#0d1117",
            padding: "32px",
          }}
          className="terminal-glow"
        >
          <div
            style={{
              fontSize: "0.75rem",
              color: "#4a6a4a",
              marginBottom: 24,
              lineHeight: 1.8,
            }}
          >
            <div>Establishing secure connection...</div>
            <div style={{ color: "#00ff41" }}>
              Connected to vladweb.com
            </div>
            <div>Type your message and press ENTER or click SEND</div>
          </div>
          <div
            className="flex items-center gap-3"
            style={{ borderTop: "1px solid #1a2e1a", paddingTop: 20 }}
          >
            <span
              style={{
                color: "#4a6a4a",
                fontSize: "0.8rem",
                whiteSpace: "nowrap",
              }}
            >
              guest@portfolio:~$
            </span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="send message..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#00ff41",
                fontFamily: "monospace",
                fontSize: "0.82rem",
                caretColor: "#00ff41",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "6px 14px",
                border: "1px solid #00ff41",
                background: "transparent",
                color: "#00ff41",
                fontFamily: "monospace",
                fontSize: "0.7rem",
                cursor: "pointer",
                letterSpacing: "0.1em",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = "#00ff41"
                ;(e.currentTarget as HTMLElement).style.color = "#0a0e0a"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background =
                  "transparent"
                ;(e.currentTarget as HTMLElement).style.color = "#00ff41"
              }}
            >
              SEND
            </button>
          </div>
          {sent && (
            <div
              style={{ marginTop: 12, fontSize: "0.75rem", color: "#00ff41" }}
              className="text-glow"
            >
              ✓ Message transmitted successfully. Response ETA: 24h
            </div>
          )}
          <div
            className="flex gap-6 mt-8"
            style={{ borderTop: "1px solid #1a2e1a", paddingTop: 20 }}
          >
            {[
              { label: "GitHub", value: "github.com/vladweb" },
              { label: "LinkedIn", value: "linkedin.com/in/vladweb" },
              { label: "Email", value: "vladweb@gmail.com" },
            ].map((link) => (
              <div key={link.label}>
                <div
                  style={{
                    fontSize: "0.6rem",
                    color: "#2a4a2a",
                    letterSpacing: "0.1em",
                    marginBottom: 2,
                  }}
                >
                  {link.label}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#00b32c" }}>
                  {link.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}