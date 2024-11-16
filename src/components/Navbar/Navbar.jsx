import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <img className={styles.logo} src='/images/acm.png' alt="Logo" />

        {/* Regular Menu (only shown on larger screens) */}
        <ul className={`${styles.menu} ${styles.desktopMenu}`}>
          <li className={styles.menuItem} onClick={() => onNavigate('#section1')}>Home</li>
          <li className={styles.menuItem} onClick={() => onNavigate('#section2')}>About</li>
          <li className={styles.menuItem} onClick={() => onNavigate('#section3')}>Events</li>
          <li className={styles.menuItem} onClick={() => onNavigate('#section4')}>Team</li>
          <li className={styles.menuItem} onClick={() => onNavigate('#section5')}>Contact Us</li>
        </ul>

        {/* Toggle Button and Overlay Menu for Mobile View */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMenuOpen && (
          <div className={styles.overlay} onClick={toggleMenu}>
            <ul className={styles.menu}>
              <li className={styles.menuItem} onClick={() => { onNavigate('#section1'); toggleMenu(); }}>Home</li>
              <li className={styles.menuItem} onClick={() => { onNavigate('#section2'); toggleMenu(); }}>About</li>
              <li className={styles.menuItem} onClick={() => { onNavigate('#section3'); toggleMenu(); }}>Events</li>
              <li className={styles.menuItem} onClick={() => { onNavigate('#section4'); toggleMenu(); }}>Team</li>
              <li className={styles.menuItem} onClick={() => { onNavigate('#section5'); toggleMenu(); }}>Contact Us</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
