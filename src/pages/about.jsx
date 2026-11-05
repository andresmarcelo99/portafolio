import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import ContactList from '../components/about/contactList';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/about.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'about');

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(', ')} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <main className="content-wrapper">
          <section className="page-intro">
            <h1 className="display title">About</h1>
          </section>

          <div className="about-spread">
            <div className="about-column">
              <section className="about-block">
                <h2 className="label">about me</h2>
                {INFO.about.description.map((paragraph, index) => (
                  <p className="subtitle" key={index}>
                    {paragraph}
                  </p>
                ))}
              </section>
              <section className="about-block">
                <h2 className="label">contact</h2>
                <ContactList />
              </section>
            </div>

            <div className="about-column">
              <section className="about-block">
                <h2 className="label">work experience</h2>
                <dl className="about-rows">
                  {INFO.about.experience.map((job) => (
                    <div key={job.company}>
                      <dt>{job.years}</dt>
                      <dd>
                        <strong>{job.company}</strong>
                        <br />
                        {job.role}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section className="about-block">
                <h2 className="label">expertise</h2>
                <ul className="about-skills">
                  {INFO.about.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
              <section className="about-block">
                <h2 className="label">languages</h2>
                <dl className="about-rows">
                  {INFO.about.languages.map((language) => (
                    <div key={language.name}>
                      <dt>{language.name}</dt>
                      <dd>{language.level}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
};

export default About;
