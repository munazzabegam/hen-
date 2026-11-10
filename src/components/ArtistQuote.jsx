import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./ArtistQuote.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ArtistQuote() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".quote-content", {
      opacity: 0,
      y: 50,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".artist-quote",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <section className="artist-quote" ref={sectionRef}>
      <div className="quote-content">
        <span className="quote-symbol">“</span>

        <p className="quote-text">
          Every line is drawn with patience,
          every design created with love.
        </p>

        <span className="quote-divider"></span>

        <p className="quote-author">THE ART OF MUNNA'S HENNA</p>
      </div>
    </section>
  );
}

export default ArtistQuote;
