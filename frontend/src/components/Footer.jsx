import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Linkedin, Telephone, GeoAlt, Envelope, Youtube, Whatsapp, Pinterest } from "react-bootstrap-icons"

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <Container>
        <Row className="mb-4">

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4" style={{ color: "#f7374f" }}>
              DECORATIONS
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/Engagement Decoration" className="text-dark text-decoration-none">
                Engagement Decoration
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Marriage Decoration" className="text-dark text-decoration-none">
                Marriage Decoration
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Sangeet & Mehendi" className="text-dark text-decoration-none">
                Sangeet & Mehendi
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Reception Decoration" className="text-dark text-decoration-none">
                Reception Decoration
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Baby Shower" className="text-dark text-decoration-none">
                Baby Shower
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Birthday Function" className="text-dark text-decoration-none">
                Birthday Function
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/House Warming" className="text-dark text-decoration-none">
                House Warming
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4" style={{ color: "#f7374f" }}>
            OTHER SERVICES
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/Light Music" className="text-dark text-decoration-none">
                Light Music
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/DJ" className="text-dark text-decoration-none">
                DJ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Catering" className="text-dark text-decoration-none">
                Catering
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Fireworks" className="text-dark text-decoration-none">
                Fireworks
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Chat stall" className="text-dark text-decoration-none">
                Chat stall
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4" style={{ color: "#f7374f" }}>
              Gallery
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/Engagement Decoration" className="text-dark text-decoration-none">
                Engagement Decoration
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Marriage Decoration" className="text-dark text-decoration-none">
                Marriage Decoration
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Sangeet & Mehendi" className="text-dark text-decoration-none">
                Sangeet & Mehendi
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Reception Decoration" className="text-dark text-decoration-none">
                Reception Decoration
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Baby Shower" className="text-dark text-decoration-none">
                Baby Shower
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Birthday Function" className="text-dark text-decoration-none">
                Birthday Function
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/House Warming" className="text-dark text-decoration-none">
                House Warming
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4" style={{ color: "#f7374f" }}>
              Our Location
            </h5>
            <p className="d-flex align-items-center mb-2">
              <GeoAlt className="me-2" size={18} />
              Vadugapoondi, Avalurpet-604201
            </p>
            <p className="d-flex align-items-center mb-2">
              <Telephone className="me-2" size={18} />
              +91 908 750 4549
            </p>
            <p className="d-flex align-items-center mb-2">
              <Envelope className="me-2" size={18} />
              Contact@SSwedingplanner.com
            </p>
          </Col>

        </Row>

        <hr className="my-4" style={{ backgroundColor: "#f7374f", opacity: "0.2" }} />

        <Row className="align-items-center text-center">
          <Col className="mb-3 mb-md-0">
            <p className="mb-0">&copy; SS Wedding Planner {new Date().getFullYear()}. All rights reserved.</p>
            <p>Powered By  <a href="#" className="text-decoration-none me-3" style={{ color: "#f7374f" }}>CRUD Technologies</a></p>
          </Col>
          <div className="">
              <a href="https://instagram.com" target="blank" className="text-dark me-3">
                <Instagram size={18} />
              </a>
              <a href="https://Youtube.com" target="blank" className="text-dark me-3">
                <Youtube size={18} />
              </a>
              <a href="https://facebook.com" target="blank" className="text-dark me-3">
                <Facebook size={18} />
              </a>
              <a href="https://Pinterest.com" target="blank" className="text-dark me-3">
                <Pinterest size={18} />
              </a>
            </div>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
