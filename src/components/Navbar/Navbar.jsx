import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes} from "react-icons/fa";
import Button from "../../Button";
import { useNavigate } from 'react-router-dom';
import i from './acm_logo.png'
const Navbar = ({onNavigate}) => {
  const navigate=useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scrolling when menu is open
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

  const handleClick=()=>{
    navigate('/magic')
  }

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
          <span className={styles.magic} onClick={handleClick}> <Button /></span>
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
        
            <li className={styles.menuItem}  onClick={() => { onNavigate('#section1'); toggleMenu(); }} >Home</li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section2'); toggleMenu(); }}>About</li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section3'); toggleMenu(); }}>Events </li>
            <li className={styles.menuItem} onClick={() => { onNavigate('#section4'); toggleMenu(); }}>Team</li>
            <li className={styles.menuItem}  onClick={() => { onNavigate('#section5'); toggleMenu(); }} >Contact Us</li>
          
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
