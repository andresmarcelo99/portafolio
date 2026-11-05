import React from 'react';

import INFO from '../../data/user';

import './styles/contactList.css';

const ContactList = () => {
  return (
    <dl className="contact-list">
      <div>
        <dt>mail</dt>
        <dd>
          <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>
        </dd>
      </div>
      <div>
        <dt>linkedin</dt>
        <dd>
          <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
            marcelo-garcia
          </a>
        </dd>
      </div>
      <div>
        <dt>github</dt>
        <dd>
          <a href={INFO.socials.github} target="_blank" rel="noreferrer">
            andresmarcelo99
          </a>
        </dd>
      </div>
      <div>
        <dt>based</dt>
        <dd>Honduras, UTC-6, fully remote</dd>
      </div>
    </dl>
  );
};

export default ContactList;
