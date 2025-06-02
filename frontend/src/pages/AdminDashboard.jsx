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
  FaCompress,
} from "react-icons/fa"

// Firebase imports - all services
import { galleryService } from "../services/galleryService"
import { engagementService } from "../services/engagementService"
import { marriageService } from "../services/marriageService"
import { receptionService } from "../services/receptionService"
import { birthdayService } from "../services/birthdayService"
import { babyshowerService } from "../services/babyshowerService"
import { housewarmingService } from "../services/housewarmingService"
import { sangeetmehandiService } from "../services/sangeetmehandiService"
import { compressImage, validateImageSize, getImageSizeInKB } from "../utils/imageCompression"
import { useNavigate } from "react-router-dom"

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

  // Global compression states
  const [compressionProgress, setCompressionProgress] = useState(0)
  const [isCompressing, setIsCompressing] = useState(false)

  // Service mapping
  const serviceMap = {
    gallery: galleryService,
    engagement: engagementService,
    marriage: marriageService,
    reception: receptionService,
    birthday: birthdayService,
    babyshower: babyshowerService,
    housewarming: housewarmingService,
    sangeetmehendi: sangeetmehandiService,
  }

  // State for all sections with Firebase
  const [sectionStates, setSectionStates] = useState({
    gallery: {
      categories: [],
      images: {},
      loading: false,
      newCategory: "",
      editingCategory: null,
      editCategoryName: "",
      selectedCategory: "",
      selectedFiles: [],
      uploadProgress: 0,
      isUploading: false,
    },
    engagement: {
      categories: [],
      images: {},
      loading: false,
      newCategory: "",
      editingCategory: null,
      editCategoryName: "",
      selectedCategory: "",
      selectedFiles: [],
      uploadProgress: 0,
      isUploading: false,
    },
    marriage: {
      traditional: {
        categories: [],
        images: {},
        loading: false,
        newCategory: "",
        editingCategory: null,
        editCategoryName: "",
        selectedCategory: "",
        selectedFiles: [],
        uploadProgress: 0,
        isUploading: false,
      },
      christian: {
        categories: [],
        images: {},
        loading: false,
        newCategory: "",
        editingCategory: null,
        editCategoryName: "",
        selectedCategory: "",
        selectedFiles: [],
        uploadProgress: 0,
        isUploading: false,
      },
      muslim: {
        categories: [],
        images: {},
        loading: false,
        newCategory: "",
        editingCategory: null,
        editCategoryName: "",
        selectedCategory: "",
        selectedFiles: [],
        uploadProgress: 0,
        isUploading: false,
      },
    },
    reception: {
      categories: [],
      images: {},
      loading: false,
      newCategory: "",
      editingCategory: null,
      editCategoryName: "",
      selectedCategory: "",
      selectedFiles: [],
      uploadProgress: 0,
      isUploading: false,
    },
    birthday: {
      categories: [],
      images: {},
      loading: false,
      newCategory: "",
      editingCategory: null,
      editCategoryName: "",
      selectedCategory: "",
      selectedFiles: [],
      uploadProgress: 0,
      isUploading: false,
    },
    babyshower: {
      categories: [],
      images: {},
      loading: false,
      newCategory: "",
      editingCategory: null,
      editCategoryName: "",
      selectedCategory: "",
      selectedFiles: [],
      uploadProgress: 0,
      isUploading: false,
    },
    housewarming: {
      categories: [],
      images: {},
      loading: false,
      newCategory: "",
      editingCategory: null,
      editCategoryName: "",
      selectedCategory: "",
      selectedFiles: [],
      uploadProgress: 0,
      isUploading: false,
    },
    sangeetmehendi: {
      categories: [],
      images: {},
      loading: false,
      newCategory: "",
      editingCategory: null,
      editCategoryName: "",
      selectedCategory: "",
      selectedFiles: [],
      uploadProgress: 0,
      isUploading: false,
    },
  })

  // Active subcategory for marriage section
  const [activeMarriageSubcategory, setActiveMarriageSubcategory] = useState("traditional")

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

  // Load data when tab changes
  useEffect(() => {
    loadSectionData(activeTab)
  }, [activeTab])

  // Load section data from Firebase
  const loadSectionData = async (sectionId) => {
    if (sectionId === "marriage") {
      // Load all marriage subcategories
      await Promise.all([
        loadMarriageSubcategoryData("traditional"),
        loadMarriageSubcategoryData("christian"),
        loadMarriageSubcategoryData("muslim"),
      ])
    } else {
      const service = serviceMap[sectionId]
      if (!service) return

      try {
        updateSectionState(sectionId, { loading: true })

        const categories = await service.getAllCategories()
        const categoryNames = categories.map((cat) => cat.categoryName || cat.id)

        // Load images for each category
        const imagesData = {}
        for (const categoryName of categoryNames) {
          const images = await service.getCategoryImages(categoryName)
          imagesData[categoryName] = images
        }

        updateSectionState(sectionId, {
          categories: categoryNames,
          images: imagesData,
          loading: false,
        })
      } catch (error) {
        console.error(`Error loading ${sectionId} data:`, error)
        showToast("error", `Failed to load ${sectionId} data`)
        updateSectionState(sectionId, { loading: false })
      }
    }
  }

  // Load marriage subcategory data
  const loadMarriageSubcategoryData = async (subcategory) => {
    try {
      updateMarriageSubcategoryState(subcategory, { loading: true })

      const categories = await marriageService.getAllCategories(subcategory)
      const categoryNames = categories.map((cat) => cat.categoryName || cat.id)

      // Load images for each category
      const imagesData = {}
      for (const categoryName of categoryNames) {
        const images = await marriageService.getCategoryImages(subcategory, categoryName)
        imagesData[categoryName] = images
      }

      updateMarriageSubcategoryState(subcategory, {
        categories: categoryNames,
        images: imagesData,
        loading: false,
      })
    } catch (error) {
      console.error(`Error loading marriage ${subcategory} data:`, error)
      showToast("error", `Failed to load marriage ${subcategory} data`)
      updateMarriageSubcategoryState(subcategory, { loading: false })
    }
  }

  // Update section state helper
  const updateSectionState = (sectionId, updates) => {
    setSectionStates((prev) => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        ...updates,
      },
    }))
  }

  // Update marriage subcategory state helper
  const updateMarriageSubcategoryState = (subcategory, updates) => {
    setSectionStates((prev) => ({
      ...prev,
      marriage: {
        ...prev.marriage,
        [subcategory]: {
          ...prev.marriage[subcategory],
          ...updates,
        },
      },
    }))
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

  const navigate = useNavigate()

  const confirmLogout = () => {
    // Clear all authentication data from localStorage
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("loginTime")
    localStorage.removeItem("adminUsername")

    // Show success message
    showToast("success", "Logged out successfully")
    setShowLogoutModal(false)

    // Redirect to login page using React Router
    setTimeout(() => {
      navigate("/admin/login", { replace: true })
    }, 500)
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

  // Generic add category function
  const handleAddCategory = async (sectionId, subcategoryId = null) => {
    const service = serviceMap[sectionId]
    if (!service) return

    let sectionState
    let newCategoryName

    if (sectionId === "marriage" && subcategoryId) {
      sectionState = sectionStates.marriage[subcategoryId]
      newCategoryName = sectionState.newCategory.trim()
    } else {
      sectionState = sectionStates[sectionId]
      newCategoryName = sectionState.newCategory.trim()
    }

    if (!newCategoryName) {
      showToast("error", "Category name cannot be empty")
      return
    }

    if (sectionState.categories.includes(newCategoryName)) {
      showToast("error", "Category already exists")
      return
    }

    try {
      if (sectionId === "marriage" && subcategoryId) {
        // Create empty category in Firebase for marriage subcategory
        await marriageService.updateCategoryImages(subcategoryId, newCategoryName, [])

        // Update local state
        updateMarriageSubcategoryState(subcategoryId, {
          categories: [...sectionState.categories, newCategoryName],
          images: { ...sectionState.images, [newCategoryName]: [] },
          newCategory: "",
          selectedCategory: sectionState.selectedCategory || newCategoryName,
        })
      } else {
        // Create empty category in Firebase
        await service.updateCategoryImages(newCategoryName, [])

        // Update local state
        updateSectionState(sectionId, {
          categories: [...sectionState.categories, newCategoryName],
          images: { ...sectionState.images, [newCategoryName]: [] },
          newCategory: "",
          selectedCategory: sectionState.selectedCategory || newCategoryName,
        })
      }

      showToast("success", "Category added successfully")
    } catch (error) {
      console.error("Error adding category:", error)
      showToast("error", "Failed to add category")
    }
  }

  // Generic edit category functions
  const startEditingCategory = (sectionId, category, subcategoryId = null) => {
    if (sectionId === "marriage" && subcategoryId) {
      updateMarriageSubcategoryState(subcategoryId, {
        editingCategory: category,
        editCategoryName: category,
      })
    } else {
      updateSectionState(sectionId, {
        editingCategory: category,
        editCategoryName: category,
      })
    }
  }

  const saveEditedCategory = async (sectionId, subcategoryId = null) => {
    const service = serviceMap[sectionId]
    if (!service) return

    let sectionState
    let newName

    if (sectionId === "marriage" && subcategoryId) {
      sectionState = sectionStates.marriage[subcategoryId]
      newName = sectionState.editCategoryName.trim()
    } else {
      sectionState = sectionStates[sectionId]
      newName = sectionState.editCategoryName.trim()
    }

    if (!newName) {
      showToast("error", "Category name cannot be empty")
      return
    }

    if (sectionState.categories.includes(newName) && newName !== sectionState.editingCategory) {
      showToast("error", "Category already exists")
      return
    }

    try {
      const oldName = sectionState.editingCategory
      const images = sectionState.images[oldName] || []

      if (sectionId === "marriage" && subcategoryId) {
        // Create new category with existing images for marriage subcategory
        await marriageService.updateCategoryImages(subcategoryId, newName, images)

        // Delete old category if name changed
        if (oldName !== newName) {
          await marriageService.deleteCategory(subcategoryId, oldName)
        }

        // Update local state
        const updatedCategories = sectionState.categories.map((cat) => (cat === oldName ? newName : cat))
        const updatedImages = { ...sectionState.images }
        if (oldName !== newName) {
          updatedImages[newName] = updatedImages[oldName]
          delete updatedImages[oldName]
        }

        updateMarriageSubcategoryState(subcategoryId, {
          categories: updatedCategories,
          images: updatedImages,
          editingCategory: null,
          selectedCategory: sectionState.selectedCategory === oldName ? newName : sectionState.selectedCategory,
        })
      } else {
        // Create new category with existing images
        await service.updateCategoryImages(newName, images)

        // Delete old category if name changed
        if (oldName !== newName) {
          await service.deleteCategory(oldName)
        }

        // Update local state
        const updatedCategories = sectionState.categories.map((cat) => (cat === oldName ? newName : cat))
        const updatedImages = { ...sectionState.images }
        if (oldName !== newName) {
          updatedImages[newName] = updatedImages[oldName]
          delete updatedImages[oldName]
        }

        updateSectionState(sectionId, {
          categories: updatedCategories,
          images: updatedImages,
          editingCategory: null,
          selectedCategory: sectionState.selectedCategory === oldName ? newName : sectionState.selectedCategory,
        })
      }

      showToast("success", "Category updated successfully")
    } catch (error) {
      console.error("Error updating category:", error)
      showToast("error", "Failed to update category")
    }
  }

  // Generic file change handler
  const handleFileChange = (sectionId, e, subcategoryId = null) => {
    const files = Array.from(e.target.files)

    if (sectionId === "marriage" && subcategoryId) {
      updateMarriageSubcategoryState(subcategoryId, { selectedFiles: files })
    } else {
      updateSectionState(sectionId, { selectedFiles: files })
    }
  }

  // Generic upload handler
  const handleUpload = async (sectionId, subcategoryId = null) => {
    const service = serviceMap[sectionId]
    if (!service) return

    let sectionState

    if (sectionId === "marriage" && subcategoryId) {
      sectionState = sectionStates.marriage[subcategoryId]
    } else {
      sectionState = sectionStates[sectionId]
    }

    if (!sectionState.selectedCategory) {
      showToast("error", "Please select a category")
      return
    }

    if (sectionState.selectedFiles.length === 0) {
      showToast("error", "Please select at least one file")
      return
    }

    try {
      if (sectionId === "marriage" && subcategoryId) {
        updateMarriageSubcategoryState(subcategoryId, { isUploading: true, uploadProgress: 0 })
      } else {
        updateSectionState(sectionId, { isUploading: true, uploadProgress: 0 })
      }

      setIsCompressing(true)
      setCompressionProgress(0)

      const totalFiles = sectionState.selectedFiles.length
      const compressedFiles = []

      // Compress images first
      for (let i = 0; i < sectionState.selectedFiles.length; i++) {
        const file = sectionState.selectedFiles[i]

        setCompressionProgress(Math.round(((i + 1) / totalFiles) * 100))

        try {
          let processedFile = file

          // Check if compression is needed
          if (!validateImageSize(file, 500)) {
            showToast("info", `Compressing ${file.name} (${getImageSizeInKB(file)}KB)...`)
            processedFile = await compressImage(file, 500)
            showToast("success", `${file.name} compressed to ${getImageSizeInKB(processedFile)}KB`)
          }

          compressedFiles.push(processedFile)
        } catch (compressionError) {
          console.error(`Error compressing ${file.name}:`, compressionError)
          showToast("warning", `Failed to compress ${file.name}, using original`)
          compressedFiles.push(file)
        }
      }

      setIsCompressing(false)
      setCompressionProgress(0)

      // Upload compressed files
      const uploadedImages = []
      for (let i = 0; i < compressedFiles.length; i++) {
        const file = compressedFiles[i]

        const progress = Math.round(((i + 1) / compressedFiles.length) * 100)
        if (sectionId === "marriage" && subcategoryId) {
          updateMarriageSubcategoryState(subcategoryId, { uploadProgress: progress })
        } else {
          updateSectionState(sectionId, { uploadProgress: progress })
        }

        try {
          let uploadedImage
          if (sectionId === "marriage" && subcategoryId) {
            uploadedImage = await marriageService.uploadImage(file, subcategoryId, sectionState.selectedCategory)
            await marriageService.addImageToCategory(subcategoryId, sectionState.selectedCategory, uploadedImage)
          } else {
            uploadedImage = await service.uploadImage(file, sectionState.selectedCategory)
            await service.addImageToCategory(sectionState.selectedCategory, uploadedImage)
          }

          uploadedImages.push(uploadedImage)
        } catch (uploadError) {
          console.error(`Error uploading ${file.name}:`, uploadError)
          showToast("error", `Failed to upload ${file.name}`)
        }
      }

      // Update local state
      if (sectionId === "marriage" && subcategoryId) {
        updateMarriageSubcategoryState(subcategoryId, {
          images: {
            ...sectionState.images,
            [sectionState.selectedCategory]: [
              ...(sectionState.images[sectionState.selectedCategory] || []),
              ...uploadedImages,
            ],
          },
          isUploading: false,
          uploadProgress: 0,
          selectedFiles: [],
        })
      } else {
        updateSectionState(sectionId, {
          images: {
            ...sectionState.images,
            [sectionState.selectedCategory]: [
              ...(sectionState.images[sectionState.selectedCategory] || []),
              ...uploadedImages,
            ],
          },
          isUploading: false,
          uploadProgress: 0,
          selectedFiles: [],
        })
      }

      showToast("success", `Successfully uploaded ${uploadedImages.length} images`)

      // Reset file input
      const fileInputId =
        sectionId === "marriage" && subcategoryId ? `${sectionId}_${subcategoryId}FileUpload` : `${sectionId}FileUpload`
      const fileInput = document.getElementById(fileInputId)
      if (fileInput) {
        fileInput.value = ""
      }
    } catch (error) {
      console.error("Error uploading images:", error)
      showToast("error", "Failed to upload images")

      if (sectionId === "marriage" && subcategoryId) {
        updateMarriageSubcategoryState(subcategoryId, {
          isUploading: false,
          uploadProgress: 0,
        })
      } else {
        updateSectionState(sectionId, {
          isUploading: false,
          uploadProgress: 0,
        })
      }

      setIsCompressing(false)
      setCompressionProgress(0)
    }
  }

  // Generic delete category confirmation
  const confirmDeleteCategory = (sectionId, category, subcategoryId = null) => {
    setCategoryToDelete({ type: sectionId, name: category, subcategory: subcategoryId })
    setShowDeleteModal(true)
  }

  // Generic delete image confirmation
  const confirmDeleteImage = (sectionId, category, imageIndex, image, subcategoryId = null) => {
    setImageToDelete({
      type: sectionId,
      category,
      index: imageIndex,
      image: image,
      subcategory: subcategoryId,
    })
    setShowImageDeleteModal(true)
  }

  // Delete category handler
  const deleteCategory = async () => {
    const { type: sectionId, name: categoryName, subcategory: subcategoryId } = categoryToDelete
    const service = serviceMap[sectionId]

    try {
      if (sectionId === "marriage" && subcategoryId) {
        // Delete from Firebase
        await marriageService.deleteCategory(subcategoryId, categoryName)

        // Update local state
        const sectionState = sectionStates.marriage[subcategoryId]
        const updatedCategories = sectionState.categories.filter((cat) => cat !== categoryName)
        const updatedImages = { ...sectionState.images }
        delete updatedImages[categoryName]

        updateMarriageSubcategoryState(subcategoryId, {
          categories: updatedCategories,
          images: updatedImages,
          selectedCategory:
            sectionState.selectedCategory === categoryName
              ? updatedCategories.length > 0
                ? updatedCategories[0]
                : ""
              : sectionState.selectedCategory,
        })
      } else {
        // Delete from Firebase
        await service.deleteCategory(categoryName)

        // Update local state
        const sectionState = sectionStates[sectionId]
        const updatedCategories = sectionState.categories.filter((cat) => cat !== categoryName)
        const updatedImages = { ...sectionState.images }
        delete updatedImages[categoryName]

        updateSectionState(sectionId, {
          categories: updatedCategories,
          images: updatedImages,
          selectedCategory:
            sectionState.selectedCategory === categoryName
              ? updatedCategories.length > 0
                ? updatedCategories[0]
                : ""
              : sectionState.selectedCategory,
        })
      }

      showToast("success", "Category deleted successfully")
    } catch (error) {
      console.error("Error deleting category:", error)
      showToast("error", "Failed to delete category")
    }

    setShowDeleteModal(false)
  }

  // Delete image handler
  const deleteImage = async () => {
    const { type: sectionId, category, index, image, subcategory: subcategoryId } = imageToDelete
    const service = serviceMap[sectionId]

    try {
      if (sectionId === "marriage" && subcategoryId) {
        if (image && image.fileName) {
          const imageKey = `image_${index}`
          await marriageService.removeImageFromCategory(subcategoryId, category, imageKey, image.fileName)

          // Update local state
          const sectionState = sectionStates.marriage[subcategoryId]
          updateMarriageSubcategoryState(subcategoryId, {
            images: {
              ...sectionState.images,
              [category]: sectionState.images[category].filter((_, i) => i !== index),
            },
          })
        }
      } else {
        if (image && image.fileName) {
          const imageKey = `image_${index}`
          await service.removeImageFromCategory(category, imageKey, image.fileName)

          // Update local state
          const sectionState = sectionStates[sectionId]
          updateSectionState(sectionId, {
            images: {
              ...sectionState.images,
              [category]: sectionState.images[category].filter((_, i) => i !== index),
            },
          })
        }
      }

      showToast("success", "Image deleted successfully")
    } catch (error) {
      console.error("Error deleting image:", error)
      showToast("error", "Failed to delete image")
    }

    setShowImageDeleteModal(false)
  }

  // Handle tab selection
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  // Render generic section content
  const renderSectionContent = (sectionId) => {
    if (sectionId === "marriage") {
      return renderMarriageContent()
    }

    const sectionName = sectionTypes.find((s) => s.id === sectionId)?.name || ""
    const sectionState = sectionStates[sectionId]

    if (!sectionState) return null

    return (
      <Tab.Pane eventKey={sectionId}>
        <h4 className="mb-4" style={{ fontFamily: headingFont, fontWeight: 700 }}>
          {sectionName} Management
        </h4>

        {sectionState.loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" style={{ color: primaryColor }} />
            <p className="mt-2" style={{ fontFamily: bodyFont }}>
              Loading {sectionName.toLowerCase()} data...
            </p>
          </div>
        ) : (
          <>
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
                          value={sectionState.newCategory}
                          onChange={(e) => updateSectionState(sectionId, { newCategory: e.target.value })}
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
                {sectionState.categories.length === 0 ? (
                  <p className="text-muted" style={{ fontFamily: bodyFont }}>
                    No categories yet. Add your first category above.
                  </p>
                ) : (
                  <ul className="list-group">
                    {sectionState.categories.map((category) => (
                      <li
                        key={category}
                        className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                      >
                        {sectionState.editingCategory === category ? (
                          <div className="d-flex w-100 flex-wrap">
                            <Form.Control
                              type="text"
                              value={sectionState.editCategoryName}
                              onChange={(e) => updateSectionState(sectionId, { editCategoryName: e.target.value })}
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
                                onClick={() => updateSectionState(sectionId, { editingCategory: null })}
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
                {sectionState.categories.length === 0 ? (
                  <Alert variant="info" style={{ fontFamily: bodyFont }}>
                    Please create at least one category before uploading images.
                  </Alert>
                ) : (
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ fontFamily: bodyFont }}>Select Category</Form.Label>
                      <Form.Select
                        value={sectionState.selectedCategory}
                        onChange={(e) => updateSectionState(sectionId, { selectedCategory: e.target.value })}
                        style={{ fontFamily: bodyFont }}
                      >
                        <option value="">Select a category</option>
                        {sectionState.categories.map((category) => (
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
                        Images will be automatically compressed to under 500KB. You can select multiple images to
                        upload.
                      </Form.Text>
                    </Form.Group>

                    {isCompressing && (
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <FaCompress className="me-2" style={{ color: primaryColor }} />
                          <span style={{ fontFamily: bodyFont }}>Compressing images... {compressionProgress}%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${compressionProgress}%`,
                              backgroundColor: "#FFA500",
                            }}
                            aria-valuenow={compressionProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    )}

                    {sectionState.isUploading && (
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <Spinner animation="border" size="sm" className="me-2" />
                          <span style={{ fontFamily: bodyFont }}>Uploading... {sectionState.uploadProgress}%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${sectionState.uploadProgress}%`,
                              backgroundColor: primaryColor,
                            }}
                            aria-valuenow={sectionState.uploadProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    )}

                    <Button
                      variant="primary"
                      onClick={() => handleUpload(sectionId)}
                      disabled={
                        sectionState.isUploading ||
                        isCompressing ||
                        sectionState.selectedFiles.length === 0 ||
                        !sectionState.selectedCategory
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
                {sectionName} Preview
              </Card.Header>
              <Card.Body>
                {sectionState.categories.length === 0 ? (
                  <Alert variant="info" style={{ fontFamily: bodyFont }}>
                    No categories available. Create categories to manage your images.
                  </Alert>
                ) : (
                  <div className="category-tabs">
                    <Tab.Container defaultActiveKey={sectionState.categories[0] || ""}>
                      <div className="mb-3 category-nav-container">
                        <Nav variant="tabs" className="flex-nowrap overflow-auto">
                          {sectionState.categories.map((category) => (
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
                        {sectionState.categories.map((category) => (
                          <Tab.Pane key={category} eventKey={category}>
                            {!sectionState.images[category] || sectionState.images[category].length === 0 ? (
                              <p className="text-muted" style={{ fontFamily: bodyFont }}>
                                No images in this category yet.
                              </p>
                            ) : (
                              <Row xs={1} sm={2} lg={3} className="g-4">
                                {sectionState.images[category].map((image, index) => (
                                  <Col key={index}>
                                    <Card>
                                      <Card.Img
                                        variant="top"
                                        src={image.url}
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
                                            onClick={() => confirmDeleteImage(sectionId, category, index, image)}
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
          </>
        )}
      </Tab.Pane>
    )
  }

  // Render marriage section content
  const renderMarriageContent = () => {
    return (
      <Tab.Pane eventKey="marriage">
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

  // Render marriage subcategory content
  const renderMarriageSubcategoryContent = (subcategoryId) => {
    const subcategory = sectionStates.marriage?.[subcategoryId]
    if (!subcategory) return null

    const subcategoryName = marriageSubcategories.find((s) => s.id === subcategoryId)?.name || ""

    return (
      <div>
        {subcategory.loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" style={{ color: primaryColor }} />
            <p className="mt-2" style={{ fontFamily: bodyFont }}>
              Loading {subcategoryName.toLowerCase()} data...
            </p>
          </div>
        ) : (
          <>
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
                          onChange={(e) =>
                            updateMarriageSubcategoryState(subcategoryId, { newCategory: e.target.value })
                          }
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
                                updateMarriageSubcategoryState(subcategoryId, { editCategoryName: e.target.value })
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
                                onClick={() => updateMarriageSubcategoryState(subcategoryId, { editingCategory: null })}
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
                        onChange={(e) =>
                          updateMarriageSubcategoryState(subcategoryId, { selectedCategory: e.target.value })
                        }
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
                        Images will be automatically compressed to under 500KB. You can select multiple images to
                        upload.
                      </Form.Text>
                    </Form.Group>

                    {isCompressing && (
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <FaCompress className="me-2" style={{ color: primaryColor }} />
                          <span style={{ fontFamily: bodyFont }}>Compressing images... {compressionProgress}%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${compressionProgress}%`,
                              backgroundColor: "#FFA500",
                            }}
                            aria-valuenow={compressionProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    )}

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
                        subcategory.isUploading ||
                        isCompressing ||
                        subcategory.selectedFiles.length === 0 ||
                        !subcategory.selectedCategory
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
                {subcategoryName} Preview
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
                                        src={image.url}
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
                                            onClick={() =>
                                              confirmDeleteImage("marriage", category, index, image, subcategoryId)
                                            }
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
          </>
        )}
      </div>
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
