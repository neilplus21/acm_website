import React from 'react';
import styles from './Members.module.css';  // Importing CSS module
import { useMemo } from 'react';
import { useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Footer from '../Footer/Footer';
import HexagonParticles from '../../HexagonParticles';
// as of now it's temporarily here, later we'll make a separate JSON file
const membersData = [
  {
    name: "Neil",
    role: "ChairPerson",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355947/neil_y4xsjt.jpg',
    profilePic: '/images/neill.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'officeBearer'

  },
  {
    name: "Namratha",
    role: "Vice ChairPerson ",
    about: "Creating seamless user experiences and elegant design solutions.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355981/nam_rdh6ri.jpg',
    profilePic: '/images/nam.webp',
    socialLinks: {
      instagram: "https://instagram.com/janedoe",
      linkedin: "https://twitter.com/janedoe",
      github: "https://github.com/janedoe"
    },
    category: 'officeBearer'
  },
  {
    name: "Rashmitha R Bangera",
    role: "Treasurer",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355980/RashmithaRB_vrfpck.jpg',
    profilePic: '/images/Rashmitha.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'officeBearer'

  },
  {
    name: "Kushagr Sharma",
    role: "Web Master",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729365119/kush_wsph8a.jpg',
    profilePic: '/images/kkk.jpg',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://www.linkedin.com/in/kushagr-sharma-a26651258/",
      github: "https://github.com"
    },
    category: 'officeBearer'

  },

  {
    name: "Sannidhi S Shetty",
    role: "Secretary",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355969/sannidhi_zfmnb7.jpg',
    profilePic: '/images/sannidhi.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'officeBearer'
  },

  {
    name: "Sujal Sunil Badde",
    role: "Vice Secretary",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355947/Sujal_eo3zte.jpg',
    profilePic: '/images/Sujal.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'officeBearer'

  },
  {
    name: "Shaldon Barnes",
    role: " Co Web Master",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729365279/IMG_3364_posa3d.jpg',
    profilePic: '/images/sheldon.jpg',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://www.linkedin.com/in/kushagr-sharma-a26651258/",
      github: "https://github.com"
    },
    category: 'creative'

  },
  {
    name: "Eshaan",
    role: "Graphic Designer",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355947/eeshan_gs5roq.jpg',
    profilePic: '/images/eeshan.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'
  },
  {
    name: "Sarang Sudheer",
    role: "Graphic Designer",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355946/Sarang_pxzxmq.jpg',
    profilePic: '/images/sarang.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'
  },

  {
    name: "Prateeksha",
    role: "Graphic Designer",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355970/prat_rtrvao.jpg',
    profilePic: '/images/prat.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'
  },
  {
    name: "Aakash",
    role: "Photography Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355949/Aakash_brjcge.png',
    profilePic: '/images/Aakash.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'

  },
  {
    name: "N Ajay G Kamath",
    role: "Photography Co-Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355982/ajay_h14ovt.jpg',
    profilePic: '/images/ajay.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'
  },
  {
    name: "V Mithun Mallya",
    role: "Photography Co-Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355968/MITHUN_ad27z6.jpg',
    profilePic: '/images/MITHUN.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'
  },
  {
    name: "Swasthi Shetty",
    role: "Event Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355946/Swasthi_rifmag.jpg',
    profilePic: '/images/Swasthi.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Anagha",
    role: "Event Co-Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355981/anagha_o9u31e.jpg',
    profilePic: '/images/anagha.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },


  {
    name: "Harshita Hegde",
    role: "Publicity Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355982/harshita_urqgeh.jpg',
    profilePic: '/images/harshita.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Gokul Anil",
    role: "Co-Publicity Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355972/gokul_uhudfi.jpg',
    profilePic: '/images/gokul.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "V Sreelasya",
    role: "Social Media Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355981/lasya_sbsa0g.jpg',
    profilePic: '/images/laasya.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Thanmayi",
    role: "Social Media  Co-Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355965/Thanmayi_se0j7k.jpg',
    profilePic: '/images/Thanmayi.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Diya M Shetty",
    role: "Documentation Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355968/diya_cnbahk.jpg',
    profilePic: '/images/diya.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Dhruva Shedbalkar",
    role: "Documentation Co-Head",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355983/dhruva_x4kbcj.jpg',
    profilePic: '/images/dhruva.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Shawn",
    role: "3rd Year Representative",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355945/shawn_ov7ou9.png',
    profilePic: '/images/shawn.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Susan Riona D'souza",
    role: "Second Year Representative",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355969/Susan_xvahk6.jpg',
    profilePic: '/images/susan.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com", 
      github: "https://github.com"
    },
    category: 'operation'

  },


];
const Members = () => {
  // Initialize Locomotive Scroll
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#scroll-container'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const renderMemberGroup = (category, title) => {
    const members = membersData.filter(member => member.category === category);

    if (members.length === 0) return null;

    return (
      <section className={styles.groupSection} id={category}>
      <HexagonParticles />
        <h2 className={styles.sectionHeading}>{title}</h2>
        <div className={styles.section}>
          {members.map((member, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.profilePic}>
                <img
                  src={member.profilePic}
                  alt={`Profile of ${member.name}`}
                />
              </div>
              <div className={styles.details}>
                <h2>{member.name}</h2>
                <p className={styles.tag}>{member.role}</p>
                <p className={styles.about}>{member.about}</p>
                <div className={styles.buttons}>
                  <div className={styles.social}>
                    <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <>

      <div id="scroll-container" className={styles.membersContainer}>
        <div className={styles.info}>
          {renderMemberGroup('officeBearer', 'Executive')}
          {renderMemberGroup('creative', 'Creative')}
          {renderMemberGroup('operation', 'Operations')}
        </div>
        <Footer />
      </div>

    </>

  );
};

export default Members;