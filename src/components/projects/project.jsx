import React from 'react';

import './styles/project.css';

const Project = (props) => {
  const { number, title, description, stack, linkText, link } = props;

  return (
    <li className="project">
      <span className="project-number" aria-hidden="true">
        {number}
      </span>
      <h3 className="project-title">{title}</h3>
      <dl className="project-details">
        <div>
          <dt>summary</dt>
          <dd>{description}</dd>
        </div>
        <div>
          <dt>stack</dt>
          <dd>{stack}</dd>
        </div>
        {link && (
          <div>
            <dt>link</dt>
            <dd>
              <a href={link} target="_blank" rel="noreferrer">
                {linkText}
              </a>
            </dd>
          </div>
        )}
      </dl>
    </li>
  );
};

export default Project;
