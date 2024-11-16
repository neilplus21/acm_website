import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const App = () => {
  const [init, setInit] = useState(false);

  // This should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#ff0000", "#00ff00", "#0000ff", "#ffdd00"], // Color gradient array
        },
        links: {
          enable: true,
          color: { value: "#ffffff" },
          opacity: 0.7,
          width: 3.5,
        },
        move: {
          enable: true,
          speed: 2,
          outModes: {
            default: "bounce",
          },

        },
        number: {
          value: 150,
          density: {
            enable: true,
            area: 100,
          },
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "polygon",
          options: {
            polygon: {
              sides: 6,
            },
          },
        },
        size: {
          value: 3,
          random: { enable: true, minimumValue: 1 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            quantity: 2,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default App;
