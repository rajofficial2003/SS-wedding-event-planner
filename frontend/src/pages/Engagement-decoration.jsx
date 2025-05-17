import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";

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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Gayathri Babu",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/7e/8a/2f/7e8a2f115e6317687707837c667ce79d.jpg",
      text: "My wedding was fixed in a very short time. I didn't have the luxury of time to choose things slowly and I am very picky. What a combo!! Literally until 2 weeks to my wedding I didn't select a decor! Vermilion decors were there for my rescue! In a very short notice, they really did a great job in giving me the decor I asked for! It was amazing! Got a lot of compliments on the decor for my reception and wedding. Without them my wedding would have not been as dreamy as it was!"
    },
    {
      id: 2,
      name: "Prithvi & Aishwarya",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/1d/d2/85/1dd28553ccfb8b4d6d50ddbbc0a2e781.jpg",
      text: "We had our engagement ceremony decorated by SS Decors and it was absolutely stunning! The floral arrangements and lighting created the perfect ambiance. Everyone was impressed with the attention to detail. Highly recommend their services for any special occasion!"
    },
    {
      id: 3,
      name: "Kokila & Somasundaram",
      location: "Chennai",
      image: "https://i.pinimg.com/736x/2c/bf/62/2cbf6280e528bdf9641711f71f5e5aa3.jpg",
      text: "SS Decors transformed our simple venue into a magical space for our engagement. The team was professional, responsive, and executed our vision perfectly. The stage decoration exceeded our expectations and made for beautiful photographs that we'll cherish forever."
    }
  ];

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

export default EngagementDecoration;