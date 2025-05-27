"use client"
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap"
import { FaArrowRight, FaWhatsapp, FaMusic, FaMicrophone, FaVolumeUp } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const LightMusic = () => {
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
  const musicImages = [
    "./Wedding planning/light-music/banner.jpg",
  ]

  // Function to handle WhatsApp redirect for music inquiry
  const handleContactClick = () => {
    const message = `Hello, I'm interested in your light music services for my wedding. Can you please provide more information about your artists and packages?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  // Function to navigate to detailed music page
  const handleSeeDetailedWork = () => {
    navigate("/music-services")
  }

  // Function to handle artist booking
  const handleBookArtistClick = (artistType) => {
    const message = `Hello, I would like to book ${artistType} for my wedding event. Please provide more details about availability and pricing.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="light-music-page">
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <Carousel fade indicators={false} controls={true}>
          {musicImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={
                  image ||
                  "/placeholder.svg?height=600&width=1200&query=wedding light music performance with colorful lighting"
                }
                alt={`Light Music Performance Slide ${index + 1}`}
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
              LIGHT MUSIC SERVICES IN TIRUVANNAMALAI
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
                  ♪
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
              Light music is important to have the right music played at your wedding. Based on the types of event,
              needs and requirements, our team helps you find the right artists to set in the right kind of ambience and
              mood. Music has the power to transform any celebration into an unforgettable experience, and at Senu
              Saravanan Events and Decors, we understand the significance of creating the perfect musical atmosphere for
              your special day.
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
              Our carefully curated selection of talented musicians and performers specializes in light music that
              complements every moment of your wedding celebration. From soulful melodies during the ceremony to upbeat
              performances that get everyone dancing, we ensure that the musical journey of your wedding day is as
              memorable as your love story itself.
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
                See Our Music Portfolio <FaArrowRight className="ms-2" />
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
                <FaWhatsapp className="me-2" /> Contact For Music Services
              </Button>
            </div>
          </Col>
        </Row>

        {/* Music Services Section */}
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
              Our Music Services
            </h3>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/light-music/classical.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaMusic className="me-2" style={{ color: primaryColor }} />
                  Classical Music
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Traditional classical music performances that add elegance and cultural richness to your ceremonies.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookArtistClick("Classical Music Artists")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Artists
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/light-music/live band.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaMicrophone className="me-2" style={{ color: primaryColor }} />
                  Live Band Performance
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Energetic live band performances that create an exciting atmosphere for your reception and
                  celebrations.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookArtistClick("Live Band")}
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  Book Band
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="./Wedding planning/light-music/dj.jpg"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontFamily: headingFont, fontWeight: "600" }}>
                  <FaVolumeUp className="me-2" style={{ color: primaryColor }} />
                  DJ & Sound System
                </Card.Title>
                <Card.Text style={{ fontFamily: bodyFont }}>
                  Professional DJ services with high-quality sound systems and lighting for an unforgettable party
                  experience.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleBookArtistClick("DJ Services")}
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
                Why Choose Our Music Services
              </h3>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  margin: "0 auto 30px",
                }}
              >
                We believe that music is the soul of any celebration. Our experienced team of musicians and sound
                engineers work together to create the perfect musical experience that reflects your personality and
                enhances every moment of your special day.
              </p>
              <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Professional Artists</h5>
                    <p style={{ fontFamily: bodyFont }}>Experienced musicians and performers with years of expertise</p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Quality Equipment</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      High-end sound systems and lighting for the best audio-visual experience
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-item text-center">
                    <h5 style={{ fontFamily: headingFont, color: primaryColor }}>Customized Playlist</h5>
                    <p style={{ fontFamily: bodyFont }}>
                      Personalized music selection based on your preferences and event flow
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
                  <FaWhatsapp className="me-2" /> Get a Free Music Consultation
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
                  "The music team was absolutely fantastic! They created such a beautiful atmosphere throughout our
                  wedding. The classical performances during the ceremony were soul-stirring, and the live band got
                  everyone dancing at the reception. Highly recommended!"
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Divya & Arjun
                </p>
              </Card.Body>
            </Card>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <p style={{ fontFamily: bodyFont, fontSize: "1.1rem", fontStyle: "italic" }}>
                  "Senu Saravanan's music team understood exactly what we wanted. They played all our favorite songs and
                  even learned a special song for our first dance. The sound quality was excellent, and the musicians
                  were so professional and talented."
                </p>
                <p className="mb-0 mt-3" style={{ fontFamily: headingFont, fontWeight: "600", color: primaryColor }}>
                  - Meera & Vikram
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LightMusic
