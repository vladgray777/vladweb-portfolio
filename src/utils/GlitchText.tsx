import { useCallback, useEffect, useState } from "react"

export default // ─── Glitch text ──────────────────────────────────────────────────────────────
function GlitchText({ text }: { text: string }) {
  const [glitch, setGlitch] = useState(false)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*"

  const scramble = useCallback(() => {
    setGlitch(true)
    setTimeout(() => setGlitch(false), 500)
  }, [])

  useEffect(() => {
    const t = setInterval(scramble, 4000 + Math.random() * 3000)
    return () => clearInterval(t)
  }, [scramble])

  const display = glitch
    ? text
        .split("")
        .map((c) =>
          Math.random() > 0.6
            ? chars[Math.floor(Math.random() * chars.length)]
            : c,
        )
        .join("")
    : text

  return <span>{display}</span>
}