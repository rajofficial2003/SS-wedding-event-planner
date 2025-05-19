import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Testimonials from "../components/Testimonials";

const SangeetAndMehendi = () => {
  // Updated categories based on the image
  const categories = [
    { id: "gautham-jayalakshmi", name: "Gautham + Jayalakshmi" },
    { id: "hareeshwar-madhumitha", name: "Hareeshwar + Madhumitha" },
    { id: "karthik-ilavarasi", name: "Karthik & Ilavarasi" }
  ];

  // State to track which category to display (default to first category)
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  // Image arrays for each category
  const gauthamJayalakshmiImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Gautham and Jayalakshmi sangeet with blue lighting"
    },
    {
      id: 2,
      src: "https://vermiliondecors.com/assets/images/gallery/e2.webp",
      alt: "Gautham and Jayalakshmi sangeet performance"
    },
    {
      id: 3,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Gautham and Jayalakshmi sangeet with dancers"
    }
  ];

  const hareeshwarMadhumithaImages = [
    {
      id: 4,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Hareeshwar and Madhumitha sangeet with colorful costumes"
    },
    {
      id: 5,
      src: "https://vermiliondecors.com/assets/images/gallery/e5.webp",
      alt: "Hareeshwar and Madhumitha sangeet performance"
    },
    {
      id: 6,
      src: "https://vermiliondecors.com/assets/images/gallery/e6.webp",
      alt: "Hareeshwar and Madhumitha sangeet with traditional dancers"
    }
  ];

  const karthikIlavarasiImages = [
    {
      id: 7,
      src: "https://vermiliondecors.com/assets/images/gallery/e7.webp",
      alt: "Karthik and Ilavarasi mehendi ceremony"
    },
    {
      id: 8,
      src: "https://vermiliondecors.com/assets/images/gallery/e8.webp",
      alt: "Karthik and Ilavarasi sangeet with family"
    },
    {
      id: 9,
      src: "https://vermiliondecors.com/assets/images/gallery/e9.webp",
      alt: "Karthik and Ilavarasi sangeet performance"
    }
  ];

  // Function to get images based on active category
  const getFilteredImages = () => {
    switch (activeCategory) {
      case "gautham-jayalakshmi":
        return gauthamJayalakshmiImages;
      case "hareeshwar-madhumitha":
        return hareeshwarMadhumithaImages;
      case "karthik-ilavarasi":
        return karthikIlavarasiImages;
      default:
        // Default to first couple's images if none selected
        return gauthamJayalakshmiImages;
    }
  };

  // Get filtered images
  const filteredImages = getFilteredImages();

  return (
    <div className="sangeet-mehendi-page">
      {/* Banner Section with Responsive Heading */}
      <div 
        className="sangeet-banner position-relative" 
        style={{ 
          backgroundImage: "url('./wedding decors/SangeetAndMehendi.jpeg')", 
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
          Wedding Sangeet and Mehndi in Tiruvannamalai
        </h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4">
        <p className="mb-4" style={{ lineHeight: "1.8" }}>
          To elevate your Mehendi function, the bride's has to be super amazing and beautiful just like you. Mehendi literally fall on hands help you with some great ideas and the market for your pre-wedding functions. A chance and creative space can create for Mehendi. Can coordinate plays, a contest for Sangeet night like, all relatives friends and Dancers, don't want them to be left out. We are here to help you with all your needs.
        </p>

        {/* Category Filter Buttons */}
        <div className="categories d-flex flex-wrap justify-content-center mb-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "primary" : "outline-secondary"}
              className="m-1"
              onClick={() => setActiveCategory(category.id)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                borderRadius: "4px",
                color: activeCategory === category.id ? "#fff" : "#333",
                borderColor: "#ccc"
              }}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </Container>

      {/* Recent Section Header */}
      <Container className="mb-3">
        <h3 className="text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Recent</h3>
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
              No images available for this category yet. Please check back soon!
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

export default SangeetAndMehendi;