import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Testimonials from "../../components/Testimonials";
import ImagePreviewModal from "../../components/ImagePreviewModal";
import { babyshowerService } from "../../services/babyshowerService";

const BabyShower = () => {
  // State for categories and images from Firebase
  const [categories, setCategories] = useState([]);
  const [categoryImages, setCategoryImages] = useState({});
  const [loading, setLoading] = useState(true);

  // State to track which category's images to display
  const [activeCategory, setActiveCategory] = useState("");

  // State for image preview modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGallery, setCurrentGallery] = useState([]);

  // Load data from Firebase on component mount
  useEffect(() => {
    loadBabyShowerData();
  }, []);

  const loadBabyShowerData = async () => {
    try {
      setLoading(true);
      
      // Get all categories
      const categoriesData = await babyshowerService.getAllCategories();
      const categoryNames = categoriesData.map(cat => cat.categoryName || cat.id);
      
      setCategories(categoryNames);

      // Load images for each category
      const imagesData = {};
      for (const categoryName of categoryNames) {
        const images = await babyshowerService.getCategoryImages(categoryName);
        imagesData[categoryName] = images;
      }
      
      setCategoryImages(imagesData);
      
      // Set first category as active if available
      if (categoryNames.length > 0) {
        setActiveCategory(categoryNames[0]);
      }
    } catch (error) {
      console.error("Error loading baby shower data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get filtered images
  const filteredImages = categoryImages[activeCategory] || [];

  // Function to open image preview modal
  const openImageModal = (image, gallery) => {
    setSelectedImage(image);
    setCurrentGallery(gallery);
    setShowModal(true);
  };

  // Function to navigate to next image
  const nextImage = () => {
    if (!selectedImage || currentGallery.length === 0) return;
    
    const currentIndex = currentGallery.findIndex(img => img.fileName === selectedImage.fileName);
    const nextIndex = (currentIndex + 1) % currentGallery.length;
    setSelectedImage(currentGallery[nextIndex]);
  };

  // Function to navigate to previous image
  const prevImage = () => {
    if (!selectedImage || currentGallery.length === 0) return;
    
    const currentIndex = currentGallery.findIndex(img => img.fileName === selectedImage.fileName);
    const prevIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    setSelectedImage(currentGallery[prevIndex]);
  };

  return (
    <div className="baby-shower-page">
      {/* Banner Section with Responsive Heading */}
      <div 
        className="baby-shower-banner position-relative" 
        style={{ 
          backgroundImage: "url('./wedding decors/babyshower.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="overlay position-absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}></div>
        <h1 
          className="text-white position-relative text-center px-3" 
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            zIndex: 2,
            width: '100%'
          }}
        >
          Baby Shower Decorations In Tiruvannamalai
        </h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4">
        <p className="mb-4" style={{ lineHeight: "1.8" }}>
          The thought of throwing a baby shower can be overwhelming, but the hardest part is brainstorming fresh ideas. Whether your bestie is laid-back and casual, or you know she wants a party, we have the perfect idea for you.
        </p>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" style={{ color: "#f7374f" }} />
            <p className="mt-2">Loading baby shower decorations...</p>
          </div>
        ) : (
          <>
            {/* Category Names as Filter Buttons */}
            {categories.length > 0 && (
              <div className="client-names d-flex flex-wrap justify-content-center mb-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "primary" : "outline-secondary"}
                    className="m-1"
                    onClick={() => setActiveCategory(category)}
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      borderRadius: "4px",
                      color: activeCategory === category ? "#fff" : "#333",
                      borderColor: "#ccc"
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}
          </>
        )}
      </Container>

      {/* Gallery Grid */}
      <Container className="gallery-grid mb-5">
        {loading ? null : filteredImages.length > 0 ? (
          <Row>
            {filteredImages.map((image, index) => (
              <Col key={`${image.fileName || image.name}_${index}`} xs={12} sm={6} md={4} className="gallery-item mb-4">
                <div 
                  className="gallery-image-container" 
                  style={{ overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => openImageModal(image, filteredImages)}
                >
                  <img 
                    src={image.url || "/placeholder.svg"} 
                    alt={image.name || `Baby shower decoration ${index + 1}`} 
                    className="img-fluid w-100"
                    style={{ 
                      height: "250px", 
                      objectFit: "cover",
                      transition: "transform 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <p style={{ fontFamily: 'Poppins, sans-serif', color: '#777' }}>
              {categories.length === 0 
                ? "No baby shower decorations available yet. Please check back soon!"
                : "No images available for this category yet. Please check back soon!"
              }
            </p>
          </div>
        )}
      </Container>

      {/* Divider */}
      <Container>
        <div className="divider text-center mb-5">
          <hr style={{ borderTop: "1px dashed #ccc" }} />
        </div>
      </Container>

      {/* Use the Testimonials Component */}
      <Testimonials />

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
  );
};

export default BabyShower;
