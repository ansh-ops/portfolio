import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);

    handleChange();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  if (reducedMotion) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#8dc8ff",
          },
          line_linked: {
            enable: true,
            color: "#d9efff",
            opacity: 0.2,
          },
          move: {
            direction: "none",
            speed: 0.2,
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.45,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.15,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
            },
            onhover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 120,
              line_linked: {
                opacity: 0.35,
              },
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
