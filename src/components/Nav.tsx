export default // ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const links = ["about", "projects", "skills", "contact"]
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        background: "rgba(10,14,10,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a2e1a",
      }}
    >
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "0.85rem",
          color: "#00ff41",
        }}
        className="text-glow"
      >
        <span style={{ color: "#4a6a4a" }}>root@</span>
        <span>portfolio</span>
        <span style={{ color: "#4a6a4a" }}>:~#</span>
      </div>
      <div className="flex gap-6">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            className="nav-link"
            style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}
          >
            {l}
          </a>
        ))}
      </div>
      <div
        style={{ fontSize: "0.7rem", color: "#2a4a2a", letterSpacing: "0.1em" }}
      >
        [ONLINE] <span style={{ color: "#00ff41" }}>●</span>
      </div>
    </nav>
  )
}