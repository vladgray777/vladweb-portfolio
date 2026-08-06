export default function Footer() {
  return (
    <footer
      className="relative py-10 px-6 text-center"
      style={{ zIndex: 1, borderTop: "1px solid #1a2e1a" }}
    >
      <div
        style={{
          fontSize: "0.65rem",
          color: "#2a4a2a",
          letterSpacing: "0.15em",
          lineHeight: 2,
        }}
      >
        <div>
          root@portfolio:~# <span style={{ color: "#1f3a1f" }}>exit</span>
        </div>
        <div style={{ marginTop: 4 }}>
          <span style={{ color: "#1f3a1f" }}>// </span>
          Built with React + Vite · © 2026 Vladimir Krushinsky
        </div>
      </div>
    </footer>
  )
}