"use client"

import { useEffect } from "react"
import { Modal } from "react-bootstrap"

const ImagePreviewModal = ({ show, onHide, selectedImage, currentGallery, onNext, onPrev }) => {
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (show) {
      if (e.key === "ArrowRight") {
        onNext()
      } else if (e.key === "ArrowLeft") {
        onPrev()
      } else if (e.key === "Escape") {
        onHide()
      }
    }
  }

  // Add event listener for keyboard navigation
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [show, selectedImage, currentGallery])

  // Get the correct image source (handle both Firebase url and hardcoded src)
  const getImageSource = () => {
    if (!selectedImage) return "/placeholder.svg"
    return selectedImage.url || selectedImage.src || "/placeholder.svg"
  }

  // Get the correct image alt text
  const getImageAlt = () => {
    if (!selectedImage) return "Image preview"
    return selectedImage.name || selectedImage.alt || "Image preview"
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      contentClassName="image-modal-content"
      backdropClassName="image-modal-backdrop"
    >
      <div className="image-preview-container">
        {/* Close Button - Fixed Position */}
        <button className="close-button" onClick={onHide} aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Image Container */}
        <div className="image-container">
          {selectedImage && (
            <img src={getImageSource() || "/placeholder.svg"} alt={getImageAlt()} className="preview-image" />
          )}
        </div>

        {/* Navigation Buttons - Absolutely Positioned */}
        <button className="nav-button prev-button" onClick={onPrev} aria-label="Previous image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button className="nav-button next-button" onClick={onNext} aria-label="Next image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Custom CSS for modal and buttons */}
      <style jsx global>{`
        /* Modal backdrop */
        .image-modal-backdrop {
          background-color: rgba(0, 0, 0, 0.9);
        }

        /* Modal content */
        .image-modal-content {
          background-color: transparent;
          border: none;
        }

        /* Image preview container */
        .image-preview-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
        }

        /* Image container */
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 20px;
        }

        /* Preview image */
        .preview-image {
          max-height: 80vh;
          max-width: 100%;
          object-fit: contain;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        /* Close button */
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 1050;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.7);
          border: none;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background-color: rgba(0, 0, 0, 0.9);
          transform: scale(1.1);
        }

        /* Navigation buttons */
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.7);
          border: none;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1050;
        }

        .prev-button {
          left: 20px;
        }

        .next-button {
          right: 20px;
        }

        .nav-button:hover {
          background-color: rgba(0, 0, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .nav-button {
            width: 40px;
            height: 40px;
          }

          .prev-button {
            left: 10px;
          }

          .next-button {
            right: 10px;
          }

          .close-button {
            width: 35px;
            height: 35px;
            top: 10px;
            right: 10px;
          }
        }

        @media (max-width: 576px) {
          .nav-button {
            width: 35px;
            height: 35px;
          }

          .prev-button {
            left: 5px;
          }

          .next-button {
            right: 5px;
          }

          .close-button {
            width: 30px;
            height: 30px;
          }

          .preview-image {
            max-height: 70vh;
          }
        }
      `}</style>
    </Modal>
  )
}

export default ImagePreviewModal
