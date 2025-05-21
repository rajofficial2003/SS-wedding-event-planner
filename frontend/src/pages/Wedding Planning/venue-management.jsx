"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap"
import { FaMapMarkerAlt, FaUsers, FaRupeeSign, FaStar, FaWhatsapp } from "react-icons/fa"

const VenueManagement = () => {
  // Primary color for styling from App.css
  const primaryColor = "#f7374f"

  // Font families from App.css
  const headingFont = "'Playfair Display', serif"
  const bodyFont = "'Poppins', sans-serif"

  // WhatsApp number
  const whatsappNumber = "9087504549"

  // Sample venues data
  const [venues] = useState([
    {
      id: 1,
      name: "RPS Mahal",
      location: "Avalurpet, Tiruvannamalai",
      capacity: "500-1500 guests",
      priceRange: "₹2,00,000 - ₹5,00,000",
      rating: 4.8,
      description:
        "An elegant venue with spacious halls and beautiful outdoor spaces perfect for grand weddings. Features state-of-the-art facilities and customizable decor options.",
      images: ["/Wedding planning/Venue Management/RPS out.jpg"],
    },
    {
      id: 2,
      name: "Sri Sai Mahal",
      location: "Avalurpet, Tiruvannamalai",
      capacity: "500-1500 guests",
      priceRange: "₹2,00,000 - ₹5,00,000",
      rating: 4.8,
      description:
        "An elegant venue with spacious halls and beautiful outdoor spaces perfect for grand weddings. Features state-of-the-art facilities and customizable decor options.",
      images: ["/Wedding planning/Venue Management/sri sai out.jpg"],
    },
  ])

  // Featured images for the hero section
  const featuredImages = [
    "/Wedding planning/Venue Management/sri sai.jpg",
    "/Wedding planning/Venue Management/sri sai out.jpg",
  ]

  // Function to handle WhatsApp redirect for venue booking
  const handleBookNowClick = (venueName) => {
    const message = `Hello, I'm interested in booking ${venueName} for my wedding. Please provide more information about availability and packages.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  // Function to handle WhatsApp redirect for venue specialist contact
  const handleContactSpecialistClick = () => {
    const message = `Hello, I need help finding the perfect wedding venue in Tiruvannamalai. Can you please assist me with venue options and availability?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="venue-management-page">
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <Carousel fade indicators={false} controls={true}>
          {featuredImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image || "/placeholder.svg"}
                alt={`Wedding Venue Slide ${index + 1}`}
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
              WEDDING VENUES IN Tiruvannamalai
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

        {/* Introduction Text */}
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
              The day you've been waiting for has finally come, and there's a floral aroma and a festive atmosphere.
              It's time to publicly celebrate your happiness as you tell the story of your romance and the unguarded
              moments with the best wedding venues in Tiruvanamalai. We have a thoughtfully compiled list of the top
              wedding venues in Tiruvannamalai. Sit back and decide whether you're looking for the fairy tale wedding, a
              big fat Indian wedding since you're the first in the family, or a cozy get-together with your loved ones.
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
              Senu Saravanan being the best wedding planning in Tiruvannamalai, we will help you with finding the
              perfect wedding venues in Tiruvannamalai for your big day. Given the utmost significance a venue holds, it
              can be time-consuming to rush through the wide number of wedding venues in Tiruvannamalai as per its
              availability, schedule, and then to shortlist to finalize one, so hire Senu Saravanan's wedding planning
              in Tiruvannamalai, as we can get it all done for you.
            </p>
          </Col>
        </Row>

        {/* Venues Listing */}
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
              Our Recommended Venues
            </h3>
          </Col>

          {venues.map((venue) => (
            <Col key={venue.id} lg={12} className="mb-4">
              <Card className="border-0 shadow-sm overflow-hidden">
                <Row className="g-0">
                  <Col md={5}>
                    <Carousel fade indicators={false} interval={3000}>
                      {venue.images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <img
                            className="d-block w-100"
                            src={image || "/placeholder.svg"}
                            alt={`${venue.name} - Image ${index + 1}`}
                            style={{ height: "400px", objectFit: "cover" }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Col>
                  <Col md={7}>
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title
                          style={{
                            fontFamily: headingFont,
                            fontWeight: "700",
                            fontSize: "1.5rem",
                          }}
                        >
                          {venue.name}
                        </Card.Title>
                        <div
                          className="venue-rating px-2 py-1 rounded"
                          style={{
                            backgroundColor: primaryColor,
                            color: "white",
                            fontFamily: bodyFont,
                            fontWeight: "600",
                          }}
                        >
                          <FaStar className="me-1" />
                          {venue.rating}
                        </div>
                      </div>

                      <div className="venue-details mb-3">
                        <p className="mb-2" style={{ fontFamily: bodyFont }}>
                          <FaMapMarkerAlt
                            style={{
                              color: primaryColor,
                              marginRight: "8px",
                            }}
                          />
                          {venue.location}
                        </p>
                        <p className="mb-2" style={{ fontFamily: bodyFont }}>
                          <FaUsers
                            style={{
                              color: primaryColor,
                              marginRight: "8px",
                            }}
                          />
                          {venue.capacity}
                        </p>
                        <p className="mb-3" style={{ fontFamily: bodyFont }}>
                          <FaRupeeSign
                            style={{
                              color: primaryColor,
                              marginRight: "8px",
                            }}
                          />
                          {venue.priceRange}
                        </p>
                      </div>

                      <Card.Text
                        style={{
                          fontFamily: bodyFont,
                          color: "#555",
                          marginBottom: "20px",
                        }}
                      >
                        {venue.description}
                      </Card.Text>

                      <div className="d-flex justify-content-between align-items-center">
                        <Button
                          variant="outline-primary"
                          style={{
                            borderColor: primaryColor,
                            color: primaryColor,
                            fontFamily: bodyFont,
                            fontWeight: "500",
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => handleBookNowClick(venue.name)}
                          style={{
                            backgroundColor: primaryColor,
                            borderColor: primaryColor,
                            fontFamily: bodyFont,
                            fontWeight: "500",
                          }}
                        >
                          <FaWhatsapp className="me-2" /> Book Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
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
                Need Help Finding the Perfect Venue?
              </h3>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  margin: "0 auto 30px",
                }}
              >
                Our wedding planning experts can assist you in finding the ideal venue that matches your style,
                preferences, and budget.
              </p>
              <div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleContactSpecialistClick}
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    fontFamily: bodyFont,
                    fontWeight: "500",
                    padding: "10px 30px",
                  }}
                >
                  <FaWhatsapp className="me-2" /> Contact Our Venue Specialists
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Additional Information */}
        <Row>
          <Col lg={12}>
            <div className="text-center">
              <h4
                style={{
                  fontFamily: headingFont,
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Why Choose Our Venue Management Services
              </h4>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                We, at Senu Saravanan Events and Decors, save you huge trouble by helping you with wedding venues in
                Tiruvannamalai, to make sure that we cater to your needs by finding you the best of all the wedding
                venues in Tiruvannamalai, as per your requirements, to celebrate your big day in the best possible way!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VenueManagement
