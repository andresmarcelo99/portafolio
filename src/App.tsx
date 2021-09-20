import { scrollTo } from './utils/utilityFunctions';

function App() {
  return (
    <div className="App">
      <body>
        <div id="page-wraper">
          <div className="responsive-nav">
            <i className="fa fa-bars" id="menu-toggle"></i>
            <div id="menu" className="menu">
              <i className="fa fa-times" id="menu-close"></i>
              <div className="container">
                <div className="image">
                  <a href="/">
                    <img src="assets/images/author-image.jpg" alt="" />
                  </a>
                </div>
                <div className="author-content">
                  <h4>Marcelo Garcia</h4>
                  <span>Software Developer</span>
                </div>
                <nav className="main-nav" role="navigation">
                  <ul className="main-menu">
                    <li>
                      <span onClick={() => scrollTo('about-me')}>About Me</span>
                    </li>
                    <li>
                      <span onClick={() => scrollTo('skills')}>Skills</span>
                    </li>
                    <li>
                      <span onClick={() => scrollTo('my-work')}>My Work</span>
                    </li>
                    <li>
                      <span onClick={() => scrollTo('contact-me')}>
                        Contact Me
                      </span>
                    </li>
                  </ul>
                </nav>
                <div className="social-network">
                  <ul className="soial-icons">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/marcelo-garcia-01b5a2206/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/andresmarcelo99/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section
            className="section about-me"
            data-section="section1"
            id="about-me"
          >
            <div className="container">
              <div className="section-heading">
                <h2>About Me</h2>
                <div className="line-dec"></div>
                <span>
                  Proficient Full Stack Developer who lifts and plays guitar in
                  his free time and absolutely loves challenges, especially
                  coding ones. Experience working with agile teams and over
                  delivering on client's expectations.
                </span>
              </div>
            </div>
          </section>

          <section
            className="section my-services"
            data-section="section2"
            id="skills"
          >
            <div className="container">
              <div className="section-heading pb-40">
                <h2>Skills</h2>
                <div className="line-dec"></div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="service-item">
                    <div className="second-service-icon service-icon"></div>
                    <h4>Front End</h4>
                    <ul className="container float">
                      <li className="item float-item">JavaScript</li>
                      <li className="item float-item">ReactJs</li>
                      <li className="item float-item">AngularJs</li>
                      <li className="item float-item">SASS</li>
                      <li className="item float-item">jQuery</li>
                      <li className="item float-item">ES6</li>
                      <li className="item float-item">HTML/CSS</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item">
                    <div className="second-service-icon service-icon"></div>
                    <h4>Back End</h4>
                    <ul className="container float">
                      <li className="item float-item">NodeJS</li>
                      <li className="item float-item">.Net Framework</li>
                      <li className="item float-item">ExpressJS</li>
                      <li className="item float-item">NestJS</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item">
                    <div className="third-service-icon service-icon"></div>
                    <h4>Tools</h4>
                    <ul className="container float">
                      <li className="item float-item">Git</li>
                      <li className="item float-item">Docker</li>
                      <li className="item float-item">AWS</li>
                      <li className="item float-item">Google Analytics Api</li>
                      <li className="item float-item">Jest, xUnit</li>
                      <li className="item float-item">Microsoft SQL Server</li>
                      <li className="item float-item">Postgresql</li>
                      <li className="item float-item">Mongodb</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section my-work"
            data-section="section3"
            id="my-work"
          >
            <div className="container">
              <div className="section-heading">
                <h2>My Work</h2>
                <div className="line-dec"></div>
                <span>
                  These are several projects I've worked on. Using technologies
                  like React.js and Angular.js for the frontend and NestJs and
                  Dot Net Core for the backend.
                </span>
              </div>
              <div className="row">
                <div className="isotope-wrapper">
                  <div className="isotope-box">
                    <div className="isotope-item" data-type="nature">
                      <a
                        href="https://www.ibmpricetransparency.com/330399"
                        data-lightbox="image-1"
                        data-title="Caption"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <figure className="snip1321">
                          <img
                            src="assets/images/ibm-pt-home.png"
                            alt="IBM Price Transparecy"
                          />
                          <figcaption>
                            <h4>IBM Price Transparecy</h4>
                          </figcaption>
                        </figure>
                      </a>
                    </div>

                    <div className="isotope-item" data-type="people">
                      <a
                        href="https://raisify.co/"
                        data-lightbox="image-1"
                        data-title="Caption"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <figure className="snip1321">
                          <img
                            src="assets/images/pitches.png"
                            alt="BGV Raisify"
                          />
                          <figcaption>
                            <h4>BGV Raisify</h4>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section contact-me"
            data-section="section4"
            id="contact-me"
          >
            <div className="container">
              <div className="section-heading">
                <h2>Contact Me</h2>
                <div className="line-dec"></div>
              </div>
              <div className="row">
                <div className="right-content">
                  <div className="container">
                    <form id="contact" action="" method="post">
                      <div className="row">
                        <div className="col-md-6">
                          <fieldset>
                            <input
                              name="name"
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Your name..."
                              required={false}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input
                              name="email"
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Your email..."
                              required={false}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <input
                              name="subject"
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Subject..."
                              required={false}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <textarea
                              name="message"
                              rows={6}
                              className="form-control"
                              id="message"
                              placeholder="Your message..."
                              required={false}
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="button"
                            >
                              Send Message
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
