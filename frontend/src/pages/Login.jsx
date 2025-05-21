"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Login = () => {
  // Primary color for styling from App.css
  const primaryColor = "#f7374f"

  // Font families from App.css
  const headingFont = "'Playfair Display', serif"
  const bodyFont = "'Poppins', sans-serif"

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  // Mock credentials - in a real app, this would be handled by a backend
  const validUsername = "admin"
  const validPassword = "password123"

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simple validation
    if (!username || !password) {
      setError("Please enter both username and password")
      setLoading(false)
      return
    }

    // Mock authentication - in a real app, this would be an API call
    setTimeout(() => {
      if (username === validUsername && password === validPassword) {
        // Store authentication state in localStorage
        localStorage.setItem("isAuthenticated", "true")
        // Redirect to admin dashboard
        navigate("/admin/dashboard")
      } else {
        setError("Invalid username or password")
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5} xl={4}>
            <Card className="shadow border-0">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: headingFont,
                      fontWeight: 700,
                      color: "#333",
                    }}
                  >
                    Admin Login
                  </h2>
                  <p
                    className="text-muted"
                    style={{
                      fontFamily: bodyFont,
                    }}
                  >
                    Please enter your credentials to access the admin area
                  </p>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontFamily: bodyFont }}>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      style={{ fontFamily: bodyFont, padding: "0.6rem 0.75rem" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ fontFamily: bodyFont }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{ fontFamily: bodyFont, padding: "0.6rem 0.75rem" }}
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="py-2"
                      style={{
                        backgroundColor: primaryColor,
                        borderColor: primaryColor,
                        fontFamily: bodyFont,
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                      }}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <div className="text-center mt-3">
              <p style={{ fontFamily: bodyFont, fontSize: "0.9rem", color: "#6c757d" }}>
                SS Wedding Planner Admin Portal
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
