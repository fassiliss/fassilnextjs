import { AxoContext } from "@/src/Context";
import { useContext } from "react";
import Modal from "./Modal";

const PortfolioPopup = () => {
  const { portfolio_modal_show } = useContext(AxoContext);
  return (
    <Modal close={portfolio_modal_show}>
      <div className="content">
        <div className="img">
          <img
            src="/assets/images/portfolio/netflix-clone.png"
            alt="Netflix Clone 2025"
          />
        </div>
        <div className="des">
          <span>Personal Project</span>
          <h4>Netflix Clone 2025</h4>
          <p>
            A fully functional Netflix clone built with modern web technologies.
            This streaming platform replica features movie browsing, trailer
            playback, and a responsive design that mirrors Netflix's user
            experience.
          </p>
          <div className="project-details">
            <p>
              <strong>Technologies:</strong> React 19, Vite, Material UI, TMDB
              API, Axios, React YouTube
            </p>
            <p>
              <strong>Industry:</strong> Entertainment / Streaming
            </p>
            <p>
              <strong>Date:</strong> 2025
            </p>
            <p>
              <strong>Live Demo:</strong>{" "}
              <a
                href="https://fassiliss.github.io/Netflix-2025/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/fassiliss/Netflix-2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioPopup;