import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-tag", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })
        .from(
          ".hero-title span",
          {
            opacity: 0,
            y: 60,
            stagger: 0.18,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1"
        );

      gsap.to(".hero-image img", {
        scale: 1.08,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-content">
        <p className="hero-tag">THE ART OF BEAUTIFUL HENNA</p>

        <h1 className="hero-title">
          <span>Henna art</span>
          <span>with a</span>
          <span className="hero-highlight">personal touch.</span>
        </h1>

        <p className="hero-description">
          Beautifully detailed henna designs, created
          with love, creativity and a personal touch.
        </p>

        <div className="hero-buttons">
          <a href="#featured" className="btn-primary">
            Explore Designs <span>↗</span>
          </a>

          <a href="#contact" className="btn-outline">
            Book an Appointment
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/design-1.jpg"
          alt="Elegant hand henna artwork"
        />
      </div>
    </section>
  );
}

export default Hero;
