import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

const MainNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const navbarToggleRef = useRef(null);

  // Check if device is mobile/tablet
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap lg breakpoint
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Add custom CSS to override Bootstrap's default focus styles
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    
    // Add CSS to override Bootstrap's default focus styles
    style.innerHTML = `
      .dropdown-item:active, 
      .dropdown-item:focus,
      .custom-dropdown-item:active,
      .custom-dropdown-item:focus {
        background-color: transparent !important;
        color: #000 !important;
      }
      
      .custom-dropdown-item:hover {
        background-color: rgba(220, 53, 69, 0.1) !important;
      }
    `;
    
    // Append the style element to the document head
    document.head.appendChild(style);
    
    // Clean up function to remove the style element when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Wedding decor dropdown items
  const weddingDecorItems = [
    { name: "Engagement Decoration", path: "/engagement-decoration" },
    { name: "Marriage Decoration", path: "/marriage-decoration" },
    { name: "Reception Decoration", path: "/reception-decoration" },
    { name: "Sangeet & Mehendi", path: "/sangeet-mehendi" },
    { name: "Baby Shower", path: "/baby-shower" },
    { name: "Birthday Function", path: "/birthday-function" },
    { name: "House Warming", path: "/house-warming" }
  ];

  // Handle dropdown toggle for mobile
  const handleDropdownToggle = () => {
    if (isMobile) {
      setShowDropdown(!showDropdown);
    }
  };

  // Handle mouse events for desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowDropdown(false);
    }
  };

  // Handle navigation and close navbar
  const handleNavigation = (path) => {
    // Close the navbar in mobile view
    if (isMobile) {
      setExpanded(false);
      setShowDropdown(false);
    }
    
    // Navigate to the path
    navigate(path);
  };

  // Custom dropdown item style
  const dropdownItemStyle = {
    padding: '8px 12px',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    backgroundColor: 'transparent',
    color: '#000',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    borderRadius: '4px'
  };

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      className="py-3 shadow-sm"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <span className="">SS Decors</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          ref={navbarToggleRef}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              onClick={() => handleNavigation("/")} 
              className="mx-2 text-black"
            >
              Home
            </Nav.Link>
            
            {/* Wedding Decors Dropdown */}
            <div 
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isMobile ? (
                // Mobile version - click to toggle
                <>
                  <div 
                    className="nav-link mx-2 text-black dropdown-toggle"
                    onClick={handleDropdownToggle}
                    style={{ cursor: 'pointer' }}
                  >
                    Wedding Decors
                  </div>
                  
                  {showDropdown && (
                    <div className="dropdown-menu show p-3" style={{ width: '100%' }}>
                      <div className="mobile-dropdown-grid" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(1, 1fr)',
                        gap: '8px'
                      }}>
                        {weddingDecorItems.map((item, index) => (
                          <button 
                            key={index}
                            className="custom-dropdown-item"
                            onClick={() => handleNavigation(item.path)}
                            style={dropdownItemStyle}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Desktop version - hover to show
                <>
                  <div 
                    className="nav-link mx-2 text-black dropdown-toggle"
                    style={{ cursor: 'pointer' }}
                  >
                    Wedding Decors
                  </div>
                  
                  {showDropdown && (
                    <div className="dropdown-menu show p-3" style={{ 
                      minWidth: '600px',
                      position: 'absolute'
                    }}>
                      <div className="dropdown-grid" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gap: '15px'
                      }}>
                        {weddingDecorItems.map((item, index) => (
                          <button 
                            key={index}
                            className="custom-dropdown-item"
                            onClick={() => handleNavigation(item.path)}
                            style={dropdownItemStyle}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            
            <Nav.Link 
              onClick={() => handleNavigation("/Gallery")} 
              className="mx-2 text-black"
            >
              Gallery
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavigation("/about")} 
              className="mx-2 text-black"
            >
              About Us
            </Nav.Link>
          </Nav>
          <Button 
            variant="primary" 
            onClick={() => handleNavigation("/Book-us")} 
            className="ms-2"
          >
            9087504549
          </Button>
          <Button 
            variant="primary" 
            onClick={() => handleNavigation("/Book-us")} 
            className="ms-2"
          >
            Book Us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar