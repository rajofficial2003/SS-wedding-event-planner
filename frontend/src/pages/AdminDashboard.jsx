"use client"

import { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Tab,
  Nav,
  Alert,
  Spinner,
  Modal,
  Navbar,
  Dropdown,
  Image,
} from "react-bootstrap"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  FaPlus,
  FaTrash,
  FaEdit,
  FaUpload,
  FaImages,
  FaRing,
  FaHeart,
  FaGlassCheers,
  FaBirthdayCake,
  FaBaby,
  FaHome,
  FaMusic,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa"

const AdminDashboard = () => {
  // Primary color for styling from App.css
  const primaryColor = "#f7374f"
  const blackColor = "#000000"

  // Font families from App.css
  const scriptFont = "'Great Vibes', cursive"
  const headingFont = "'Playfair Display', serif"
  const bodyFont = "'Poppins', sans-serif"

  // Active tab state
  const [activeTab, setActiveTab] = useState("gallery")

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState({ type: "", name: "" })
  const [imageToDelete, setImageToDelete] = useState(null)
  const [showImageDeleteModal, setShowImageDeleteModal] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 992
      setIsMobile(isMobileView)

      // Only collapse sidebar on mobile/tablet
      if (isMobileView) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Toggle sidebar
  const toggleSidebar = () => {
    // Only toggle if on mobile/tablet
    if (isMobile) {
      setSidebarOpen(!sidebarOpen)
    }
  }

  // Handle logout
  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    // Perform logout actions here
    showToast("success", "Logged out successfully")
    setShowLogoutModal(false)

    // Redirect to login page
    setTimeout(() => {
      window.location.href = "/admin/login"
    }, 500)
  }

  // Define section types
  const sectionTypes = [
    { id: "gallery", name: "Gallery", icon: FaImages },
    { id: "engagement", name: "Engagement Decoration", icon: FaRing },
    { id: "marriage", name: "Marriage Decoration", icon: FaHeart },
    { id: "reception", name: "Reception Decoration", icon: FaGlassCheers },
    { id: "birthday", name: "Birthday Party", icon: FaBirthdayCake },
    { id: "babyshower", name: "Baby Shower", icon: FaBaby },
    { id: "housewarming", name: "House Warming", icon: FaHome },
    { id: "sangeetmehendi", name: "Sangeet & Mehendi", icon: FaMusic },
  ]

  // Marriage section subcategories
  const marriageSubcategories = [
    { id: "traditional", name: "Traditional Marriage" },
    { id: "christian", name: "Christian Wedding" },
    { id: "muslim", name: "Muslim Wedding" },
  ]

  // Create state for each section
  const [sectionData, setSectionData] = useState({})

  // Active subcategory for marriage section
  const [activeMarriageSubcategory, setActiveMarriageSubcategory] = useState("traditional")

  // Initialize section data
  useEffect(() => {
    const initialData = {}

    sectionTypes.forEach((section) => {
      if (section.id === "marriage") {
        // Initialize marriage subcategories
        initialData[section.id] = {
          subcategories: marriageSubcategories,
          traditional: {
            categories: JSON.parse(localStorage.getItem(`marriage_traditionalCategories`)) || [],
            images: JSON.parse(localStorage.getItem(`marriage_traditionalImages`)) || {},
            newCategory: "",
            editingCategory: null,
            editCategoryName: "",
            selectedCategory: "",
            selectedFiles: [],
            uploadProgress: 0,
            isUploading: false,
          },
          christian: {
            categories: JSON.parse(localStorage.getItem(`marriage_christianCategories`)) || [],
            images: JSON.parse(localStorage.getItem(`marriage_christianImages`)) || {},
            newCategory: "",
            editingCategory: null,
            editCategoryName: "",
            selectedCategory: "",
            selectedFiles: [],
            uploadProgress: 0,
            isUploading: false,
          },
          muslim: {
            categories: JSON.parse(localStorage.getItem(`marriage_muslimCategories`)) || [],
            images: JSON.parse(localStorage.getItem(`marriage_muslimImages`)) || {},
            newCategory: "",
            editingCategory: null,
            editCategoryName: "",
            selectedCategory: "",
            selectedFiles: [],
            uploadProgress: 0,
            isUploading: false,
          },
        }
      } else {
        // Initialize regular sections
        initialData[section.id] = {
          categories: JSON.parse(localStorage.getItem(`${section.id}Categories`)) || [],
          images: JSON.parse(localStorage.getItem(`${section.id}Images`)) || {},
          newCategory: "",
          editingCategory: null,
          editCategoryName: "",
          selectedCategory: "",
          selectedFiles: [],
          uploadProgress: 0,
          isUploading: false,
        }
      }
    })

    setSectionData(initialData)
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    Object.keys(sectionData).forEach((sectionId) => {
      if (sectionData[sectionId]) {
        if (sectionId === "marriage") {
          // Save marriage subcategories data
          marriageSubcategories.forEach((subcategory) => {
            const subcategoryData = sectionData[sectionId][subcategory.id]
            if (subcategoryData) {
              localStorage.setItem(`marriage_${subcategory.id}Categories`, JSON.stringify(subcategoryData.categories))
              localStorage.setItem(`marriage_${subcategory.id}Images`, JSON.stringify(subcategoryData.images))
            }
          })
        } else {
          // Save regular section data
          localStorage.setItem(`${sectionId}Categories`, JSON.stringify(sectionData[sectionId].categories))
          localStorage.setItem(`${sectionId}Images`, JSON.stringify(sectionData[sectionId].images))
        }
      }
    })
  }, [sectionData])

  // Update section data helper function
  const updateSectionData = (sectionId, updates, subcategoryId = null) => {
    setSectionData((prevData) => {
      if (sectionId === "marriage" && subcategoryId) {
        return {
          ...prevData,
          [sectionId]: {
            ...prevData[sectionId],
            [subcategoryId]: {
              ...prevData[sectionId][subcategoryId],
              ...updates,
            },
          },
        }
      } else {
        return {
          ...prevData,
          [sectionId]: {
            ...prevData[sectionId],
            ...updates,
          },
        }
      }
    })
  }

  // Helper function to show toast messages
  const showToast = (type, message) => {
    const toastOptions = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }

    switch (type) {
      case "success":
        toast.success(message, toastOptions)
        break
      case "error":
        toast.error(message, toastOptions)
        break
      case "warning":
        toast.warning(message, toastOptions)
        break
      case "info":
        toast.info(message, toastOptions)
        break
      default:
        toast(message, toastOptions)
    }
  }

  // Handle adding a new category
  const handleAddCategory = (sectionId, subcategoryId = null) => {
    let section
    let newCategoryName

    if (sectionId === "marriage" && subcategoryId) {
      section = sectionData[sectionId][subcategoryId]
      newCategoryName = section.newCategory.trim()
    } else {
      section = sectionData[sectionId]
      newCategoryName = section.newCategory.trim()
    }

    if (!newCategoryName) {
      showToast("error", "Category name cannot be empty")
      return
    }

    if (section.categories.includes(newCategoryName)) {
      showToast("error", "Category already exists")
      return
    }

    const updatedCategories = [...section.categories, newCategoryName]
    const updatedImages = { ...section.images, [newCategoryName]: [] }

    if (sectionId === "marriage" && subcategoryId) {
      updateSectionData(
        sectionId,
        {
          categories: updatedCategories,
          images: updatedImages,
          newCategory: "",
          selectedCategory: section.selectedCategory || newCategoryName,
        },
        subcategoryId,
      )
    } else {
      updateSectionData(sectionId, {
        categories: updatedCategories,
        images: updatedImages,
        newCategory: "",
        selectedCategory: section.selectedCategory || newCategoryName,
      })
    }

    showToast("success", "Category added successfully")
  }

  // Handle editing a category
  const startEditingCategory = (sectionId, category, subcategoryId = null) => {
    if (sectionId === "marriage" && subcategoryId) {
      updateSectionData(
        sectionId,
        {
          editingCategory: category,
          editCategoryName: category,
        },
        subcategoryId,
      )
    } else {
      updateSectionData(sectionId, {
        editingCategory: category,
        editCategoryName: category,
      })
    }
  }

  const saveEditedCategory = (sectionId, subcategoryId = null) => {
    let section
    let newName

    if (sectionId === "marriage" && subcategoryId) {
      section = sectionData[sectionId][subcategoryId]
      newName = section.editCategoryName.trim()
    } else {
      section = sectionData[sectionId]
      newName = section.editCategoryName.trim()
    }

    if (!newName) {
      showToast("error", "Category name cannot be empty")
      return
    }

    if (section.categories.includes(newName) && newName !== section.editingCategory) {
      showToast("error", "Category already exists")
      return
    }

    const updatedCategories = section.categories.map((cat) => (cat === section.editingCategory ? newName : cat))

    // Update the category key in images
    const updatedImages = { ...section.images }
    if (section.editingCategory in updatedImages) {
      updatedImages[newName] = updatedImages[section.editingCategory]
      delete updatedImages[section.editingCategory]
    }

    if (sectionId === "marriage" && subcategoryId) {
      updateSectionData(
        sectionId,
        {
          categories: updatedCategories,
          images: updatedImages,
          editingCategory: null,
          selectedCategory: section.selectedCategory === section.editingCategory ? newName : section.selectedCategory,
        },
        subcategoryId,
      )
    } else {
      updateSectionData(sectionId, {
        categories: updatedCategories,
        images: updatedImages,
        editingCategory: null,
        selectedCategory: section.selectedCategory === section.editingCategory ? newName : section.selectedCategory,
      })
    }

    showToast("success", "Category updated successfully")
  }

  // Handle file selection
  const handleFileChange = (sectionId, e, subcategoryId = null) => {
    const files = Array.from(e.target.files)

    if (sectionId === "marriage" && subcategoryId) {
      updateSectionData(sectionId, { selectedFiles: files }, subcategoryId)
    } else {
      updateSectionData(sectionId, { selectedFiles: files })
    }
  }

  // Handle image upload
  const handleUpload = async (sectionId, subcategoryId = null) => {
    let section

    if (sectionId === "marriage" && subcategoryId) {
      section = sectionData[sectionId][subcategoryId]
    } else {
      section = sectionData[sectionId]
    }

    if (!section.selectedCategory) {
      showToast("error", "Please select a category")
      return
    }

    if (section.selectedFiles.length === 0) {
      showToast("error", "Please select at least one file")
      return
    }

    if (sectionId === "marriage" && subcategoryId) {
      updateSectionData(sectionId, { isUploading: true, uploadProgress: 0 }, subcategoryId)
    } else {
      updateSectionData(sectionId, { isUploading: true, uploadProgress: 0 })
    }

    // Simulate upload progress
    const interval = setInterval(() => {
      setSectionData((prevData) => {
        let section
        let newProgress

        if (sectionId === "marriage" && subcategoryId) {
          section = prevData[sectionId][subcategoryId]
          newProgress = section.uploadProgress + 10

          if (newProgress >= 100) {
            clearInterval(interval)
          }

          return {
            ...prevData,
            [sectionId]: {
              ...prevData[sectionId],
              [subcategoryId]: {
                ...section,
                uploadProgress: newProgress >= 100 ? 100 : newProgress,
              },
            },
          }
        } else {
          section = prevData[sectionId]
          newProgress = section.uploadProgress + 10

          if (newProgress >= 100) {
            clearInterval(interval)
          }

          return {
            ...prevData,
            [sectionId]: {
              ...section,
              uploadProgress: newProgress >= 100 ? 100 : newProgress,
            },
          }
        }
      })
    }, 300)

    // Process files (convert to base64 for storage in localStorage)
    const processedFiles = await Promise.all(
      section.selectedFiles.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => {
            resolve({
              name: file.name,
              type: file.type,
              size: file.size,
              data: reader.result,
              uploadDate: new Date().toISOString(),
            })
          }
          reader.readAsDataURL(file)
        })
      }),
    )

    // After "upload" is complete
    setTimeout(() => {
      setSectionData((prevData) => {
        if (sectionId === "marriage" && subcategoryId) {
          const section = prevData[sectionId][subcategoryId]
          const updatedImages = { ...section.images }
          updatedImages[section.selectedCategory] = [
            ...(updatedImages[section.selectedCategory] || []),
            ...processedFiles,
          ]

          return {
            ...prevData,
            [sectionId]: {
              ...prevData[sectionId],
              [subcategoryId]: {
                ...section,
                images: updatedImages,
                isUploading: false,
                uploadProgress: 0,
                selectedFiles: [],
              },
            },
          }
        } else {
          const section = prevData[sectionId]
          const updatedImages = { ...section.images }
          updatedImages[section.selectedCategory] = [
            ...(updatedImages[section.selectedCategory] || []),
            ...processedFiles,
          ]

          return {
            ...prevData,
            [sectionId]: {
              ...section,
              images: updatedImages,
              isUploading: false,
              uploadProgress: 0,
              selectedFiles: [],
            },
          }
        }
      })

      showToast("success", "Images uploaded successfully")

      // Reset file input
      const fileInputId =
        sectionId === "marriage" && subcategoryId ? `${sectionId}_${subcategoryId}FileUpload` : `${sectionId}FileUpload`
      document.getElementById(fileInputId).value = ""
    }, 1500)
  }

  // Handle deleting a category
  const confirmDeleteCategory = (sectionId, category, subcategoryId = null) => {
    setCategoryToDelete({ type: sectionId, name: category, subcategory: subcategoryId })
    setShowDeleteModal(true)
  }

  const deleteCategory = () => {
    const { type: sectionId, name: categoryName, subcategory: subcategoryId } = categoryToDelete

    let section
    let updatedCategories
    let updatedImages
    let updatedSelectedCategory

    if (sectionId === "marriage" && subcategoryId) {
      section = sectionData[sectionId][subcategoryId]
      updatedCategories = section.categories.filter((cat) => cat !== categoryName)
      updatedImages = { ...section.images }
      delete updatedImages[categoryName]

      // Update selected category if needed
      updatedSelectedCategory = section.selectedCategory
      if (section.selectedCategory === categoryName) {
        updatedSelectedCategory = updatedCategories.length > 0 ? updatedCategories[0] : ""
      }

      updateSectionData(
        sectionId,
        {
          categories: updatedCategories,
          images: updatedImages,
          selectedCategory: updatedSelectedCategory,
        },
        subcategoryId,
      )
    } else {
      section = sectionData[sectionId]
      updatedCategories = section.categories.filter((cat) => cat !== categoryName)
      updatedImages = { ...section.images }
      delete updatedImages[categoryName]

      // Update selected category if needed
      updatedSelectedCategory = section.selectedCategory
      if (section.selectedCategory === categoryName) {
        updatedSelectedCategory = updatedCategories.length > 0 ? updatedCategories[0] : ""
      }

      updateSectionData(sectionId, {
        categories: updatedCategories,
        images: updatedImages,
        selectedCategory: updatedSelectedCategory,
      })
    }

    setShowDeleteModal(false)
    showToast("success", "Category deleted successfully")
  }

  // Handle deleting an image
  const confirmDeleteImage = (sectionId, category, imageIndex, subcategoryId = null) => {
    setImageToDelete({ type: sectionId, category, index: imageIndex, subcategory: subcategoryId })
    setShowImageDeleteModal(true)
  }

  const deleteImage = () => {
    const { type: sectionId, category, index, subcategory: subcategoryId } = imageToDelete

    if (sectionId === "marriage" && subcategoryId) {
      const section = sectionData[sectionId][subcategoryId]
      const updatedImages = { ...section.images }
      updatedImages[category] = [
        ...updatedImages[category].slice(0, index),
        ...updatedImages[category].slice(index + 1),
      ]

      updateSectionData(sectionId, { images: updatedImages }, subcategoryId)
    } else {
      const section = sectionData[sectionId]
      const updatedImages = { ...section.images }
      updatedImages[category] = [
        ...updatedImages[category].slice(0, index),
        ...updatedImages[category].slice(index + 1),
      ]

      updateSectionData(sectionId, { images: updatedImages })
    }

    setShowImageDeleteModal(false)
    showToast("success", "Image deleted successfully")
  }

  // Handle tab selection
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  // Render marriage subcategory content
  const renderMarriageSubcategoryContent = (subcategoryId) => {
    const subcategory = sectionData.marriage?.[subcategoryId]
    if (!subcategory) return null

    return (
      <div>
        <Card className="mb-4">
          <Card.Header as="h5" style={{ fontFamily: headingFont, fontWeight: 600 }}>
            Category Management
          </Card.Header>
          <Card.Body>
            <Form className="mb-3">
              <Row className="align-items-end">
                <Col xs={12} md={8} className="mb-3 mb-md-0">
                  <Form.Group>
                    <Form.Label style={{ fontFamily: bodyFont }}>New Category</Form.Label>
                    <Form.Control
                      type="text"
                      value={subcategory.newCategory}
                      onChange={(e) => updateSectionData("marriage", { newCategory: e.target.value }, subcategoryId)}
                      placeholder="Enter category name"
                      style={{ fontFamily: bodyFont }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Button
                    variant="primary"
                    onClick={() => handleAddCategory("marriage", subcategoryId)}
                    className="w-100"
                    style={{
                      backgroundColor: primaryColor,
                      borderColor: primaryColor,
                      fontFamily: headingFont,
                      letterSpacing: "0.5px",
                    }}
                  >
                    <FaPlus className="me-2" /> Add Category
                  </Button>
                </Col>
              </Row>
            </Form>

            <h6 style={{ fontFamily: headingFont, fontWeight: 600 }}>Existing Categories</h6>
            {subcategory.categories.length === 0 ? (
              <p className="text-muted" style={{ fontFamily: bodyFont }}>
                No categories yet. Add your first category above.
              </p>
            ) : (
              <ul className="list-group">
                {subcategory.categories.map((category) => (
                  <li
                    key={category}
                    className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                  >
                    {subcategory.editingCategory === category ? (
                      <div className="d-flex w-100 flex-wrap">
                        <Form.Control
                          type="text"
                          value={subcategory.editCategoryName}
                          onChange={(e) =>
                            updateSectionData("marriage", { editCategoryName: e.target.value }, subcategoryId)
                          }
                          className="me-2 mb-2 mb-sm-0"
                          style={{ fontFamily: bodyFont }}
                        />
                        <div>
                          <Button
                            variant="success"
                            size="sm"
                            onClick={() => saveEditedCategory("marriage", subcategoryId)}
                            style={{
                              backgroundColor: "#4CAF50",
                              borderColor: "#4CAF50",
                              fontFamily: headingFont,
                              letterSpacing: "0.5px",
                            }}
                            className="me-1"
                          >
                            Save
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => updateSectionData("marriage", { editingCategory: null }, subcategoryId)}
                            style={{ fontFamily: headingFont, letterSpacing: "0.5px" }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <span style={{ fontFamily: bodyFont }} className="mb-2 mb-md-0">
                          {category}
                        </span>
                        <div>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-1 mb-1 mb-sm-0"
                            onClick={() => startEditingCategory("marriage", category, subcategoryId)}
                            style={{
                              borderColor: primaryColor,
                              color: primaryColor,
                              fontFamily: headingFont,
                            }}
                          >
                            <FaEdit />
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => confirmDeleteCategory("marriage", category, subcategoryId)}
                            style={{ fontFamily: headingFont }}
                          >
                            <FaTrash />
                          </Button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h5" style={{ fontFamily: headingFont, fontWeight: 600 }}>
            Upload Images
          </Card.Header>
          <Card.Body>
            {subcategory.categories.length === 0 ? (
              <Alert variant="info" style={{ fontFamily: bodyFont }}>
                Please create at least one category before uploading images.
              </Alert>
            ) : (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontFamily: bodyFont }}>Select Category</Form.Label>
                  <Form.Select
                    value={subcategory.selectedCategory}
                    onChange={(e) => updateSectionData("marriage", { selectedCategory: e.target.value }, subcategoryId)}
                    style={{ fontFamily: bodyFont }}
                  >
                    <option value="">Select a category</option>
                    {subcategory.categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontFamily: bodyFont }}>Select Images</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange("marriage", e, subcategoryId)}
                    id={`marriage_${subcategoryId}FileUpload`}
                    style={{ fontFamily: bodyFont }}
                  />
                  <Form.Text className="text-muted" style={{ fontFamily: bodyFont }}>
                    You can select multiple images to upload.
                  </Form.Text>
                </Form.Group>

                {subcategory.isUploading && (
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <Spinner animation="border" size="sm" className="me-2" />
                      <span style={{ fontFamily: bodyFont }}>Uploading... {subcategory.uploadProgress}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${subcategory.uploadProgress}%`,
                          backgroundColor: primaryColor,
                        }}
                        aria-valuenow={subcategory.uploadProgress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                )}

                <Button
                  variant="primary"
                  onClick={() => handleUpload("marriage", subcategoryId)}
                  disabled={
                    subcategory.isUploading || subcategory.selectedFiles.length === 0 || !subcategory.selectedCategory
                  }
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    fontFamily: headingFont,
                    letterSpacing: "0.5px",
                  }}
                >
                  <FaUpload className="me-2" /> Upload Images
                </Button>
              </Form>
            )}
          </Card.Body>
        </Card>

        <Card>
          <Card.Header as="h5" style={{ fontFamily: headingFont, fontWeight: 600 }}>
            {marriageSubcategories.find((s) => s.id === subcategoryId)?.name} Preview
          </Card.Header>
          <Card.Body>
            {subcategory.categories.length === 0 ? (
              <Alert variant="info" style={{ fontFamily: bodyFont }}>
                No categories available. Create categories to manage your images.
              </Alert>
            ) : (
              <div className="category-tabs">
                <Tab.Container defaultActiveKey={subcategory.categories[0] || ""}>
                  <div className="mb-3 category-nav-container">
                    <Nav variant="tabs" className="flex-nowrap overflow-auto">
                      {subcategory.categories.map((category) => (
                        <Nav.Item key={category}>
                          <Nav.Link
                            eventKey={category}
                            style={{
                              color: primaryColor,
                              borderColor: "#dee2e6 #dee2e6 #fff",
                              fontFamily: headingFont,
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {category}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                  <Tab.Content>
                    {subcategory.categories.map((category) => (
                      <Tab.Pane key={category} eventKey={category}>
                        {!subcategory.images[category] || subcategory.images[category].length === 0 ? (
                          <p className="text-muted" style={{ fontFamily: bodyFont }}>
                            No images in this category yet.
                          </p>
                        ) : (
                          <Row xs={1} sm={2} lg={3} className="g-4">
                            {subcategory.images[category].map((image, index) => (
                              <Col key={index}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src={image.data}
                                    style={{ height: "200px", objectFit: "cover" }}
                                  />
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <small className="text-muted" style={{ fontFamily: bodyFont }}>
                                        {new Date(image.uploadDate).toLocaleDateString()}
                                      </small>
                                      <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => confirmDeleteImage("marriage", category, index, subcategoryId)}
                                        style={{ fontFamily: headingFont }}
                                      >
                                        <FaTrash />
                                      </Button>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        )}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    )
  }

  // Render section content
  const renderSectionContent = (sectionId) => {
    // Get the section name from sectionTypes
    const sectionName = sectionTypes.find((s) => s.id === sectionId)?.name || ""

    if (sectionId === "marriage") {
      return (
        <Tab.Pane eventKey={sectionId}>
          <h4 className="mb-4" style={{ fontFamily: headingFont, fontWeight: 700 }}>
            Marriage Decoration Management
          </h4>

          <Tab.Container activeKey={activeMarriageSubcategory} onSelect={setActiveMarriageSubcategory}>
            <Row>
              <Col md={12}>
                <div className="mb-4 marriage-tabs-container">
                  <Nav variant="tabs" className="flex-nowrap overflow-auto">
                    {marriageSubcategories.map((subcategory) => (
                      <Nav.Item key={subcategory.id}>
                        <Nav.Link
                          eventKey={subcategory.id}
                          style={{
                            color: activeMarriageSubcategory === subcategory.id ? primaryColor : blackColor,
                            fontWeight: activeMarriageSubcategory === subcategory.id ? "bold" : "",
                            fontFamily: headingFont,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {subcategory.name}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>
              </Col>
              <Col md={12}>
                <Tab.Content>
                  {marriageSubcategories.map((subcategory) => (
                    <Tab.Pane key={subcategory.id} eventKey={subcategory.id}>
                      {renderMarriageSubcategoryContent(subcategory.id)}
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab.Pane>
      )
    }

    const section = sectionData[sectionId]
    if (!section) return null

    return (
      <Tab.Pane eventKey={sectionId}>
        <h4 className="mb-4" style={{ fontFamily: headingFont, fontWeight: 700 }}>
          {sectionName} Management
        </h4>

        <Card className="mb-4">
          <Card.Header as="h5" style={{ fontFamily: headingFont, fontWeight: 600 }}>
            Category Management
          </Card.Header>
          <Card.Body>
            <Form className="mb-3">
              <Row className="align-items-end">
                <Col xs={12} md={8} className="mb-3 mb-md-0">
                  <Form.Group>
                    <Form.Label style={{ fontFamily: bodyFont }}>New Category</Form.Label>
                    <Form.Control
                      type="text"
                      value={section.newCategory}
                      onChange={(e) => updateSectionData(sectionId, { newCategory: e.target.value })}
                      placeholder="Enter category name"
                      style={{ fontFamily: bodyFont }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Button
                    variant="primary"
                    onClick={() => handleAddCategory(sectionId)}
                    className="w-100"
                    style={{
                      backgroundColor: primaryColor,
                      borderColor: primaryColor,
                      fontFamily: headingFont,
                      letterSpacing: "0.5px",
                    }}
                  >
                    <FaPlus className="me-2" /> Add Category
                  </Button>
                </Col>
              </Row>
            </Form>

            <h6 style={{ fontFamily: headingFont, fontWeight: 600 }}>Existing Categories</h6>
            {section.categories.length === 0 ? (
              <p className="text-muted" style={{ fontFamily: bodyFont }}>
                No categories yet. Add your first category above.
              </p>
            ) : (
              <ul className="list-group">
                {section.categories.map((category) => (
                  <li
                    key={category}
                    className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                  >
                    {section.editingCategory === category ? (
                      <div className="d-flex w-100 flex-wrap">
                        <Form.Control
                          type="text"
                          value={section.editCategoryName}
                          onChange={(e) => updateSectionData(sectionId, { editCategoryName: e.target.value })}
                          className="me-2 mb-2 mb-sm-0"
                          style={{ fontFamily: bodyFont }}
                        />
                        <div>
                          <Button
                            variant="success"
                            size="sm"
                            onClick={() => saveEditedCategory(sectionId)}
                            style={{
                              backgroundColor: "#4CAF50",
                              borderColor: "#4CAF50",
                              fontFamily: headingFont,
                              letterSpacing: "0.5px",
                            }}
                            className="me-1"
                          >
                            Save
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => updateSectionData(sectionId, { editingCategory: null })}
                            style={{ fontFamily: headingFont, letterSpacing: "0.5px" }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <span style={{ fontFamily: bodyFont }} className="mb-2 mb-md-0">
                          {category}
                        </span>
                        <div>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-1 mb-1 mb-sm-0"
                            onClick={() => startEditingCategory(sectionId, category)}
                            style={{
                              borderColor: primaryColor,
                              color: primaryColor,
                              fontFamily: headingFont,
                            }}
                          >
                            <FaEdit />
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => confirmDeleteCategory(sectionId, category)}
                            style={{ fontFamily: headingFont }}
                          >
                            <FaTrash />
                          </Button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h5" style={{ fontFamily: headingFont, fontWeight: 600 }}>
            Upload Images
          </Card.Header>
          <Card.Body>
            {section.categories.length === 0 ? (
              <Alert variant="info" style={{ fontFamily: bodyFont }}>
                Please create at least one category before uploading images.
              </Alert>
            ) : (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontFamily: bodyFont }}>Select Category</Form.Label>
                  <Form.Select
                    value={section.selectedCategory}
                    onChange={(e) => updateSectionData(sectionId, { selectedCategory: e.target.value })}
                    style={{ fontFamily: bodyFont }}
                  >
                    <option value="">Select a category</option>
                    {section.categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontFamily: bodyFont }}>Select Images</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange(sectionId, e)}
                    id={`${sectionId}FileUpload`}
                    style={{ fontFamily: bodyFont }}
                  />
                  <Form.Text className="text-muted" style={{ fontFamily: bodyFont }}>
                    You can select multiple images to upload.
                  </Form.Text>
                </Form.Group>

                {section.isUploading && (
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <Spinner animation="border" size="sm" className="me-2" />
                      <span style={{ fontFamily: bodyFont }}>Uploading... {section.uploadProgress}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${section.uploadProgress}%`,
                          backgroundColor: primaryColor,
                        }}
                        aria-valuenow={section.uploadProgress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                )}

                <Button
                  variant="primary"
                  onClick={() => handleUpload(sectionId)}
                  disabled={section.isUploading || section.selectedFiles.length === 0 || !section.selectedCategory}
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    fontFamily: headingFont,
                    letterSpacing: "0.5px",
                  }}
                >
                  <FaUpload className="me-2" /> Upload Images
                </Button>
              </Form>
            )}
          </Card.Body>
        </Card>

        <Card>
          <Card.Header as="h5" style={{ fontFamily: headingFont, fontWeight: 600 }}>
            {sectionName} Preview
          </Card.Header>
          <Card.Body>
            {section.categories.length === 0 ? (
              <Alert variant="info" style={{ fontFamily: bodyFont }}>
                No categories available. Create categories to manage your images.
              </Alert>
            ) : (
              <div className="category-tabs">
                <Tab.Container defaultActiveKey={section.categories[0] || ""}>
                  <div className="mb-3 category-nav-container">
                    <Nav variant="tabs" className="flex-nowrap overflow-auto">
                      {section.categories.map((category) => (
                        <Nav.Item key={category}>
                          <Nav.Link
                            eventKey={category}
                            style={{
                              color: primaryColor,
                              borderColor: "#dee2e6 #dee2e6 #fff",
                              fontFamily: headingFont,
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {category}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                  <Tab.Content>
                    {section.categories.map((category) => (
                      <Tab.Pane key={category} eventKey={category}>
                        {!section.images[category] || section.images[category].length === 0 ? (
                          <p className="text-muted" style={{ fontFamily: bodyFont }}>
                            No images in this category yet.
                          </p>
                        ) : (
                          <Row xs={1} sm={2} lg={3} className="g-4">
                            {section.images[category].map((image, index) => (
                              <Col key={index}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src={image.data}
                                    style={{ height: "200px", objectFit: "cover" }}
                                  />
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <small className="text-muted" style={{ fontFamily: bodyFont }}>
                                        {new Date(image.uploadDate).toLocaleDateString()}
                                      </small>
                                      <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => confirmDeleteImage(sectionId, category, index)}
                                        style={{ fontFamily: headingFont }}
                                      >
                                        <FaTrash />
                                      </Button>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        )}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </Card.Body>
        </Card>
      </Tab.Pane>
    )
  }

  return (
    <>
      {/* Top Navbar */}
      <Navbar
        bg="white"
        expand="lg"
        className="shadow-sm mb-0 py-2 px-3"
        style={{
          borderBottom: `1px solid #dee2e6`,
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          top: 0,
        }}
      >
        <Container fluid className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            {/* Toggle button - always visible but only functional on mobile/tablet */}
            <Button
              variant="light"
              onClick={toggleSidebar}
              className={`${isMobile ? "me-3" : "d-none"} border-0`}
              style={{ color: primaryColor }}
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen && isMobile ? <FaTimes /> : <FaBars />}
            </Button>
            <Navbar.Brand
              style={{
                fontFamily: scriptFont,
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                color: primaryColor,
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              SS Wedding Planner Admin
            </Navbar.Brand>
          </div>

          {/* Profile dropdown - without dropdown arrow */}
          <div className="d-flex align-items-center">
            <Dropdown align="end">
              <Dropdown.Toggle
                as="div"
                id="dropdown-profile"
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="/admin profile img/profile.jpg"
                  roundedCircle
                  width={40}
                  height={40}
                  className="border"
                  style={{ objectFit: "cover" }}
                  alt="Admin Profile"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "https://via.placeholder.com/40"
                  }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout} style={{ fontFamily: bodyFont, color: "#dc3545" }}>
                  <FaSignOutAlt className="me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>

      <div style={{ paddingTop: "70px" }}>
        <Container fluid className="py-3 py-lg-4">
          {/* React Toastify Container */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <div className="d-flex position-relative">
            {/* Sidebar - always visible on desktop, collapsible on mobile/tablet */}
            <div
              className={`sidebar ${sidebarOpen ? "d-block" : "d-none"} ${isMobile ? "position-fixed" : "position-fixed"}`}
              style={{
                height: "calc(100vh - 70px)",
                overflowY: "auto",
                backgroundColor: "#f8f9fa",
                zIndex: 999,
                width: "250px",
                left: 0,
                top: "70px",
                borderRight: "1px solid #dee2e6",
                transition: "all 0.3s ease",
              }}
            >
              <div className="py-3">
                <Nav variant="pills" className="flex-column">
                  {sectionTypes.map((section) => (
                    <Nav.Item key={section.id}>
                      <Nav.Link
                        eventKey={section.id}
                        active={activeTab === section.id}
                        onClick={() => handleTabSelect(section.id)}
                        style={{
                          backgroundColor: activeTab === section.id ? primaryColor : "transparent",
                          color: activeTab === section.id ? "#fff" : blackColor,
                          fontFamily: bodyFont,
                          padding: "0.75rem 1.25rem",
                          margin: "0.25rem 0",
                          borderRadius: "0.25rem",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <section.icon className="me-2" /> {section.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </div>

            {/* Semi-transparent overlay to close sidebar on mobile when clicked outside */}
            {isMobile && sidebarOpen && (
              <div
                className="sidebar-overlay position-fixed"
                style={{
                  top: "70px",
                  left: "250px",
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)",
                  zIndex: 998,
                }}
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* Main Content - full width */}
            <div
              className="main-content w-100 px-3"
              style={{
                marginLeft: !isMobile && sidebarOpen ? "250px" : "0",
                transition: "margin-left 0.3s ease",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Tab.Container activeKey={activeTab}>
                <Tab.Content>{sectionTypes.map((section) => renderSectionContent(section.id))}</Tab.Content>
              </Tab.Container>
            </div>
          </div>

          {/* Delete Category Confirmation Modal */}
          <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
            <Modal.Header closeButton style={{ fontFamily: headingFont }}>
              <Modal.Title style={{ fontFamily: headingFont, fontWeight: 600 }}>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontFamily: bodyFont }}>
              Are you sure you want to delete the category "{categoryToDelete.name}"? This will also delete all images
              in this category. This action cannot be undone.
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteModal(false)}
                style={{ fontFamily: headingFont, letterSpacing: "0.5px" }}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={deleteCategory}
                style={{ fontFamily: headingFont, letterSpacing: "0.5px" }}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Delete Image Confirmation Modal */}
          <Modal show={showImageDeleteModal} onHide={() => setShowImageDeleteModal(false)}>
            <Modal.Header closeButton style={{ fontFamily: headingFont }}>
              <Modal.Title style={{ fontFamily: headingFont, fontWeight: 600 }}>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontFamily: bodyFont }}>
              Are you sure you want to delete this image? This action cannot be undone.
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowImageDeleteModal(false)}
                style={{ fontFamily: headingFont, letterSpacing: "0.5px" }}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={deleteImage}
                style={{ fontFamily: headingFont, letterSpacing: "0.5px" }}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Logout Confirmation Modal */}
          <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
            <Modal.Header closeButton style={{ fontFamily: headingFont }}>
              <Modal.Title style={{ fontFamily: headingFont, fontWeight: 600 }}>Confirm Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontFamily: bodyFont }}>
              Are you sure you want to logout from the admin dashboard?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowLogoutModal(false)}
                style={{ fontFamily: headingFont, letterSpacing: "0.5px" }}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={confirmLogout}
                style={{
                  fontFamily: headingFont,
                  letterSpacing: "0.5px",
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
                }}
              >
                <FaSignOutAlt className="me-2" /> Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>

      {/* Custom CSS for responsive design */}
      <style>
        {`
          /* Remove dropdown arrow */
          .dropdown-toggle::after {
            display: none !important;
          }
          
          /* Responsive Tab Navigation */
          .category-nav-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .marriage-tabs-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Custom scrollbar styling */
          .category-nav-container::-webkit-scrollbar,
          .marriage-tabs-container::-webkit-scrollbar,
          .sidebar::-webkit-scrollbar {
            height: 4px;
            width: 4px;
          }
          
          .category-nav-container::-webkit-scrollbar-thumb,
          .marriage-tabs-container::-webkit-scrollbar-thumb,
          .sidebar::-webkit-scrollbar-thumb {
            background: ${primaryColor};
            border-radius: 4px;
          }
          
          /* Make sidebar transition smooth */
          .sidebar {
            transform: translateX(0);
            transition: transform 0.3s ease;
          }
          
          @media (max-width: 991.98px) {
            .sidebar:not(.d-block) {
              transform: translateX(-100%);
            }
          }
          
          /* Improve form elements on mobile */
          @media (max-width: 767.98px) {
            .form-control, .form-select, .btn {
              font-size: 16px; /* Prevents iOS zoom on focus */
            }
          }
        `}
      </style>
    </>
  )
}

export default AdminDashboard
