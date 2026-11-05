import React from 'react';

import Project from './project';

import INFO from '../../data/user';

import './styles/allProjects.css';

const AllProjects = () => {
  return (
    <ol className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <Project key={project.title} number={index + 1} {...project} />
      ))}
    </ol>
  );
};

export default AllProjects;
