import React from 'react';
import { Link } from 'react-router-dom';

import INFO from '../../data/user';

import './styles/navBar.css';

const LINKS = [
  { key: 'home', to: '/', label: 'Home' },
  { key: 'about', to: '/about', label: 'About' },
  { key: 'projects', to: '/projects', label: 'Work' },
  { key: 'contact', to: '/contact', label: 'Contact' },
];

const NavBar = (props) => {
  const { active } = props;

  return (
    <header className="nav-container">
      <nav className="navbar" aria-label="Main">
        <Link to="/" className="nav-brand">
          <span>{INFO.main.name}</span>
        </Link>
        <ul className="nav-list">
          {LINKS.map((link) => (
            <li
              key={link.key}
              className={active === link.key ? 'nav-item active' : 'nav-item'}
            >
              <Link
                to={link.to}
                aria-current={active === link.key ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
