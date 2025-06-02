import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Testimonials from "../../components/Testimonials";
import ImagePreviewModal from "../../components/ImagePreviewModal";
import { marriageService } from "../../services/marriageService";

const MarriageDecoration = () => {
  // Marriage subcategories
  const subcategories = [
    { id: "traditional", name: "Traditional Marriage" },
    { id: "christian", name: "Christian Wedding" },
    { id: "muslim", name: "Muslim Wedding" }
  ];

  // State for each subcategory
  const [subcategoryData, setSubcategoryData] = useState({
    traditional: { categories: [], categoryImages: {}, loading: true, activeCategory: "" },
    christian: { categories: [], categoryImages: {}, loading: true, activeCategory: "" },
    muslim: { categories: [], categoryImages: {}, loading: true, activeCategory: "" }
  });

  // State for image preview modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGallery, setCurrentGallery] = useState([]);

  // Load data from Firebase on component mount
  useEffect(() => {
    subcategories.forEach(subcategory => {
      loadMarriageData(subcategory.id);
    });
  }, []);

  const loadMarriageData = async (subcategoryId) => {
    try {
      // Set loading state for this subcategory
      setSubcategoryData(prev => ({
        ...prev,
        [subcategoryId]: { ...prev[subcategoryId], loading: true }
      }));
      
      // Get all categories for this subcategory
      const categoriesData = await marriageService.getAllCategories(subcategoryId);
      const categoryNames = categoriesData.map(cat => cat.categoryName || cat.id);

      // Load images for each category
      const imagesData = {};
      for (const categoryName of categoryNames) {
        const images = await marriageService.getCategoryImages(subcategoryId, categoryName);
        imagesData[categoryName] = images;
      }
      
      // Update state for this subcategory
      setSubcategoryData(prev => ({
        ...prev,
        [subcategoryId]: {
          categories: categoryNames,
          categoryImages: imagesData,
          loading: false,
          activeCategory: categoryNames.length > 0 ? categoryNames[0] : ""
        }
      }));
    } catch (error) {
      console.error(`Error loading marriage ${subcategoryId} data:`, error);
      setSubcategoryData(prev => ({
        ...prev,
        [subcategoryId]: { ...prev[subcategoryId], loading: false }
      }));
    }
  };

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

  // Function to update active category for a subcategory
  const setActiveCategory = (subcategoryId, categoryName) => {
    setSubcategoryData(prev => ({
      ...prev,
      [subcategoryId]: { ...prev[subcategoryId], activeCategory: categoryName }
    }));
  };

  // Render subcategory section
  const renderSubcategorySection = (subcategory) => {
    const data = subcategoryData[subcategory.id];
    const filteredImages = data.categoryImages[data.activeCategory] || [];

    return (
      <div key={subcategory.id} className={`${subcategory.id}-section mb-5`}>
        <h2 
          className="text-center mb-4"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)'
          }}
        >
          {subcategory.name}
        </h2>

        {/* Loading State */}
        {data.loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" style={{ color: "#f7374f" }} />
            <p className="mt-2">Loading {subcategory.name.toLowerCase()} decorations...</p>
          </div>
        ) : (
          <>
            {/* Category Names as Filter Buttons */}
            {data.categories.length > 0 && (
              <div className="client-names d-flex flex-wrap justify-content-center mb-4">
                {data.categories.map((category) => (
                  <Button
                    key={category}
                    variant={data.activeCategory === category ? "primary" : "outline-secondary"}
                    className="m-1"
                    onClick={() => setActiveCategory(subcategory.id, category)}
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      borderRadius: "4px",
                      color: data.activeCategory === category ? "#fff" : "#333",
                      borderColor: "#ccc"
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredImages.length > 0 ? (
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
                          alt={image.name || `${subcategory.name} decoration ${index + 1}`} 
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
                    {data.categories.length === 0 
                      ? `No ${subcategory.name.toLowerCase()} decorations available yet. Please check back soon!`
                      : "No images available for this category yet. Please check back soon!"
                    }
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="marriage-decoration-page">
      {/* Banner Section with Responsive Heading */}
      <div 
        className="marriage-banner position-relative" 
        style={{ 
          backgroundImage: "url('./wedding decors/marriage-decoration.jpg')", 
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
          Marriage Decorations In Tiruvannamalai
        </h1>
      </div>

      {/* Introduction Text */}
      <Container className="py-4">
        <p className="mb-4" style={{ lineHeight: "1.8" }}>
          We at Vermilion Events and Decor take responsibility for providing nothing less than superb to Marriage stage decorations. We exclusively offer professional expertise in creating ceremonies literally making "your dream day" officially possible with beautiful marriage decorations. With an ample of resources, we, as wedding planners, can provide these, organize, finalize everything without compromising on quality or budget.
        </p>

        {/* Render all subcategory sections */}
        {subcategories.map(subcategory => renderSubcategorySection(subcategory))}
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

export default MarriageDecoration;
