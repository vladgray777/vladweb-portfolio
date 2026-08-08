export default // ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        style={{
          fontSize: "0.65rem",
          color: "#2a4a2a",
          letterSpacing: "0.2em",
        }}
      >
        [{index}]
      </span>
      <span
        className="text-glow"
        style={{
          fontSize: "1rem",
          color: "#00ff41",
          fontWeight: 700,
          letterSpacing: "0.1em",
          fontFamily: "monospace",
        }}
      >
        {title}
      </span>
      <div
        style={{
          flex: 1,
          height: 1,
          background: "linear-gradient(90deg, #1f3a1f, transparent)",
        }}
      />
    </div>
  )
}