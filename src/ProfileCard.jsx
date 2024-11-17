import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard = ({ name, role, profilePic }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src={profilePic}
            alt={`${name}'s profile`}
            className={styles.image}
          />
        </div>

        <h2 className={styles.name}>
          {name}
        </h2>

        <span className={styles.title}>
          {role}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
