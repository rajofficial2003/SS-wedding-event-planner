import imageCompression from "browser-image-compression"

export const compressImage = async (file, maxSizeKB = 500) => {
  try {
    const options = {
      maxSizeMB: maxSizeKB / 1024, // Convert KB to MB
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: file.type,
      initialQuality: 0.8,
    }

    const compressedFile = await imageCompression(file, options)

    // If still too large, reduce quality further
    if (compressedFile.size > maxSizeKB * 1024) {
      const secondOptions = {
        ...options,
        initialQuality: 0.6,
        maxWidthOrHeight: 1280,
      }
      return await imageCompression(file, secondOptions)
    }

    return compressedFile
  } catch (error) {
    console.error("Error compressing image:", error)
    throw error
  }
}

export const validateImageSize = (file, maxSizeKB = 500) => {
  const maxSizeBytes = maxSizeKB * 1024
  return file.size <= maxSizeBytes
}

export const getImageSizeInKB = (file) => {
  return Math.round(file.size / 1024)
}
