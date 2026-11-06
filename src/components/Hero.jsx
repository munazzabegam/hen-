import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">THE ART OF HENNA</p>

        <h1>
          Henna art
          <br />
          with a personal touch
        </h1>

        <p className="hero-description">
          Elegant, intricate and customized mehendi
          designs for every occasion.
        </p>

        <div className="hero-buttons">
          <a href="#collections" className="btn-primary">
            Explore Designs →
          </a>

          <a href="#contact" className="btn-outline">
            Book Now
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
          alt="Elegant bridal henna inspiration"
        />
      </div>
    </section>
  );
}

export default Hero;
