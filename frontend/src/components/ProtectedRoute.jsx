"use client"

import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { Spinner } from "react-bootstrap"

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated")
      const loginTime = localStorage.getItem("loginTime")

      if (authStatus === "true" && loginTime) {
        // Check if login is still valid (24 hours)
        const currentTime = new Date().getTime()
        const loginTimestamp = Number.parseInt(loginTime)
        const twentyFourHours = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

        if (currentTime - loginTimestamp < twentyFourHours) {
          setIsAuthenticated(true)
        } else {
          // Session expired
          localStorage.removeItem("isAuthenticated")
          localStorage.removeItem("loginTime")
          setIsAuthenticated(false)
        }
      } else {
        setIsAuthenticated(false)
      }

      setLoading(false)
    }

    checkAuth()
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Spinner animation="border" style={{ color: "#f7374f" }} />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute
