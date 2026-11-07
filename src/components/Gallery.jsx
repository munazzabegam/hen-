
import { useState } from "react";
import "./Gallery.css";

const designs = [
  { image: "/images/design-1.jpg", alt: "Floral henna design" },
  { image: "/images/design-2.jpg", alt: "Elegant hand mehendi" },
  { image: "/images/design-3.jpg", alt: "Intricate henna artwork" },
  { image: "/images/design-4.jpg", alt: "Traditional hand design" },
  { image: "/images/design-5.jpg", alt: "Minimal henna design" },
  { image: "/images/design-6.jpg", alt: "Detailed henna patterns" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <p className="section-tag">MY CREATIVE COLLECTION</p>
        <h2>My Henna Gallery</h2>
        <p>Every design is a little piece of art.</p>
      </div>

      <div className="gallery-grid">
        {designs.map((design, index) => (
          <button
            className="gallery-item"
            key={design.image}
            onClick={() => setSelectedImage(design)}
            aria-label={`View ${design.alt}`}
          >
            <img src={design.image} alt={design.alt} />
            <span className="gallery-item-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            &times;
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
