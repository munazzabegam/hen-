import "./ArtisticStyle.css";

const styles = [
  {
    number: "01",
    title: "Intricate Details",
    description:
      "Fine lines and delicate patterns that bring every design to life.",
  },
  {
    number: "02",
    title: "Floral Motifs",
    description:
      "Inspired by nature, creating graceful and timeless floral artwork.",
  },
  {
    number: "03",
    title: "Creative Expression",
    description:
      "Every hand is a canvas for creativity, individuality and beautiful details.",
  },
];

function ArtisticStyle() {
  return (
    <section className="artistic-style" id="style">
      <div className="style-header">
        <p className="section-tag">MY CREATIVE APPROACH</p>
        <h2>The Art in Every Detail</h2>
        <p>
          A little creativity, a little patience,
          and a whole lot of love.
        </p>
      </div>

      <div className="style-grid">
        {styles.map((item) => (
          <article className="style-card" key={item.number}>
            <span className="style-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ArtisticStyle;
