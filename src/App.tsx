function App() {
  return (
    <div className="App">
      {/* <header>
      </header> */}
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
                      <a href="#section1">About Me</a>
                    </li>
                    <li>
                      <a href="#section2">What I’m good at</a>
                    </li>
                    <li>
                      <a href="#section3">My Work</a>
                    </li>
                    <li>
                      <a href="#section4">Contact Me</a>
                    </li>
                  </ul>
                </nav>
                <div className="social-network">
                  <ul className="soial-icons">
                    <li>
                      <a href="https://www.linkedin.com/in/marcelo-garcia-01b5a2206/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/andresmarcelo99/">
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="section about-me" data-section="section1">
            <div className="container">
              <div className="section-heading">
                <h2>About Me</h2>
                <div className="line-dec"></div>
                <span>
                  Software Developer who's passion is music, coding and guitar.
                  Always focused on improving and willing to learn. I seek to
                  acquire knowledge and work skills that will make me a great
                  professional.
                </span>
              </div>
              {/* <div className="left-image-post">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-image">
                      <img src="assets/images/left-image.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-text">
                      <h4>Reflux HTML CSS Template</h4>
                      <p>
                        Donec tristique feugiat lacus, at sollicitudin nunc
                        euismod sed. Mauris viverra, erat non sagittis gravida,
                        elit dui mollis ante, sit amet eleifend purus ligula
                        eget eros. Sed tincidunt quam vitae neque pharetra
                        dignissim eget ut libero.
                      </p>
                      <div className="white-button">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="right-image-post">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-text">
                      <h4>Sed sagittis rhoncus velit</h4>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum
                        fermentum eleifend nibh, vitae sodales elit finibus
                        pretium. Suspendisse potenti. Ut sollicitudin risus a
                        sollicitudin semper.
                      </p>
                      <div className="white-button">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-image">
                      <img src="assets/images/right-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>

          <section className="section my-services" data-section="section2">
            <div className="container">
              <div className="section-heading">
                <h2>Skills</h2>
                <div className="line-dec"></div>
                <span>
                  Curabitur leo felis, rutrum vitae varius eu, malesuada a
                  tortor. Vestibulum congue leo et tellus aliquam, eu viverra
                  nulla semper. Nullam eu faucibus diam. Donec eget massa ante.
                </span>
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
                {/* <div className="col-md-6">
                  <div className="service-item">
                    <div className="fourth-service-icon service-icon"></div>
                    <h4>Admin Dashboard</h4>
                    <p>
                      Vivamus et dui a massa venenatis fringilla. Proin lacus
                      massa, eleifend sed fermentum in, dignissim vel metus.
                      Nunc accumsan leo nec felis porttitor.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          <section className="section my-work" data-section="section3">
            <div className="container">
              <div className="section-heading">
                <h2>My Work</h2>
                <div className="line-dec"></div>
                <span>
                  Aenean sollicitudin ex mauris, lobortis lobortis diam euismod
                  sit amet. Duis ac elit vulputate, lobortis arcu quis, vehicula
                  mauris.
                </span>
              </div>
              <div className="row">
                <div className="isotope-wrapper">
                  <div className="isotope-box">
                    <div className="isotope-item" data-type="nature">
                      <figure className="snip1321">
                        <img
                          src="assets/images/portfolio-01.jpg"
                          alt="sq-sample26"
                        />
                        <figcaption>
                          <a
                            href="assets/images/portfolio-01.jpg"
                            data-lightbox="image-1"
                            data-title="Caption"
                          >
                            <i className="fa fa-search"></i>
                          </a>
                          <h4>First Title</h4>
                          <span>free to use our template</span>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="isotope-item" data-type="people">
                      <figure className="snip1321">
                        <img
                          src="assets/images/portfolio-02.jpg"
                          alt="sq-sample26"
                        />
                        <figcaption>
                          <a
                            href="assets/images/portfolio-02.jpg"
                            data-lightbox="image-1"
                            data-title="Caption"
                          >
                            <i className="fa fa-search"></i>
                          </a>
                          <h4>Second Title</h4>
                          <span>please tell your friends</span>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section contact-me" data-section="section4">
            <div className="container">
              <div className="section-heading">
                <h2>Contact Me</h2>
                <div className="line-dec"></div>
                <span>
                  Fusce eget nibh nec justo interdum condimentum. Morbi justo
                  ex, efficitur at ante ac, tincidunt maximus ligula. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
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
