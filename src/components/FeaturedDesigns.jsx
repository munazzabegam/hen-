import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./FeaturedDesigns.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".featured",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.from(".featured-header > div", {
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: "power3.out",
    })
      .from(
        ".featured-description",
        {
          opacity: 0,
          y: 25,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".featured-card",
        {
          opacity: 0,
          y: 65,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        ".featured-footer",
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, { scope: sectionRef });

  return (
    <section className="featured" id="featured" ref={sectionRef}>
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
              <img src={design.image} alt={design.title} loading="lazy" />
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
