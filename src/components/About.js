const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="author-image-container wow fadeInLeft">
              <div className="image-bg moving-effect" />
              <div className="image-area">
                <img src="./assets/images/author/about.png" alt="Fassil Tsegaye" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 wow fadeInRight">
            <div className="section-title left">
              <p className="sub-title">About Me</p>
              <h2>Full Stack Web Developer</h2>
            </div>
            <p>
              I'm a passionate Full Stack Web Developer with expertise in building 
              modern, scalable web applications. I specialize in React, Next.js, 
              Node.js, and cloud technologies, creating solutions that solve real 
              business problems.
              <br />
              <br />
              From frontend user interfaces to backend APIs and databases, I handle 
              the complete development lifecycle. I'm committed to writing clean, 
              maintainable code and delivering exceptional user experiences.
            </p>
            <div className="d-flex align-center btn-container">
              <a href="#contact" className="cf-btn read-more">
                Get In Touch
              </a>
              <div className="d-flex watch-video align-center">
                <a
                  href="https://github.com/fassiliss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-btn"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <p>View GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-popup" className="mfp-fade mfp-hide">
        <div className="row">
          <div className="col-md-12">
            <div className="about-image">
              <img src="/assets/images/author/about.png" alt="Fassil Tsegaye" />
            </div>
          </div>
          <div className="col-md-12">
            <h3>Fassil Tsegaye</h3>
            <div className="subtitle subtitle-typed">
              <div className="typing-title">
                <p>Full Stack Developer</p>
                <p>React Specialist</p>
                <p>Problem Solver</p>
              </div>
            </div>
            <p>
              I'm a Full Stack Web Developer with expertise in building modern, 
              responsive web applications. I manage everything from user interface 
              design to server architecture and database management. With a focus 
              on clean code and best practices, I create solutions that are both 
              scalable and maintainable.
            </p>
            <ul className="about-details">
              <li>
                <span>Location :</span> Franklin, Tennessee, US
              </li>
              <li>
                <span>Email :</span> fassil661@gmail.com
              </li>
              <li>
                <span>GitHub :</span> github.com/fassiliss
              </li>
              <li>
                <span>Availability :</span> Open for opportunities
              </li>
            </ul>
            <h4 style={{ marginTop: '30px', marginBottom: '15px' }}>Technical Skills</h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '30px'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>React</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>Next.js</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>Node.js</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>Express</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>JavaScript</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>TypeScript</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>MongoDB</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>MySQL</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>AWS</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>Firebase</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>Git</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>REST APIs</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>Tailwind CSS</span>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>Material UI</span>
            </div>
            <a href="#contact" className="cf-btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;