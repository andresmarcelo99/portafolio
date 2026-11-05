import React from 'react';

import INFO from '../../data/user';

import './styles/socials.css';

const Socials = () => {
  return (
    <div className="socials">
      <a href={`mailto:${INFO.main.email}`}>Email me</a>
      <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href={INFO.socials.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  );
};

export default Socials;
