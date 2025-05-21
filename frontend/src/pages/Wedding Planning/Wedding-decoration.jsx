"use client"
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap"
import { FaArrowRight, FaWhatsapp } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const WeddingDecoration = () => {
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
  const decorationImages = [
    "/Wedding planning/Venue Management/sri sai.jpg",
    "./wedding decors/SangeetAndMehendi.jpeg",
  ]

  // Function to handle WhatsApp redirect for decoration inquiry
  const handleContactClick = () => {
    const message = `Hello, I'm interested in your wedding decoration services. Can you please provide more information about your packages and availability?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  // Function to navigate to detailed decoration page
  const handleSeeDetailedWork = () => {
    navigate("/marriage-decoration")
  }

  return (
    <div className="wedding-decoration-page">
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <Carousel fade indicators={false} controls={true}>
          {decorationImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image || "/placeholder.svg?height=600&width=1200&query=wedding decoration with flowers"}
                alt={`Wedding Decoration Slide ${index + 1}`}
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
              WEDDING DECORATION IN TIRUVANNAMALAI
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
                  ❦
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
              One of the most important aspects and the heart of every event lies in the Wedding Decoration Services.
              Your Wedding Decoration in Tiruvannamalai can either make or break an event. Good Wedding Decoration
              Services helps set in a good ambiance for your guests. Our team at Senu Saravanan Events and Decors, helps
              you explore Wedding decoration in Tiruvannamalai to choose the best Wedding Decoration Services for your
              style. Our designated team of professionals makes sure to help you with the do's and don'ts, and also,
              guide you through the process. Perfection is what we believe in.
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
              The color vermilion is regarded as the color of life and is connected to blood and eternity. It carries
              the same religious, marital, and romantic meanings. We consider your preferences while also putting forth
              some of our own. They would begin planning your ideal wedding as soon as you gave them the go-ahead.
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
                See Detailed Our Decoration Work <FaArrowRight className="ms-2" />
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
                <FaWhatsapp className="me-2" /> Contact For Decoration
              </Button>
            </div>
          </Col>
        </Row>

        {/* Decoration Types Section */}
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
              Our Decoration Services
            </h3>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="Wedding planning/wedding-decoration/entrance.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>Entrance Decoration</Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Beautiful entrance decorations with floral arrangements and lighting to welcome your guests.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="Wedding planning/wedding-decoration/mandabam.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>Mandap Decoration</Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Elegant and customized mandap decorations that reflect your style and cultural preferences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="Wedding planning/wedding-decoration/lightaout.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>Lighting & Ambiance</Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Stunning lighting arrangements that create the perfect ambiance for your special day.
                </Card.Text>
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
                Why Choose Our Decoration Services
              </h3>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  margin: "0 auto 30px",
                }}
              >
                We understand that your wedding day is one of the most important days of your life. Our team of
                experienced decorators will work closely with you to create a magical atmosphere that reflects your
                personality and style.
              </p>
              <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Customized Designs</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Personalized decoration concepts tailored to your preferences
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Quality Materials</h5>
                    <p style={{ fontFamily: bodyFont }}>Premium flowers and decor elements for a luxurious look</p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Experienced Team</h5>
                    <p style={{ fontFamily: bodyFont }}>Professional decorators with years of experience</p>
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
                  <FaWhatsapp className="me-2" /> Get a Free Consultation
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
                  "The decoration team did an amazing job for our wedding. The mandap was absolutely stunning and
                  exactly what we had envisioned. Everyone was complimenting the beautiful arrangements and lighting."
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Priya & Karthik
                </p>
              </Card.Body>
            </Card>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <p style={{ fontFamily: bodyFont, fontSize: "1.1rem", fontStyle: "italic" }}>
                  "We were blown away by the entrance decoration. It created such a magical first impression for our
                  guests. The team was professional, punctual, and delivered beyond our expectations."
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Anitha & Rajesh
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WeddingDecoration
