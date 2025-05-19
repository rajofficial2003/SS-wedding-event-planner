import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Testimonials from "../components/Testimonials";

const Housewarming = () => {
  // Decoration categories
  const categories = [
    { id: "house-warming", name: "House Warming" }
  ];

  // State to track which category's images to display
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  // Image arrays for housewarming decorations
  const housewarmingImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Indoor housewarming decoration with pink drapes and lighting"
    },
    {
      id: 2,
      src: "https://vermiliondecors.com/assets/images/gallery/e2.webp",
      alt: "Outdoor tree decorations with string lights"
    },
    {
      id: 3,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Staircase decorations with purple lighting"
    },
    {
      id: 4,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Hanging floral decorations with white flowers"
    },
    {
      id: 5,
      src: "https://vermiliondecors.com/assets/images/gallery/e5.webp",
      alt: "Entrance decorations with pink drapes and flowers"
    },
    {
      id: 6,
      src: "https://vermiliondecors.com/assets/images/gallery/e6.webp",
      alt: "Exterior house lighting with pink and green lights"
    }
  ];

  // Function to get images based on active category
  const getFilteredImages = () => {
    switch (activeCategory) {
      case "house-warming":
        return housewarmingImages;
      default:
        return housewarmingImages;
    }
  };

  // Get filtered images
  const filteredImages = getFilteredImages();

  return (
    <div className="housewarming-page">
      {/* Banner Section with Responsive Heading */}
      <div 
        className="housewarming-banner position-relative" 
        style={{ 
          backgroundImage: "url('./wedding decors/housewarming.jpg')", 
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
          House Warming Decorators In Tiruvannamalai
        </h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4">
        <p className="mb-4" style={{ lineHeight: "1.8" }}>
          Your first day at your new house always feels beautiful. It should be celebrated the right way as it is one of the best moments of your life. Buying the house of your dream is always an amazing feeling. Our event management team understands your absolute necessity and makes sure that your needs are met with the best housewarming decorations. We, at Vermilion Events and Decor have always put our clients before anything else.
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

export default Housewarming;