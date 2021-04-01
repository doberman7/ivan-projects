const particlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: 10,
  },
  particles: {
    number: {
      value: 200,
      limit: 300,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#F5607E",
      // value: "#337DFF",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 3,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "images/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3,
      random: true,
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 10,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#000",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 0.3,
        speed: 2,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  fps_limit: 60,
};

export default particlesConfig;
