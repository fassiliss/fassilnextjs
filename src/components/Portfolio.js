import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AxoContext } from "../Context";
import { axo } from "../utils";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  // Portfolio data - Only real projects
  const portfolioItems = [
    {
      id: 1,
      title: "Netflix Clone 2025",
      categories: ["details", "streaming"],
      image: "/assets/images/portfolio/netflix-clone1.png",
      liveUrl: "https://fassiliss.github.io/Netflix-2025",
      githubUrl: "https://github.com/fassiliss/Netflix-2025",
      description:
        "Full-stack Netflix clone with React, Firebase authentication, and movie database integration. Features movie browsing, trailer playback, and responsive design.",
      technologies: ["React", "Firebase", "TMDB API", "React Router", "Vite"],
    },
    {
      id: 2,
      title: "Amazon Clone 2025",
      categories: ["details", "ecommerce"],
      image: "/assets/images/portfolio/amazon-clone.png",
      liveUrl: "https://fassiliss.github.io/Amazon-2025",
      githubUrl: "https://github.com/fassiliss/Amazon-2025",
      description:
        "E-commerce platform with shopping cart, Stripe payment integration, and Firebase backend. Complete checkout flow with real-time order tracking.",
      technologies: [
        "React",
        "Firebase",
        "Stripe",
        "Material-UI",
        "Context API",
        "Axios",
      ],
    },
    {
      id: 3,
      title: "Evangadi Forum",
      categories: ["details", "social", "fullstack"],
      image: "/assets/images/portfolio/evangadi.png",
      liveUrl: "https://fassiliss.github.io/Evangadi-Forum",
      githubUrl: "https://github.com/fassiliss/Evangadi-Forum",
      description:
        "Full-stack Q&A forum platform with JWT authentication, rich text editor, and real-time question/answer functionality. Built with modern React and Bootstrap.",
      technologies: [
        "React",
        "Axios",
        "Bootstrap",
        "React Router",
        "JWT",
        "Quill Editor",
        "React Hook Form",
      ],
    },
  ];

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
  const { portfolio_modal_show, setPortfolioData } = useContext(AxoContext);

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    setPortfolioData(project);
    portfolio_modal_show(true);
  };

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
              className={`c-pointer ${activeBtn("ecommerce")}`}
              onClick={handleFilterKeyChange("ecommerce")}
            >
              E-Commerce
            </a>
            <a
              className={`c-pointer ${activeBtn("streaming")}`}
              onClick={handleFilterKeyChange("streaming")}
            >
              Streaming
            </a>
            <a
              className={`c-pointer ${activeBtn("fullstack")}`}
              onClick={handleFilterKeyChange("fullstack")}
            >
              Full Stack
            </a>
            <a
              className={`c-pointer ${activeBtn("social")}`}
              onClick={handleFilterKeyChange("social")}
            >
              Social
            </a>
          </div>

          <div className="portfolio-items wow fadeInUp">
            {portfolioItems.map((project) => (
              <div
                key={project.id}
                className={`item ${project.categories.join(" ")}`}
              >
                <a
                  className="c-pointer"
                  href="#details-popup"
                  onClick={(e) => handleProjectClick(e, project)}
                >
                  <img
                    className="c-pointer"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="portfolio-overlay">
                    <h3>{project.title}</h3>
                    <p>Click to view details</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;