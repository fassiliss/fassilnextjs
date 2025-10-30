import Counter from "./Counter";

const Home = () => {
  return (
    <section id="home" className="text-white bg-hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <h1 className="wow fadeInDown" data-wow-delay=".5s">
              Fassil Tsegaye Full Stack Web Developer
            </h1>
            <p className="short-bio wow fadeInDown" data-wow-delay=".6s">
              I'm a Full Stack Web Developer based in Smyrna, Tennessee. I
              specialize in building modern, responsive web applications using
              React, Next.js, Node.js, and cloud technologies. Passionate about
              creating seamless user experiences and scalable solutions.
            </p>
            <a
              href="#contact"
              className="cf-btn wow fadeInDown"
              data-wow-delay=".7s"
            >
              Connect with me
            </a>
            <div
              className="counter d-flex align-center content-space-between wow fadeInDown"
              data-wow-delay="1.7s"
            >
              <div className="experence">
                <h2>
                  <Counter end={4} />+
                </h2>
                <p className="font-20px">Years Experience</p>
              </div>
              <div className="project">
                <h2>
                  <Counter end={100} />+
                </h2>
                <p className="font-20px">Complete Project</p>
              </div>
              <div className="clients">
                <h2>
                  <Counter end={85} />+
                </h2>
                <p className="font-20px">Happy Client</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-right">
              <div className="hero-right-bg" />
              <img src="./assets/images/author/pf1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="extra-bg" />
    </section>
  );
};
export default Home;
