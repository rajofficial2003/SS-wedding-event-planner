"use client"
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap"
import { FaArrowRight, FaWhatsapp, FaUtensils, FaConciergeBell, FaGlassCheers } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Catering = () => {
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
  const cateringImages = [
    "/Wedding planning/Venue Management/sri sai.jpg",
  ]

  // Function to handle WhatsApp redirect for catering inquiry
  const handleContactClick = () => {
    const message = `Hello, I'm interested in your wedding catering services. Can you please provide more information about your catering packages and menu options?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  // Function to navigate to detailed catering page
  const handleSeeDetailedWork = () => {
    navigate("/catering-services")
  }

  // Function to handle catering booking
  const handleBookCateringClick = (cateringType) => {
    const message = `Hello, I would like to book ${cateringType} for my wedding event. Please provide more details about menu options and pricing.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="catering-page">
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <Carousel fade indicators={false} controls={true}>
          {cateringImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={
                  image ||
                  "/Wedding planning/Venue Management/sri sai.jpg"
                }
                alt={`Catering Setup Slide ${index + 1}`}
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
              WEDDING CATERING SERVICES IN TIRUVANNAMALAI
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
                  🍽️
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
              Whether you'd prefer a casual buffet-style meal or a formal plated dinner, our wedding catering services
              Chennai, Coimbatore, takes care of it all. Be it a birthday party or a wedding reception, our team at
              Divine Caterers believes in serving you and your guests with a delicious menu, which you won't soon
              forget. We understand that food is one of the most important aspects of any celebration, and we're
              committed to creating culinary experiences that delight your guests and complement your special day.
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
              At Senu Saravanan Events and Decors, we provide comprehensive catering services with a wide variety of
              menu options, professional service staff, and elegant presentation that matches the grandeur of your
              wedding celebration. From traditional South Indian cuisine to contemporary fusion dishes, we ensure that
              every bite is a memorable experience for you and your guests.
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
                See Our Catering Portfolio <FaArrowRight className="ms-2" />
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
                <FaWhatsapp className="me-2" /> Contact For Catering Services
              </Button>
            </div>
          </Col>
        </Row>

        {/* Catering Services Section */}
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
              Our Catering Services
            </h3>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/catering/Buffet-Catering.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaUtensils className="me-2" style={{ color: primaryColor }} />
                  Buffet Catering
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Elegant buffet setups with a wide variety of dishes, allowing guests to enjoy multiple cuisines and
                  options at their own pace.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookCateringClick("Buffet Catering Service")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Buffet
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/catering/Plated-Dinner-Service.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaConciergeBell className="me-2" style={{ color: primaryColor }} />
                  Plated Dinner Service
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Formal plated dinner service with professionally trained staff ensuring each guest receives
                  restaurant-quality presentation and service.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookCateringClick("Plated Dinner Service")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Service
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/catering/Cocktail-Service.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaGlassCheers className="me-2" style={{ color: primaryColor }} />
                  Cocktail & Reception
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Sophisticated cocktail receptions with premium appetizers, beverages, and elegant presentation for
                  pre-wedding celebrations.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookCateringClick("Cocktail Reception Service")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Reception
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
                Why Choose Our Catering Services
              </h3>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  margin: "0 auto 30px",
                }}
              >
                We believe that exceptional food and service are essential elements of any memorable celebration. Our
                experienced culinary team and professional service staff work together to ensure that every aspect of
                your catering experience exceeds your expectations.
              </p>
              <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Expert Chefs</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Experienced chefs specializing in traditional and contemporary cuisines
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Fresh Ingredients</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Premium quality, fresh ingredients sourced from trusted suppliers
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Professional Service</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Trained service staff ensuring seamless dining experience for all guests
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
                  <FaWhatsapp className="me-2" /> Get a Free Catering Consultation
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
                  "The catering service was absolutely outstanding! The food was delicious, beautifully presented, and
                  there was such a wonderful variety. Our guests couldn't stop complimenting the quality and taste. The
                  service staff was professional and attentive throughout the entire event."
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Lakshmi & Rajesh
                </p>
              </Card.Body>
            </Card>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <p style={{ fontFamily: bodyFont, fontSize: "1.1rem", fontStyle: "italic" }}>
                  "Divine Caterers exceeded our expectations in every way. The buffet setup was elegant, the food was
                  fresh and flavorful, and they accommodated all our special dietary requirements. The team was so
                  professional and made our wedding reception truly memorable."
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Arun & Deepika
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Catering
