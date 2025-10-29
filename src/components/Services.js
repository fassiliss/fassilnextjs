import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".service-card"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <p className="sub-title wow fadeInDown">My Services</p>
          <h2 className="wow fadeInDown">
            What I Offer <br />
            To My Clients
          </h2>
        </div>
        <div className="card-container">
          <div className="row">
            {/* Service 1: Full Stack Development */}
            <div className="col-md-6 col-xl-4">
              <div className="service-card wow fadeInDown" data-wow-delay=".2s">
                <div className="icon-container">
                  <img
                    src="./assets/icons/web_dev.svg"
                    className="svg"
                    alt="Full Stack Development"
                  />
                </div>
                <h3>Full Stack Web Development</h3>
                <p>
                  Building modern, responsive web applications using React,
                  Next.js, Node.js, and cloud technologies. From concept to
                  deployment, I create scalable solutions tailored to your
                  business needs.
                </p>
                <a href="#services_1" className="link" />
              </div>
              <div className="mfp-fade mfp-hide" id="services_1">
                <div className="content">
                  <div className="img">
                    <img
                      src="./assets/images/services/1.jpg"
                      alt="Full Stack Development"
                    />
                  </div>
                  <div className="des">
                    <h4>Full Stack Web Development</h4>
                    <p className="price">
                      Start from <span>$500</span>
                    </p>
                    <p>
                      I specialize in building complete web applications from
                      the ground up. Whether you need a custom web app,
                      e-commerce platform, or business management system, I
                      handle everything from database design to user interface
                      implementation.
                    </p>
                    <p>
                      <strong>Technologies:</strong> React, Next.js, Node.js,
                      Express, MongoDB, MySQL, AWS, Vercel, Firebase
                    </p>
                    <p>
                      <strong>What's Included:</strong> Responsive design, API
                      development, database setup, deployment, and 30 days of
                      post-launch support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Frontend Development */}
            <div className="col-md-6 col-xl-4">
              <div className="service-card wow fadeInDown" data-wow-delay=".3s">
                <div className="icon-container">
                  <img
                    src="./assets/icons/uiux.svg"
                    className="svg"
                    alt="Frontend Development"
                  />
                </div>
                <h3>Frontend Development</h3>
                <p>
                  Creating stunning, user-friendly interfaces with React,
                  Next.js, and modern CSS frameworks. Responsive design that
                  works perfectly on all devices and provides exceptional user
                  experience.
                </p>
                <a href="#services_2" className="link" />
                <div className="mfp-fade mfp-hide" id="services_2">
                  <div className="content">
                    <div className="img">
                      <img
                        src="./assets/images/services/2.jpg"
                        alt="Frontend Development"
                      />
                    </div>
                    <div className="des">
                      <h4>Frontend Development</h4>
                      <p className="price">
                        Start from <span>$300</span>
                      </p>
                      <p>
                        Transform your designs into pixel-perfect, interactive
                        websites. I build fast, accessible, and SEO-friendly
                        frontend applications that engage users and drive
                        conversions.
                      </p>
                      <p>
                        <strong>Technologies:</strong> React 19, Next.js,
                        TypeScript, Tailwind CSS, Material UI, Vite
                      </p>
                      <p>
                        <strong>What's Included:</strong> Mobile-first
                        responsive design, cross-browser compatibility,
                        performance optimization, and modern animations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Backend & API Development */}
            <div className="col-md-6 col-xl-4">
              <div className="service-card wow fadeInDown" data-wow-delay=".4s">
                <div className="icon-container">
                  <img
                    src="./assets/icons/product_desginer.svg"
                    className="svg"
                    alt="Backend Development"
                  />
                </div>
                <h3>Backend & API Development</h3>
                <p>
                  Developing robust backend systems, RESTful APIs, and database
                  solutions. Secure, scalable server-side applications that
                  power your business logic and handle complex data operations.
                </p>
                <a href="#services_3" className="link" />
                <div className="mfp-fade mfp-hide" id="services_3">
                  <div className="content">
                    <div className="img">
                      <img
                        src="./assets/images/services/3.jpg"
                        alt="Backend Development"
                      />
                    </div>
                    <div className="des">
                      <h4>Backend & API Development</h4>
                      <p className="price">
                        Start from <span>$400</span>
                      </p>
                      <p>
                        Build powerful backend systems that scale with your
                        business. I create secure APIs, implement authentication
                        systems, and design efficient databases that handle your
                        data reliably.
                      </p>
                      <p>
                        <strong>Technologies:</strong> Node.js, Express,
                        MongoDB, MySQL, PostgreSQL, AWS, Firebase, REST APIs
                      </p>
                      <p>
                        <strong>What's Included:</strong> API design and
                        documentation, database architecture,
                        authentication/authorization, and cloud deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
