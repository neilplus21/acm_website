import React from 'react';
import styled from "styled-components";

import eventImage from '../Event/e1.jpg';

const Events = () => {
  return (
    <StyledWrapper>
      <div className="event-card">
        <div className="event-card__browser-bar">
          <div className="event-card__circle"></div>
          <div className="event-card__circle"></div>
          <div className="event-card__circle"></div>
        </div>
        <div className="event-card__header">
          <div className="event-card__date">tba</div>
          <div className="event-card__title">The Great Code Auction</div>
        </div>
        <img src={eventImage} alt="Event" className="event-card__image" />
        <div className="event-card__details">
          <div className="event-card__description">
            The Great Code Auction
          </div>
          <div className="event-card__info">
            <div className="event-card__location">📍 TBA</div>
            <div className="event-card__team-size">👥 Team Size: 2-3 Members</div>
            {/* <div className="event-card__photography">📸 spots available</div> */}
          </div>
          <div className="event-card__actions">
            <a className="event-card__button event-card__button--register" href="#">Join Party!</a>
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
  gap: 1vw;
  font-family: "Arial", sans-serif;

  .event-card {
    width: 400px;
    height:630px;
    background: linear-gradient(145deg, #fef8e8, #fdf4e3);
    border: 5px solid #000;
    box-shadow: 5px 5px 0 #fff;
    border-radius: 16px;
    overflow: hidden;
    color: #333;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .event-card__browser-bar {
    display: flex;
    gap: 0.5rem;
    padding: 0.6rem;
    background: linear-gradient(145deg, #ffccb5, #ffd9c0);
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
    padding: 1rem;
  }

  .event-card__date {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    letter-spacing: 1px;
  }

  .event-card__title {
    font-size: 1.8rem;
    font-weight: 1000;
    color: #000;
    text-transform: uppercase;
    margin-top: 0.5rem;
    text-shadow: 2px 2px 0 #fff;
  }

  .event-card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 3px solid #000;
  }

  .event-card__details {
    padding: 1rem;
    text-align: center;
  }

  .event-card__description {
    font-size: 1.1rem;
    ${'' /* margin-bottom: .5rem; */}
    line-height: 1.6;
    color: #444;
  }

  .event-card__info {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    line-height: 1.8;
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
    border: 3px solid #000;
    background: linear-gradient(145deg, #ffccb5, #ffd9c0);
    transition: all 0.3s ease;
    box-shadow: 6px 6px 0 #000;
    border-radius: 8px;
  }

  .event-card__button--register:hover {
    background: linear-gradient(145deg, #ff7a61, #ff6f61);
    color: #fff;
    box-shadow: 8px 8px 0 #800000;
  }

  .event-card__button--nah:hover {
    background: linear-gradient(145deg, #bbb, #aaa);
    color: #fff;
    box-shadow: 8px 8px 0 #555;
  }

  .event-card__button:active {
    transform: translate(4px, 4px);
    box-shadow: none;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    padding: 1rem;

    .event-card {
      width: 90%;
      max-width: 400px;
      margin: 0 auto;
      max-height:550px;
    }

    .event-card__header .event-card__date {
      font-size: 0.9rem;
    }

    .event-card__title {
      font-size: 1.1rem;
    }

    .event-card__image {
      height: 150px;
    }

    .event-card__description {
      font-size: 1rem;
    }

    .event-card__info {
      font-size: 0.5rem;
    }

    .event-card__actions {
      flex-direction: column;
      gap: 0.5rem;
    }

    .event-card__button {
      padding: 0.4rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  /* Extra small mobile devices (portrait) */
  @media (max-width: 480px) {
    .event-card__header .event-card__date {
      font-size: 0.8rem;
    }

    .event-card__title {
      font-size: 1.4rem;
    }

    .event-card__description {
      font-size: 0.9rem;
    }

    .event-card__info {
      font-size: 0.8rem;
    }

    .event-card__button {
      padding: 0.7rem 1.2rem;
      font-size: 0.8rem;
    }
  }
`;

export default Events;
