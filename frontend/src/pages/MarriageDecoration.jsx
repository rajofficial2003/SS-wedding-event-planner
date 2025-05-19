import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Testimonials from "../components/Testimonials";

const MarriageDecoration = () => {
  // Traditional Marriage client names
  const traditionalClients = [
    { id: "ramu-sangeetha", name: "Ramu + Sangeetha" },
    { id: "vignesh-keerthi", name: "Vignesh + Keerthi" },
    { id: "aravind-mathura", name: "Aravind + Mathura" },
    { id: "gowtham-jayalakshmi", name: "Gowtham + Jayalakshmi" }
  ];

  // Christian Wedding client names
  const christianClients = [
    { id: "tarun-nandini", name: "Tarun + Nandini" },
    { id: "jennifer-shashi", name: "Jennifer + Shashi" },
    { id: "roshan-jenina", name: "Roshan + Jenina" },
    { id: "junder-mathura", name: "Junder + Mathura" },
    { id: "weslin-deborah", name: "Weslin + Deborah" },
    { id: "vasanth", name: "Vasanth" },
    { id: "arun-deepshi", name: "Arun + Deepshi" }
  ];

  // Muslim Wedding client names
  const muslimClients = [
    { id: "khaleemul-deepthy", name: "Khaleemul Deepthy" },
    { id: "anwas-shana", name: "Anwas + Shana" },
    { id: "farhan-aafiya", name: "Farhan + Aafiya" },
    { id: "nazreen-anvar", name: "Nazreen + Anvar" },
    { id: "thasnim-thalib", name: "Thasnim + Thalib" },
    { id: "tayyaba-taqvi", name: "Tayyaba + Taqvi" },
    { id: "kais-hira", name: "Kais Hira" },
    { id: "kalila-samarudeen", name: "Kalila + Samarudeen" },
    { id: "mrc", name: "MRC" }
  ];

  // State to track which client's images to display for each section
  const [activeTraditionalClient, setActiveTraditionalClient] = useState(traditionalClients[0].id);
  const [activeChristianClient, setActiveChristianClient] = useState(christianClients[0].id);
  const [activeMuslimClient, setActiveMuslimClient] = useState(muslimClients[0].id);

  // Traditional Marriage image arrays
  const ramuSangeethaImages = [
    {
      id: 1,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Ramu and Sangeetha marriage decoration with golden drapes"
    },
    {
      id: 2,
      src: "https://vermiliondecors.com/assets/images/gallery/e2.webp",
      alt: "Ramu and Sangeetha marriage stage decoration"
    }
  ];

  const vigneshKeerthiImages = [
    {
      id: 3,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Vignesh and Keerthi marriage with golden theme"
    },
    {
      id: 4,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Vignesh and Keerthi marriage hall decoration"
    }
  ];

  const aravindMathuraImages = [
    {
      id: 5,
      src: "https://vermiliondecors.com/assets/images/gallery/e5.webp",
      alt: "Aravind and Mathura marriage stage with golden curtains"
    },
    {
      id: 6,
      src: "https://vermiliondecors.com/assets/images/gallery/e6.webp",
      alt: "Aravind and Mathura marriage entrance decoration"
    }
  ];

  const gowthamJayalakshmiImages = [
    {
      id: 7,
      src: "https://vermiliondecors.com/assets/images/gallery/e7.webp",
      alt: "Gowtham and Jayalakshmi marriage hall with golden theme"
    },
    {
      id: 8,
      src: "https://vermiliondecors.com/assets/images/gallery/e8.webp",
      alt: "Gowtham and Jayalakshmi marriage stage decoration"
    }
  ];

  // Christian Wedding image arrays
  const tarunNandiniImages = [
    {
      id: 9,
      src: "https://vermiliondecors.com/assets/images/gallery/e1.webp",
      alt: "Tarun and Nandini Christian wedding couple"
    },
    {
      id: 10,
      src: "https://vermiliondecors.com/assets/images/gallery/e2.webp",
      alt: "Tarun and Nandini Christian wedding decoration"
    }
  ];

  const jenniferShashiImages = [
    {
      id: 11,
      src: "https://vermiliondecors.com/assets/images/gallery/e3.webp",
      alt: "Jennifer and Shashi Christian wedding welcome sign"
    },
    {
      id: 12,
      src: "https://vermiliondecors.com/assets/images/gallery/e4.webp",
      alt: "Jennifer and Shashi Christian wedding stage"
    }
  ];

  const roshanJeninaImages = [
    {
      id: 13,
      src: "https://vermiliondecors.com/assets/images/gallery/e5.webp",
      alt: "Roshan and Jenina Christian wedding couple"
    },
    {
      id: 14,
      src: "https://vermiliondecors.com/assets/images/gallery/e6.webp",
      alt: "Roshan and Jenina Christian wedding decoration"
    }
  ];

  const junderMathuraImages = [
    {
      id: 15,
      src: "https://vermiliondecors.com/assets/images/gallery/e7.webp",
      alt: "Junder and Mathura Christian wedding couple in red"
    },
    {
      id: 16,
      src: "https://vermiliondecors.com/assets/images/gallery/e8.webp",
      alt: "Junder and Mathura Christian wedding decoration"
    }
  ];

  const weslinDeborahImages = [
    {
      id: 17,
      src: "https://vermiliondecors.com/assets/images/gallery/e9.webp",
      alt: "Weslin and Deborah Christian wedding couple"
    }
  ];

  const vasanthImages = [
    {
      id: 18,
      src: "https://vermiliondecors.com/assets/images/gallery/e10.webp",
      alt: "Vasanth Christian wedding decoration"
    }
  ];

  const arunDeepshiImages = [
    {
      id: 19,
      src: "https://vermiliondecors.com/assets/images/gallery/e11.webp",
      alt: "Arun and Deepshi Christian wedding couple"
    }
  ];

  // Muslim Wedding image arrays
  const khaleemulDeepthyImages = [
    {
      id: 20,
      src: "https://vermiliondecors.com/assets/images/gallery/e12.webp",
      alt: "Khaleemul and Deepthy Muslim wedding decoration"
    },
    {
      id: 21,
      src: "https://vermiliondecors.com/assets/images/gallery/e13.webp",
      alt: "Khaleemul and Deepthy Muslim wedding stage"
    }
  ];

  const anwasShanaImages = [
    {
      id: 22,
      src: "https://vermiliondecors.com/assets/images/gallery/e14.webp",
      alt: "Anwas and Shana Muslim wedding hall decoration"
    },
    {
      id: 23,
      src: "https://vermiliondecors.com/assets/images/gallery/e15.webp",
      alt: "Anwas and Shana Muslim wedding stage"
    }
  ];

  const farhanAafiyaImages = [
    {
      id: 24,
      src: "https://vermiliondecors.com/assets/images/gallery/e16.webp",
      alt: "Farhan and Aafiya Muslim wedding ceiling decoration"
    },
    {
      id: 25,
      src: "https://vermiliondecors.com/assets/images/gallery/e17.webp",
      alt: "Farhan and Aafiya Muslim wedding hall"
    }
  ];

  const nazreenAnvarImages = [
    {
      id: 26,
      src: "https://vermiliondecors.com/assets/images/gallery/e18.webp",
      alt: "Nazreen and Anvar Muslim wedding couple"
    }
  ];

  // Empty arrays for clients without images yet
  const thasnimThalibImages = [];
  const tayyabaTaqviImages = [];
  const kaisHiraImages = [];
  const kalilaSamarudeenImages = [];
  const mrcImages = [];

  // Functions to get images based on active client
  const getTraditionalImages = () => {
    switch (activeTraditionalClient) {
      case "ramu-sangeetha":
        return ramuSangeethaImages;
      case "vignesh-keerthi":
        return vigneshKeerthiImages;
      case "aravind-mathura":
        return aravindMathuraImages;
      case "gowtham-jayalakshmi":
        return gowthamJayalakshmiImages;
      default:
        return ramuSangeethaImages;
    }
  };

  const getChristianImages = () => {
    switch (activeChristianClient) {
      case "tarun-nandini":
        return tarunNandiniImages;
      case "jennifer-shashi":
        return jenniferShashiImages;
      case "roshan-jenina":
        return roshanJeninaImages;
      case "junder-mathura":
        return junderMathuraImages;
      case "weslin-deborah":
        return weslinDeborahImages;
      case "vasanth":
        return vasanthImages;
      case "arun-deepshi":
        return arunDeepshiImages;
      default:
        return tarunNandiniImages;
    }
  };

  const getMuslimImages = () => {
    switch (activeMuslimClient) {
      case "khaleemul-deepthy":
        return khaleemulDeepthyImages;
      case "anwas-shana":
        return anwasShanaImages;
      case "farhan-aafiya":
        return farhanAafiyaImages;
      case "nazreen-anvar":
        return nazreenAnvarImages;
      case "thasnim-thalib":
        return thasnimThalibImages;
      case "tayyaba-taqvi":
        return tayyabaTaqviImages;
      case "kais-hira":
        return kaisHiraImages;
      case "kalila-samarudeen":
        return kalilaSamarudeenImages;
      case "mrc":
        return mrcImages;
      default:
        return khaleemulDeepthyImages;
    }
  };

  // Get filtered images for each section
  const traditionalImages = getTraditionalImages();
  const christianImages = getChristianImages();
  const muslimImages = getMuslimImages();

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
            fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Responsive font size
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

        {/* Traditional Marriage Section */}
        <div className="traditional-marriage-section mb-5">
          {/* Traditional Marriage Client Names as Filter Buttons */}
          <div className="client-names d-flex flex-wrap justify-content-center mb-4">
            {traditionalClients.map((client) => (
              <Button
                key={client.id}
                variant={activeTraditionalClient === client.id ? "primary" : "outline-secondary"}
                className="m-1"
                onClick={() => setActiveTraditionalClient(client.id)}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  borderRadius: "4px",
                  color: activeTraditionalClient === client.id ? "#fff" : "#333",
                  borderColor: "#ccc"
                }}
              >
                {client.name}
              </Button>
            ))}
          </div>

          {/* Traditional Marriage Gallery Grid */}
          <div className="gallery-grid">
            {traditionalImages.length > 0 ? (
              <Row>
                {traditionalImages.map(image => (
                  <Col key={image.id} xs={12} sm={6} md={4} className="gallery-item mb-4">
                    <div className="gallery-image-container" style={{ overflow: 'hidden' }}>
                      <img 
                        src={image.src || "/placeholder.svg"} 
                        alt={image.alt} 
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
                  No images available for this client yet. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Christian Wedding Section */}
        <div className="christian-wedding-section mb-5">
          <h2 
            className="text-center mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)'
            }}
          >
            Christian Wedding
          </h2>

          {/* Christian Wedding Client Names as Filter Buttons */}
          <div className="client-names d-flex flex-wrap justify-content-center mb-4">
            {christianClients.map((client) => (
              <Button
                key={client.id}
                variant={activeChristianClient === client.id ? "primary" : "outline-secondary"}
                className="m-1"
                onClick={() => setActiveChristianClient(client.id)}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  borderRadius: "4px",
                  color: activeChristianClient === client.id ? "#fff" : "#333",
                  borderColor: "#ccc"
                }}
              >
                {client.name}
              </Button>
            ))}
          </div>

          {/* Christian Wedding Gallery Grid */}
          <div className="gallery-grid">
            {christianImages.length > 0 ? (
              <Row>
                {christianImages.map(image => (
                  <Col key={image.id} xs={12} sm={6} md={4} className="gallery-item mb-4">
                    <div className="gallery-image-container" style={{ overflow: 'hidden' }}>
                      <img 
                        src={image.src || "/placeholder.svg"} 
                        alt={image.alt} 
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
                  No images available for this client yet. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Muslim Wedding Section */}
        <div className="muslim-wedding-section mb-5">
          <h2 
            className="text-center mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)'
            }}
          >
            Muslim Wedding
          </h2>

          {/* Muslim Wedding Client Names as Filter Buttons */}
          <div className="client-names d-flex flex-wrap justify-content-center mb-4">
            {muslimClients.map((client) => (
              <Button
                key={client.id}
                variant={activeMuslimClient === client.id ? "primary" : "outline-secondary"}
                className="m-1"
                onClick={() => setActiveMuslimClient(client.id)}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  borderRadius: "4px",
                  color: activeMuslimClient === client.id ? "#fff" : "#333",
                  borderColor: "#ccc"
                }}
              >
                {client.name}
              </Button>
            ))}
          </div>

          {/* Muslim Wedding Gallery Grid */}
          <div className="gallery-grid">
            {muslimImages.length > 0 ? (
              <Row>
                {muslimImages.map(image => (
                  <Col key={image.id} xs={12} sm={6} md={4} className="gallery-item mb-4">
                    <div className="gallery-image-container" style={{ overflow: 'hidden' }}>
                      <img 
                        src={image.src || "/placeholder.svg"} 
                        alt={image.alt} 
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
                  No images available for this client yet. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Use the Testimonials Component */}
      <Testimonials />
    </div>
  );
};

export default MarriageDecoration;