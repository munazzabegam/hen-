import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-brand">
        Munna's Henna
      </a>

      <p className="footer-message">
        Made with love, drawn with passion.
      </p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Munna's Henna.
        All artwork belongs to the artist.
      </div>
    </footer>
  );
}

export default Footer;
