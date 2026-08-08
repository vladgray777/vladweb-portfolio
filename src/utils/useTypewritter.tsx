import { useEffect, useState } from "react"

// ─── Typewriter hook ──────────────────────────────────────────────────────────
export default function useTypewriter(lines: string[], speed = 40, lineDelay = 300) {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true)
      return
    }
    const line = lines[currentLine]
    if (currentChar < line.length) {
      const t = setTimeout(
        () => {
          setDisplayed((prev) => {
            const next = [...prev]
            next[currentLine] = (next[currentLine] ?? "") + line[currentChar]
            return next
          })
          setCurrentChar((c) => c + 1)
        },
        speed + Math.random() * 20,
      )
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
      }, lineDelay)
      return () => clearTimeout(t)
    }
  }, [currentLine, currentChar, lines, speed, lineDelay])

  return { displayed, currentLine, done }
}