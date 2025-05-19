import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Testimonials from "../components/Testimonials";

const BirthdayParty = () => {
  // Theme names list with IDs
  const themeNames = [
    { id: "winter-wonderland", name: "Winter Wonderland" },
    { id: "krithvik", name: "Krithvik" },
    { id: "aadhya", name: "Aadhya" },
    { id: "vivaan", name: "Vivaan" },
    { id: "likitha", name: "Likitha" },
    { id: "vrushika", name: "Vrushika" },
    { id: "dhikshan-dhikshitha", name: "Dhikshan & Dhikshitha" },
    { id: "mritika", name: "Mritika" },
    { id: "rain-tree", name: "Rain Tree" },
    { id: "tiara", name: "Tiara" }
  ];

  // State to track which theme's images to display (default to first theme)
  const [activeTheme, setActiveTheme] = useState(themeNames[0].id);

  // Separate image arrays for each theme
  const winterWonderlandImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Winter Wonderland birthday decoration with pink trees"
    },
    {
      id: 2,
      src: "https://vermiliondecors.com/assets/images/gallery/e2.webp",
      alt: "Winter Wonderland birthday table setup"
    },
    {
      id: 3,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Winter Wonderland birthday entrance decoration"
    }
  ];

  const krithvikImages = [
    {
      id: 4,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Krithvik birthday with green backdrop"
    },
    {
      id: 5,
      src: "https://vermiliondecors.com/assets/images/gallery/e5.webp",
      alt: "Krithvik birthday decoration with lights"
    }
  ];

  const aadhyaImages = [
    {
      id: 6,
      src: "https://vermiliondecors.com/assets/images/gallery/e6.webp",
      alt: "Aadhya birthday with fairy lights"
    },
    {
      id: 7,
      src: "https://vermiliondecors.com/assets/images/gallery/e7.webp",
      alt: "Aadhya birthday with lantern decorations"
    }
  ];

  const vivaanImages = [
    {
      id: 8,
      src: "https://vermiliondecors.com/assets/images/gallery/e8.webp",
      alt: "Vivaan birthday with pink tree decorations"
    },
    {
      id: 9,
      src: "https://vermiliondecors.com/assets/images/gallery/e9.webp",
      alt: "Vivaan birthday party setup"
    }
  ];

  // Empty arrays for themes without images yet
  const likithaImages = [];
  const vrushikaImages = [];
  const dhikshanDhikshithaImages = [];
  const mritikaImages = [];
  const rainTreeImages = [];
  const tiaraImages = [];

  // Function to get images based on active theme
  const getFilteredImages = () => {
    switch (activeTheme) {
      case "winter-wonderland":
        return winterWonderlandImages;
      case "krithvik":
        return krithvikImages;
      case "aadhya":
        return aadhyaImages;
      case "vivaan":
        return vivaanImages;
      case "likitha":
        return likithaImages;
      case "vrushika":
        return vrushikaImages;
      case "dhikshan-dhikshitha":
        return dhikshanDhikshithaImages;
      case "mritika":
        return mritikaImages;
      case "rain-tree":
        return rainTreeImages;
      case "tiara":
        return tiaraImages;
      default:
        return winterWonderlandImages; // Default to first theme if none selected
    }
  };

  // Get filtered images
  const filteredImages = getFilteredImages();

  return (
    <div className="birthday-party-page">
      {/* Banner Section with Responsive Heading */}
      <div 
        className="birthday-party-banner position-relative" 
        style={{ 
          backgroundImage: "url('./wedding decors/birthday party.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="overlay position-absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}></div>
        <h1 
          className="text-white position-relative text-center px-3" 
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Responsive font size
            zIndex: 2,
            width: '100%'
          }}
        >
          Birthday Party Decorations In Tiruvannamalai
        </h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4">
        <p className="mb-4" style={{ lineHeight: "1.8" }}>
          Fun is everywhere you look right now! Your kids of all ages have loved classic birthday decorations for years, and with the latest trends coming up now and then, you can be sure that this one is here to stay! We all have kids that love living in a fantasy world, so do it for them, especially if they are something they watch daily, they are always dreaming about living in that world. Let's create birthday decorations for them to keep them smiling and happy.
        </p>

        {/* Theme Names as Filter Buttons */}
        <div className="theme-names d-flex flex-wrap justify-content-center mb-4">
          {themeNames.map((theme) => (
            <Button
              key={theme.id}
              variant={activeTheme === theme.id ? "primary" : "outline-secondary"}
              className="m-1"
              onClick={() => setActiveTheme(theme.id)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                borderRadius: "4px",
                color: activeTheme === theme.id ? "#fff" : "#333",
                borderColor: "#ccc"
              }}
            >
              {theme.name}
            </Button>
          ))}
        </div>
      </Container>

      {/* Gallery Grid */}
      <Container className="gallery-grid mb-5">
        {filteredImages.length > 0 ? (
          <Row>
            {filteredImages.map(image => (
              <Col key={image.id} xs={12} sm={6} md={4} className="gallery-item mb-4">
                <div className="gallery-image-container" style={{ overflow: 'hidden' }}>
                  <img 
                    src={image.src || "/placeholder.svg"} 
                    alt={image.alt} 
                    className="img-fluid w-100"
                    style={{ 
                      height: "250px", 
                      objectFit: "cover",
                      transition: "transform 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <p style={{ fontFamily: 'Poppins, sans-serif', color: '#777' }}>
              No images available for this theme yet. Please check back soon!
            </p>
          </div>
        )}
      </Container>

      {/* Divider */}
      <Container>
        <div className="divider text-center mb-5">
          <hr style={{ borderTop: "1px dashed #ccc" }} />
        </div>
      </Container>

      {/* Use the Testimonials Component */}
      <Testimonials />
    </div>
  );
};

export default BirthdayParty;