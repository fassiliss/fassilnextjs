import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AxoContext } from "../Context";
import { axo } from "../utils";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    axo.customMouse();
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");
  const { portfolio_modal_show } = useContext(AxoContext);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-title wow fadeInUp">
          <p className="sub-title">My Portfolio</p>
          <h2>
            Showcasing <br />
            My Best Work
          </h2>
        </div>
        <div className="portfolio-container">
          <div className="filter-btn wow fadeInUp">
            <a
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
            >
              All Projects
            </a>
            <a
              className={`c-pointer ${activeBtn("details")}`}
              onClick={handleFilterKeyChange("details")}
            >
              Web Apps
            </a>
          </div>

          <div className="portfolio-items wow fadeInUp">
            {/* Netflix Clone Project */}
            <div className="item details">
              <a
                className="c-pointer"
                href="#details-popup"
                onClick={(e) => {
                  e.preventDefault();
                  portfolio_modal_show(true);
                }}
              >
                <img
                  className="c-pointer"
                  src="/assets/images/portfolio/netflix-clone.png"
                  alt="Netflix Clone 2025"
                />
              </a>
            </div>

            {/* Amazon Clone Project */}
            <div className="item details">
              <a
                className="c-pointer"
                href="#details-popup"
                onClick={(e) => {
                  e.preventDefault();
                  portfolio_modal_show(true);
                }}
              >
                <img
                  className="c-pointer"
                  src="/assets/images/portfolio/amazon-clone.png"
                  alt="Amazon Clone 2025"
                />
              </a>
            </div>

            {/* Add more projects here as you build them */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
