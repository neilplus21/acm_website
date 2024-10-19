import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Navbar.module.css';
import i from '../Navbar/acm_img.png'
import Pages from '../../Pages';
const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showHero, setShowHero] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    if (!expanded) {
      gsap.to(`.${styles.dynamicCircle}`, {
        y: -20,
        duration: 0.3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.3,
      });
    } else {
      gsap.killTweensOf(`.${styles.dynamicCircle}`);
    }

    if (expanded) {
      tl.to(`.${styles.dynamicCircle}`, {
        y: -(window.innerHeight / 2 - 50),
        scale: 1,
        duration: 0.2,
        backgroundColor: '#ff4757',
        ease: 'power3.out',
      });

      tl.to(
        `.${styles.navbar}`,
        {
          width: '90%',
          height: '50px',
          backgroundColor: 'black',
          borderRadius: '30px',
          duration: 0.2,
          ease: 'power2.out',
        },
        '-=0.4'
      ).then(() => {
        setShowHero(true);
      });
    }
  }, [expanded]);

  return (
    <>
      <div className='fakebody'>
        <nav className={`${styles.navbar} ${expanded ? styles.expanded : ''}`}>
          <div className={styles.navbarContent}>
            <button className={styles.dynamicButton} onClick={toggleNavbar}>
              <div
                className={`${styles.dynamicCircle} ${expanded ? styles.active : ''
                  }`}
              >
                <div className={styles.dynamicInfo}>
                  <span className={styles.infoText}>🎊</span>
                </div>
              </div>
            </button>
            {expanded && (
              <ul className={styles.menu}>
                {/* Replace 'i' with the correct image import if needed */}
                <img className={styles.logo} src={i} alt="Logo" />
                <li className={styles.right}>Home</li>
                <li>Events</li>
                <li>Team</li>
                <li>Contact Us</li>
              </ul>
            )}
          </div>
        </nav>
      </div>

    </>
  );
};

export default Navbar;
