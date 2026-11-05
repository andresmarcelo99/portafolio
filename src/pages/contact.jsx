import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import ContactList from '../components/about/contactList';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'contact');

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(', ')} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <main className="content-wrapper">
          <section className="page-intro">
            <h1 className="display title">Contact</h1>
          </section>

          <div className="contact-body">
            <p className="lead">
              Email is the quickest way to reach me. I am in Honduras, on the
              same hours as US Central.
            </p>
            <ContactList />
          </div>

          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
};

export default Contact;
