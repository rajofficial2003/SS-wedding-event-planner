import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";

const BabyShower = () => {
  // Client names list with IDs
  const clientNames = [
    { id: "aishwarya-prithvi", name: "Aishwarya + Prithvi Baby Shower" },
    { id: "swarna", name: "Swarna Baby Shower" },
    { id: "navya", name: "Navya Baby Shower" },
    { id: "poornima", name: "Poornima Baby Shower" },
    { id: "ashmitha", name: "Ashmitha Baby Shower" },
    { id: "sanjana", name: "Sanjana Baby Shower" }
  ];

  // State to track which client's images to display (default to first client)
  const [activeClient, setActiveClient] = useState(clientNames[0].id);

  // Separate image arrays for each client
  const aishwaryaPrithviImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Aishwarya and Prithvi baby shower entrance decoration"
    },
    {
      id: 2,
      src: "https://vermiliondecors.com/assets/images/gallery/e2.webp",
      alt: "Aishwarya and Prithvi baby shower stage setup"
    },
    {
      id: 3,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Aishwarya and Prithvi baby shower floral arrangements"
    }
  ];

  const swarnaImages = [
    {
      id: 4,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Swarna baby shower entrance with red floral decorations"
    },
    {
      id: 5,
      src: "https://vermiliondecors.com/assets/images/gallery/e5.webp",
      alt: "Swarna baby shower stage with hanging decorations"
    }
  ];

  const navyaImages = [
    {
      id: 6,
      src: "https://vermiliondecors.com/assets/images/gallery/e6.webp",
      alt: "Navya baby shower with hanging greenery"
    },
    {
      id: 7,
      src: "https://vermiliondecors.com/assets/images/gallery/e7.webp",
      alt: "Navya baby shower stage with palm tree motif"
    }
  ];

  const poornimaImages = [
    {
      id: 8,
      src: "https://vermiliondecors.com/assets/images/gallery/e8.webp",
      alt: "Poornima baby shower with tropical theme"
    },
    {
      id: 9,
      src: "https://vermiliondecors.com/assets/images/gallery/e9.webp",
      alt: "Poornima baby shower ceiling decorations"
    }
  ];

  const ashmithaImages = [
    {
      id: 10,
      src: "https://vermiliondecors.com/assets/images/gallery/e10.webp",
      alt: "Ashmitha baby shower with the mother-to-be"
    },
    {
      id: 11,
      src: "https://vermiliondecors.com/assets/images/gallery/e11.webp",
      alt: "Ashmitha baby shower with couple"
    }
  ];

  const sanjanaImages = [
    {
      id: 12,
      src: "https://vermiliondecors.com/assets/images/gallery/e12.webp",
      alt: "Sanjana baby shower with floral ceiling"
    },
    {
      id: 13,
      src: "https://vermiliondecors.com/assets/images/gallery/e13.webp",
      alt: "Sanjana baby shower stage decoration"
    }
  ];

  // Function to get images based on active client
  const getFilteredImages = () => {
    switch (activeClient) {
      case "aishwarya-prithvi":
        return aishwaryaPrithviImages;
      case "swarna":
        return swarnaImages;
      case "navya":
        return navyaImages;
      case "poornima":
        return poornimaImages;
      case "ashmitha":
        return ashmithaImages;
      case "sanjana":
        return sanjanaImages;
      default:
        return aishwaryaPrithviImages; // Default to first client if none selected
    }
  };

  // Get filtered images
  const filteredImages = getFilteredImages();

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Gayathri Babu",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/7e/8a/2f/7e8a2f115e6317687707837c667ce79d.jpg",
      text: "My wedding was fixed in a very short time. I didn't have the luxury of time to choose things slowly and I am very picky. What a combo!! Literally, until 2 weeks to my wedding I didn't select a decor! Vermilion decors were there for my rescue! In a very short notice, they really did a great job in giving me the decor I asked for! It was amazing! Got a lot of compliments on the decor for my reception and wedding. Without them my wedding would have not been as dreamy as it was!"
    },
    {
      id: 2,
      name: "Aishwarya & Prithvi",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/1d/d2/85/1dd28553ccfb8b4d6d50ddbbc0a2e781.jpg",
      text: "We had our baby shower decorated by Vermilion Decors and it was absolutely stunning! The floral arrangements and lighting created the perfect ambiance. Everyone was impressed with the attention to detail. Highly recommend their services for any special occasion!"
    },
    {
      id: 3,
      name: "Swarna",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/2c/bf/62/2cbf6280e528bdf9641711f71f5e5aa3.jpg",
      text: "Vermilion Decors transformed our simple venue into a magical space for our baby shower. The team was professional, responsive, and executed our vision perfectly. The decoration exceeded our expectations and made for beautiful photographs that we'll cherish forever."
    }
  ];

  return (
    <div className="baby-shower-page">
      {/* Banner Section with Responsive Heading */}
      <div 
        className="baby-shower-banner position-relative" 
        style={{ 
          backgroundImage: "url('./wedding decors/babyshower.jpg')", 
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
          Baby Shower Decorations In Tiruvannamalai
        </h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4">
        <p className="mb-4" style={{ lineHeight: "1.8" }}>
          The thought of throwing a baby shower can be overwhelming, but the hardest part is brainstorming fresh ideas. Whether your bestie is laid-back and casual, or you know she wants a party, we have the perfect idea for you.
        </p>

        {/* Client Names as Filter Buttons */}
        <div className="client-names d-flex flex-wrap justify-content-center mb-4">
          {clientNames.map((client) => (
            <Button
              key={client.id}
              variant={activeClient === client.id ? "primary" : "outline-secondary"}
              className="m-1"
              onClick={() => setActiveClient(client.id)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                borderRadius: "4px",
                color: activeClient === client.id ? "#fff" : "#333",
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
              No images available for this client yet. Please check back soon!
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

export default BabyShower;