import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min"; // Import Rings effect

const VantaRings = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (!vantaRef.current) return;

    vantaEffect = RINGS({
      el: vantaRef.current,
      THREE,
      color: 0xd4d490, // Brighter teal color for the rings
      backgroundColor: 0x0, 
      rings: 10, 
      amplitude: 0.5, // Amplitude of the rings
      xOffset: 2, // Horizontal movement
      yOffset: 0.5, // Vertical movement
      size: 1.2, // Size of the rings
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ height: "100vh", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0%", 
          transform: "translateY(-50%)", 
          color: "#ffffff", 
          padding: "20px",
          borderRadius: "10px",
          textAlign: "left", 
          font: '1vw',  
        }}
      >
        <h1 style={{ fontSize: '5rem', lineHeight: '1.5' }}>Association for</h1>
        <h1 style={{ fontSize: '5rem', lineHeight: '1.5' }}>Computing Machinery</h1>
        <h1 style={{ fontSize: '4rem', lineHeight: '1.5' }}>@NMAMIT</h1>
      </div>

    </div>
  );
};

export default VantaRings;
