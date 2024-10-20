import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import styles from './Pages.module.css';
import Navbar from './components/Navbar/Navbar';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScramble } from 'use-scramble';
import Footer from './components/Footer/Footer';
import Events from './components/Event/Events';
import ProfileCard from './ProfileCard';
 import { Link } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';
 import { Navigate } from 'react-router-dom';
//all profiles 

const profiles = [
  {
    name: "Neil Mamen Prakash",
    role: "ChairPerson",
    // profilePic: "https://res.cloudinary.com/dskq6j62q/image/upload/v1729355947/neil_y4xsjt.jpg"
    profilePic:'/images/neill.webp'
  },
  {
    name: "Namratha M",
    role: "Vice ChairPerson",
    // profilePic: "https://res.cloudinary.com/dskq6j62q/image/upload/v1729355981/nam_rdh6ri.jpg"
    profilePic:'/images/nam.webp'

  },
  {
    name: "Rashmitha r Bhangera",
    role: "Tresures",
    // profilePic: "https://res.cloudinary.com/dskq6j62q/image/upload/v1729355980/RashmithaRB_vrfpck.jpg"

 profilePic:'/images/Rashmitha.webp'

  },

  {
    name: "Kushagr Sharma ",
    role: "Web Master",
    // profilePic: "https://res.cloudinary.com/dskq6j62q/image/upload/v1729365119/kush_wsph8a.jpg"
  profilePic:'/images/kkk.jpg'

  }

];


gsap.registerPlugin(useGSAP);

export default function Pages() {
  const navigate = useNavigate();
  const container = useRef(null);
  const scrollRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollInstanceRef = useRef(null);


  const { ref: scrambleRef1, replay: scrambleReplay1 } = useScramble({
    text: "Association for",
    speed: 0.5,
  });
  const { ref: scrambleRef2, replay: scrambleReplay2 } = useScramble({
    text: "Computing Machinery",
    speed: 0.3,
  });
  const { ref: scrambleRef3, replay: scrambleReplay3 } = useScramble({
    text: "@NMAMIT",
    speed: 0.4,
  });

  // this would be for upcomig events 
  const { ref: scrambleRef4, replay: scrambleReplay4 } = useScramble({
    text: "UPCOMING EVENTS... ",
    speed: 0.6,
  });
  const { ref: scrambleRef5, replay: scrambleReplay5 } = useScramble({
    text: "Our Team ",
    speed: 0.6,
  });

  const { ref: scrambleRef6, replay: scrambleReplay6 } = useScramble({
    text: "About",
    speed: 0.6,
  });




  // GSAP Animation
  useGSAP(() => {
    gsap.from('.animate-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      color: 'green'
    });

    gsap.from(buttonRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      delay: 2,
      ease: 'back.out(1.7)',
      color: 'pink'
    });
  }, { scope: container });

  // Locomotive Scroll initialization
  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
    });

    scrollInstanceRef.current = scrollInstance;

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);


  //this function on clik scrolls to next page or section 
  const handleScrollToSection2 = () => {
    if (scrollInstanceRef.current) {
      // Scroll to the section with the ID 'section2'
      scrollInstanceRef.current.scrollTo('#section2', {
        duration: 1000, // Smooth scroll duration (in milliseconds)
        offset: 0,
        easing: [0.25, 0.00, 0.35, 1.00],
      });
    }
  };

  const handleMouseEnter1 = () => scrambleReplay1();
  const handleMouseEnter2 = () => scrambleReplay2();
  const handleMouseEnter3 = () => scrambleReplay3();


  //for events 
  const handleMouseEnter4 = () => scrambleReplay4();
  const handleMouseEnter5 = () => scrambleReplay5();
  const handleMouseEnter6 = () => scrambleReplay6();


  const handleCoreClick=()=>{
    navigate('/team');
    console.log('clicked');
  }



  return (
    <div className={styles.pagesContainer} ref={scrollRef} data-scroll-container>
      {/* first page(Hero) */}
      <div className={styles.pageSection + ' ' + styles.section1} data-scroll-section ref={container}>
        <h1 ref={scrambleRef1} onMouseEnter={handleMouseEnter1} className="animate-text" data-scroll data-scroll-speed="1">Association for</h1>
        <h1 ref={scrambleRef2} className="animate-text" onMouseEnter={handleMouseEnter2} data-scroll data-scroll-speed="1">Computing Machinery</h1>
        <h1 ref={scrambleRef3} onMouseEnter={handleMouseEnter3} className="animate-text" data-scroll data-scroll-speed="1">@NMAMIT</h1>

        <button ref={buttonRef} className={styles.explore} onClick={handleScrollToSection2}>Explore</button>
      </div>

      {/* second page about section  */}
      <div id="section2" className={styles.pageSection + ' ' + styles.section2} data-scroll-section>
        <h1 ref={scrambleRef6} onMouseEnter={handleMouseEnter6} className="animate-text" data-scroll data-scroll-speed="2">About</h1>
        <h1  className="animate-text" data-scroll data-scroll-speed="2">Coming Soon...</h1>
      </div>


      {/* 3rd page upcoming evenets  */}

      <div className={styles.pageSection + ' ' + styles.section3} data-scroll-section>
        <h1 ref={scrambleRef4} onMouseEnter={handleMouseEnter4}
          style={{
            fontSize: '100px',
            letterSpacing: '10px',
            color: '#2cff05',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            margin: '10px 0',
            textAlign: 'center'
          }}
          data-scroll
          data-scroll-speed="2"
        >
          Upcoming Events...
        </h1>

        <Events />
        <button>More</button>
      </div>



      {/* core members */}

      <div className={styles.pageSection + ' ' + styles.section3} data-scroll-section>
        <h1 ref={scrambleRef5} onMouseEnter={handleMouseEnter5}
          style={{
            fontSize: '100px',
            letterSpacing: '10px',
            marginTop:'10px',
            color: '#2cff05',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
         
          className="animate-text" data-scroll data-scroll-speed="2">Our Team</h1>



        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '20px'
          }}
        >
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              role={profile.role}
              profilePic={profile.profilePic}
            />
          ))}
        <button 
         onClick={()=>navigate('/members')}
        style={{
          paddingTop:'10px',
          paddingBottom:'10px',
          paddingLeft:'30px',
          paddingRight:'30px',
          textAlign:'center'
        }}>More</button>
        </div>
      </div>

      <div style={{
        height:'70vh'
      }} id="section2" className={styles.pageSection + ' ' + styles.section2} data-scroll-section>
      
        <Footer />
      </div>


    </div >
  );
}
