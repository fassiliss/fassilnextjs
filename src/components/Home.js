import Counter from "./Counter";

const Home = () => {
  return (
    <section id="home" className="text-white bg-hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <h1 className="wow fadeInDown" data-wow-delay=".5s">
              Brandon User Interface Designer
            </h1>
            <p className="short-bio wow fadeInDown" data-wow-delay=".6s">
              I'm a Freelance UI/UX Designer and Product Desiger based in
              London, England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <a
              href="#contact"
              className="cf-btn wow fadeInDown"
              data-wow-delay=".7s"
            >
              Conect with me
            </a>
            <div
              className="counter d-flex align-center content-space-between wow fadeInDown"
              data-wow-delay="1.7s"
            >
              <div className="experence">
                <h2>
                  <Counter end={7} />+
                </h2>
                <p className="font-20px">Year Exprence</p>
              </div>
              <div className="project">
                <h2>
                  <Counter end={300} />+
                </h2>
                <p className="font-20px">Complete Project</p>
              </div>
              <div className="clients">
                <h2>
                  <Counter end={135} />+
                </h2>
                <p className="font-20px">Heppy Client</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-right">
              <div className="hero-right-bg" />
              <img src="./assets/images/author/hero.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="extra-bg" />
    </section>
  );
};
export default Home;
