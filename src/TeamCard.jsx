import React from 'react';
import styles from './TeamCard.module.css';

const TeamCard = () => {
  const teamMembers = [
    {
      name: 'Michele Miller',
      title: 'Web Developer',
      imgSrc: 'https://picsum.photos/130/130?image=1027',
      socialLinks: [
        { icon: 'facebook', url: 'https://facebook.com' },
        { icon: 'twitter', url: 'https://twitter.com' },
        { icon: 'google-plus', url: 'https://plus.google.com' },
        { icon: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Patricia Knott',
      title: 'Web Developer',
      imgSrc: 'https://picsum.photos/130/130?image=839',
      socialLinks: [
        { icon: 'facebook', url: 'https://facebook.com' },
        { icon: 'twitter', url: 'https://twitter.com' },
        { icon: 'google-plus', url: 'https://plus.google.com' },
        { icon: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Justin Ramos',
      title: 'Web Developer',
      imgSrc: 'https://picsum.photos/130/130?image=856',
      socialLinks: [
        { icon: 'facebook', url: 'https://facebook.com' },
        { icon: 'twitter', url: 'https://twitter.com' },
        { icon: 'google-plus', url: 'https://plus.google.com' },
        { icon: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Mary Huntley',
      title: 'Web Developer',
      imgSrc: 'https://picsum.photos/130/130?image=836',
      socialLinks: [
        { icon: 'facebook', url: 'https://facebook.com' },
        { icon: 'twitter', url: 'https://twitter.com' },
        { icon: 'google-plus', url: 'https://plus.google.com' },
        { icon: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-10 col-sm-6 col-md-4 col-lg-5" key={index}>
            <div className={styles.ourTeam}>
              <div className={styles.picture}>
                <img className={styles.imgFluid} src={member.imgSrc} alt={member.name} />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.name}>{member.name}</h3>
                <h4 className={styles.title}>{member.title}</h4>
              </div>
              <ul className={styles.social}>
                {member.socialLinks.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className={`fa fa-${link.icon}`} aria-hidden="true"></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
