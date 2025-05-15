import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const Home = () => {
  // Main carousel state
  const [index, setIndex] = useState(0);
  
  // Project carousel states
  const [engagementIndex, setEngagementIndex] = useState(0);
  const [weddingIndex, setWeddingIndex] = useState(0);

  // Image arrays for easier access
  const carouselImages = [
    "/index-slide-images/slide1.jpg",
    "/index-slide-images/slide2.jpg",
    "/index-slide-images/slide3.jpg"
  ];

  // Engagement project images
  const engagementProject = {
    mainImage: "https://vermiliondecors.com/assets/images/home/3/marriage-stage-decoration-services-in-chennai.webp",
    title: "Prithvi + Aishwarya",
    subtitle: "Engagement",
    description: "When the beauty of hydrangeas, orchids, carnations and brassicas comes together, the output is more than just magical! Vermilion Events and Decors presents: an evening filled with rustic and vintage decor, for that one special event.",
    thumbnails: [
      "https://vermiliondecors.com/assets/images/home/3/VER-SPP-0003.webp",
      "https://vermiliondecors.com/assets/images/home/3/VER-SPP-0005.webp",
      "https://vermiliondecors.com/assets/images/home/3/VER-SPP-0008.webp",
      "https://vermiliondecors.com/assets/images/home/3/VER-SPP-0011.webp"
    ],
    link: "/portfolio/engagement"
  };

  // Wedding project images
  const weddingProject = {
    mainImage: "https://vermiliondecors.com/assets/images/home/1/marriage-decoration-services-in-chennai.webp",
    title: "Jowber + Mathura",
    subtitle: "Wedding",
    description: "Having a breezy beach wedding is much like having a dream come true! This gorgeous beach wedding of Jowber and Mathura was exquisitely decorated with subtle hues of florals and beautiful vintage decor. Every event's essence was kept in mind, and what we had were beautiful moments, filled with colours and joy!",
    thumbnails: [
      "https://vermiliondecors.com/assets/images/home/1/VER-PKHY-0040.webp",
      "https://vermiliondecors.com/assets/images/home/1/VER-PKHY-0051.webp",
      "https://vermiliondecors.com/assets/images/home/1/VER-PKHY-0064.webp",
      "https://vermiliondecors.com/assets/images/home/1/VER-PKHY-0070.webp"
    ],
    link: "/portfolio/wedding"
  };

  // Event handlers
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleEngagementSelect = (selectedIndex) => {
    setEngagementIndex(selectedIndex);
  };

  const handleWeddingSelect = (selectedIndex) => {
    setWeddingIndex(selectedIndex);
  };

  // Custom thumbnail slider component without navigation buttons
  const ThumbnailSlider = ({ images, activeIndex, onSelect }) => {
    return (
      <div className="thumbnail-slider mb-4">
        <div className="d-flex justify-content-center" style={{ overflow: 'hidden' }}>
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className={`thumbnail-item mx-1 ${idx === activeIndex ? 'active-thumbnail' : ''}`}
              onClick={() => onSelect(idx)}
              style={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: idx === activeIndex ? 'scale(1.1)' : 'scale(1)',
                border: idx === activeIndex ? `2px solid var(--primary-color)` : 'none'
              }}
            >
              <img 
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${idx + 1}`} 
                className="img-fluid"
                style={{ 
                  width: '100px', 
                  height: '70px', 
                  objectFit: 'cover',
                  opacity: idx === activeIndex ? 1 : 0.7,
                  borderRadius: 0
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="thumbnail-indicators d-flex justify-content-center mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`thumbnail-indicator mx-1 ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => onSelect(idx)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                background: idx === activeIndex ? 'var(--primary-color)' : '#ccc',
                padding: 0,
                margin: '0 5px'
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-container">
          <Carousel 
            activeIndex={index} 
            onSelect={handleSelect}
            indicators={true}
            interval={5000} // Auto-transition every 5 seconds
          >
            {carouselImages.map((image, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="carousel-image"
                  src={image || "/placeholder.svg"}
                  alt={`Slide ${idx + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h3>Welcome to SS Decors</h3>
              <h2>Best Event Planners in Tiruvannamalai</h2>
              <p>
                Our team of event planners at <b>SS Events and Decors</b> works
                around the clock to give you the wedding decoration of your
                dreams. With a highly-creative team of wedding planners in
                Tiruvannamalai and expertise in event management and
                visual planning, we have executed and brought dozens of events
                such as engagement decorations, reception decorations, and
                wedding decorations to life. Our event planners in Tiruvannamalai
                specialize in the end-to-end ideation and execution of
                interactive experiences, thematic marriage decoration, and
                overall wedding event management.
              </p>
              {/* <Button variant="primary" size="lg" href="/contact" className="me-3">
                Contact Us
              </Button>
              <Button variant="outline-primary" size="lg" href="/portfolio">
                View Our Work
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Latest Works Section */}
      <section className="latest-works-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-2">Our Latest Works</h2>
            <div className="d-flex justify-content-center">
              <div className="divider-ornament">❦❦❦❦❦</div>
            </div>
          </div>

          {/* First Project - Engagement */}
          <div className="project-showcase mb-5">
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="main-project-image">
                  <img 
                    src={engagementProject.mainImage || "/placeholder.svg"}
                    alt={`${engagementProject.title} ${engagementProject.subtitle}`} 
                    className="img-fluid rounded shadow"
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="project-details bg-white p-4 rounded shadow">
                  <h3 className="script-font text-primary mb-3" style={{ fontSize: '2.5rem' }}>{engagementProject.title}</h3>
                  <h4 className="mb-3">{engagementProject.subtitle}</h4>
                  <p>{engagementProject.description}</p>
                  
                  <ThumbnailSlider 
                    images={engagementProject.thumbnails}
                    activeIndex={engagementIndex}
                    onSelect={handleEngagementSelect}
                  />
                  
                  <Button 
                    variant="primary" 
                    className="explore-btn rounded-pill"
                    href={engagementProject.link}
                  >
                    Explore <span>➔</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>

          {/* Second Project - Wedding */}
          <div className="project-showcase">
            <Row className="align-items-center flex-lg-row-reverse">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="main-project-image">
                  <img 
                    src={weddingProject.mainImage || "/placeholder.svg"}
                    alt={`${weddingProject.title} ${weddingProject.subtitle}`} 
                    className="img-fluid rounded shadow"
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="project-details bg-white p-4 rounded shadow">
                  <h3 className="script-font text-primary mb-3" style={{ fontSize: '2.5rem' }}>{weddingProject.title}</h3>
                  <h4 className="mb-3">{weddingProject.subtitle}</h4>
                  <p>{weddingProject.description}</p>
                  
                  <ThumbnailSlider 
                    images={weddingProject.thumbnails}
                    activeIndex={weddingIndex}
                    onSelect={handleWeddingSelect}
                  />
                  
                  <Button 
                    variant="primary" 
                    className="explore-btn rounded-pill"
                    href={weddingProject.link}
                  >
                    Explore <span>➔</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;