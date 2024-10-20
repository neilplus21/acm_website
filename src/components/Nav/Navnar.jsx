import React from 'react';
import styles from './Navbar.module.css'; // Import CSS module
import i from '/images/acm_img.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <img className={styles.logo} src={i} alt="Logo" />
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Events</li>
          <li>Team</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
