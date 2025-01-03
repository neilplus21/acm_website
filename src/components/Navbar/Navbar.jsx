import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope, FaUsers, FaCalendarAlt } from "react-icons/fa";

import i from './acm_logo.png'
const Navbar = ({onNavigate}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isMenuOpen]);

  return (
    <>

      <div
        className={`${styles.blurOverlay} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      />


      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>

          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src={i}
              alt="ACM Logo"  
            />
            <span className={styles.clubName}> @NMAMIT</span>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Menu Toggle"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />} 
          </button>
        </div>

        {/* Sliding Menu */}
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          <ul className={styles.menu}>
          
            {/* <li className={styles.menuItem}  onClick={() => { onNavigate('#section1'); toggleMenu(); }} ><FaHome size={20} color="#fff" /> Home</li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section2'); toggleMenu(); }}> <FaInfoCircle size={20} color="#fff" /> About</li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section3'); toggleMenu(); }}><FaCalendarAlt size={20} color="#fff" /> Events </li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section4'); toggleMenu(); }}>  <FaUsers size={20} color="#fff" /> Team</li>
            <li className={styles.menuItem}  onClick={() => { onNavigate('#section5'); toggleMenu(); }} >  <FaEnvelope size={20} color="#fff" /> Contact Us</li> */}
          
          
            <li className={styles.menuItem} onClick={() => { onNavigate('#section1'); toggleMenu(); }}>Home</li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section2'); toggleMenu(); }}>About</li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section3'); toggleMenu(); }}>Events</li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section4'); toggleMenu(); }}>Team</li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section5'); toggleMenu(); }}>Contact Us</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
