import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Pages (you'll need to create these)
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
