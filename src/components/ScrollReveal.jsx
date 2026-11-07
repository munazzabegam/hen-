import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}) {
  const container = useRef(null);

  const animations = {
    up: { y: 45, x: 0 },
    down: { y: -45, x: 0 },
    left: { x: -45, y: 0 },
    right: { x: 45, y: 0 },
  };

  useGSAP(
    () => {
      gsap.from(container.current, {
        ...animations[direction],
        opacity: 0,
        duration: 1.1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

export default ScrollReveal;
