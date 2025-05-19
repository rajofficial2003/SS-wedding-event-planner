import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Testimonials from "../components/Testimonials";

const EngagementDecoration = () => {
  // Client names list with IDs (without "All" option)
  const clientNames = [
    { id: "prithvi-aishwarya", name: "Prithvi + Aishwarya" },
    { id: "kokila-somasundaram", name: "Kokila + Somasundaram" },
    { id: "taj", name: "Taj" },
    { id: "arun-yegapriya", name: "Arun + Yegapriya" },
    { id: "rithika-vetri", name: "Rithika + Vetri" },
    { id: "balaji-swathi", name: "Balaji + Swathi" },
    { id: "sushmita-prakash", name: "Sushmita + Prakash" },
    { id: "vignesh-divya", name: "Vignesh + Divya" },
    { id: "nandhini-jacob", name: "Nandhini & Jacob" },
    { id: "preetha-ashwin", name: "Preetha & Ashwin" },
    { id: "sneha-arul", name: "Sneha & Arul" },
    { id: "akshaya-dharshan", name: "Akshaya & Dharshan" },
    { id: "minu-subramaiyan", name: "Minu + Subramaiyan" },
    { id: "ramkumar-niveatha", name: "Ramkumar + Niveatha" }
  ];

  // State to track which couple's images to display (default to first couple)
  const [activeCouple, setActiveCouple] = useState(clientNames[0].id);

  // Separate image arrays for each couple
  const prithviAishwaryaImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Prithvi and Aishwarya engagement setup"
    },
    {
      id: 2,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Prithvi and Aishwarya stage decoration"
    },
    {
      id: 3,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Prithvi and Aishwarya floral decoration"
    }
  ];

  const kokilaSomasundaramImages = [
    {
      id: 4,
      src: "https://vermiliondecors.com/assets/images/gallery/e8.webp",
      alt: "Kokila and Somasundaram engagement photo display"
    },
    {
      id: 5,
      src: "https://vermiliondecors.com/assets/images/gallery/e9.webp",
      alt: "Kokila and Somasundaram invitation display"
    }
  ];

  const tajImages = [
    {
      id: 6,
      src: "https://vermiliondecors.com/assets/images/gallery/e10.webp",
      alt: "Taj engagement stage"
    }
  ];

  const arunYegapriyaImages = [
    {
      id: 7,
      src: "https://vermiliondecors.com/assets/images/gallery/e13.webp",
      alt: "Arun and Yegapriya pink themed decoration"
    }
  ];

  const rithikaVetriImages = [
    {
      id: 8,
      src: "https://vermiliondecors.com/assets/images/gallery/e14.webp",
      alt: "Rithika and Vetri floral wall"
    }
  ];

  const balajiSwathiImages = [
    {
      id: 9,
      src: "https://vermiliondecors.com/assets/images/gallery/e17.webp",
      alt: "Balaji and Swathi floral backdrop"
    }
  ];

  // Empty arrays for couples without images yet
  const sushmitaPrakashImages = [];
  const vigneshDivyaImages = [];
  const nandhiniJacobImages = [];
  const preethaAshwinImages = [];
  const snehaArulImages = [];
  const akshayaDharshanImages = [];
  const minuSubramaiyanImages = [];
  const ramkumarNiveathaImages = [];

  // Function to get images based on active couple
  const getFilteredImages = () => {
    switch (activeCouple) {
      case "prithvi-aishwarya":
        return prithviAishwaryaImages;
      case "kokila-somasundaram":
        return kokilaSomasundaramImages;
      case "taj":
        return tajImages;
      case "arun-yegapriya":
        return arunYegapriyaImages;
      case "rithika-vetri":
        return rithikaVetriImages;
      case "balaji-swathi":
        return balajiSwathiImages;
      case "sushmita-prakash":
        return sushmitaPrakashImages;
      case "vignesh-divya":
        return vigneshDivyaImages;
      case "nandhini-jacob":
        return nandhiniJacobImages;
      case "preetha-ashwin":
        return preethaAshwinImages;
      case "sneha-arul":
        return snehaArulImages;
      case "akshaya-dharshan":
        return akshayaDharshanImages;
      case "minu-subramaiyan":
        return minuSubramaiyanImages;
      case "ramkumar-niveatha":
        return ramkumarNiveathaImages;
      default:
        return prithviAishwaryaImages; // Default to first couple if none selected
    }
  };

  // Get filtered images
  const filteredImages = getFilteredImages();

  return (
    <div className="engagement-decoration-page">
      {/* Banner Section with Responsive Heading */}
      <div 
        className="engagement-banner position-relative" 
        style={{ 
          backgroundImage: "url('./wedding decors/engagement-decoration.jpg')", 
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
          Engagement Stage Decoration In Tiruvannamalai
        </h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4">
        <p className="mb-4" style={{ lineHeight: "1.8" }}>
          Weddings are a union of love, family and traditions that hold a special place in our hearts forever. Wedding and engagement decorations are something that play an important role in making your wedding startling and <strong>Wedding and engagement stage decorations in Chennai</strong> come off in diverse styles from a traditional setup to outdoor beach weddings to an extravagant theme wedding. Couples no longer want the done-and-dusted wedding stage decoration in chennai. They want something that's fresh and remarkable. We at Vermilion Decors love to deliver nothing but the best for you at your Wedding and engagement decorations. Serving you a wide range of options to choose from to customize from being an array of flowers to surreal lights you name it, we have it.
        </p>

        {/* Client Names as Filter Buttons */}
        <div className="client-names d-flex flex-wrap justify-content-center mb-4">
          {clientNames.map((client) => (
            <Button
              key={client.id}
              variant={activeCouple === client.id ? "primary" : "outline-secondary"}
              className="m-1"
              onClick={() => setActiveCouple(client.id)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                borderRadius: "4px",
                color: activeCouple === client.id ? "#fff" : "#333",
                borderColor: "#ccc"
              }}
            >
              {client.name}
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
              No images available for this couple yet. Please check back soon!
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

export default EngagementDecoration;