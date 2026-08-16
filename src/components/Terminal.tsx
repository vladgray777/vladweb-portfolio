import { useEffect, useRef } from "react"
import useTypewriter from "../utils/useTypewritter"

const terminalLines = [
  "$ whoami",
  "root@portfolio:~# Initializing profile...",
  "",
  "┌──────────────────────────────────────────────┐",
  "│  NAME     : Vladimir Krushinsky              │",
  "│  ROLE     : Full Stack Engineer              │",
  "│  LOCATION : East Falmouth, MA                │",
  "│  STATUS   : [OPEN TO WORK]                   │",
  "└──────────────────────────────────────────────┘",
  "",
  "$ cat skills.json",
  "{",
  '  "languages" : ["TypeScript", "Python", "C#", "Java"],',
  '  "frontend"  : ["React", "Next.js", "Tailwind", "Bootstrap"],',
  '  "backend"   : ["Node.js", "FastAPI", "PostgreSQL"],',
  '  "devops"    : ["Docker", "K8s", "AWS", "CI/CD"]',
  "}",
  "",
  "$ echo $MISSION",
  '"Engineering beyond boundaries — one commit at a time."',
  "",
  "$ git log --oneline --graph",
  "* a3f2b1c  feat: built something cool",
  "* 9e4d8a2  fix: squashed that nasty bug",
  "* 2c71f0e  init: started the journey",
  "",
  "$ █",
]

export default function Terminal() {
  const { displayed, currentLine, done } = useTypewriter(terminalLines, 7.5, 180)
  const bodyRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [displayed])

  const getLineColor = (line: string) => {
    if (line.startsWith("$")) return "text-green-400"
    if (line.startsWith("root@")) return "#00ff41"
    if (line.startsWith("┌") || line.startsWith("│") || line.startsWith("└"))
      return "#00cc33"
    if (line.startsWith('"')) return "#ffb800"
    if (line.startsWith("*")) return "#00ffff"
    if (line.startsWith("{") || line.startsWith("}")) return "#ff6b6b"
    if (line.includes(":") && line.startsWith('  "')) return "#aaffaa"
    return "#00b32c"
  }

  return (
    <div
      className="relative w-full max-w-2xl mx-auto terminal-flicker terminal-glow"
      style={{
        background: "#0d1117",
        border: "1px solid #1f3a1f",
        borderRadius: 8,
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: "#111820",
          borderBottom: "1px solid #1f3a1f",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#ff5f57",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#febc2e",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#28c840",
            display: "inline-block",
          }}
        />
        <span
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: "0.7rem",
            color: "#4a6a4a",
            letterSpacing: "0.1em",
          }}
        >
          root@portfolio — zsh — 80×24
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={bodyRef}
        className="p-5 overflow-y-auto"
        style={{
          minHeight: 320,
          maxHeight: 440,
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.82rem",
          lineHeight: 1.7,
        }}
      >
        {terminalLines.slice(0, currentLine + 1).map((line, i) => {
          const text = i < currentLine ? line : (displayed[i] ?? "")
          const isCurrentLine = i === currentLine
          const color = getLineColor(line)
          return (
            <div key={i}>
              <span style={{ color, whiteSpace: "pre" }}>{text}</span>
              {isCurrentLine && !done && (
                <span className="cursor-blink" style={{ color: "#00ff41" }}>
                  █
                </span>
              )}
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}