import "./Collections.css";

const designs = [
  {
    title: "Bridal Mehendi",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Arabic Designs",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Minimal Designs",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Traditional",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
];

function Collections() {
  return (
    <section className="collections" id="collections">
      <p className="section-tag">EXPLORE MY WORK</p>
      <h2>Design Collections</h2>

      <div className="collection-grid">
        {designs.map((design, index) => (
          <div className="collection-card" key={index}>
            <img src={design.image} alt={design.title} />
            <div className="collection-overlay">
              <h3>{design.title}</h3>
              <span>↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collections;
