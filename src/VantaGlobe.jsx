import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min"; // Import the GLOBE effect

const VantaGlobe = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (!vantaRef.current) return;

    vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE, // Pass the Three.js instance
      color: 0xc5c4c4, //  color 
      backgroundColor: 0x130d24, // Background color 
      size: 1, // Adjust globe size
      points: 0, // Density of points
      maxDistance: 20.0, // Distance between points
      spacing: 15.0, // Space between particles
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Clean up effect
    };
  }, []);

  return <div ref={vantaRef} style={{ height: "100vh", width: "100%" }} />;
};

export default VantaGlobe;
