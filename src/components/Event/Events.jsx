import React from 'react';
import styles from './Events.module.css';
import e1 from '../Event/e1.jpg';

const Events = () => {
  const eventData = [
    {
      title: 'The Great Code Auction',
      venue: 'tba',
      date: 'Jan 18, 2025 ',
      time: '9:30 AM',
      image: e1,
    },
    // {
    //   title: 'Fleet Foxes',
    //   venue: 'Fox Theater',
    //   address: '1807 Telegraph Ave, Oakland, CA 94612',
    //   date: 'August 10, 2018',
    //   time: '8:00 PM',
    //   image: e1,
    // },
    // {
    //   title: 'Fleet Foxes',
    //   venue: 'Fox Theater',
    //   address: '1807 Telegraph Ave, Oakland, CA 94612',
    //   date: 'August 10, 2018',
    //   time: '8:00 PM',
    //   image: e1,
    // },
  ];

  return (
    <div className={styles.eventsContainer}>
      {eventData.map((event, index) => (
        <div key={index} className={styles.card}>
          <img src={event.image} alt={`${event.title} cover`} className={styles.eventImage} />
          <div className={styles.header}>
            <h2>{event.title}</h2>
            <p>{event.venue}</p>
            <p>{event.address}</p>
          </div>
          <div className={styles.dateTime}>
            <span>{event.date}</span>
            <span>{event.time}</span>
          </div>
          <button className={styles.registerBtn}>Register</button>
        </div>
      ))}
    </div>
  );
};

export default Events;
