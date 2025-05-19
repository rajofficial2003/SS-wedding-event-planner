import { Container, Row, Col, Button, Carousel, Accordion } from "react-bootstrap";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import Testimonials from "../components/Testimonials";

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
    "/index-slide-images/slide3.jpg",
  ];

  // Engagement project images
  const engagementProject = {
    mainImage:
      "https://vermiliondecors.com/assets/images/home/3/marriage-stage-decoration-services-in-chennai.webp",
    title: "Prithvi + Aishwarya",
    subtitle: "Engagement",
    description:
      "When the beauty of hydrangeas, orchids, carnations and brassicas comes together, the output is more than just magical! Vermilion Events and Decors presents: an evening filled with rustic and vintage decor, for that one special event.",
    thumbnails: [
      "https://vermiliondecors.com/assets/images/home/3/VER-SPP-0003.webp",
      "https://vermiliondecors.com/assets/images/home/3/VER-SPP-0005.webp",
      "https://vermiliondecors.com/assets/images/home/3/VER-SPP-0008.webp",
      "https://vermiliondecors.com/assets/images/home/3/VER-SPP-0011.webp",
    ],
    link: "/engagement-decoration",
  };

  // Wedding project images
  const weddingProject = {
    mainImage:
      "https://vermiliondecors.com/assets/images/home/1/marriage-decoration-services-in-chennai.webp",
    title: "Jowber + Mathura",
    subtitle: "Wedding",
    description:
      "Having a breezy beach wedding is much like having a dream come true! This gorgeous beach wedding of Jowber and Mathura was exquisitely decorated with subtle hues of florals and beautiful vintage decor. Every event's essence was kept in mind, and what we had were beautiful moments, filled with colours and joy!",
    thumbnails: [
      "https://vermiliondecors.com/assets/images/home/1/VER-PKHY-0040.webp",
      "https://vermiliondecors.com/assets/images/home/1/VER-PKHY-0051.webp",
      "https://vermiliondecors.com/assets/images/home/1/VER-PKHY-0064.webp",
      "https://vermiliondecors.com/assets/images/home/1/VER-PKHY-0070.webp",
    ],
    link: "/marriage-decoration",
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
        <div
          className="d-flex justify-content-center"
          style={{ overflow: "hidden" }}
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`thumbnail-item mx-1 ${
                idx === activeIndex ? "active-thumbnail" : ""
              }`}
              onClick={() => onSelect(idx)}
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: idx === activeIndex ? "scale(1.1)" : "scale(1)",
                border:
                  idx === activeIndex
                    ? `2px solid var(--primary-color)`
                    : "none",
              }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${idx + 1}`}
                className="img-fluid"
                style={{
                  width: "100px",
                  height: "70px",
                  objectFit: "cover",
                  opacity: idx === activeIndex ? 1 : 0.7,
                  borderRadius: 0,
                }}
              />
            </div>
          ))}
        </div>

        <div className="thumbnail-indicators d-flex justify-content-center mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`thumbnail-indicator mx-1 ${
                idx === activeIndex ? "active" : ""
              }`}
              onClick={() => onSelect(idx)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: "none",
                background:
                  idx === activeIndex ? "var(--primary-color)" : "#ccc",
                padding: 0,
                margin: "0 5px",
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
                Tiruvannamalai and expertise in event management and visual
                planning, we have executed and brought dozens of events such as
                engagement decorations, reception decorations, and wedding
                decorations to life. Our event planners in Tiruvannamalai
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
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="project-details bg-white p-4 rounded shadow">
                  <h3
                    className="script-font text-primary mb-3"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {engagementProject.title}
                  </h3>
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
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="project-details bg-white p-4 rounded shadow">
                  <h3
                    className="script-font text-primary mb-3"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {weddingProject.title}
                  </h3>
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

      {/* Event Planners in Tiruvannamalai Section */}
      <section className="event-planners-section py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="mb-3">Event Planners in Tiruvannamalai</h2>
          </div>
          <div className="event-planners-content text-center">
            <p className="mb-3">
              Being one of the best event management companies in
              Tiruvannamalai, every event starting from bridal showers to
              milestone birthday celebrations to big corporate gatherings starts
              with an idea at SS Events and Decor. Our team of{" "}
              <strong>event planners in Tiruvannamalai</strong>, Coimbatore
              discusses with clients event ideas, themes, desirable dates, and
              budget guidelines to make it an easy process for them.
            </p>
            <p className="mb-4">
              Be it engagement decorations or wedding decorations, it all starts
              with a simple conceptualization and continues until the actual
              event takes place. Our event planners at SS Events and
              Decors work closely with the client to design an event that
              reflects the client's vision of the gathering and meets the
              event's objective. They plan all the aspects of the event,
              including the related details and action items, and see that the
              event is thorough until its completion.
            </p>
            <Button
              variant="secondary"
              className="view-more-btn"
              href="/about"
              style={{
                backgroundColor: "#4a5568",
                borderColor: "#4a5568",
                padding: "8px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              View More <span>➔</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3">FAQs</h2>
          </div>
          
          <Accordion className="mb-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
                  What does a wedding planner do?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p style={{ lineHeight: "1.8" }}>
                  With our event planners in Tiruvannamalai, we give excellent counsel, direction, and organize your wedding with some of the best services in-house. Our event planners in Tiruvannamalai can handle everything, including the minor details that many couples need an extra hand with. If you're intending to engage a professional wedding planner, you must be aware of their duties well in advance so that you can understand the range of tasks that they can easily handle as part of their services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
                  What are the services that are included in wedding planning?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p style={{ lineHeight: "1.8" }}>
                  Wedding includes end-to-end services, as our wedding planners in Tiruvannamalai take care of your A-Z wedding needs. Be it, wedding photography, wedding catering, wedding decorations, or wedding return gifts, we, at, SS Events and Decor take everything seriously and make your wedding preparations easier.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
                  What is the budget to hire a wedding planner?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p style={{ lineHeight: "1.8" }}>
                  Event Planners in Tiruvannamalai normally charge a management or service fee, which is typically determined following discussions with you and is based on the scope of the work and the overall wedding budget. However, you will save money thanks to the exclusive discounts that our suppliers and merchants are providing to us. You won't necessarily spend more than you had budgeted by hiring us.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      {/* Use the Testimonials Component */}
      <Testimonials />

      {/* Wedding Event Planner Gallery Section - Redesigned Layout */}
      <section className="wedding-event-planner-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-4">WEDDING EVENT PLANNER</h2>
          </div>
          
          <Row className="mb-4">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="gallery-header mb-4">
                <h5 className="text-muted">OUR GALLERY</h5>
                <h3 className="mb-3">SS Decors</h3>
                <p className="mb-4" style={{ lineHeight: "1.8" }}>
                  Zero Gravity Photography is a photography brand that primarily focuses on the coverage of celebrations of the milestone moments in your life. We are a bunch of young and ecstatic individuals with a deep love for photography.
                </p>
              </div>
              <div className="gallery-image">
                <img 
                  src="https://vermiliondecors.com/assets/images/home/reception-stage-decoration-services-in-chennai.webp" 
                  alt="South Indian bride with traditional jewelry" 
                  className="img-fluid shadow"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
            </Col>
            
            <Col lg={6}>
              <Row>
                <Col md={12} className="mb-4">
                  <div className="gallery-image">
                    <img 
                      src="https://vermiliondecors.com/assets/images/home/engagement-decoration-in-chennai.webp" 
                      alt="Two women in traditional sarees" 
                      className="img-fluid shadow"
                      style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="gallery-image">
                    <img 
                      src="https://vermiliondecors.com/assets/images/home/marriage-decorations-in-chennai.webp" 
                      alt="Indian couple at engagement ceremony" 
                      className="img-fluid shadow"
                      style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="gallery-description mt-3">
                    <p style={{ lineHeight: "1.8" }}>
                      We feel thrilled working behind the lens as it gives us the feeling of possessing a superpower that freezes time; leading you to travel back in time to relive the most joyous instances of your life. We don't believe in sticking to cliché methods and have a zeal to do the unusual.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          
          <div className="text-center mt-4">
            <Button
              variant="success"
              className="view-more-btn"
              href="/gallery"
              style={{
                backgroundColor: "#6b7e2e",
                borderColor: "#6b7e2e",
                padding: "8px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              View More <span>➔</span>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;