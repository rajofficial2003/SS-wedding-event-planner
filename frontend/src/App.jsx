import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import ProtectedRoute from "./components/ProtectedRoute"

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
import VenueManagement from "./pages/Wedding Planning/venue-management"
import WeddingDecoration from "./pages/Wedding Planning/Wedding-decoration"
import LightMusic from "./pages/Wedding Planning/light-music"
import DJ from "./pages/Wedding Planning/DJ"
import Catering from "./pages/Wedding Planning/catering"
import ChatStall from "./pages/Wedding Planning/chatstall"

// Admin Pages
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"

// Layout component to conditionally render Navbar and Footer
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  return (
    <div className="d-flex flex-column min-vh-100">
      {!isAdminRoute && <Navbar />}
      <main className={`flex-grow-1 ${isAdminRoute ? 'admin-main' : ''}`}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <BackToTop />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          {/* Public Routes */}
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
          <Route path="/venue-management" element={<VenueManagement />} />
          <Route path="/wedding-decoration" element={<WeddingDecoration />} />
          <Route path="/light-music" element={<LightMusic />} />
          <Route path="/DJ" element={<DJ />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/chat-stall" element={<ChatStall />} />
          
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Router>
  )
}

export default App