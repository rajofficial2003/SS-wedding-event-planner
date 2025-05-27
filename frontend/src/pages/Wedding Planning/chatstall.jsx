"use client"
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap"
import { FaArrowRight, FaWhatsapp, FaCoffee, FaIceCream, FaHeart } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ChatStall = () => {
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
  const chatStallImages = [
    "./wedding decors/SangeetAndMehendi.jpeg",
  ]

  // Function to handle WhatsApp redirect for chat stall inquiry
  const handleContactClick = () => {
    const message = `Hello, I'm interested in your chat stall services for my wedding. Can you please provide more information about your chat stall options and availability?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  // Function to navigate to detailed chat stall page
  const handleSeeDetailedWork = () => {
    navigate("/chatstall-services")
  }

  // Function to handle chat stall booking
  const handleBookChatStallClick = (stallType) => {
    const message = `Hello, I would like to book ${stallType} for my wedding event. Please provide more details about setup and pricing.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="chatstall-page">
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <Carousel fade indicators={false} controls={true}>
          {chatStallImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={
                  image ||
                  "/placeholder.svg?height=600&width=1200&query=wedding chat stall setup with colorful lighting"
                }
                alt={`Chat Stall Setup Slide ${index + 1}`}
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
              CHAT STALL SERVICES IN TIRUVANNAMALAI
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
                  🍿
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
              How can weddings be complete without local and delicious food? We make sure that your big day is made even
              more special with our catering services of delicious chat stalls, to keep your guest indulged in
              happiness! Our chat stall services add a unique and interactive element to your wedding celebration,
              offering guests a variety of fresh, flavorful, and entertaining food options that create memorable
              experiences.
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
              At Senu Saravanan Events and Decors, we provide comprehensive chat stall services with live preparation,
              fresh ingredients, and professional staff who ensure that every guest enjoys authentic flavors and
              interactive dining experiences. From traditional Indian chats to sweet treats and refreshing beverages,
              our stalls add excitement and variety to your wedding festivities.
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
                See Our Chat Stall Portfolio <FaArrowRight className="ms-2" />
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
                <FaWhatsapp className="me-2" /> Contact For Chat Stall Services
              </Button>
            </div>
          </Col>
        </Row>

        {/* Chat Stall Services Section */}
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
              Our Chat Stall Services
            </h3>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/chat-stall/pop-corn.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>🍿 Popcorn Stall</Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Fresh, hot popcorn with multiple flavors including butter, caramel, cheese, and masala varieties to
                  delight guests of all ages.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookChatStallClick("Popcorn Stall")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Stall
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/chat-stall/ice-cream.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaIceCream className="me-2" style={{ color: primaryColor }} />
                  Ice Cream Stall
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Premium ice cream counter with multiple flavors, toppings, and live preparation to create customized
                  treats for your guests.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookChatStallClick("Ice Cream Stall")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Stall
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/chat-stall/beeda.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>🌿 Beeda Stall</Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Traditional beeda (paan) stall with fresh ingredients, various flavors, and expert preparation for an
                  authentic experience.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookChatStallClick("Beeda Stall")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Stall
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/chat-stall/cotton-candy.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaHeart className="me-2" style={{ color: primaryColor }} />
                  Cotton Candy Stall
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Live cotton candy preparation with colorful varieties that create magical moments and sweet memories
                  for all guests.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookChatStallClick("Cotton Candy Stall")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Stall
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/chat-stall/fruit-salad.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>🥗 Fruit Salad Stall</Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Fresh fruit salad counter with seasonal fruits, custom combinations, and healthy options for
                  health-conscious guests.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookChatStallClick("Fruit Salad Stall")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Stall
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
                Why Choose Our Chat Stall Services
              </h3>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  margin: "0 auto 30px",
                }}
              >
                Our chat stall services bring excitement, variety, and interactive entertainment to your wedding
                celebration. We focus on fresh ingredients, live preparation, and creating memorable experiences that
                your guests will talk about long after the event.
              </p>
              <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Fresh Ingredients</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Only the freshest ingredients and highest quality materials for all our stalls
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Live Entertainment</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Interactive preparation that entertains guests while creating delicious treats
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Professional Staff</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Skilled chefs and service staff ensuring smooth operation and quality service
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
                  <FaWhatsapp className="me-2" /> Get a Free Chat Stall Consultation
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
                  "The chat stall services were a huge hit at our wedding! Our guests loved the variety of options and
                  the live preparation was so entertaining. The popcorn and cotton candy stalls were especially popular
                  with the kids. It added such a fun element to our celebration!"
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Sneha & Kiran
                </p>
              </Card.Body>
            </Card>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <p style={{ fontFamily: bodyFont, fontSize: "1.1rem", fontStyle: "italic" }}>
                  "Amazing chat stall experience! The beeda stall was authentic and the ice cream counter was a
                  refreshing treat for everyone. The staff was professional and the setup looked beautiful. Our guests
                  are still talking about how unique and delicious everything was."
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Ramesh & Kavya
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ChatStall
