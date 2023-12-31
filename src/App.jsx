import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"

import MainPage from "./pages/mainPage"
import Resume from "./pages/resume"
import Projects from "./pages/projects"
import About from "./pages/about"

function App() {
  const [menuOpen, setMenuOpen] = useState("close");
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}/>
            <Route path="/resume" element={<Resume menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}/>
            <Route path="/projects" element={<Projects menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}/>
            <Route path="/about" element={<About menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
