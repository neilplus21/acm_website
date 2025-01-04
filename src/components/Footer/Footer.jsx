import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { useScramble } from 'use-scramble';
import { gsap } from 'gsap';
import styles from './Footer.module.css';

const Footer = () => {
  const { ref: scrambleRef1, replay: scrambleReplay1 } = useScramble({
    text: 'Association for',
    speed: 0.5,
  });
  const { ref: scrambleRef2, replay: scrambleReplay2 } = useScramble({
    text: 'Computing Machinery',
    speed: 0.4,
  });
  const { ref: scrambleRef3, replay: scrambleReplay3 } = useScramble({
    text: 'NMAMIT Student Chapter',
    speed: 0.3,
  });

  // GSAP animation for text entrance
  useEffect(() => {
    gsap.from('.scramble-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, []);
  const socialLinks = [
    { name: 'linkedin', icon: faLinkedinIn, url: 'https://www.linkedin.com/company/acm-nmamit/' },
    { name: 'instagram', icon: faInstagram, url: 'https://www.instagram.com/acm_nitte/' },
    { name: 'github', icon: faGithub, url: 'https://github.com/acmnmamit' },
  ];

  return (
    <>
      <div className={styles.bigcontainer}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            {/* Header Section */}
            <header className={styles.header}>
            <div className={styles.logoContainer}>
              <div className={styles.mainhead}>
                <div
                  ref={scrambleRef1}
                  onMouseEnter={() => scrambleReplay1()}
                  className={styles.title}
                >Association for
                </div>
                <div
                  ref={scrambleRef2}
                  onMouseEnter={() => scrambleReplay2()}
                  className={styles.title}
                >Computing Machinery
                </div>
                <div
                  ref={scrambleRef3}
                  onMouseEnter={() => scrambleReplay3()}
                  className={styles.subtitle}
                >NMAMIT Student Chapter
                </div>
              </div>
            </div>
          </header>
           {/* <header className={styles.header}>
              <div className={styles.logoContainer}>
                <div className={styles.mainhead}>
                  <div className={styles.title}>Association for</div>
                  <div className={styles.title}>Computing Machinery</div>
                  <div className={styles.subtitle}>NMAMIT Student Chapter</div>
                </div>
              </div>
            </header> */}

            {/* Main Content Grid */}
            <div className={styles.mainGrid}>
              {/* About Section */}
              <div className={styles.aboutSection}>
                <h2 className={styles.sectionTitle}>Find Us</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.6730533394875!2d74.93141407508013!3d13.18300258715209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb56415ad85e5b%3A0x10b77ac6f6afc7fa!2sN.M.A.M.%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1733416769802!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapSectionIframe}
                ></iframe>
              </div>

              {/* Contact Section */}
              <div className={styles.contactSection}>
                <h2 className={styles.sectionTitle}>Contact Us</h2>
                <div className={styles.contactInfo}>
                  <div>acmnmamit24@gmail.com
                  </div>
                </div>
                <h2 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>Connect</h2>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={styles.socialLink}
                      aria-label={social.name}
                      target="_blank" 
                    >
                      <FontAwesomeIcon icon={social.icon} className={styles.socialIcon} />
                    </a>
                  ))}
                </div>
              </div>


            </div>
          </div>


        </div>
        <div className={styles.footerBottom}>
          © 2025 NMAMIT ACM Student Chapter. All rights reserved.
        </div>

      </div>


    </>

  );
};

export default Footer;