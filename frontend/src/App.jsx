import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Pages (you'll need to create these)
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import BookUs from "./pages/Book-us"

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/Book-us" element={<BookUs />} />
            {/* Add more routes as needed */}
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
