import { collection, doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { db, storage } from "../firebase/config"

export class MarriageService {
  constructor() {
    this.collectionName = "marriage"
  }

  // Create or update a category with images for a specific subcategory
  async updateCategoryImages(subcategory, categoryName, images) {
    try {
      const categoryRef = doc(db, this.collectionName, `${subcategory}_${categoryName}`)

      // Convert images array to map format
      const imageMap = {}
      images.forEach((image, index) => {
        imageMap[`image_${index}`] = {
          url: image.url,
          name: image.name,
          uploadDate: image.uploadDate,
          size: image.size,
        }
      })

      await setDoc(
        categoryRef,
        {
          subcategory,
          categoryName,
          images: imageMap,
          lastUpdated: new Date().toISOString(),
        },
        { merge: true },
      )

      return { success: true }
    } catch (error) {
      console.error("Error updating category images:", error)
      throw error
    }
  }

  // Get all images for a category in a specific subcategory
  async getCategoryImages(subcategory, categoryName) {
    try {
      const categoryRef = doc(db, this.collectionName, `${subcategory}_${categoryName}`)
      const categorySnap = await getDoc(categoryRef)

      if (categorySnap.exists()) {
        const data = categorySnap.data()
        const images = data.images || {}

        // Convert map back to array format
        return Object.values(images)
      }

      return []
    } catch (error) {
      console.error("Error getting category images:", error)
      throw error
    }
  }

  // Get all categories for a specific subcategory
  async getAllCategories(subcategory) {
    try {
      const categoriesRef = collection(db, this.collectionName)
      const snapshot = await getDocs(categoriesRef)

      return snapshot.docs
        .map((doc) => doc.data())
        .filter((data) => data.subcategory === subcategory)
        .map((data) => ({
          id: data.categoryName,
          ...data,
        }))
    } catch (error) {
      console.error("Error getting categories:", error)
      throw error
    }
  }

  // Upload image to Firebase Storage
  async uploadImage(file, subcategory, categoryName) {
    try {
      const timestamp = Date.now()
      const fileName = `${timestamp}_${file.name}`
      const storageRef = ref(storage, `marriage/${subcategory}/${categoryName}/${fileName}`)

      const snapshot = await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(snapshot.ref)

      return {
        url: downloadURL,
        name: file.name,
        fileName: fileName,
        uploadDate: new Date().toISOString(),
        size: file.size,
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      throw error
    }
  }

  // Delete image from Firebase Storage
  async deleteImage(subcategory, categoryName, fileName) {
    try {
      const storageRef = ref(storage, `marriage/${subcategory}/${categoryName}/${fileName}`)
      await deleteObject(storageRef)
      return { success: true }
    } catch (error) {
      console.error("Error deleting image:", error)
      throw error
    }
  }

  // Delete entire category
  async deleteCategory(subcategory, categoryName) {
    try {
      const categoryRef = doc(db, this.collectionName, `${subcategory}_${categoryName}`)
      await deleteDoc(categoryRef)
      return { success: true }
    } catch (error) {
      console.error("Error deleting category:", error)
      throw error
    }
  }

  // Add a single image to existing category
  async addImageToCategory(subcategory, categoryName, imageData) {
    try {
      const categoryRef = doc(db, this.collectionName, `${subcategory}_${categoryName}`)
      const categorySnap = await getDoc(categoryRef)

      let existingImages = {}
      if (categorySnap.exists()) {
        existingImages = categorySnap.data().images || {}
      }

      // Find next available key
      const existingKeys = Object.keys(existingImages)
      const nextIndex = existingKeys.length
      const newKey = `image_${nextIndex}`

      // Add new image
      existingImages[newKey] = imageData

      await updateDoc(categoryRef, {
        images: existingImages,
        lastUpdated: new Date().toISOString(),
      })

      return { success: true }
    } catch (error) {
      console.error("Error adding image to category:", error)
      throw error
    }
  }

  // Remove a single image from category
  async removeImageFromCategory(subcategory, categoryName, imageKey, fileName) {
    try {
      // Delete from storage
      await this.deleteImage(subcategory, categoryName, fileName)

      // Remove from Firestore
      const categoryRef = doc(db, this.collectionName, `${subcategory}_${categoryName}`)
      const categorySnap = await getDoc(categoryRef)

      if (categorySnap.exists()) {
        const existingImages = categorySnap.data().images || {}
        delete existingImages[imageKey]

        await updateDoc(categoryRef, {
          images: existingImages,
          lastUpdated: new Date().toISOString(),
        })
      }

      return { success: true }
    } catch (error) {
      console.error("Error removing image from category:", error)
      throw error
    }
  }
}

export const marriageService = new MarriageService()
