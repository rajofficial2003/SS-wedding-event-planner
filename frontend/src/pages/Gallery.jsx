import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories for filtering
  const categories = [
    { id: "all", name: "All" },
    { id: "engagement", name: "Engagement" },
    { id: "marriage", name: "Marriage" },
    { id: "outdoor", name: "Out door" },
    { id: "reception", name: "Reception" },
    { id: "christain", name: "Christain Wedding" },
    { id: "nikkah", name: "Nikkah" },
    { id: "sangeet", name: "Sangeet & mehndi" },
    { id: "birthday", name: "Birthday" },
    { id: "babyShower", name: "Baby Shower" },
    { id: "babyCradle", name: "Baby Cradle" }
  ];

  // Gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Outdoor engagement setup with mandap",
      categories: ["engagement", "outdoor"]
    },
    {
      id: 2,
      src: "https://vermiliondecors.com/assets/images/gallery/e2.webp",
      alt: "Indoor marriage decoration with stage",
      categories: ["marriage"]
    },
    {
      id: 3,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Engagement stage with pink backdrop",
      categories: ["engagement"]
    },
    {
      id: 4,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Floral engagement decoration",
      categories: ["engagement"]
    },
    {
      id: 5,
      src: "https://vermiliondecors.com/assets/images/gallery/e5.webp",
      alt: "Green themed marriage decoration",
      categories: ["marriage"]
    },
    {
      id: 6,
      src: "https://vermiliondecors.com/assets/images/gallery/e6.webp",
      alt: "Reception hall decoration",
      categories: ["reception"]
    },
    {
      id: 7,
      src: "https://vermiliondecors.com/assets/images/gallery/e7.webp",
      alt: "Sangeet decoration with hanging flowers",
      categories: ["sangeet"]
    },
    {
      id: 8,
      src: "https://vermiliondecors.com/assets/images/gallery/e8.webp",
      alt: "Engagement photo display",
      categories: ["engagement"]
    },
    {
      id: 9,
      src: "https://vermiliondecors.com/assets/images/gallery/e9.webp",
      alt: "Engagement invitation display",
      categories: ["engagement"]
    },
    {
      id: 10,
      src: "https://vermiliondecors.com/assets/images/gallery/e10.webp",
      alt: "Simple engagement stage",
      categories: ["engagement"]
    },
    {
      id: 11,
      src: "https://vermiliondecors.com/assets/images/gallery/e11.webp",
      alt: "White floral marriage decoration",
      categories: ["marriage"]
    },
    {
      id: 12,
      src: "https://vermiliondecors.com/assets/images/gallery/e12.webp",
      alt: "Reception stage with couple seating",
      categories: ["reception"]
    },
    {
      id: 13,
      src: "https://vermiliondecors.com/assets/images/gallery/e13.webp",
      alt: "Pink themed engagement decoration",
      categories: ["engagement"]
    },
    {
      id: 14,
      src: "https://vermiliondecors.com/assets/images/gallery/e14.webp",
      alt: "Pink floral wall for engagement",
      categories: ["engagement"]
    },
    {
      id: 15,
      src: "https://vermiliondecors.com/assets/images/gallery/e15.webp",
      alt: "Christian wedding welcome board",
      categories: ["christain"]
    },
    {
      id: 16,
      src: "https://vermiliondecors.com/assets/images/gallery/e16.webp",
      alt: "Reception stage with pink backdrop",
      categories: ["reception"]
    },
    {
      id: 17,
      src: "https://vermiliondecors.com/assets/images/gallery/e17.webp",
      alt: "Floral engagement backdrop",
      categories: ["engagement"]
    },
    {
      id: 18,
      src: "https://vermiliondecors.com/assets/images/gallery/e18.webp",
      alt: "Outdoor marriage setup",
      categories: ["marriage", "outdoor"]
    }
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.categories.includes(activeCategory));

  return (
    <div className="gallery-page">
      {/* Banner Section */}
      <div 
        className="gallery-banner position-relative" 
        style={{ 
          backgroundImage: "url('./gallery banner.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="overlay position-absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}></div>
        <h1 className="text-white position-relative" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', zIndex: 2 }}>Gallery</h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4 text-center">
        <p className="mb-4">
          We at SS Event and Decors take pride in the fact that we are trusted by our clients time and again. If you are still reading this, our wedding event planner are looking forward to a happy and productive collaboration with you!
        </p>
      </Container>

      {/* Category Filter Buttons */}
      <Container className="mb-4">
        <div className="category-filters d-flex flex-wrap justify-content-center">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "primary" : "outline-secondary"}
              className="m-1"
              onClick={() => setActiveCategory(category.id)}
              style={{ 
                fontFamily: 'Playfair Display, serif',
                borderRadius: 0,
                color: activeCategory === category.id ? "#fff" : "#333", // Darker text color for inactive buttons
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
      </Container>
    </div>
  );
};

export default Gallery;