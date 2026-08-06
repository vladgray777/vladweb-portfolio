import MatrixRain  from "./components/MatrixRain"
import Footer      from "./components/Footer"
import Nav         from "./components/Nav"
import Hero        from "./components/Hero"
import Skills      from "./components/Skills"
import Projects    from "./components/Projects"
import Contact     from "./components/Contact"

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0a0e0a",
      }}
    >
      <MatrixRain />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
