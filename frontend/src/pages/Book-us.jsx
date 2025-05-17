import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
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
    "Engagement Decoration",
    "Marriage Decoration",
    "Sangeet & mehendi",
    "Reception Decoration",
    "Baby Shower Decoration",
    "Birthday Decoration",
    "House Warming"
  ];

  // Wedding Planning options
  const weddingPlanningOptions = [
    "Venue Management",
    "Wedding Decoration"
  ];

  // Other Services options
  const otherServicesOptions = [
    "Light Music",
    "DJ",
    "Catering",
    "Cake",
    "FireWorks",
    "Chat stall"
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

  // Common styles
  const formControlStyle = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #e9ecef",
    borderRadius: "4px",
    padding: "12px 15px",
    fontFamily: 'Poppins, sans-serif',
    boxShadow: "none",
    transition: "all 0.3s ease"
  };

  const labelStyle = {
    fontFamily: 'Playfair Display, serif',
    fontWeight: "500",
    marginBottom: "8px"
  };

  const sectionTitleStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.3rem',
    marginBottom: '15px',
    paddingBottom: '8px',
    borderBottom: '2px solid #f0f0f0'
  };

  // Custom checkbox container style
  const checkboxContainerStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "10px",
    width: "100%"
  };

  // Custom checkbox style
  const checkboxStyle = {
    accentColor: "#dc3545", // Primary color for checkbox
    marginRight: "8px",
    marginTop: "3px", // Align with text
    width: "16px",
    height: "16px",
    flexShrink: 0
  };

  // Custom checkbox label style
  const checkboxLabelStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    lineHeight: '1.4',
    marginBottom: 0,
    wordBreak: "break-word"
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
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                {/* Form Heading */}
                <h2 className="text-center mb-4" style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2.2rem',
                  marginBottom: '30px',
                  position: 'relative',
                  paddingBottom: '15px'
                }}>
                  Book Us
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '3px',
                    backgroundColor: '#dc3545'
                  }}></span>
                </h2>
                
                <Form onSubmit={handleSubmit}>
                  {/* Personal Information Section */}
                  <div className="mb-4">
                    <h3 style={sectionTitleStyle}>Personal Information</h3>
                    <Row>
                      <Col md={6}>
                        {/* Name */}
                        <Form.Group className="mb-4">
                          <Form.Label style={labelStyle}>
                            Name <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name"
                            placeholder="First name here"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            style={formControlStyle}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        {/* Telephone */}
                        <Form.Group className="mb-4">
                          <Form.Label style={labelStyle}>Telephone</Form.Label>
                          <Form.Control 
                            type="tel" 
                            name="telephone"
                            placeholder="Telephone"
                            value={formData.telephone}
                            onChange={handleInputChange}
                            style={formControlStyle}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    {/* Email */}
                    <Form.Group className="mb-4">
                      <Form.Label style={labelStyle}>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={formControlStyle}
                      />
                    </Form.Group>
                  </div>

                  {/* Event Details Section */}
                  <div className="mb-4">
                    <h3 style={sectionTitleStyle}>Event Details</h3>
                    <Row>
                      <Col md={6}>
                        {/* Date */}
                        <Form.Group className="mb-4">
                          <Form.Label style={labelStyle}>
                            Date <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            style={formControlStyle}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        {/* Total Guests */}
                        <Form.Group className="mb-4">
                          <Form.Label style={labelStyle}>
                            Total Guests <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control 
                            type="number" 
                            name="totalGuests"
                            placeholder="Enter your total guests"
                            value={formData.totalGuests}
                            onChange={handleInputChange}
                            required
                            style={formControlStyle}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        {/* Location */}
                        <Form.Group className="mb-4">
                          <Form.Label style={labelStyle}>
                            Location <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control 
                            type="text" 
                            name="location"
                            placeholder="Enter your location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                            style={formControlStyle}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        {/* Venue */}
                        <Form.Group className="mb-4">
                          <Form.Label style={labelStyle}>
                            Venue <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control 
                            type="text" 
                            name="venue"
                            placeholder="Add your venue"
                            value={formData.venue}
                            onChange={handleInputChange}
                            required
                            style={formControlStyle}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>

                  {/* Services Section */}
                  <div className="mb-4">
                    <h3 style={sectionTitleStyle}>Services Required</h3>
                    
                    {/* Decorations */}
                    <Form.Group className="mb-4">
                      <Form.Label style={{...labelStyle, fontSize: '1.1rem'}}>
                        Decorations:
                      </Form.Label>
                      <div className="p-3" style={{backgroundColor: "#f9f9f9", borderRadius: "5px"}}>
                        <Row>
                          {decorationOptions.map((option, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} key={`decoration-${index}`}>
                              <div style={checkboxContainerStyle}>
                                <input
                                  type="checkbox"
                                  id={`decoration-${index}`}
                                  value={option}
                                  onChange={(e) => handleCheckboxChange(e, 'decorations')}
                                  checked={formData.decorations.includes(option)}
                                  style={checkboxStyle}
                                />
                                <label 
                                  htmlFor={`decoration-${index}`}
                                  style={checkboxLabelStyle}
                                >
                                  {option}
                                </label>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Form.Group>

                    {/* Wedding Planning */}
                    <Form.Group className="mb-4">
                      <Form.Label style={{...labelStyle, fontSize: '1.1rem'}}>
                        Wedding Planning:
                      </Form.Label>
                      <div className="p-3" style={{backgroundColor: "#f9f9f9", borderRadius: "5px"}}>
                        <Row>
                          {weddingPlanningOptions.map((option, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} key={`wedding-planning-${index}`}>
                              <div style={checkboxContainerStyle}>
                                <input
                                  type="checkbox"
                                  id={`wedding-planning-${index}`}
                                  value={option}
                                  onChange={(e) => handleCheckboxChange(e, 'weddingPlanning')}
                                  checked={formData.weddingPlanning.includes(option)}
                                  style={checkboxStyle}
                                />
                                <label 
                                  htmlFor={`wedding-planning-${index}`}
                                  style={checkboxLabelStyle}
                                >
                                  {option}
                                </label>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Form.Group>

                    {/* Other Services */}
                    <Form.Group className="mb-4">
                      <Form.Label style={{...labelStyle, fontSize: '1.1rem'}}>
                        Other Services:
                      </Form.Label>
                      <div className="p-3" style={{backgroundColor: "#f9f9f9", borderRadius: "5px"}}>
                        <Row>
                          {otherServicesOptions.map((option, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} key={`other-service-${index}`}>
                              <div style={checkboxContainerStyle}>
                                <input
                                  type="checkbox"
                                  id={`other-service-${index}`}
                                  value={option}
                                  onChange={(e) => handleCheckboxChange(e, 'otherServices')}
                                  checked={formData.otherServices.includes(option)}
                                  style={checkboxStyle}
                                />
                                <label 
                                  htmlFor={`other-service-${index}`}
                                  style={checkboxLabelStyle}
                                >
                                  {option}
                                </label>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Form.Group>
                  </div>

                  {/* Submit Button - Centered */}
                  <div className="d-flex justify-content-center mt-5">
                    <Button 
                      type="submit" 
                      variant="primary"
                      className="px-5 py-3"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        borderRadius: 0,
                        fontSize: '1.1rem',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      SUBMIT REQUEST
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookUs;