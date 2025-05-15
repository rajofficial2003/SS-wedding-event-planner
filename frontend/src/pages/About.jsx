import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => {
  // Sample images for the gallery grid
  const galleryImages = [
    "https://vermiliondecors.com/assets/images/about/a1.webp",
    "https://vermiliondecors.com/assets/images/about/a2.webp",
    "https://vermiliondecors.com/assets/images/about/a3.webp",
    "https://vermiliondecors.com/assets/images/about/a4.webp",
    "https://vermiliondecors.com/assets/images/about/a5.webp",
    "https://vermiliondecors.com/assets/images/about/a6.webp",
  ];

  // Statistics for "Our Successes" section
  const statistics = [
    {
      value: "9.8",
      label: "Our Average Rating"
    },
    {
      value: "245",
      label: "Weddings Are Organized"
    },
    {
      value: "5+",
      label: "Our Company Years"
    }
  ];

  return (
    <div className="about-page">
      {/* Banner Section */}
      <div 
        className="about-banner position-relative" 
        style={{ 
          backgroundImage: "url('./about banner.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="overlay position-absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}></div>
        <h1 className="text-white position-relative" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', zIndex: 2 }}>About Us</h1>
      </div>

      {/* Main Content Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Gallery Grid - Left Side */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="gallery-grid">
              <Row>
                {galleryImages.map((image, index) => (
                  <Col key={index} xs={6} className="mb-4">
                    <img 
                      src={image || "/placeholder.svg"} 
                      alt={`Wedding decoration ${index + 1}`} 
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Welcome Text - Right Side */}
          <Col lg={6}>
            <div className="welcome-content">
              <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#666', fontSize: '2.5rem' }}>
                Welcome <br />To The Family!
              </h2>
              <p className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8' }}>
                We bring joy to every wedding we plan, since 2016. We take absolute pride in our event management skills, henceforth, with our highly competent team and their precise planning, we are one of the best event management companies in Tiruvannamalai as we guarantee you 100% satisfaction. We take charge of the smallest of details as our event management team works around the clock to make sure that we are one of the best event management companies in Avalurpet. Our motto acts as a skeleton to our guidebook as we meet every exceeding expectation of the client with ease. We believe in a collaborative approach because every client deserves a perfect event.
              </p>
              <Button 
                variant="secondary" 
                className="px-4 py-2"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  backgroundColor: '#666',
                  borderColor: '#666',
                  borderRadius: 0
                }}
              >
                FAQ'S
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Our Successes Section */}
      <div className="successes-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
            Our Successes
          </h2>
          <Row className="justify-content-center text-center">
            {statistics.map((stat, index) => (
              <Col key={index} md={4} className="mb-4 mb-md-0">
                <div className="stat-item">
                  <h3 
                    className="stat-value mb-2" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif', 
                      fontSize: '3.5rem',
                      color: '#666'
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p 
                    className="stat-label" 
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      color: '#888',
                      fontSize: '1.1rem'
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Our Team Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
          Meet Our Team
        </h2>
        <Row>
          <Col md={4} className="mb-4">
            <div className="team-member text-center">
              <div 
                className="member-image mb-3 mx-auto" 
                style={{ 
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="https://vermiliondecors.com/assets/images/about/team1.webp" 
                  alt="Team Member" 
                  className="img-fluid"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif' }}>Rajesh Kumar</h4>
              <p style={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.2rem', color: 'var(--primary-color)' }}>Founder & Creative Director</p>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>With over 10 years of experience in event planning, Rajesh brings creativity and precision to every event.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="team-member text-center">
              <div 
                className="member-image mb-3 mx-auto" 
                style={{ 
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="https://vermiliondecors.com/assets/images/about/team2.webp" 
                  alt="Team Member" 
                  className="img-fluid"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif' }}>Priya Sharma</h4>
              <p style={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.2rem', color: 'var(--primary-color)' }}>Lead Designer</p>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>Priya's eye for detail and aesthetic sensibility transforms venues into magical spaces.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="team-member text-center">
              <div 
                className="member-image mb-3 mx-auto" 
                style={{ 
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="https://vermiliondecors.com/assets/images/about/team3.webp" 
                  alt="Team Member" 
                  className="img-fluid"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif' }}>Arun Patel</h4>
              <p style={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.2rem', color: 'var(--primary-color)' }}>Event Coordinator</p>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>Arun ensures flawless execution of every event with his meticulous planning and coordination.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <div className="testimonials-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
            What Our Clients Say
          </h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="testimonial text-center p-4" style={{ backgroundColor: 'white', borderLeft: '4px solid var(--primary-color)' }}>
                <p className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontStyle: 'italic' }}>
                  "SS Decors transformed our wedding into a magical experience. Their attention to detail and creative designs exceeded our expectations. The team was professional, responsive, and made our special day truly unforgettable."
                </p>
                <h5 style={{ fontFamily: 'Playfair Display, serif' }}>Meera & Karthik</h5>
                <p style={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.2rem', color: 'var(--primary-color)' }}>Wedding in Chennai, 2023</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;