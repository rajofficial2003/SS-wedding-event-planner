import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

// Pages (you'll need to create these)
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import BookUs from "./pages/Book-us"
import EngagementDecoration from "./pages/Engagement-decoration"
import ReceptionDecoration from "./pages/Reception-Decoration"  
import SangeetAndMehendi from "./pages/SangeetAndMehendi"
import BabyShower from "./pages/BabyShower"
import BirthdayParty from "./pages/BirthdayParty"
import Housewarming from "./pages/Housewarming"
import MarriageDecoration from "./pages/MarriageDecoration"

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
            <Route path="/engagement-decoration" element={<EngagementDecoration />} />
            <Route path="/reception-decoration" element={<ReceptionDecoration />} />
            <Route path="/sangeet-mehendi" element={<SangeetAndMehendi />} />
            <Route path="/baby-shower" element={<BabyShower />} />
            <Route path="/birthday-function" element={<BirthdayParty />} />
            <Route path="/house-warming" element={<Housewarming />} />
            <Route path="/marriage-decoration" element={<MarriageDecoration />} />
            {/* Add more routes as needed */}
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App