import React from 'react';

const Button = () => {
  const fontFaceCSS = `
  @font-face {
    font-family: 'myfont';
    src: url('/src/menseal-semibold-CqC6yNDC.ttf') format('truetype');
  }
`;
  const styles = {


    wrapper: {
      position: 'relative'
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundSize: '300% 300%',
      cursor: 'pointer',
      backdropFilter: 'blur(1rem)',
      borderRadius: '0.5rem',
      transition: '0.5s',
      border: 'double 4px transparent',
      backgroundImage: 'linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
      animation: 'gradient_301 5s ease infinite',
    },
    containerStars: {
      position: 'absolute',
      zIndex: -1,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      transition: '0.5s',
      backdropFilter: 'blur(1rem)',
      borderRadius: '5rem',
    },
    strong: {
      zIndex: 2,
      fontFamily: 'myfont',
      fontSize: '1rem',
      letterSpacing: '5px',
      color: '#ffffff',
      textShadow: '0 0 4px white',
    },
    glow: {
      position: 'absolute',
      display: 'flex',
      width: '12rem',
    },
    circle: {
      width: '100%',
      height: '30px',
      filter: 'blur(2rem)',
      animation: 'pulse_3011 4s infinite',
      zIndex: -1,
    },
    circle1: {
      background: 'rgba(254, 83, 186, 0.636)',
    },
    circle2: {
      background: 'rgba(142, 81, 234, 0.704)',
    },
    stars: {
      position: 'relative',
      background: 'transparent',
      width: '200rem',
      height: '200rem',
    },
  };

  const keyframes = `
    @keyframes animStar {
      from { transform: translateY(0); }
      to { transform: translateY(-135rem); }
    }
    @keyframes animStarRotate {
      from { transform: rotate(360deg); }
      to { transform: rotate(0); }
    }
    @keyframes gradient_301 {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes pulse_3011 {
      0% {
        transform: scale(0.75);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }
      100% {
        transform: scale(0.75);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
  `;

  const additionalCSS = `
    .btn {
      width: 13rem;
      height: 3rem;
    }
    
    .btn:hover #container-stars {
      z-index: 1;
      background-color: #212121;
    }
    .btn:hover {
      transform: scale(1.1);
    }
    .btn:active {
      border: double 4px #fe53bb;
      background-origin: border-box;
      background-clip: content-box, border-box;
      animation: none;
    }
    .btn:active .circle {
      background: #fe53bb;
    }
    #stars::after {
      content: "";
      position: absolute;
      top: -10rem;
      left: -100rem;
      width: 100%;
      height: 100%;
      animation: animStarRotate 90s linear infinite;
      background-image: radial-gradient(#ffffff 1px, transparent 1%);
      background-size: 50px 50px;
    }
    #stars::before {
      content: "";
      position: absolute;
      top: 0;
      left: -50%;
      width: 170%;
      height: 500%;
      animation: animStar 60s linear infinite;
      background-image: radial-gradient(#ffffff 1px, transparent 1%);
      background-size: 50px 50px;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      .btn {
        width: 8rem !important;
        height: 2.6rem !important;
      }
      .btn strong {
        font-size: 3vw !important;
        letter-spacing: 2px;
      }
    }
      @media (max-width: 1024px) { 
   .btn {
        width: 9.5rem !important;
        height: 3rem !important;
      }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <style>{additionalCSS}</style>
      <div style={styles.wrapper}>
        <button type="button" className="btn" style={styles.button}>
          <strong style={styles.strong}>MAGIC</strong>
          <div id="container-stars" style={styles.containerStars}>
            <div id="stars" style={styles.stars} />
          </div>
          <div id="glow" style={styles.glow}>
            <div className="circle" style={{ ...styles.circle, ...styles.circle1 }} />
            <div className="circle" style={{ ...styles.circle, ...styles.circle2 }} />
          </div>
        </button>
      </div>
    </>
  );
};

export default Button;