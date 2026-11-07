import "./Instagram.css";

function Instagram() {
  return (
    <section className="instagram-section" id="instagram">
      <p className="section-tag">FOLLOW MY JOURNEY</p>

      <h2>More of My Henna Art</h2>

      <p className="instagram-description">
        Discover more designs, creative moments
        and the little details behind my art.
      </p>

      <a
        href="https://www.instagram.com/henna_by_munnaa/"
        target="_blank"
        rel="noreferrer"
        className="instagram-button"
      >
        Follow on Instagram ↗
      </a>

      <span className="instagram-handle">
        @henna_by_munnaa
      </span>
    </section>
  );
}

export default Instagram;
