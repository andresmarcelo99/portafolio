import React, { useEffect } from 'react';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';

import INFO from '../data/user';

import './styles/404.css';

const Notfound = () => {
  useEffect(() => {
    document.title = `Page not found | ${INFO.main.title}`;
  }, []);

  return (
    <div className="page-content">
      <NavBar />
      <main className="content-wrapper">
        <section className="page-intro notfound-container">
          <h1 className="display title">Not found</h1>
          <p className="subtitle">
            This address doesn't match any page on the site.
          </p>
          <p className="subtitle">
            <a href="/">Go to the home page</a>
          </p>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Notfound;
