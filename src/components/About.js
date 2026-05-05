const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Supabase",
  "Firebase",
  "Vercel",
  "REST APIs",
];

const skillStyle = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "500",
};

const SkillsList = ({ compact = false }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: compact ? "8px" : "10px",
      marginTop: compact ? "20px" : 0,
      marginBottom: compact ? "20px" : "30px",
    }}
  >
    {skills.map((skill) => (
      <span
        key={skill}
        style={{
          ...skillStyle,
          padding: compact ? "6px 14px" : skillStyle.padding,
          fontSize: compact ? "13px" : skillStyle.fontSize,
        }}
      >
        {skill}
      </span>
    ))}
  </div>
);

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="author-image-container wow fadeInLeft">
              <div className="image-bg moving-effect" />
              <div className="image-area">
                <img
                  src="./assets/images/author/about1.png"
                  alt="Developer workstation"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 wow fadeInRight">
            <div className="section-title left">
              <p className="sub-title">About Me</p>
              <h2>Full Stack Web Developer</h2>
            </div>
            <p>
              I create practical, polished web applications with React,
              Next.js, Node.js, and modern cloud platforms. My work covers the
              full development cycle, from responsive interfaces and APIs to
              authentication, databases, admin dashboards, and deployment.
              <br />
              <br />
              I focus on clean code, clear communication, and products that are
              easy for real people to use.
            </p>
            <SkillsList compact />
            <div className="d-flex align-center btn-container">
              <a href="/resume.pdf" className="cf-btn read-more" download>
                Download CV
              </a>
              <div className="d-flex watch-video align-center">
                <a
                  href="https://github.com/fassiliss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-btn"
                  aria-label="View Fassil Tsegaye on GitHub"
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
              I build responsive web applications with thoughtful interfaces,
              secure backends, and maintainable code. I am comfortable taking a
              project from idea to launch and supporting the details that make
              it useful after release.
            </p>
            <ul className="about-details">
              <li>
                <span>Location :</span> Smyrna, Tennessee, US
              </li>
              <li>
                <span>Email :</span> fassiliss@gmail.com
              </li>
              <li>
                <span>GitHub :</span> github.com/fassiliss
              </li>
              <li>
                <span>Availability :</span> Open for opportunities
              </li>
            </ul>
            <h4 style={{ marginTop: "30px", marginBottom: "15px" }}>
              Technical Skills
            </h4>
            <SkillsList />
            <a href="/resume.pdf" className="cf-btn" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
