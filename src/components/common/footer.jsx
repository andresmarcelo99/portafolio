import React from 'react';

import INFO from '../../data/user';

import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer meta">
      <span>
        © {new Date().getFullYear()} {INFO.main.name}
      </span>
      <span>Honduras, UTC-6</span>
    </footer>
  );
};

export default Footer;
