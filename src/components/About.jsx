import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img
          src="/images/design-1.jpg"
          alt="Henna artist"
        />

        <div className="about-image-caption">
          <span>THE ARTIST</span>
          <span>Behind the Henna</span>
        </div>
      </div>

      <div className="about-content">
        <p className="section-tag">A LITTLE ABOUT ME</p>

        <h2>
          Every design
          <br />
          tells a story.
        </h2>

        <p className="about-intro">
          Henna is more than an art to me.
          It's a beautiful way of expressing creativity,
          patience and individuality.
        </p>

        <p className="about-description">
          Through every line, curve and intricate detail,
          I love creating designs that feel special and
          meaningful. Each hand becomes a canvas,
          and every design is created with love.
        </p>

        <a href="#gallery" className="about-link">
          Explore My Artwork <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default About;
