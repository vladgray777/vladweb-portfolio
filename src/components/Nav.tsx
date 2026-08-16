import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Nav() {
  const links = ["about", "projects", "skills", "contact"]
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,14,10,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a2e1a",
      }}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 py-4">
        {/* Logo */}
        <div
          className="text-glow"
          style={{
            fontFamily: "monospace",
            fontSize: "0.85rem",
            color: "#00ff41",
          }}
        >
          <a href="/">
            <span style={{ color: "#4a6a4a" }}>root@</span>
            <span>portfolio</span>
            <span style={{ color: "#4a6a4a" }}>:~#</span>
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`/#${link}`}
              className="nav-link"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop online */}
        <div
          className="hidden md:block"
          style={{
            fontSize: "0.7rem",
            color: "#2a4a2a",
            letterSpacing: "0.1em",
          }}
        >
          [ONLINE] <span style={{ color: "#00ff41" }}>●</span>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center gap-2 px-3 py-2 transition"
          style={{
            border: "1px solid #1f3a1f",
            color: "#00ff41",
            fontFamily: "monospace",
            fontSize: "0.7rem",
            background: "#0d1117",
          }}
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}

          <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{
          borderTop: menuOpen ? "1px solid #1a2e1a" : "none",
          background: "rgba(10,14,10,0.98)",
        }}
      >
        <div className="px-5 py-5 font-mono">
          <div
            className="mb-4"
            style={{
              fontSize: "0.65rem",
              color: "#2a4a2a",
              letterSpacing: "0.1em",
            }}
          >
            // SELECT_DESTINATION
          </div>

          <div className="flex flex-col">
            {links.map((link, index) => (
              <a
                key={link}
                href={`/#${link}`}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between py-3"
                style={{
                  borderBottom: "1px solid #142414",
                  color: "#4a6a4a",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      color: "#214521",
                      fontSize: "0.65rem",
                    }}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="group-hover:text-green-400 transition"
                    style={{
                      fontSize: "0.8rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    /{link}
                  </span>
                </div>

                <span
                  className="opacity-0 group-hover:opacity-100 transition"
                  style={{ color: "#00ff41" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>

          <div
            className="mt-5 flex justify-between"
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              color: "#2a4a2a",
            }}
          >
            <span>STATUS</span>

            <span>
              [ONLINE] <span style={{ color: "#00ff41" }}>●</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}