import React from 'react'
import "./AboutUs.css";
function Aboutus() {
    return (
        <div className="about-us-section">
            <div className="about-us-content">
                {/* <h3 className="welcome-text">Welcome To</h3> */}
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    The ACM Student Chapter at our college is a dynamic community of driven and passionate tech enthusiasts, committed to promoting innovation, collaboration, and continuous learning.
                </p>
                <p className="about-description">
                    By fostering an environment of creativity and knowledge-sharing, we strive to prepare students for a future of excellence in technology and leadership. Join us to unlock exciting opportunities, elevate your skills, and be part of a thriving network shaping tomorrow’s tech landscape.
                </p>
                <button className="read-more-btn">
                    <a href="https://www.acm.org/" target="_blank" rel="noopener noreferrer">
                        Read More...
                    </a>
                </button>

            </div>
        </div>
    )
}

export default Aboutus