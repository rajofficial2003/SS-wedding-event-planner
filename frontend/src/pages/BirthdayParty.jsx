import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";

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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Janani S",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/7e/8a/2f/7e8a2f115e6317687707837c667ce79d.jpg",
      text: "I cannot possibly contain enough words to completely express our appreciation. When it came time to select an event planner for my daughter's 4 th Birthday, we luckily found you based on our friend's recommendation.Special thank you to Nikitha who had such great communication skills! She understood what we wanted, even if it was a small pin! She was in constant touch with us and made sure every thing was going fine! Without your help our special day would not have been the picture-perfect event we always thought you of. Your planning, preparation, and attention to detail was amazing. Thank you so much. Decor was beautiful and was appreciated by our guest which Ismall! Vijay took care of."
    },
    {
      id: 2,
      name: "Priya & Karthik",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/1d/d2/85/1dd28553ccfb8b4d6d50ddbbc0a2e781.jpg",
      text: "We had our son's birthday party decorated by Vermilion Decors and it was absolutely stunning! The themed decorations and lighting created the perfect ambiance. Everyone was impressed with the attention to detail. Highly recommend their services for any special occasion!"
    },
    {
      id: 3,
      name: "Meera & Rahul",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/2c/bf/62/2cbf6280e528bdf9641711f71f5e5aa3.jpg",
      text: "Vermilion Decors transformed our simple venue into a magical space for our daughter's birthday. The team was professional, responsive, and executed our vision perfectly. The decoration exceeded our expectations and made for beautiful photographs that we'll cherish forever."
    }
  ];

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

      {/* Testimonials Section */}
      <Container className="testimonials-section mb-5">
        <div className="text-center mb-4">
          <span 
            className="badge bg-dark py-2 px-3 mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Testimonials
          </span>
          <h2 
            className="section-title"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', // Responsive font size
              marginBottom: '40px'
            }}
          >
            Experience Matters
          </h2>
        </div>

        <Carousel 
          indicators={false} 
          controls={true}
          interval={5000}
          className="testimonial-carousel"
        >
          {testimonials.map(testimonial => (
            <Carousel.Item key={testimonial.id}>
              <div className="d-flex justify-content-center">
                <div className="testimonial-content text-center" style={{ maxWidth: "800px" }}>
                  <div className="testimonial-image mb-4">
                    <img 
                      src={testimonial.image || "/placeholder.svg"} 
                      alt={testimonial.name} 
                      className="rounded-circle"
                      style={{ 
                        width: "100px", 
                        height: "100px", 
                        objectFit: "cover",
                        border: "3px solid #dc3545"
                      }}
                    />
                  </div>
                  <div 
                    className="testimonial-text-container mb-4"
                    style={{ 
                      height: "150px", 
                      overflow: "auto",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#dc3545 #f0f0f0"
                    }}
                  >
                    <p 
                      className="testimonial-text"
                      style={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        fontStyle: 'italic',
                        margin: 0,
                        padding: "0 15px"
                      }}
                    >
                      "{testimonial.text}"
                    </p>
                  </div>
                  <h5 
                    className="testimonial-name"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {testimonial.name}
                  </h5>
                  <p 
                    className="testimonial-location"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      color: '#777'
                    }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Final Divider */}
      <Container>
        <div className="divider text-center mb-5">
          <hr style={{ borderTop: "1px dashed #ccc" }} />
        </div>
      </Container>
    </div>
  );
};

export default BirthdayParty;