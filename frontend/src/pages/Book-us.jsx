import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Whatsapp, Telephone } from "react-bootstrap-icons";

const BookUs = () => {
  // Initialize form state with empty values
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    date: "",
    location: "",
    totalGuests: "",
    venue: "",
    decorations: [],
    weddingPlanning: [],
    otherServices: []
  });

  // Decoration options
  const decorationOptions = [
    "House Warming",
    "Birthday Function",
    "Baby Shower",
    "Corporate Events",
    "Engagement",
    "Marriage",
    "Sangeet & mehendi",
    "Reception"
  ];

  // Wedding Planning options
  const weddingPlanningOptions = [
    "Nadhaswaram",
    "Pandit & Purohit",
    "Wedding Cards",
    "Videography",
    "Emcee",
    "Photography",
    "Chandamelam",
    "Fashion Jewellery",
    "Make Up",
    "Mehendi"
  ];

  // Other Services options
  const otherServicesOptions = [
    "Light Music",
    "DJ",
    "Hospitality",
    "Chandamelam",
    "Catering",
    "Instant Photobooth",
    "Cake",
    "FireWorks",
    "Return Gifts",
    "Fashion Jewellery",
    "Logistics",
    "Chat stall",
    "Hostess"
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData(prevState => ({
        ...prevState,
        [category]: [...prevState[category], value]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [category]: prevState[category].filter(item => item !== value)
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*New Booking Request*
Name: ${formData.name}
Phone: ${formData.telephone}
Email: ${formData.email}
Date: ${formData.date}
Location: ${formData.location}
Total Guests: ${formData.totalGuests}
Venue: ${formData.venue}

*Decorations:* ${formData.decorations.join(", ") || "None selected"}

*Wedding Planning:* ${formData.weddingPlanning.join(", ") || "None selected"}

*Other Services:* ${formData.otherServices.join(", ") || "None selected"}
    `;
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919087504549?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="book-us-page">
      {/* Banner Section */}
      <div 
        className="book-us-banner position-relative" 
        style={{ 
          backgroundImage: "url('./book-us-banner.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="overlay position-absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}></div>
        <h1 className="text-white position-relative" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', zIndex: 2 }}>Book Us</h1>
      </div>

      {/* Booking Form */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Form onSubmit={handleSubmit}>
              {/* Name */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif' }}>
                  Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control 
                  type="text" 
                  name="name"
                  placeholder="First name here"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{ 
                    backgroundColor: "#f8f9fa",
                    border: "none",
                    padding: "12px 15px",
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </Form.Group>

              {/* Telephone */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif' }}>Telephone</Form.Label>
                <Form.Control 
                  type="tel" 
                  name="telephone"
                  placeholder="Telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  style={{ 
                    backgroundColor: "#f8f9fa",
                    border: "none",
                    padding: "12px 15px",
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif' }}>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ 
                    backgroundColor: "#f8f9fa",
                    border: "none",
                    padding: "12px 15px",
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </Form.Group>

              {/* Date */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif' }}>
                  Date <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  style={{ 
                    backgroundColor: "#f8f9fa",
                    border: "none",
                    padding: "12px 15px",
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </Form.Group>

              {/* Location */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif' }}>
                  Location <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control 
                  type="text" 
                  name="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  style={{ 
                    backgroundColor: "#f8f9fa",
                    border: "none",
                    padding: "12px 15px",
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </Form.Group>

              {/* Total Guests */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif' }}>
                  Total Guests <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control 
                  type="number" 
                  name="totalGuests"
                  placeholder="Enter your total guests"
                  value={formData.totalGuests}
                  onChange={handleInputChange}
                  required
                  style={{ 
                    backgroundColor: "#f8f9fa",
                    border: "none",
                    padding: "12px 15px",
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </Form.Group>

              {/* Venue */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif' }}>
                  Venue <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control 
                  type="text" 
                  name="venue"
                  placeholder="Add your venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  required
                  style={{ 
                    backgroundColor: "#f8f9fa",
                    border: "none",
                    padding: "12px 15px",
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </Form.Group>

              {/* Decorations */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>Decorations:</Form.Label>
                <Row>
                  {decorationOptions.map((option, index) => (
                    <Col xs={6} md={4} key={`decoration-${index}`} className="mb-2">
                      <Form.Check 
                        type="checkbox"
                        id={`decoration-${index}`}
                        label={option}
                        value={option}
                        onChange={(e) => handleCheckboxChange(e, 'decorations')}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>

              {/* Wedding Planning */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>Wedding Planning:</Form.Label>
                <Row>
                  {weddingPlanningOptions.map((option, index) => (
                    <Col xs={6} md={4} key={`wedding-planning-${index}`} className="mb-2">
                      <Form.Check 
                        type="checkbox"
                        id={`wedding-planning-${index}`}
                        label={option}
                        value={option}
                        onChange={(e) => handleCheckboxChange(e, 'weddingPlanning')}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>

              {/* Other Services */}
              <Form.Group className="mb-4">
                <Form.Label style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>Other Services:</Form.Label>
                <Row>
                  {otherServicesOptions.map((option, index) => (
                    <Col xs={6} md={4} key={`other-service-${index}`} className="mb-2">
                      <Form.Check 
                        type="checkbox"
                        id={`other-service-${index}`}
                        label={option}
                        value={option}
                        onChange={(e) => handleCheckboxChange(e, 'otherServices')}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>

              {/* Submit Button */}
              <div className="d-flex justify-content-start mt-4">
                <Button 
                  type="submit" 
                  variant="primary"
                  className="px-4 py-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    borderRadius: 0
                  }}
                >
                  SUBMIT BUTTON
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Contact Information */}
      <div className="contact-info py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <Container className="text-center">
          <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '20px' }}>Contact Us Directly</h3>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <a 
              href="tel:+919087504549" 
              className="btn btn-outline-primary me-3 mb-2"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                borderRadius: 0
              }}
            >
              <span className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                Call: 9087504549
              </span>
            </a>
            <a 
              href="https://wa.me/919087504549" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-success mb-2"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                borderRadius: 0,
                backgroundColor: "#25D366",
                borderColor: "#25D366"
              }}
            >
              <span className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp me-2" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp Us
              </span>
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BookUs;