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
        // layoutMode: "fitRows",
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
    // return () => isotope.current.destroy();
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
        <div className="section-title  wow fadeInUp">
          <p className="sub-title">My Portfolio</p>
          <h2>
            Showcasing <br />
            some of my best work
          </h2>
        </div>
        <div className="portfolio-container">
          <div className="filter-btn  wow fadeInUp">
            <a
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </a>
            <a
              className={`c-pointer ${activeBtn("youtube")}`}
              onClick={handleFilterKeyChange("youtube")}
            >
              Youtube
            </a>
            <a
              className={`c-pointer ${activeBtn("vimeo")}`}
              onClick={handleFilterKeyChange("vimeo")}
            >
              Vimeo
            </a>
            <a
              className={`c-pointer ${activeBtn("soundcloud")}`}
              onClick={handleFilterKeyChange("soundcloud")}
            >
              Soundcloud
            </a>
            <a
              className={`c-pointer ${activeBtn("popup")}`}
              onClick={handleFilterKeyChange("popup")}
            >
              Images
            </a>
            <a
              className={`c-pointer ${activeBtn("details")}`}
              onClick={handleFilterKeyChange("details")}
            >
              Detail
            </a>
          </div>
          <div className="portfolio-items wow fadeInUp">
            <div className="item youtube">
              <a
                className="c-pointer"
                href="//www.youtube.com/embed/B-ytMSuwbf8?autoplay=1"
              >
                <img
                  className="c-pointer"
                  src="/assets/images/portfolio/1.png"
                  alt="image"
                />
              </a>
            </div>
            <div className="item vimeo">
              <a
                className="c-pointer"
                href="//player.vimeo.com/video/132528823?autoplay=1"
              >
                <img
                  className="c-pointer"
                  src="/assets/images/portfolio/2.png"
                  alt="image"
                />
              </a>
            </div>
            <div className="item soundcloud">
              <a
                className="c-pointer"
                href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1"
              >
                <img
                  className="c-pointer"
                  src="/assets/images/portfolio/3.png"
                  alt="image"
                />
              </a>
            </div>
            <div className="item popup">
              <a className="c-pointer" href="/assets/images/portfolio/5.png">
                <img
                  className="c-pointer"
                  src="/assets/images/portfolio/5.png"
                  alt="image"
                />
              </a>
            </div>
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
                  src="/assets/images/portfolio/4.png"
                  alt="image"
                />
              </a>
            </div>
            <div className="item popup">
              <a className="c-pointer" href="/assets/images/portfolio/6.png">
                <img
                  className="c-pointer"
                  src="/assets/images/portfolio/6.png"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
