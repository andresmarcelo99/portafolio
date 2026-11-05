import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import AllProjects from '../components/projects/allProjects';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/projects.css';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'projects');

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Work | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(', ')} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <main className="content-wrapper">
          <section className="page-intro">
            <h1 className="display title">Work</h1>
            <p className="subtitle">
              Most of this was built for clients, so the descriptions say what I
              built without naming the companies. The npm CLI is my own and you
              can try it.
            </p>
          </section>

          <section className="projects-list">
            <AllProjects />
          </section>

          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
};

export default Projects;
