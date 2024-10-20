import React from 'react';
import styles from './Navbar.module.css'; 

const Navbar = ({ onNavigate }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <img className={styles.logo} src='/images/acm.png' alt="Logo" />
        <ul className={styles.menu}>
          <li className={styles.menuItem} onClick={() => onNavigate('#section1')}>Home</li>
          <li className={styles.menuItem} onClick={() => onNavigate('#section2')}>About</li>
          <li className={styles.menuItem} onClick={() => onNavigate('#section3')}>Events</li>
          <li className={styles.menuItem} onClick={() => onNavigate('#section4')}>Team</li>
          <li className={styles.menuItem} onClick={() => onNavigate('#section5')}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

