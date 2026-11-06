import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="brand">
        <span className="brand-name">Munna's Henna</span>
        <span className="brand-subtitle">MEHENDI ARTIST</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#collections">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
        className="instagram-link"
      >
        Instagram ↗
      </a>
    </nav>
  );
}

export default Navbar;
