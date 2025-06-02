"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Button, Spinner } from "react-bootstrap"
import ImagePreviewModal from "../components/ImagePreviewModal"
import { galleryService } from "../services/galleryService"

const Gallery = () => {
  // State for categories and images from Firebase
  const [categories, setCategories] = useState([])
  const [categoryImages, setCategoryImages] = useState({})
  const [loading, setLoading] = useState(true)

  // State to track which category's images to display (default to "all")
  const [activeCategory, setActiveCategory] = useState("all")

  // State for image preview modal
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentGallery, setCurrentGallery] = useState([])

  // Load data from Firebase on component mount
  useEffect(() => {
    loadGalleryData()
  }, [])

  const loadGalleryData = async () => {
    try {
      setLoading(true)

      // Get all categories
      const categoriesData = await galleryService.getAllCategories()
      const categoryNames = categoriesData.map((cat) => cat.categoryName || cat.id)

      setCategories(categoryNames)

      // Load images for each category
      const imagesData = {}
      for (const categoryName of categoryNames) {
        const images = await galleryService.getCategoryImages(categoryName)
        imagesData[categoryName] = images
      }

      setCategoryImages(imagesData)
    } catch (error) {
      console.error("Error loading gallery data:", error)
    } finally {
      setLoading(false)
    }
  }

  // Get images based on active category
  const getFilteredImages = () => {
    if (activeCategory === "all") {
      // Combine all images from all categories
      const allImages = []
      let imageId = 1

      Object.keys(categoryImages).forEach((categoryName) => {
        const categoryImgs = categoryImages[categoryName] || []
        categoryImgs.forEach((image) => {
          allImages.push({
            ...image,
            id: imageId++, // Assign unique ID for "all" view
            category: categoryName, // Keep track of original category
          })
        })
      })

      // Remove duplicates based on fileName if any
      return allImages.filter((image, index, self) => index === self.findIndex((i) => i.fileName === image.fileName))
    } else {
      // Return images for specific category
      return categoryImages[activeCategory] || []
    }
  }

  // Get filtered images
  const filteredImages = getFilteredImages()

  // Function to open image preview modal
  const openImageModal = (image, gallery) => {
    setSelectedImage(image)
    setCurrentGallery(gallery)
    setShowModal(true)
  }

  // Function to navigate to next image
  const nextImage = () => {
    if (!selectedImage || currentGallery.length === 0) return

    const currentIndex = currentGallery.findIndex((img) => img.fileName === selectedImage.fileName)
    const nextIndex = (currentIndex + 1) % currentGallery.length
    setSelectedImage(currentGallery[nextIndex])
  }

  // Function to navigate to previous image
  const prevImage = () => {
    if (!selectedImage || currentGallery.length === 0) return

    const currentIndex = currentGallery.findIndex((img) => img.fileName === selectedImage.fileName)
    const prevIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length
    setSelectedImage(currentGallery[prevIndex])
  }

  // Create categories array with "All" option
  const displayCategories = [{ id: "all", name: "All" }, ...categories.map((cat) => ({ id: cat, name: cat }))]

  return (
    <div className="gallery-page">
      {/* Banner Section */}
      <div
        className="gallery-banner position-relative"
        style={{
          backgroundImage: "url('./gallery banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="overlay position-absolute w-100 h-100 top-0 start-0"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
        <h1
          className="text-white position-relative"
          style={{ fontFamily: "Playfair Display, serif", fontSize: "3rem", zIndex: 2 }}
        >
          Gallery
        </h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4 text-center">
        <p className="mb-4">
          We at SS Event and Decors take pride in the fact that we are trusted by our clients time and again. If you are
          still reading this, our wedding event planner are looking forward to a happy and productive collaboration with
          you!
        </p>
      </Container>

      {/* Loading State */}
      {loading ? (
        <Container>
          <div className="text-center py-5">
            <Spinner animation="border" style={{ color: "#f7374f" }} />
            <p className="mt-2">Loading gallery...</p>
          </div>
        </Container>
      ) : (
        <>
          {/* Category Filter Buttons */}
          <Container className="mb-4">
            <div className="category-filters d-flex flex-wrap justify-content-center">
              {displayCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "primary" : "outline-secondary"}
                  className="m-1"
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    fontFamily: "Playfair Display, serif",
                    borderRadius: 0,
                    color: activeCategory === category.id ? "#fff" : "#333",
                    borderColor: "#ccc",
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </Container>

          {/* Gallery Grid */}
          <Container className="gallery-grid mb-5">
            {filteredImages.length > 0 ? (
              <Row>
                {filteredImages.map((image, index) => (
                  <Col
                    key={`${image.fileName || image.name}_${index}`}
                    xs={12}
                    sm={6}
                    md={4}
                    className="gallery-item mb-4"
                  >
                    <div
                      className="gallery-image-container"
                      style={{ overflow: "hidden", cursor: "pointer" }}
                      onClick={() => openImageModal(image, filteredImages)}
                    >
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.name || `Gallery image ${index + 1}`}
                        className="img-fluid w-100"
                        style={{
                          height: "250px",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="text-center py-5">
                <p style={{ fontFamily: "Poppins, sans-serif", color: "#777" }}>
                  {categories.length === 0
                    ? "No gallery images available yet. Please check back soon!"
                    : "No images available for this category yet. Please check back soon!"}
                </p>
              </div>
            )}
          </Container>
        </>
      )}

      {/* Use the ImagePreviewModal Component */}
      <ImagePreviewModal
        show={showModal}
        onHide={() => setShowModal(false)}
        selectedImage={selectedImage}
        currentGallery={currentGallery}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  )
}

export default Gallery
