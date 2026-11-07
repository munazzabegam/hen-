import { useState, useEffect } from "react";
import "./Gallery.css";

const designs = [
  "/images/design-1.jpg",
  "/images/design-2.jpg",
  "/images/design-3.jpg",
  "/images/design-4.jpg",
  "/images/design-5.jpg",
  "/images/design-6.jpg",
];

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % designs.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + designs.length) % designs.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section className="gallery" id="gallery">
      {/* Gallery Heading */}
      <div className="gallery-header">
        <span className="section-label">THE ART COLLECTION</span>

        <h2>
          My Henna <span>Gallery</span>
        </h2>

        <p>A glimpse into my favourite henna creations.</p>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {designs.map((image, index) => (
          <button
            className="gallery-item"
            key={image}
            onClick={() => setSelectedIndex(index)}
            aria-label={`View henna design ${index + 1}`}
          >
            <img
              src={image}
              alt={`Henna design ${index + 1}`}
              loading="lazy"
            />

            <div className="gallery-overlay">
              <span>
                View Design <span className="gallery-arrow">↗</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              prevImage();
            }}
            aria-label="Previous design"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={designs[selectedIndex]}
              alt={`Henna design ${selectedIndex + 1}`}
            />

            <div className="lightbox-counter">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(designs.length).padStart(2, "0")}
            </div>
          </div>

          <button
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next design"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
