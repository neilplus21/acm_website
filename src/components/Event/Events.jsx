import React from 'react';
import styled from "styled-components";

import eventImage from '../Event/ca.jpg';
import eventImage2 from '../Event/e2.png';

const Events = () => {
  return (
    <StyledWrapper>
      {/* Ended Event */}
      <div className="event-card event-card--ended">
        <div className="event-card__browser-bar">
          <div className="event-card__circle"></div>
          <div className="event-card__circle"></div>
          <div className="event-card__circle"></div>
        </div>

        <div className="event-card__header">
          <div className="event-card__date">Saturday, 18th January 2025</div>
          <div className="event-card__title">The Great Code Auction</div>
        </div>

        <img src={eventImage} alt="Event" className="event-card__image" />

        <div className="event-card__details">
          <div className="event-card__description">The Great Code Auction</div>
          <div className="event-card__info">
            <div className="event-card__location">📍 APJ Block, 4th Floor, ISL01 & ISL02</div>
            <div className="event-card__team-size">👥 Team Size: 2-3 Members</div>
          </div>
          <div className="event-card__actions">
            <a className="event-card__button event-card__button--ended">Ended</a>
          </div>
        </div>
      </div>

      {/* Upcoming Event */}
      <div className="event-card">
        <div className="event-card__browser-bar">
          <div className="event-card__circle"></div>
          <div className="event-card__circle"></div>
          <div className="event-card__circle"></div>
        </div>

        <div className="event-card__header">
          <div className="event-card__upcoming-badge">Upcoming</div>
          <div className="event-card__date">Saturday, 8th March 2025</div>
          <div className="event-card__title">Manual Testing & Resume Writing</div>
        </div>

        <img src={eventImage2} alt="Event" className="event-card__image" />

        <div className="event-card__details">
          <div className="event-card__description">Manual Testing & Resume Writing</div>
          <div className="event-card__info">
            <div className="event-card__location">📍 Venue: Online (Open for All)</div>
            <div className="event-card__team-size">👥 Team Size: 2-3 Members</div>
          </div>
          <div className="event-card__actions">
            <a
              className="event-card__button event-card__button--register"
              href="https://forms.gle/nvnVCksphbdQV9nf7"
              target='_blank'
              rel="noopener noreferrer"
            >
              Register now!
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 6vw;
  font-family: "Arial", sans-serif;
  min-height: 100vh;

  .event-card {
    width: 400px;
    border: 3px solid #333;
    box-shadow: 6px 6px 0 #000;
    border-radius: 16px;
    overflow: hidden;
    background: #1e1e1e;
    color: #eee;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
  }

  .event-card:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 0 #000;
  }

  .event-card__browser-bar {
    display: flex;
    gap: 0.5rem;
    padding: 0.6rem;
    background: linear-gradient(145deg, #ff6b6b, #ff8787);
    border-bottom: 3px solid #000;
  }

  .event-card__circle {
    width: 12px;
    height: 12px;
    background-color: #000;
    border-radius: 50%;
  }

  .event-card__header {
    text-align: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #222, #111);
    border-bottom: 3px solid #000;
    position: relative;
  }

  .event-card__upcoming-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    background: #ff6b6b;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    text-transform: uppercase;
  }

  .event-card__date {
    font-size: 1rem;
    font-weight: bold;
    color: #0ff;
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.8);
  }

  .event-card__title {
    font-size: 1.6rem;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    margin-top: 0.5rem;
    text-shadow: 2px 2px 0 #000;
  }

  .event-card__image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-bottom: 3px solid #000;
  }

  .event-card__details {
    padding: 1rem;
    text-align: center;
  }

  .event-card__description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #ccc;
    margin-bottom: 1rem;
  }

  .event-card__info {
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .event-card__actions {
    display: flex;
    justify-content: center;
  }

  .event-card__button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    background: linear-gradient(145deg, #ffcccb, #ffd9c8);
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .event-card__button--register:hover {
    background: linear-gradient(145deg, #ff7a61, #ff6f61);
    color: #fff;
    box-shadow: 8px 8px 0 #800000;
  }

  .event-card__button--ended {
    background: #555;
    color: #ccc;
    pointer-events: none;
    box-shadow: none;
    border: 3px solid #555;
  }

  .event-card__button:active {
    transform: translate(4px, 4px);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    .event-card {
      width: 90%;
      max-width: 400px;
    }
  }
`;

export default Events;
