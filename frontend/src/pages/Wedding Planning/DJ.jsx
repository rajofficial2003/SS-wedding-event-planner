"use client"
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap"
import { FaArrowRight, FaWhatsapp, FaVolumeUp, FaMusic, FaHeadphones } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const DJ = () => {
  // Primary color for styling from App.css
  const primaryColor = "#f7374f"

  // Font families from App.css
  const headingFont = "'Playfair Display', serif"
  const bodyFont = "'Poppins', sans-serif"

  // WhatsApp number
  const whatsappNumber = "9087504549"

  // Navigation
  const navigate = useNavigate()

  // Featured images for the hero section
  const djImages = [
    "/Wedding planning/Venue Management/sri sai.jpg",
  ]

  // Function to handle WhatsApp redirect for DJ inquiry
  const handleContactClick = () => {
    const message = `Hello, I'm interested in your DJ services for my wedding. Can you please provide more information about your DJ packages and availability?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  // Function to navigate to detailed DJ page
  const handleSeeDetailedWork = () => {
    navigate("/dj-services")
  }

  // Function to handle DJ booking
  const handleBookDJClick = (djType) => {
    const message = `Hello, I would like to book ${djType} for my wedding event. Please provide more details about availability and pricing.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="dj-page">
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <Carousel fade indicators={false} controls={true}>
          {djImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={
                  image ||
                  "/placeholder.svg?height=600&width=1200&query=professional DJ setup with colorful lighting"
                }
                alt={`DJ Setup Slide ${index + 1}`}
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container className="py-5">
        {/* Title Section */}
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2
              style={{
                color: primaryColor,
                fontFamily: headingFont,
                fontWeight: "700",
                fontSize: "2.5rem",
                letterSpacing: "1px",
              }}
            >
              DJ SERVICES IN TIRUVANNAMALAI
            </h2>
            <div className="d-flex justify-content-center my-3">
              <div
                style={{
                  width: "150px",
                  height: "2px",
                  background: primaryColor,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "20px",
                    color: primaryColor,
                  }}
                >
                  🎧
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto text-center">
            <p
              style={{
                fontFamily: bodyFont,
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#555",
              }}
            >
              It is important to have the right music played at your wedding. Based on the types of event, needs and
              requirements, our team helps you find the right DJ in Chennai, Coimbatore to set in the right kind of
              ambience and mood. A professional DJ can transform your wedding celebration into an unforgettable
              experience with the perfect blend of music, lighting, and entertainment that keeps your guests engaged
              throughout the event.
            </p>
            <p
              style={{
                fontFamily: bodyFont,
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#555",
                marginTop: "20px",
              }}
            >
              At Senu Saravanan Events and Decors, we provide top-notch DJ services with state-of-the-art sound systems,
              professional lighting setups, and experienced DJs who understand how to read the crowd and create the
              perfect atmosphere for every moment of your special day. From romantic slow songs during dinner to
              high-energy dance tracks that fill the dance floor, we ensure your wedding soundtrack is absolutely
              perfect.
            </p>

            <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
              <Button
                variant="primary"
                size="lg"
                onClick={handleSeeDetailedWork}
                style={{
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
                  fontFamily: bodyFont,
                  fontWeight: "500",
                  padding: "10px 30px",
                }}
              >
                See Our DJ Portfolio <FaArrowRight className="ms-2" />
              </Button>

              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleContactClick}
                style={{
                  borderColor: primaryColor,
                  color: primaryColor,
                  fontFamily: bodyFont,
                  fontWeight: "500",
                  padding: "10px 30px",
                }}
              >
                <FaWhatsapp className="me-2" /> Contact For DJ Services
              </Button>
            </div>
          </Col>
        </Row>

        {/* DJ Services Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3
              style={{
                fontFamily: headingFont,
                fontWeight: "600",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Our DJ Services
            </h3>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/DJ/dj.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaVolumeUp className="me-2" style={{ color: primaryColor }} />
                  Professional DJ Setup
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  High-quality sound systems with professional mixing equipment and experienced DJs for your wedding
                  celebration.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookDJClick("Professional DJ Setup")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book DJ
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/DJ/dj1.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaMusic className="me-2" style={{ color: primaryColor }} />
                  Dance Floor Lighting
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Dynamic lighting systems that sync with the music to create an electrifying dance floor atmosphere.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookDJClick("DJ with Lighting Setup")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Setup
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/DJ/dj2.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaHeadphones className="me-2" style={{ color: primaryColor }} />
                  MC & Hosting
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Professional MC services to host your events and keep the celebration flowing smoothly throughout the
                  day.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookDJClick("DJ with MC Services")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book MC
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <Row className="mb-4">
          <Col lg={12}>
            <Card
              className="border-0 text-center p-5"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
              }}
            >
              <h3
                style={{
                  fontFamily: headingFont,
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Why Choose Our DJ Services
              </h3>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  margin: "0 auto 30px",
                }}
              >
                Our professional DJs bring years of experience and the latest equipment to make your wedding celebration
                unforgettable. We understand that music sets the tone for your entire event, and we're committed to
                creating the perfect soundtrack for your special day.
              </p>
              <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Experienced DJs</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Professional DJs with extensive experience in wedding entertainment
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Latest Equipment</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      State-of-the-art sound systems and lighting for the best experience
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Custom Playlists</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Personalized music selection based on your preferences and crowd
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="mt-4">
                <Button
                  variant="primary"
                  onClick={handleContactClick}
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    fontFamily: bodyFont,
                    fontWeight: "500",
                    padding: "10px 30px",
                  }}
                >
                  <FaWhatsapp className="me-2" /> Get a Free DJ Consultation
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Row>
          <Col lg={12} className="text-center mb-4">
            <h3
              style={{
                fontFamily: headingFont,
                fontWeight: "600",
              }}
            >
              What Our Clients Say
            </h3>
          </Col>
          <Col lg={10} className="mx-auto">
            <Card className="border-0 shadow-sm p-4 mb-4">
              <Card.Body>
                <p style={{ fontFamily: bodyFont, fontSize: "1.1rem", fontStyle: "italic" }}>
                  "The DJ was absolutely amazing! He kept the dance floor packed all night long and played exactly the
                  kind of music we wanted. The sound quality was perfect, and the lighting created such a fantastic
                  atmosphere. Our guests are still talking about how great the music was!"
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Ravi & Preethi
                </p>
              </Card.Body>
            </Card>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <p style={{ fontFamily: bodyFont, fontSize: "1.1rem", fontStyle: "italic" }}>
                  "Senu Saravanan's DJ service exceeded our expectations. The DJ was professional, took all our song
                  requests, and knew exactly when to play what type of music. The MC services were also excellent -
                  everything flowed perfectly throughout our reception."
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Kavitha & Suresh
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DJ
