

particlesJS('particles--js',
  
{
  "particles": {
    "number": {
      "value": 101,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#bedcaf"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#cafedb"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.19228920296125387,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.8,
        "opacity_min": 0.1,
        "sync": true
      }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 60,
        "size_min": 0.99,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 160,
      "color": "#ffffff",
      "opacity": 0.7,
      "width": 1.25
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 183,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 219,
        "size": 44,
        "duration": 1,
        "opacity": 0.4,
        "speed": 3
      },
      "repulse": {
        "distance": 146
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);