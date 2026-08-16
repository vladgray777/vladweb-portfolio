import MatrixRain from "./components/MatrixRain"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ResumePage from "./pages/Resume"
import { Route, Routes, useLocation } from "react-router"
import { useEffect } from "react"
// ─── App ───
export default function App() {

  function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }, [location]);

    return null;
  }
  const Home = () => {


    ScrollToHash() 
    return (
      <>
        <MatrixRain />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Nav />
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </>
    )
  }

  const Resume = () => {
    return (
      <>
        <MatrixRain />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Nav />
          <ResumePage />
          <Footer />
        </div>
      </>
    )
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0a0e0a",
      }}
    >


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}
