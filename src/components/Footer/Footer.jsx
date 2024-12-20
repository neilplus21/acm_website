import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Team', 'Events'];

  const socialLinks = [
    { name: 'facebook', icon: faFacebookF, url: '#' },
    { name: 'linkedin', icon: faLinkedinIn, url: '#' },
    { name: 'instagram', icon: faInstagram, url: '#' },
    { name: 'github', icon: faGithub, url: '#' },
    { name: 'twitter', icon: faTwitter, url: '#' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <img 
              src="/images/acm.png" 
              alt="ACM Logo" 
              className={styles.logo} 
            />
            <div className={styles.mainhead}>
              <div className={styles.title}>Association for</div>
              <div className={styles.title}>Computing Machinery</div>
              <div className={styles.subtitle}>NMAMIT Student Chapter</div>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* About Section */}
          <div className={styles.aboutSection}>
            <p className={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.quickLinks}>
            <h2 className={styles.sectionTitle}>Quick Links</h2>
            <nav className={styles.linksNav}>
              {quickLinks.map((link) => (
                <div key={link} className={styles.linkItem}>
                  <a href="#" className={styles.link}>{link}</a>
                </div>
              ))}
            </nav>
          </div>

          {/* Contact and Links Section */}
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Contact Us</h2>
              <div className={styles.infoItem}>
                <span>NMAMIT</span>
              </div>
              <div className={styles.infoItem}>
                <span>something.edu.in</span>
              </div>
            </div>

            <div className={styles.additionalLinks}>
              <h2 className={styles.sectionTitle}>Connect</h2>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    className={styles.socialLink}
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className={styles.socialIcon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className={styles.mapSection}>
            <h2 className={styles.sectionTitle}>Find Us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.6730533394875!2d74.93141407508013!3d13.18300258715209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb56415ad85e5b%3A0x10b77ac6f6afc7fa!2sN.M.A.M.%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1733416769802!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
