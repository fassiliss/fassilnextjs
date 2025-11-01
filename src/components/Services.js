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
                  Next.js, Node.js, and cloud technologies. Complete solutions
                  from database to deployment.
                </p>
                <div className="service-details">
                  <p className="tech-stack">
                    <strong>Tech:</strong> React, Next.js, Node.js, MongoDB, AWS
                  </p>
                  {/* <p className="price">
                    Starting at <span>$500</span>
                  </p> */}
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
                  Creating stunning, user-friendly interfaces with modern
                  frameworks. Responsive design that works perfectly on all
                  devices and provides exceptional user experience.
                </p>
                <div className="service-details">
                  <p className="tech-stack">
                    <strong>Tech:</strong> React, Next.js, TypeScript, Tailwind
                    CSS
                  </p>
                  {/* <p className="price">
                    Starting at <span>$300</span>
                  </p> */}
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
                  power your business logic.
                </p>
                <div className="service-details">
                  <p className="tech-stack">
                    <strong>Tech:</strong> Node.js, Express, MongoDB, MySQL, AWS
                  </p>
                  {/* <p className="price">
                    Starting at <span>$400</span>
                  </p> */}
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
