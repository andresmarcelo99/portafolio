import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../components/common/footer';
import NavBar from '../components/common/navBar';
import Socials from '../components/about/socials';
import ContactList from '../components/about/contactList';
import AllProjects from '../components/projects/allProjects';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/homepage.css';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'home');

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(', ')} />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <main className="content-wrapper">
          <section className="homepage-hero">
            <div className="homepage-hero-text">
              <p className="label">software engineer</p>
              <h1 className="display title homepage-name">
                {INFO.main.name}
              </h1>
              <p className="lead">{INFO.homepage.lead}</p>
              <p className="subtitle">{INFO.homepage.description}</p>
              <div className="homepage-socials">
                <Socials />
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="work">
            <div className="section-head">
              <h2 className="display" id="work">
                Work
              </h2>
              <span className="meta">{INFO.projects.length} projects</span>
            </div>
            <AllProjects />
          </section>

          <section className="section homepage-contact" aria-labelledby="contact">
            <div className="section-head">
              <h2 className="display" id="contact">
                Contact
              </h2>
            </div>
            <div className="homepage-contact-body">
              <p className="lead">Email is the quickest way to reach me.</p>
              <ContactList />
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
