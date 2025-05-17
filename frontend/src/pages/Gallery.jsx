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

  // Separate image arrays for each category
  const engagementImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Outdoor engagement setup with mandap"
    },
    {
      id: 3,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Engagement stage with pink backdrop"
    },
    {
      id: 4,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Floral engagement decoration"
    },
    {
      id: 8,
      src: "https://vermiliondecors.com/assets/images/gallery/e8.webp",
      alt: "Engagement photo display"
    },
    {
      id: 9,
      src: "https://vermiliondecors.com/assets/images/gallery/e9.webp",
      alt: "Engagement invitation display"
    },
    {
      id: 10,
      src: "https://vermiliondecors.com/assets/images/gallery/e10.webp",
      alt: "Simple engagement stage"
    },
    {
      id: 13,
      src: "https://vermiliondecors.com/assets/images/gallery/e13.webp",
      alt: "Pink themed engagement decoration"
    },
    {
      id: 14,
      src: "https://vermiliondecors.com/assets/images/gallery/e14.webp",
      alt: "Pink floral wall for engagement"
    },
    {
      id: 17,
      src: "https://vermiliondecors.com/assets/images/gallery/e17.webp",
      alt: "Floral engagement backdrop"
    }
  ];

  const marriageImages = [
    {
      id: 2,
      src: "https://vermiliondecors.com/assets/images/gallery/e2.webp",
      alt: "Indoor marriage decoration with stage"
    },
    {
      id: 5,
      src: "https://vermiliondecors.com/assets/images/gallery/e5.webp",
      alt: "Green themed marriage decoration"
    },
    {
      id: 11,
      src: "https://vermiliondecors.com/assets/images/gallery/e11.webp",
      alt: "White floral marriage decoration"
    },
    {
      id: 18,
      src: "https://vermiliondecors.com/assets/images/gallery/e18.webp",
      alt: "Outdoor marriage setup"
    }
  ];

  const outdoorImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Outdoor engagement setup with mandap"
    },
    {
      id: 18,
      src: "https://vermiliondecors.com/assets/images/gallery/e18.webp",
      alt: "Outdoor marriage setup"
    }
  ];

  const receptionImages = [
    {
      id: 6,
      src: "https://vermiliondecors.com/assets/images/gallery/e6.webp",
      alt: "Reception hall decoration"
    },
    {
      id: 12,
      src: "https://vermiliondecors.com/assets/images/gallery/e12.webp",
      alt: "Reception stage with couple seating"
    },
    {
      id: 16,
      src: "https://vermiliondecors.com/assets/images/gallery/e16.webp",
      alt: "Reception stage with pink backdrop"
    }
  ];

  const christainImages = [
    {
      id: 15,
      src: "https://vermiliondecors.com/assets/images/gallery/e15.webp",
      alt: "Christian wedding welcome board"
    }
  ];

  const nikkahImages = [
    // Currently no images for this category
  ];

  const sangeetImages = [
    {
      id: 7,
      src: "https://vermiliondecors.com/assets/images/gallery/e7.webp",
      alt: "Sangeet decoration with hanging flowers"
    }
  ];

  const birthdayImages = [
    // Currently no images for this category
  ];

  const babyShowerImages = [
    // Currently no images for this category
  ];

  const babyCradleImages = [
    // Currently no images for this category
  ];

  // Get images based on active category
  const getFilteredImages = () => {
    switch (activeCategory) {
      case "engagement":
        return engagementImages;
      case "marriage":
        return marriageImages;
      case "outdoor":
        return outdoorImages;
      case "reception":
        return receptionImages;
      case "christain":
        return christainImages;
      case "nikkah":
        return nikkahImages;
      case "sangeet":
        return sangeetImages;
      case "birthday":
        return birthdayImages;
      case "babyShower":
        return babyShowerImages;
      case "babyCradle":
        return babyCradleImages;
      case "all":
      default:
        // Combine all images for "all" category
        return [
          ...engagementImages,
          ...marriageImages,
          ...receptionImages,
          ...christainImages,
          ...sangeetImages,
          // Filter out duplicates that appear in multiple categories
        ].filter((image, index, self) => 
          index === self.findIndex((i) => i.id === image.id)
        );
    }
  };

  // Get filtered images
  const filteredImages = getFilteredImages();

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