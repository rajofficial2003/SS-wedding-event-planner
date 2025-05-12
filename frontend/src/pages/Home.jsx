import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
    
      {/* Carosal Section */}
      {/* <section className="Carosal-section text-center">
        <Container>
          <img src="" alt="" />
        </Container>
      </section> */}

      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h3 className="mb-4">Welcome to SS Decors</h3>
              <h2 className="fw-bold mb-4">
                Best Event Planners in Tiruvannamalai
              </h2>
              <p className="mb-2">
                Our team of event planners at <b>SS Events and Decors</b> works
                around the clock to give you the wedding decoration of your
                dreams. With a highly-creative team of wedding planners in
                Tiruvannamalai and expertise in event management and
                visual planning, we have executed and brought dozens of events
                such as engagement decorations, reception decorations, and
                wedding decorations to life. Our event planners in Tiruvannamalai
                specialize in the end-to-end ideation and execution of
                interactive experiences, thematic marriage decoration, and
                overall wedding event management.
              </p>
              {/* <Button variant="primary" size="lg" href="/contact" className="me-3">
                Contact Us
              </Button>
              <Button variant="outline-primary" size="lg" href="/portfolio">
                View Our Work
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Home;
