import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import MainMenu from "./pages/mainMenu"

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<MainMenu/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
