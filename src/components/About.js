const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="author-image-container wow fadeInLeft">
              <div className="image-bg moving-effect" />
              <div className="image-area">
                <img src="./assets/images/author/about.png" alt="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 wow fadeInRight">
            <div className="section-title left">
              <p className="sub-title">About me</p>
              <h2>Awarded Designer</h2>
            </div>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without . <br />
              <br />
              In publishing and graphic design, Lorem ipsum is a placeholder .In
              publishing and graphic design, Lorem ipsum is a placeholder .
            </p>
            <div className="d-flex align-center btn-container">
              <a href="#about-popup" className="cf-btn read-more">
                Read More
              </a>
              <div className="d-flex watch-video align-center">
                <a
                  href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                  className="play-btn"
                >
                  <i className="fa-solid fa-circle-play" />
                </a>
                <p>Watch Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-popup" className="mfp-fade mfp-hide">
        <div className="row">
          <div className="col-md-12">
            <div className="about-image">
              <img src="/assets/images/author/about.png" alt="image" />
            </div>
          </div>
          <div className="col-md-12">
            <h3>Axo Brando</h3>
            <div className="subtitle subtitle-typed">
              <div className="typing-title">
                <p>Web Designer</p>
                <p>Developer</p>
                <p>Freelancer</p>
              </div>
            </div>
            <p>
              I'm a web developer with in-depth experience in UI/UX design. In a
              nutshell, I create websites that help organizations address
              business challenges and meet their needs. I manage everything from
              website navigation and layout to a company's web hosting and
              security architecture.
            </p>
            <ul className="about-details">
              <li>
                <span>Birth Day :</span> 30/01/1985
              </li>
              <li>
                <span>Mail :</span> demo@demo.com
              </li>
              <li>
                <span>Location :</span> Los Angeles, California
              </li>
              <li>
                <span>Phone :</span> +123456789
              </li>
            </ul>
            <ul className="skills">
              <li>
                <p>Wordpress</p>
                <div className="skill p50" />
              </li>
              <li>
                <p>HTML</p>
                <div className="skill p90" />
              </li>
              <li>
                <p>Rreactjs</p>
                <div className="skill p40" />
              </li>
              <li>
                <p>Vuejs</p>
                <div className="skill p70" />
              </li>
            </ul>
            <a href="#" className="cf-btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
