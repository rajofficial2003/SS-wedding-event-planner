"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"

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
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  // Check if user is already logged in
  useEffect(() => {
    const checkExistingAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated")
      const loginTime = localStorage.getItem("loginTime")

      if (authStatus === "true" && loginTime) {
        // Check if login is still valid (24 hours)
        const currentTime = new Date().getTime()
        const loginTimestamp = Number.parseInt(loginTime)
        const twentyFourHours = 24 * 60 * 60 * 1000

        if (currentTime - loginTimestamp < twentyFourHours) {
          // User is already authenticated, redirect to dashboard
          navigate("/admin/dashboard", { replace: true })
        } else {
          // Session expired, clear storage
          localStorage.removeItem("isAuthenticated")
          localStorage.removeItem("loginTime")
        }
      }
    }

    checkExistingAuth()
  }, [navigate])

  // Mock credentials - in a real app, this would be handled by a backend
  const validCredentials = [
    { username: "admin", password: "admin123" },
    { username: "sswedding", password: "sswedding@2024" },
  ]

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
      const isValidCredential = validCredentials.some(
        (cred) => cred.username === username && cred.password === password,
      )

      if (isValidCredential) {
        // Store authentication state and timestamp in localStorage
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("loginTime", new Date().getTime().toString())
        localStorage.setItem("adminUsername", username)

        // Redirect to admin dashboard
        navigate("/admin/dashboard", { replace: true })
      } else {
        setError("Invalid username or password")
      }
      setLoading(false)
    }, 1000)
  }

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("loginTime")
    localStorage.removeItem("adminUsername")
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

                {error && (
                  <Alert variant="danger" style={{ fontFamily: bodyFont }}>
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontFamily: bodyFont, fontWeight: 500 }}>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      style={{
                        fontFamily: bodyFont,
                        padding: "0.6rem 0.75rem",
                        border: "1px solid #ddd",
                        borderRadius: "0.375rem",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4 position-relative">
                    <Form.Label style={{ fontFamily: bodyFont, fontWeight: 500 }}>Password</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                          fontFamily: bodyFont,
                          padding: "0.6rem 2.5rem 0.6rem 0.75rem",
                          border: "1px solid #ddd",
                          borderRadius: "0.375rem",
                        }}
                      />
                      <Button
                        type="button"
                        variant="link"
                        className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          padding: "0.25rem 0.5rem",
                          color: "#6c757d",
                          textDecoration: "none",
                          zIndex: 10,
                        }}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                      </Button>
                    </div>
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
