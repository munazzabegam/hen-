import "./FeaturedDesigns.css";

const designs = [
  {
    image: "/images/design-1.jpg",
    title: "Floral Elegance",
    number: "01",
  },
  {
    image: "/images/design-2.jpg",
    title: "Intricate Details",
    number: "02",
  },
  {
    image: "/images/design-3.jpg",
    title: "Traditional Art",
    number: "03",
  },
  {
    image: "/images/design-4.jpg",
    title: "Modern Patterns",
    number: "04",
  },
];

function FeaturedDesigns() {
  return (
    <section className="featured" id="featured">
      <div className="featured-header">
        <div>
          <p className="section-tag">A GLIMPSE OF MY ART</p>
          <h2>Selected Works</h2>
        </div>

        <p className="featured-description">
          A collection of designs created with patience,
          passion and love for the art of henna.
        </p>
      </div>

      <div className="featured-grid">
        {designs.map((design) => (
          <article className="featured-card" key={design.number}>
            <div className="featured-image">
              <img src={design.image} alt={design.title} />
              <span className="featured-number">
                {design.number}
              </span>
            </div>

            <h3>{design.title}</h3>
          </article>
        ))}
      </div>

      <div className="featured-footer">
        <a href="#gallery" className="view-gallery">
          View All Designs <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default FeaturedDesigns;
