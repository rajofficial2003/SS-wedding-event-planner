import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const MainNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="">SS Decors</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-2 text-black">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="mx-2 text-black">
              Wedding Decors
            </Nav.Link>
            <Nav.Link as={Link} to="/Gallery" className="mx-2 text-black">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2 text-black">
              About Us
            </Nav.Link>
          </Nav>
          <Button variant="primary" as={Link} to="/Book-us" className="ms-2">
            9087504549
          </Button>
          <Button variant="primary" as={Link} to="/Book-us" className="ms-2">
            Book Us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar