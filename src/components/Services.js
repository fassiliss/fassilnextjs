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
          <p className="sub-title wow fadeInDown">My services</p>
          <h2 className="wow fadeInDown">
            What I do <br />
            for My Customers
          </h2>
        </div>
        <div className="card-container">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="service-card wow fadeInDown" data-wow-delay=".2s">
                <div className="icon-container">
                  <img
                    src="./assets/icons/uiux.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>UI/UX Designer</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a href="#services_1" className="link" />
              </div>
              <div className="mfp-fade mfp-hide" id="services_1">
                <div className="content">
                  <div className="img">
                    <img src="./assets/images/services/1.jpg" alt="image" />
                  </div>
                  <div className="des">
                    <h4>UI/UX Designer</h4>
                    <p className="price">
                      Start from <span>$99</span>
                    </p>
                    <p>
                      We live in a world where we need to move quickly and
                      iterate on our ideas as flexibly as possible. Building
                      mockups strikes the ideal balance between true-life
                      representation of the end product and ease of
                      modification.
                    </p>
                    <p>
                      Mockups are useful both for the creative phase of the
                      project - for instance when you're trying to figure out
                      your user flows or the proper visual hierarchy - and the
                      production phase when they will represent the target
                      product. Making mockups a part of your creative and
                      development process allows you to quickly and easily
                      ideate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card wow fadeInDown" data-wow-delay=".3s">
                <div className="icon-container">
                  <img
                    src="./assets/icons/web_dev.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>Webflow Developer</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a href="#services_2" className="link" />
                <div className="mfp-fade mfp-hide" id="services_2">
                  <div className="content">
                    <div className="img">
                      <img src="./assets/images/services/2.jpg" alt="image" />
                    </div>
                    <div className="des">
                      <h4>Webflow Developer</h4>
                      <p className="price">
                        Start from <span>$99</span>
                      </p>
                      <p>
                        We live in a world where we need to move quickly and
                        iterate on our ideas as flexibly as possible. Building
                        mockups strikes the ideal balance between true-life
                        representation of the end product and ease of
                        modification.
                      </p>
                      <p>
                        Mockups are useful both for the creative phase of the
                        project - for instance when you're trying to figure out
                        your user flows or the proper visual hierarchy - and the
                        production phase when they will represent the target
                        product. Making mockups a part of your creative and
                        development process allows you to quickly and easily
                        ideate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card wow fadeInDown" data-wow-delay=".4s">
                <div className="icon-container">
                  <img
                    src="./assets/icons/product_desginer.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>Product Designer</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a href="#services_3" className="link" />
                <div className="mfp-fade mfp-hide" id="services_3">
                  <div className="content">
                    <div className="img">
                      <img src="./assets/images/services/3.jpg" alt="image" />
                    </div>
                    <div className="des">
                      <h4>Product Designer</h4>
                      <p className="price">
                        Start from <span>$99</span>
                      </p>
                      <p>
                        We live in a world where we need to move quickly and
                        iterate on our ideas as flexibly as possible. Building
                        mockups strikes the ideal balance between true-life
                        representation of the end product and ease of
                        modification.
                      </p>
                      <p>
                        Mockups are useful both for the creative phase of the
                        project - for instance when you're trying to figure out
                        your user flows or the proper visual hierarchy - and the
                        production phase when they will represent the target
                        product. Making mockups a part of your creative and
                        development process allows you to quickly and easily
                        ideate.
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
